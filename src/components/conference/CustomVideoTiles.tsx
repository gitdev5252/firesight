import { useTracks, useParticipants } from "@livekit/components-react";
import { Participant, Track } from "livekit-client";
import { Expand, Mic, MicOff, Monitor } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { HexAvatar } from "../HexAvatar/HexAvatar";

/* Helper to attach/detach audio track to <audio> element */
function AudioTrackRenderer({ track }: { track: Track | undefined }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const audioEl = audioRef.current;
    if (track && audioEl) {
      track.attach(audioEl);
      return () => {
        if (audioEl) {
          track.detach(audioEl);
        }
      };
    }
  }, [track]);
  return <audio ref={audioRef} autoPlay />;
}

/* utils */
const getInitials = (name: string) =>
  name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);

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
  // Get all microphone tracks (audio)
  const audioTracks = useTracks([Track.Source.Microphone]);

  /* stable sort: local last (so a remote is main if available) */
  const participants = useMemo(() => {
    return [...participantsRaw].sort((a, b) => {
      if (a.isLocal && !b.isLocal) return 1;
      if (!a.isLocal && b.isLocal) return -1;
      return String(a.identity).localeCompare(String(b.identity));
    });
  }, [participantsRaw]);

  /* O(1) lookup for tracks */
  const trackByParticipantAndSource = useMemo(() => {
    const map = new Map<string, ReturnType<typeof useTracks>[number]>();
    for (const t of tracks) {
      const key = `${t.participant.identity}:${t.source}`;
      map.set(key, t);
    }
    return map;
  }, [tracks]);

  /* choose/keep a main tile; prefer screenshare, else first remote */
  const [mainId, setMainId] = useState<string | null>(null);
  const promoteTimer = useRef<number | null>(null);

  useEffect(() => {
    if (!mainId && participants.length > 0) {
      const firstRemote = participants.find((p) => !p.isLocal) ?? participants[0];
      setMainId(firstRemote.identity);
    }
  }, [participants, mainId]);

  useEffect(() => {
    if (promoteTimer.current) window.clearTimeout(promoteTimer.current);
    promoteTimer.current = window.setTimeout(() => {
      const sharer = participants.find((p) => p.isScreenShareEnabled);
      if (sharer && sharer.identity !== mainId) {
        setMainId(sharer.identity);
      } else if (!sharer && mainId && !participants.find((p) => p.identity === mainId)) {
        const next = participants.find((p) => !p.isLocal) ?? participants[0] ?? null;
        setMainId(next ? next.identity : null);
      }
    }, 250);
    return () => {
      if (promoteTimer.current) window.clearTimeout(promoteTimer.current);
    };
  }, [participants, mainId]);

  /* single participant */
  if (participants.length <= 1) {
    const p = participants[0];
    if (!p) {
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-white/70">Waiting for participants to join...</p>
        </div>
      );
    }
    const displayName = p.identity;
    const initials = getInitials(displayName);
    const preferred = pickSource(p);
    const t = preferred
      ? trackByParticipantAndSource.get(`${p.identity}:${preferred}`)
      : undefined;

    return (
      <div className="w-full h-full min-h-0 flex items-center justify-center">
        <div className="w-full h-full max-h-[98vh] aspect-video mx-auto">
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

  /* multi participant */
  // Always show the local participant as the main tile for themselves
  const localParticipant = participants.find((p) => p.isLocal);
  const mainParticipant = localParticipant ||
    participants.find((p) => p.identity === mainId) ||
    participants.find((p) => !p.isLocal) ||
    participants[0];

  // For the local user, remove themselves from the side tiles
  const others = participants.filter((p) => p.identity !== mainParticipant.identity);
  const maxIndividualTiles = 3;
  const displayed = others.slice(0, maxIndividualTiles);
  const overflow = others.slice(maxIndividualTiles);

  return (
    <>
      {/* Render remote audio tracks so you can hear other participants */}
      {audioTracks.map((t) => {
        // Only render for remote participants
        if (t.participant.isLocal) return null;
        return <AudioTrackRenderer key={t.publication.trackSid} track={t.publication.track} />;
      })}
      <div className="w-full h-full flex gap-3 min-h-0">
        {/* Main area */}
        <div className="flex-1 min-w-0 min-h-0">
          <div className="w-full h-full max-h-[78vh]">
            <div className="w-full h-full aspect-video">
              <MainVideoTile
                participant={mainParticipant}
                activeEmojis={activeEmojis}
                trackMap={trackByParticipantAndSource}
              />
            </div>
          </div>
        </div>

        {/* Right rail: lg+ only */}
        <div className="hidden lg:flex w-56 flex-col gap-2 mr-1 shrink-0">
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
    </>
  );
};

/* ---------- Shared Video Surface ---------- */
const VideoSurface = ({
  participant,
  trackRef,
  fallbackInitials,
  fallbackName,
  fillClass,
  variant = ""
}: {
  participant: Participant;
  trackRef?: ReturnType<typeof useTracks>[number];
  fallbackInitials: string;
  fallbackName?: string;
  fillClass?: string;
  variant?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasMedia, setHasMedia] = useState<boolean>(!!trackRef?.publication?.track);

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
    <div className="relative w-full h-full min-h-[180px] bg-transparent rounded-xl overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={participant.isLocal}
        className={fillClass ?? "w-full h-full object-cover"}
      />

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-200 ${
          hasMedia ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className={`${variant=="tiles" && "mb-15"}`}>
        <HexAvatar initials={fallbackInitials} size={variant=="tiles" ? 50 : 150} fontSize={variant=="tiles" ?16 :28} borderColor="" />
        </div>
        {fallbackName && (
          <p className="mt-3 text-lg text-white/80 font-semibold">{fallbackName}</p>
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
  const [source, setSource] = useState<Track.Source | null>(pickSource(participant));
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
  }, [participant.isScreenShareEnabled, participant.isCameraEnabled]);

  const t = source ? trackMap.get(`${participant.identity}:${source}`) : undefined;
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
                <p className="text-white font-bold text-lg">{emojiData.username}</p>
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
  const [source, setSource] = useState<Track.Source | null>(pickSource(participant));
  const debounceRef = useRef<number | null>(null);
  useEffect(() => {
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => setSource(pickSource(participant)), 200);
    return () => {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
  }, [participant.isScreenShareEnabled, participant.isCameraEnabled]);

  const t = source ? trackMap.get(`${participant.identity}:${source}`) : undefined;
  const displayName = participant.identity;
  const initials = getInitials(displayName);

  return (
    <div className="w-full h-32 min-h-[128px] bg-black/50 rounded-lg relative overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500/50 transition-all">
      <VideoSurface
        participant={participant}
        trackRef={t}
        fallbackInitials={initials}
        fillClass="w-full h-full object-cover"
        variant="tiles"
      />

      <div className="absolute bottom-1 left-1 bg-black/60 px-2 py-0.5 rounded text-xs text-white backdrop-blur-sm z-20">
        {displayName.split(" ")[0]}
        {participant.isLocal && " (You)"}
      </div>

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