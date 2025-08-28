import { useTracks, useParticipants } from "@livekit/components-react";
import { Participant, Track } from "livekit-client";
import { Expand, Mic, MicOff, Monitor, Shrink } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { HexAvatar } from "../HexAvatar/HexAvatar";
import { useShowSideRail } from "@/hooks/sideRail";

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
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const pickSource = (p: Participant): Track.Source | null => {
  if (p.isScreenShareEnabled) return Track.Source.ScreenShare;
  if (p.isCameraEnabled) return Track.Source.Camera;
  return null;
};

export const CustomVideoTiles = ({
  activeEmojis,
  showSideRail,
  onToggleSideRail,
  isMobileFull = false,
}: {
  activeEmojis?: {
    [key: string]: { emoji: string; timestamp: number; username: string };
  };
  showSideRail?: boolean;
  onToggleSideRail?: () => void;
  isMobileFull?: boolean;
}) => {
  const participantsRaw = useParticipants();
  const tracks = useTracks([Track.Source.Camera, Track.Source.ScreenShare]);
  // Get all microphone tracks (audio)
  const audioTracks = useTracks([Track.Source.Microphone]);
  const [focusedIdentity, setFocusedIdentity] = useState<string | null>(null);
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
      const firstRemote =
        participants.find((p) => !p.isLocal) ?? participants[0];
      setMainId(firstRemote.identity);
    }
  }, [participants, mainId]);

  useEffect(() => {
    if (promoteTimer.current) window.clearTimeout(promoteTimer.current);
    promoteTimer.current = window.setTimeout(() => {
      const sharer = participants.find((p) => p.isScreenShareEnabled);
      if (sharer && sharer.identity !== mainId) {
        setMainId(sharer.identity);
      } else if (
        !sharer &&
        mainId &&
        !participants.find((p) => p.identity === mainId)
      ) {
        const next =
          participants.find((p) => !p.isLocal) ?? participants[0] ?? null;
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
    // 85'

    return (
      <div className="w-full h-full min-h-0 flex">
        <div
          className={`w-full max-h-[${
            !showSideRail ? "98vh" : isMobileFull ? "85vh" : "98vh"
          }] aspect-video mx-auto`}
        >
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
  const mainParticipant = focusedIdentity
    ? participants.find((p) => p.identity === focusedIdentity) ??
      participants[0]
    : localParticipant ||
      participants.find((p) => p.identity === mainId) ||
      participants.find((p) => !p.isLocal) ||
      participants[0];
  const others = participants.filter(
    (p) => p.identity !== mainParticipant.identity
  );
  const maxIndividualTiles = 3;
  const displayed = others.slice(0, maxIndividualTiles);
  const overflow = others.slice(maxIndividualTiles);
  const heightForTile = !showSideRail ? "md:h-auto" : "md:h-auto";
  return (
    <>
      {/* Render remote audio tracks so you can hear other participants */}
      {audioTracks.map((t) => {
        // Only render for remote participants
        if (t.participant.isLocal) return null;
        return (
          <AudioTrackRenderer
            key={t.publication.trackSid}
            track={t.publication.track}
          />
        );
      })}
      <div className="w-full h-full flex gap-3 min-h-0">
        {/* Main area */}
        <div className="flex-1 min-w-0 min-h-0">
          <div className="w-full h-full max-h-[99vh] md:h-[95vh]">
            <div
              className={`w-full aspect-video rounded-[15px] ${heightForTile}
                p-0 sm:p-[2px] 
                bg-none 
                `}
            >
              {/* sm:bg-[linear-gradient(90deg,#14FF00_55%,#00F0FF_62%)] */}
              <div
                className={`w-full rounded-[12px] md:bg-[#141622] bg-transparent  ${heightForTile}`}
              >
                <MainVideoTile
                  participant={mainParticipant}
                  activeEmojis={activeEmojis}
                  trackMap={trackByParticipantAndSource}
                  onToggleSideRail={onToggleSideRail}
                  // sideRailOpen={showSideRail}
                  isMobileFull={isMobileFull}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right rail: lg+ only */}
        {showSideRail && (
          <>
            <div className="hidden lg:flex w-56 flex-col gap-2 shrink-0">
              {displayed.map((p) => (
                <SmallVideoTile
                  key={p.identity}
                  participant={p}
                  trackMap={trackByParticipantAndSource}
                  setFocusedIdentity={setFocusedIdentity}
                  focusedIdentity={focusedIdentity}
                />
              ))}
              {overflow.length > 0 && <OverflowTile participants={overflow} />}
            </div>
          </>
        )}
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
  variant = "",
}: {
  participant: Participant;
  trackRef?: ReturnType<typeof useTracks>[number];
  fallbackInitials: string;
  fallbackName?: string;
  fillClass?: string;
  variant?: string;
  isShort?: boolean;
  isMobileFull?: boolean;
  smallPiece?: boolean;
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
  // const heightForTile = smallPiece
  //   ? "h-full min-h-[180px]"
  //   : isMobileFull
  //   ? "h-[98vh]"
  //   : sideRailOpen
  //   ? "h-full min-h-[280px]"
  //   : "h-full md:h-[84vh]"; // mobile 94vh, md+ 84vh

  return (
    <div className="relative w-full bg-transparent md:rounded-xl overflow-hidden md:h-[69vh] sm:h-[67vh] h-full">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={participant.isLocal}
        className={
          (trackRef?.source === Track.Source.ScreenShare
            ? ""
            : "custom-video ") +
          `${
            fillClass ??
            `w-full object-cover p-0 sm:p-[2px] 
                bg-none sm:bg-[linear-gradient(90deg,#14FF00_55%,#00F0FF_62%)]`
          }`
        }
      />

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-200 not-sm:-top-[160px] ${
          hasMedia ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className={`${variant == "tiles" && "mb-15"}`}>
          <HexAvatar
            initials={fallbackInitials}
            size={variant == "tiles" ? 50 : 150}
            fontSize={variant == "tiles" ? 16 : 28}
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
  onToggleSideRail,
  isMobileFull,
}: {
  participant: Participant;
  activeEmojis?: {
    [key: string]: { emoji: string; timestamp: number; username: string };
  };
  trackMap: Map<string, ReturnType<typeof useTracks>[number]>;
  onToggleSideRail?: () => void;
  isMobileFull?: boolean;
}) => {
  const [source, setSource] = useState<Track.Source | null>(
    pickSource(participant)
  );
  const sourceTimer = useRef<number | null>(null);
  const { value: sideRailOpen } = useShowSideRail();

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

  const t = source
    ? trackMap.get(`${participant.identity}:${source}`)
    : undefined;
  const displayName = participant.identity;
  const initials = getInitials(displayName);
  const { value: showSideRail, toggle } = useShowSideRail();
  const heightForTile = !showSideRail ? "" : "md:h-[95vh]";

  return (
    <div className="relative w-full h-full rounded-xl text-white">
      <VideoSurface
        participant={participant}
        trackRef={t}
        fallbackInitials={initials}
        fallbackName={displayName}
        fillClass={`w-full h-full ${heightForTile} object-cover rounded-xl`}
        isShort={sideRailOpen}
        isMobileFull={isMobileFull}
      />

      <div className="absolute top-4 right-4 flex flex-col gap-2 z-30">
        {source === Track.Source.ScreenShare && (
          <div className="w-7 h-7 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
            <Monitor size={14} color="white" />
          </div>
        )}
        {/* <div className="w-7 h-7 bg-[#080B16] rounded-full flex items-center justify-center shadow-lg">
          <Expand color="white" />
        </div> */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleSideRail?.();
            toggle();
          }}
          className="w-7 h-7 rounded-full flex items-center justify-center shadow-lg hover:bg-white/10 transition"
          title={sideRailOpen ? "Hide participants" : "Show participants"}
        >
          {/* You can swap icons if you prefer when open/closed */}
          {!sideRailOpen ? <Expand color="white" /> : <Shrink color="white" />}
        </button>
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
  setFocusedIdentity,
  focusedIdentity,
}: {
  participant: Participant;
  trackMap: Map<string, ReturnType<typeof useTracks>[number]>;
  setFocusedIdentity: (id: string | null) => void;
  focusedIdentity: string | null;
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
  }, [participant.isScreenShareEnabled, participant.isCameraEnabled]);

  const t = source
    ? trackMap.get(`${participant.identity}:${source}`)
    : undefined;
  const displayName = participant.identity;
  const initials = getInitials(displayName);

  return (
    <div
      className={`w-full h-[148px] min-h-[128px] bg-[#141622] rounded-lg relative overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500/50 transition-all border-[#FFFFFF1A] border mt-1 ${
        focusedIdentity === participant.identity ? "ring-2 ring-blue-500" : ""
      }`}
      style={{ boxShadow: "0px 25px 85px 0px rgba(8, 11, 22, 0.35)" }}
      onClick={() => setFocusedIdentity(participant.identity)}
    >
      <VideoSurface
        participant={participant}
        trackRef={t}
        fallbackInitials={initials}
        fillClass="w-full h-full object-cover"
        variant="tiles"
        smallPiece={true}
      />

      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 
             bg-black/60 px-4 py-2 rounded-[11px] text-[14px] 
             text-white backdrop-blur-sm z-20"
      >
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
          <img
            src="/images/icons/mic-off-hex.svg"
            alt=""
            width={32}
            height={32}
          />
        )}
      </div>
    </div>
  );
};

/* ---------- Overflow ---------- */

const OverflowTile = ({ participants }: { participants: Participant[] }) => {
  // show at most 2 people + a "+N" tile if more remain
  const maxSlots = 3;
  const needsMoreTile = participants.length > 2;
  const visible = participants.slice(
    0,
    needsMoreTile ? maxSlots : Math.min(3, participants.length)
  );
  const remaining = Math.max(0, participants.length - visible.length);

  return (
    <div className="w-full h-48 rounded-xl backdrop-blur-sm mt-2 ">
      <div className="grid grid-cols-2 gap-4 h-full">
        {visible.map((p) => (
          <MiniOverflowTile key={p.identity} participant={p} />
        ))}

        {needsMoreTile && <MoreCountTile count={remaining} />}

        {!needsMoreTile && participants.length === 1 && (
          // keep grid balanced if only 1 person
          <div className="rounded-xl border border-white/5 bg-transparent" />
        )}
      </div>
    </div>
  );
};

const MiniOverflowTile = ({ participant }: { participant: Participant }) => {
  const initials = getInitials(participant.identity);
  const firstName = participant.identity.split(" ")[0];

  return (
    <div className="relative rounded-xl border border-white/10 bg-[#141622] overflow-hidden flex items-center justify-center">
      {/* Mic status (top-left) */}
      <div className="absolute top-1 right-1">
        <div className="w-7 h-7 rounded-xl bg-black/40 border border-white/10 backdrop-blur flex items-center justify-center">
          {participant.isMicrophoneEnabled ? (
            <Mic size={14} className="text-white/90" />
          ) : (
            <MicOff size={14} className="text-white/70" />
          )}
        </div>
      </div>

      {/* Initials */}
      <span className="text-white/90 text-2xl font-semibold tracking-wide select-none">
        {initials}
      </span>

      {/* Name chip (bottom-center) */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
        <div className="px-3 py-1 rounded-xl bg-black/40 border border-white/10 text-[11px] leading-none text-white/90 max-w-[90%] truncate">
          {firstName}
        </div>
      </div>
    </div>
  );
};

const MoreCountTile = ({ count }: { count: number }) => (
  <div className="rounded-xl border border-white/10 bg-[#141622] flex items-center justify-center">
    <span className="text-white/80 text-2xl font-semibold">{count}+</span>
  </div>
);
