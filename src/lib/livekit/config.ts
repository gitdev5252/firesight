// src/lib/livekit/config.ts
export const LIVEKIT_CONFIG = {
  serverUrl: process.env.NEXT_PUBLIC_LIVEKIT_URL || 'wss://firesight-1bb2vgjz.livekit.cloud',
  apiKey: process.env.LIVEKIT_API_KEY || '',
  apiSecret: process.env.LIVEKIT_API_SECRET || '',
};