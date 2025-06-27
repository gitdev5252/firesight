// src/components/video/VideoRoom/types.ts
export interface VideoRoomProps {
  token: string;
  serverUrl: string;
  roomName: string;
  userName: string;
}

export interface ParticipantProps {
  participantId: string;
  isSpeaking?: boolean;
  isMuted?: boolean;
  isLocal?: boolean;
}