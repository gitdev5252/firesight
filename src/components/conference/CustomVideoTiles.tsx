import { useTracks, useParticipants, TrackReferenceOrPlaceholder } from "@livekit/components-react";
import { Track } from "livekit-client";
import { useEffect, useRef } from "react";

// Random names to assign to participants
const randomNames = [
  "Alex Chen", "Sarah Johnson", "Mike Rodriguez", "Emma Davis", "David Kim",
  "Lisa Wang", "James Wilson", "Maria Garcia", "Ryan Thompson", "Priya Patel",
  "John Smith", "Amy Lee", "Chris Brown", "Jessica Miller", "Kevin Zhang"
];

// Function to get a random name based on participant identity
const getRandomName = (identity: string) => {
  const hash = identity.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
  const index = Math.abs(hash) % randomNames.length;
  return randomNames[index];
};

// Function to get initials from name
const getInitials = (name: string) => {
  return name.split(' ').map(word => word.charAt(0)).join('').toUpperCase().slice(0, 2);
};

export const CustomVideoTiles = () => {
  const tracks = useTracks([Track.Source.Camera, Track.Source.ScreenShare]);
  const participants = useParticipants();

  // Show large centered avatar if only one participant
  if (participants.length === 1) {
    const participant = participants[0];
    const displayName = participant.name || getRandomName(participant.identity);
    const initials = getInitials(displayName);
    
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#232626] flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
            {initials}
          </div>
          <h2 className="text-white text-2xl font-semibold mb-2">{displayName}</h2>
          <p className="text-white/70 text-lg">
            {/* {participant.isLocal ? "You're the only one here" : "Waiting for others to join..."} */}
          </p>
          
          {/* Audio indicator */}
          <div className="flex items-center justify-center mt-4"> 
            {/* {participant.isMicrophoneEnabled ? (
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3s3-1.34 3-3V4c0-1.66-1.34-3-3-3z" fill="white"/>
                  </svg>
                </div>
                <span className="text-sm">Microphone on</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-red-400">
                <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3s3-1.34 3-3V4c0-1.66-1.34-3-3-3z" fill="white"/>
                    <line x1="1" y1="1" x2="23" y2="23" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="text-sm">Microphone off</span>
              </div>
            )} */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Main video area */}
      <div className="flex-1 relative">
        {tracks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 h-full">
            {tracks.map((track, index) => (
              <VideoTrack 
                key={track.participant.identity + track.source} 
                track={track} 
                isMain={index === 0}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                </svg>
              </div>
              <p className="text-white/70">Waiting for participants to join...</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Participants without video */}
      {/* {participants.filter(p => !tracks.find(t => t.participant.identity === p.identity)).length > 0 && (
        <div className="h-24 border-t border-white/10 bg-black/20 flex items-center px-4 gap-3 overflow-x-auto">
          {participants
            .filter(p => !tracks.find(t => t.participant.identity === p.identity))
            .map((participant) => (
              <div
                key={participant.identity}
                className="flex-shrink-0 flex flex-col items-center gap-1"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold uppercase text-white">
                  {participant.name?.charAt(0) || participant.identity.charAt(0)}
                </div>
                <p className="text-xs text-white/70 max-w-16 truncate">
                  {participant.name || participant.identity}
                </p>
              </div>
            ))}
        </div>
      )} */}
    </div>
  );
};

interface VideoTrackProps {
  track: TrackReferenceOrPlaceholder;
  isMain?: boolean;
}

const VideoTrack = ({ track, isMain = false }: VideoTrackProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const displayName = track.participant.name || getRandomName(track.participant.identity);
  const initials = getInitials(displayName);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement && track.publication?.track) {
      track.publication.track.attach(videoElement);
      return () => {
        if (track.publication?.track) {
          track.publication.track.detach(videoElement);
        }
      };
    }
  }, [track]);

  return (
    <div
      className={`bg-black/40 rounded-xl flex items-center justify-center text-white relative border border-white/10 ${
        isMain ? 'col-span-full row-span-2 h-[400px]' : 'h-[200px]'
      }`}
    >
      {track.publication?.track ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted={track.participant.isLocal}
          className="w-full h-full object-cover rounded-xl"
        />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-lg font-bold uppercase text-white">
            {initials}
          </div>
          <p className="mt-2 text-sm text-white/70">
            {displayName}
          </p>
        </div>
      )}
      
      {/* Participant name overlay */}
      <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-1 rounded text-xs text-white">
        {displayName}
        {track.participant.isLocal && " (You)"}
      </div>
      
      {/* Audio indicator */}
      <div className="absolute top-2 right-2">
        {track.participant.isMicrophoneEnabled ? (
          <div className="w-6 h-6 bg-green-500/80 rounded-full flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3s3-1.34 3-3V4c0-1.66-1.34-3-3-3zm5.91 8.49l-1.41 1.41c.9 1.83.9 3.97 0 5.8l1.41 1.41c1.39-2.26 1.39-5.36 0-7.62zM19 12c0 2.76-2.24 5-5 5s-5-2.24-5-5H7c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c3.39-.49 6-3.39 6-6.92h-2z" fill="currentColor"/>
            </svg>
          </div>
        ) : (
          <div className="w-6 h-6 bg-red-500/80 rounded-full flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3s3-1.34 3-3V4c0-1.66-1.34-3-3-3zm5.91 8.49l-1.41 1.41c.9 1.83.9 3.97 0 5.8l1.41 1.41c1.39-2.26 1.39-5.36 0-7.62zM4.27 3L3 4.27l6.01 6.01V12c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.42-2.31.42-2.76 0-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c.9-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z" fill="currentColor"/>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
