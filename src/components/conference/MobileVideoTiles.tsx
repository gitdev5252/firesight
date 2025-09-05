import { useParticipants, useTracks } from "@livekit/components-react";
import { Participant, Track } from "livekit-client";
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

const pickSource = (p: Participant): Track.Source | null => {
  if (p.isScreenShareEnabled) return Track.Source.ScreenShare;
  if (p.isCameraEnabled) return Track.Source.Camera;
  return null;
};

export const MobileVideoTiles = ({
  activeEmojis,
}: {
  activeEmojis?: {
    [key: string]: { emoji: string; timestamp: number; username: string };
  };
}) => {
  const participantsRaw = useParticipants();
  const tracks = useTracks([Track.Source.Camera, Track.Source.ScreenShare]);

  // Stable order: remote first; local last
  const participants = useMemo(() => {
    return [...participantsRaw].sort((a, b) => {
      if (a.isLocal && !b.isLocal) return 1;
      if (!a.isLocal && b.isLocal) return -1;
      return String(a.identity).localeCompare(String(b.identity));
    });
  }, [participantsRaw]);

  // Build a quick lookup for tracks
  const trackMap = useMemo(() => {
    const map = new Map<string, ReturnType<typeof useTracks>[number]>();
    for (const t of tracks) map.set(`${t.participant.identity}:${t.source}`, t);
    return map;
  }, [tracks]);

  // Keep a single "main" participant; don’t switch layout
  const [mainId, setMainId] = useState<string | null>(null);
  const promoteTimer = useRef<number | null>(null);

  // initial main
  useEffect(() => {
    if (!mainId && participants.length > 0) {
      const firstRemote =
        participants.find((p) => !p.isLocal) ?? participants[0];
      setMainId(firstRemote.identity);
    }
  }, [participants, mainId]);

  // update main on screenshare or if main leaves (debounced)
  useEffect(() => {
    if (promoteTimer.current) window.clearTimeout(promoteTimer.current);
    promoteTimer.current = window.setTimeout(() => {
      const sharer = participants.find((p) => p.isScreenShareEnabled);
      if (sharer && sharer.identity !== mainId) {
        setMainId(sharer.identity);
      } else if (mainId && !participants.find((p) => p.identity === mainId)) {
        const next =
          participants.find((p) => !p.isLocal) ?? participants[0] ?? null;
        setMainId(next ? next.identity : null);
      }
    }, 150);
    return () => {
      if (promoteTimer.current) window.clearTimeout(promoteTimer.current);
    };
  }, [participants, mainId]);

  const main =
    (mainId && participants.find((p) => p.identity === mainId)) ||
    participants.find((p) => !p.isLocal) ||
    participants[0];

  return (
    <div className="relative w-full h-full">
      {/* Single stable stage */}
      <div className="absolute inset-0">
        {main ? (
          <MobileMainTile
            participant={main}
            activeEmojis={activeEmojis}
            trackMap={trackMap}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-white/70">Waiting for participants...</p>
          </div>
        )}
      </div>
    </div>
  );
};

const MobileMainTile = ({
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
  const [source, setSource] = useState<Track.Source | null>(
    pickSource(participant)
  );
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(
      () => setSource(pickSource(participant)),
      150
    );
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [participant]);

  const t = source
    ? trackMap.get(`${participant.identity}:${source}`)
    : undefined;
  const initials = getInitials(participant.identity);

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      <VideoSurface
        participant={participant}
        trackRef={t}
        fallbackInitials={initials}
      />

      {/* (Optional) Emoji overlay */}
      {activeEmojis &&
        Object.values(activeEmojis).map((e, i) => (
          <div
            key={`${e.username}-${e.timestamp}`}
            className="absolute bottom-16 left-3 z-30 pointer-events-none"
            style={{ transform: `translateX(${i * 96}px)` }}
          >
            <div className="bg-[#080B16]/80 backdrop-blur-lg rounded-full px-4 py-2 shadow-xl">
              <span className="text-4xl">{e.emoji}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

const VideoSurface = ({
  participant,
  trackRef,
  fallbackInitials,
}: {
  participant: Participant;
  trackRef?: ReturnType<typeof useTracks>[number];
  fallbackInitials: string;
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
    // Ensure the effect always returns void or a cleanup function, never an element
    return;
  }, [trackRef?.publication?.track]);

  return (
    <div className="relative w-full h-full min-h-[60vh] bg-transparent">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={participant.isLocal}
        className="w-full object-cover custom-video"
      />
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
          hasMedia ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <HexAvatar initials={fallbackInitials} size={120} fontSize={52} />
      </div>
    </div>
  );
};
