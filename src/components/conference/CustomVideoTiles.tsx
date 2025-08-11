import { useTracks, useParticipants } from "@livekit/components-react";
import { Participant, Track } from "livekit-client";
import { Expand, Mic, MicOff, Monitor } from "lucide-react";
import { useEffect, useRef } from "react";

// Random names to assign to participants

// Use participant.identity directly for display name

// Function to get initials from name
const getInitials = (name: string) => {
  return name.split(' ').map(word => word.charAt(0)).join('').toUpperCase().slice(0, 2);
};

export const CustomVideoTiles = ({ activeEmojis }: { activeEmojis?: { [key: string]: { emoji: string, timestamp: number, username: string } } }) => {
  const participants = useParticipants();
  const tracks = useTracks([Track.Source.Camera, Track.Source.ScreenShare]);
  const videoRef = useRef<HTMLVideoElement>(null);
  // For single participant case
  let singleParticipantTrack: ReturnType<typeof useTracks>[number] | null = null;
  let singleParticipant: Participant | null = null;
  let singleInitials = "";
  let singleDisplayName = "";
  if (participants.length === 1) {
    singleParticipant = participants[0];
    singleDisplayName = singleParticipant.identity;
    singleInitials = getInitials(singleDisplayName);
    const participantTracks = singleParticipant && singleParticipant.identity
      ? tracks.filter(track => track.participant.identity === singleParticipant?.identity)
      : [];
    singleParticipantTrack = participantTracks.find(track => track.source === Track.Source.ScreenShare) ??
                            participantTracks.find(track => track.source === Track.Source.Camera) ??
                            null;
  }
  useEffect(() => {
    if (participants.length === 1 && singleParticipantTrack) {
      const videoElement = videoRef.current;
      if (videoElement && singleParticipantTrack.publication?.track) {
        singleParticipantTrack.publication.track.attach(videoElement);
        return () => {
          if (singleParticipantTrack.publication?.track) {
            singleParticipantTrack.publication.track.detach(videoElement);
          }
        };
      }
    }
  }, [participants, singleParticipantTrack]);
  // Show large centered avatar or video if only one participant
  if (participants.length === 1) {
    const isCameraOn = singleParticipant?.isCameraEnabled ?? false;
    return (
      <div className="w-full h-full min-h-[320px] flex items-center justify-center">
        <div className="text-center w-full h-full flex items-center justify-center">
          {isCameraOn && singleParticipantTrack?.publication?.track ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted={singleParticipant?.isLocal ?? false}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full w-full min-h-[320px]">
              <div className="w-32 h-32 mb-6 rounded-full bg-[#232626] flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                {singleInitials}
              </div>
              <h2 className="text-white text-2xl font-semibold mb-2">{singleDisplayName}</h2>
              <p className="text-white/70 text-lg">
                {/* {singleParticipant.isLocal ? "You're the only one here" : "Waiting for others to join..."} */}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Google Meet style layout for multiple participants
  if (participants.length > 1) {
    const mainParticipant = participants.find(p => !p.isLocal) || participants[0];
    const otherParticipants = participants.filter(p => p !== mainParticipant);
    
    // Google Meet style: Show max 3 individual tiles, rest in overflow tile
    const maxIndividualTiles = 3;
    const displayedParticipants = otherParticipants.slice(0, maxIndividualTiles);
    const overflowParticipants = otherParticipants.slice(maxIndividualTiles);

    return (
      <div className="w-full h-full flex ">
        {/* Main video area (left side) - takes most space with aspect ratio control */}
        <div className="flex-1 pr-3 flex">
          <div className="w-full max-w-8xl h-full max-h-[720px]">
            <MainVideoTile participant={mainParticipant} activeEmojis={activeEmojis} />
          </div>
        </div>

        {/* Right side participant tiles - fixed width */}
        <div className="w-56 flex flex-col gap-2 mr-4">
          {/* Individual tiles for first 3 participants */}
          {displayedParticipants.map((participant) => (
            <SmallVideoTile key={participant.identity} participant={participant} />
          ))}
          
          {/* Overflow tile for remaining participants */}
          {overflowParticipants.length > 0 && (
            <OverflowTile participants={overflowParticipants} />
          )}
        </div>
      </div>
    );
  }

  // Fallback for no participants
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor" />
          </svg>
        </div>
        <p className="text-white/70">Waiting for participants to join...</p>
      </div>
    </div>
  );
};

// Main video tile component (for the primary speaker)
const MainVideoTile = ({ participant, activeEmojis }: {
  participant: Participant;
  activeEmojis?: { [key: string]: { emoji: string, timestamp: number, username: string } }
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const displayName = participant.identity;
  const initials = getInitials(displayName);

  // Find the video track for this participant (prioritize screen share over camera)
  const tracks = useTracks([Track.Source.Camera, Track.Source.ScreenShare]);
  const participantTracks = tracks.filter(track => track.participant.identity === participant.identity);
  
  // Prioritize screen share track if available, otherwise use camera
  const participantTrack = participantTracks.find(track => track.source === Track.Source.ScreenShare) || 
                          participantTracks.find(track => track.source === Track.Source.Camera);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement && participantTrack?.publication?.track) {
      participantTrack.publication.track.attach(videoElement);
      return () => {
        if (participantTrack.publication?.track) {
          participantTrack.publication.track.detach(videoElement);
        }
      };
    }
  }, [participantTrack]);

  return (
    <div className="w-full h-full min-h-[320px] bg-black rounded-xl flex items-center justify-center text-white relative overflow-hidden">
      {participantTrack?.publication?.track ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted={participant.isLocal}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-full min-h-[320px]">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold uppercase text-white shadow-lg">
            {initials}
          </div>
          <p className="mt-3 text-lg text-white/70 font-medium">
            {displayName}
          </p>
        </div>
      )}

      {/* Participant name overlay */}
      {/* <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded text-sm text-white backdrop-blur-sm">
        {displayName}
        {participant.isLocal && " (You)"}
      </div> */}

      {/* Emoji overlay - Show ALL emojis on the main big tile */}
      {activeEmojis && Object.values(activeEmojis).map((emojiData, index) => (
        <div key={`${emojiData.username}-${emojiData.timestamp}`} className={`absolute bottom-16 z-30 pointer-events-none`} style={{ left: `${8 + (index * 120)}px` }}>
          <div className="animate-float-up">
            <div className="bg-[#080B16] backdrop-blur-lg rounded-full px-5 py-3 gap-3 shadow-2xl items-center flex flex-col">
              <span className="text-5xl">{emojiData.emoji}</span>
              {/* <span className="text-black font-bold text-lg">{emojiData.username}</span> */}
              <p className="text-white font-bold text-lg">{emojiData.username}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        {/* Screen share indicator */}
        {participantTrack?.source === Track.Source.ScreenShare && (
          <div className="w-7 h-7 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
            <Monitor size={14} color="white" />
          </div>
        )}
        
        <div className="w-7 h-7 bg-[#080B16] rounded-full flex items-center justify-center shadow-lg">
          <Expand color="white" />
        </div>
      </div>
    </div>
  );
};

// Small video tile component (for participants on the right side)
const SmallVideoTile = ({ participant }: {
  participant: Participant;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const displayName = participant.identity;
  const initials = getInitials(displayName);

  // Find the video track for this participant (prioritize screen share over camera)
  const tracks = useTracks([Track.Source.Camera, Track.Source.ScreenShare]);
  const participantTracks = tracks.filter(track => track.participant.identity === participant.identity);
  
  // Prioritize screen share track if available, otherwise use camera
  const participantTrack = participantTracks.find(track => track.source === Track.Source.ScreenShare) || 
                          participantTracks.find(track => track.source === Track.Source.Camera);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement && participantTrack?.publication?.track) {
      participantTrack.publication.track.attach(videoElement);
      return () => {
        if (participantTrack.publication?.track) {
          participantTrack.publication.track.detach(videoElement);
        }
      };
    }
  }, [participantTrack]);

  return (
    <div className="w-full h-32 min-h-[128px] bg-black rounded-lg flex items-center justify-center text-white relative overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500/50 transition-all">
      {participantTrack?.publication?.track ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted={participant.isLocal}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-full min-h-[128px]">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-base font-bold uppercase text-white">
            {initials}
          </div>
        </div>
      )}

      {/* Participant name overlay */}
      <div className="absolute bottom-1 left-1 bg-black/60 px-2 py-0.5 rounded text-xs text-white backdrop-blur-sm">
        {displayName.split(' ')[0]}
        {participant.isLocal && " (You)"}
      </div>

      {/* Indicators */}
      <div className="absolute top-2 right-2 flex flex-col gap-1">
        {/* Screen share indicator */}
        {participantTrack?.source === Track.Source.ScreenShare && (
          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
            <Monitor size={12} color="white" />
          </div>
        )}
        
        {/* Audio indicator */}
        {participant.isMicrophoneEnabled ? (
          <div className="w-8 h-8 bg-[#080B16]  rounded-full flex items-center justify-center shadow-lg">
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

// Overflow tile component (for showing remaining participants)
const OverflowTile = ({ participants }: {
  participants: Participant[];
}) => {
  const totalCount = participants.length;
  const displayParticipants = participants.slice(0, 4); // Show max 4 avatars in the overflow tile
  
  return (
    <div className="w-full h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center text-white relative overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500/50 transition-all border border-white/10">
      <div className="flex flex-col items-center justify-center gap-2">
        {/* Grid of small avatars */}
        <div className="grid grid-cols-2 gap-1">
          {displayParticipants.map((participant) => {
            const displayName = participant.identity;
            const initials = getInitials(displayName);
            
            return (
              <div
                key={participant.identity}
                className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-[10px] font-bold uppercase text-white shadow-sm"
              >
                {initials}
              </div>
            );
          })}
        </div>
        
        {/* Count indicator */}
        <div className="text-center">
          <span className="text-lg font-bold text-white">
            +{totalCount}
          </span>
          <p className="text-xs text-white/70 mt-1">
            more
          </p>
        </div>
      </div>
      
      {/* Background pattern for visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg"></div>
    </div>
  );
};
