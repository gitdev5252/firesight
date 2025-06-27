// src/lib/livekit/token.ts
import { AccessToken } from 'livekit-server-sdk';
import { LIVEKIT_CONFIG } from './config';

export async function generateToken(roomName: string, participantName: string) {
  const at = new AccessToken(
    LIVEKIT_CONFIG.apiKey,
    LIVEKIT_CONFIG.apiSecret,
    {
      identity: participantName,
      name: participantName,
    }
  );

  at.addGrant({
    roomJoin: true,
    room: roomName,
    canPublish: true,
    canSubscribe: true,
  });

  return at.toJwt();
}