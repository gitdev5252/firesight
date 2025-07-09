import { NextRequest, NextResponse } from 'next/server';
import { AccessToken } from 'livekit-server-sdk';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const room = url.searchParams.get('room');
  const user = url.searchParams.get('user');

  if (!room || !user) {
    return NextResponse.json(
      { error: 'Missing room or user' },
      { status: 400 }
    );
  }

  const apiKey = process.env.LIVEKIT_API_KEY!;
  const apiSecret = process.env.LIVEKIT_API_SECRET!;

  if (!apiKey || !apiSecret) {
    return NextResponse.json(
      { error: 'LiveKit credentials not configured' },
      { status: 500 }
    );
  }

  try {
    const at = new AccessToken(apiKey, apiSecret, { identity: user });
    at.addGrant({ roomJoin: true, room, canPublish: true, canSubscribe: true });
    const token = at.toJwt();
    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to generate token--> ${error}`  },
      { status: 500 }
    );
  }
} 