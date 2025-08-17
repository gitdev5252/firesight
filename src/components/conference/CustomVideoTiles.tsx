import { useTracks, useParticipants } from "@livekit/components-react";
import { Participant, Track } from "livekit-client";
import { Expand, Mic, MicOff, Monitor } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { HexAvatar } from "../HexAvatar/HexAvatar";

/* utils */
const getInitials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

/** Pick the preferred source for a participant */
const pickSource = (p: Participant): Track.Source | null => {
  if (p.isScreenShareEnabled) return Track.Source.ScreenShare;
  if (p.isCameraEnabled) return Track.Source.Camera;
  return null;
};

export const CustomVideoTiles = ({
  activeEmojis,
}: {
  activeEmojis?: {
    [key: string]: { emoji: string; timestamp: number; username: string };
  };
}) => {
  const participantsRaw = useParticipants();
  const tracks = useTracks([Track.Source.Camera, Track.Source.ScreenShare]);
  // detect if we're on mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /** 1) Stable participant ordering (no reshuffle) */
  const participants = useMemo(() => {
    return [...participantsRaw].sort((a, b) => {
      // local last, then by identity (stable & deterministic)
      if (a.isLocal && !b.isLocal) return 1;
      if (!a.isLocal && b.isLocal) return -1;
      return String(a.identity).localeCompare(String(b.identity));
    });
  }, [participantsRaw]);

  /** 2) Track lookup map for O(1) access */
  const trackByParticipantAndSource = useMemo(() => {
    const map = new Map<string, ReturnType<typeof useTracks>[number]>();
    for (const t of tracks) {
      const key = `${t.participant.identity}:${t.source}`;
      map.set(key, t);
    }
    return map;
  }, [tracks]);

  /** 3) Decide & keep a stable main tile */
  const [mainId, setMainId] = useState<string | null>(null);
  const promoteTimer = useRef<number | null>(null);

  // set initial main
  useEffect(() => {
    if (!mainId && participants.length > 0) {
      const firstRemote =
        participants.find((p) => !p.isLocal) ?? participants[0];
      setMainId(firstRemote.identity);
    }
  }, [participants, mainId]);

  // promote/demote on screenshare with debounce to avoid flicker
  useEffect(() => {
    if (promoteTimer.current) {
      window.clearTimeout(promoteTimer.current);
      promoteTimer.current = null;
    }
    promoteTimer.current = window.setTimeout(() => {
      const sharer = participants.find((p) => p.isScreenShareEnabled);
      if (sharer && sharer.identity !== mainId) {
        setMainId(sharer.identity);
      } else if (
        !sharer &&
        mainId &&
        !participants.find((p) => p.identity === mainId)
      ) {
        // main left the room -> choose next stable remote
        const next =
          participants.find((p) => !p.isLocal) ?? participants[0] ?? null;
        setMainId(next ? next.identity : null);
      }
    }, 250); // 250ms debounce feels snappy but stable
    return () => {
      if (promoteTimer.current) window.clearTimeout(promoteTimer.current);
    };
  }, [participants, mainId]);

  /** Single-participant layout (kept stable; no conditional container mounts) */
  if (participants.length === 1 || isMobile) {
    const p = participants[0];
    const displayName = p.identity;
    const initials = getInitials(displayName);
    const preferred = pickSource(p);
    const t = preferred
      ? trackByParticipantAndSource.get(`${p.identity}:${preferred}`)
      : undefined;

    return (
      <div className="w-full h-full min-h-[320px] flex items-center justify-center">
        <div className="text-center w-full h-full flex items-center justify-center">
          <VideoSurface
            participant={p}
            trackRef={t}
            fallbackInitials={initials}
            fallbackName={displayName}
            fillClass="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    );
  }

  /** Multi-participant layout (Meet-like) */
  if (participants.length > 1) {
    const mainParticipant =
      participants.find((p) => p.identity === mainId) ||
      participants.find((p) => !p.isLocal) ||
      participants[0];

    const others = participants.filter(
      (p) => p.identity !== mainParticipant.identity
    );
    const maxIndividualTiles = 3;
    const displayed = others.slice(0, maxIndividualTiles);
    const overflow = others.slice(maxIndividualTiles);

    return (
      <div className="w-full h-full flex">
        {/* Main area with locked aspect to avoid height jitter */}
        <div className="flex-1 pr-3 flex">
          <div className="w-full h-full max-h-[720px]">
            <div className="w-full h-full aspect-[16/9] max-h-[720px]">
              <MainVideoTile
                participant={mainParticipant}
                activeEmojis={activeEmojis}
                trackMap={trackByParticipantAndSource}
              />
            </div>
          </div>
        </div>

        {/* Right rail – fixed width prevents width reflow */}
        <div className="w-56 flex flex-col gap-2 mr-4 hidden md:block">
          {displayed.map((p) => (
            <SmallVideoTile
              key={p.identity}
              participant={p}
              trackMap={trackByParticipantAndSource}
            />
          ))}
          {overflow.length > 0 && <OverflowTile participants={overflow} />}
        </div>
      </div>
    );
  }

  // No participants
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
          {/* user icon */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              fill="currentColor"
            />
          </svg>
        </div>
        <p className="text-white/70">Waiting for participants to join...</p>
      </div>
    </div>
  );
};

/* ---------- Shared surface that never unmounts (prevents reflow) ---------- */
const VideoSurface = ({
  participant,
  trackRef,
  fallbackInitials,
  fallbackName,
  fillClass,
}: {
  participant: Participant;
  trackRef?: ReturnType<typeof useTracks>[number];
  fallbackInitials: string;
  fallbackName?: string;
  fillClass?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasMedia, setHasMedia] = useState<boolean>(
    !!trackRef?.publication?.track
  );

  useEffect(() => {
    const el = videoRef.current;
    const track = trackRef?.publication?.track;
    if (!el) return;

    if (track) {
      track.attach(el);
      setHasMedia(true);
      return () => {
        track.detach(el);
      };
    } else {
      setHasMedia(false);
    }
  }, [trackRef?.publication?.track]);

  return (
    <div className="relative w-full h-[800px] min-h-[128px] bg-transparent rounded-xl overflow-hidden">
      {/* Keep the video element mounted always */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={participant.isLocal}
        className={fillClass ?? "w-full h-full object-cover"}
      />

      {/* Soft fade placeholder instead of unmounting */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-200 ${
          hasMedia ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Single HexAvatar with responsive size */}
        <div className="block">
          <HexAvatar
            initials={fallbackInitials}
            size={
              typeof window !== "undefined" && window.innerWidth < 768
                ? 130
                : window.innerWidth < 1024
                ? 110
                : 150
            }
            fontSize={
              typeof window !== "undefined" && window.innerWidth < 768
                ? 58
                : window.innerWidth < 1024
                ? 22
                : 28
            }
            borderColor=""
          />
        </div>
        {fallbackName && (
          <p className="mt-3 text-lg text-white/80 font-semibold">
            {fallbackName}
          </p>
        )}
      </div>
    </div>
  );
};

/* ---------- Main tile ---------- */
const MainVideoTile = ({
  participant,
  activeEmojis,
  trackMap,
}: {
  participant: Participant;
  activeEmojis?: {
    [key: string]: { emoji: string; timestamp: number; username: string };
  };
  trackMap: Map<string, ReturnType<typeof useTracks>[number]>;
}) => {
  // Debounced preferred source
  const [source, setSource] = useState<Track.Source | null>(
    pickSource(participant)
  );
  const sourceTimer = useRef<number | null>(null);

  useEffect(() => {
    if (sourceTimer.current) window.clearTimeout(sourceTimer.current);
    sourceTimer.current = window.setTimeout(
      () => setSource(pickSource(participant)),
      200
    );
    return () => {
      if (sourceTimer.current) window.clearTimeout(sourceTimer.current);
    };
  }, [participant]);

  const t = source
    ? trackMap.get(`${participant.identity}:${source}`)
    : undefined;
  const displayName = participant.identity;
  const initials = getInitials(displayName);

  return (
    <div className="relative w-full h-full rounded-xl text-white">
      <VideoSurface
        participant={participant}
        trackRef={t}
        fallbackInitials={initials}
        fallbackName={displayName}
        fillClass="w-full h-full object-cover rounded-xl"
      />

      {/* Indicators */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-30">
        {source === Track.Source.ScreenShare && (
          <div className="w-7 h-7 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
            <Monitor size={14} color="white" />
          </div>
        )}
        <div className="w-7 h-7 bg-[#080B16] rounded-full flex items-center justify-center shadow-lg">
          <Expand color="white" />
        </div>
      </div>

      {/* Emoji overlay (unchanged) */}
      {activeEmojis &&
        Object.values(activeEmojis).map((emojiData, index) => (
          <div
            key={`${emojiData.username}-${emojiData.timestamp}`}
            className="absolute bottom-16 z-30 pointer-events-none"
            style={{ left: `${8 + index * 120}px` }}
          >
            <div className="animate-float-up">
              <div className="bg-[#080B16] backdrop-blur-lg rounded-full px-5 py-3 gap-3 shadow-2xl items-center flex flex-col">
                <span className="text-5xl">{emojiData.emoji}</span>
                <p className="text-white font-bold text-lg">
                  {emojiData.username}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

/* ---------- Small tiles ---------- */
const SmallVideoTile = ({
  participant,
  trackMap,
}: {
  participant: Participant;
  trackMap: Map<string, ReturnType<typeof useTracks>[number]>;
}) => {
  const [source, setSource] = useState<Track.Source | null>(
    pickSource(participant)
  );
  const debounceRef = useRef<number | null>(null);
  useEffect(() => {
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(
      () => setSource(pickSource(participant)),
      200
    );
    return () => {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
  }, [participant]);

  const t = source
    ? trackMap.get(`${participant.identity}:${source}`)
    : undefined;
  const displayName = participant.identity;
  const initials = getInitials(displayName);

  return (
    <div className="w-full h-32 min-h-[128px] bg-black rounded-lg relative overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500/50 transition-all hidden md:block">
      <VideoSurface
        participant={participant}
        trackRef={t}
        fallbackInitials={initials}
        fillClass="w-full h-full object-cover"
      />

      {/* Name */}
      <div className="absolute bottom-1 left-1 bg-black/60 px-2 py-0.5 rounded text-xs text-white backdrop-blur-sm z-20">
        {displayName.split(" ")[0]}
        {participant.isLocal && " (You)"}
      </div>

      {/* Indicators */}
      <div className="absolute top-2 right-2 flex flex-col gap-1 z-20">
        {source === Track.Source.ScreenShare && (
          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
            <Monitor size={12} color="white" />
          </div>
        )}
        {participant.isMicrophoneEnabled ? (
          <div className="w-8 h-8 bg-[#080B16] rounded-full flex items-center justify-center shadow-lg">
            <Mic size={16} color="white" />
          </div>
        ) : (
          <div className="w-8 h-8 bg-[#080B16] rounded-full flex items-center justify-center shadow-lg">
            <MicOff size={16} color="white" />
          </div>
        )}
      </div>
    </div>
  );
};

/* ---------- Overflow ---------- */
const OverflowTile = ({ participants }: { participants: Participant[] }) => {
  const totalCount = participants.length;
  const displayParticipants = participants.slice(0, 4);
  return (
    <div className="w-full h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center text-white relative overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500/50 transition-all border border-white/10">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="grid grid-cols-2 gap-1">
          {displayParticipants.map((p) => {
            const initials = getInitials(p.identity);
            return (
              <div
                key={p.identity}
                className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-[10px] font-bold uppercase text-white shadow-sm"
              >
                {initials}
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <span className="text-lg font-bold text-white">+{totalCount}</span>
          <p className="text-xs text-white/70 mt-1">more</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg" />
    </div>
  );
};
