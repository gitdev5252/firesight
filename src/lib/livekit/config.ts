// src/lib/livekit/config.ts
export const LIVEKIT_CONFIG = {
  serverUrl: process.env.NEXT_PUBLIC_LIVEKIT_URL || '',
  apiKey: process.env.LIVEKIT_API_KEY || '',
  apiSecret: process.env.LIVEKIT_API_SECRET || '',
};