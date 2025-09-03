import { NextRequest, NextResponse } from "next/server";
import { AccessToken } from "livekit-server-sdk";

// export const runtime = "edge";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const room = url.searchParams.get("room");
  const identity = url.searchParams.get("identity");

  if (!room || !identity) {
    return NextResponse.json(
      { error: "Missing room or identity parameter" },
      { status: 400 }
    );
  }

  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;

  if (!apiKey || !apiSecret) {
    return NextResponse.json(
      {
        error:
          "LiveKit credentials not configured. Please set LIVEKIT_API_KEY and LIVEKIT_API_SECRET environment variables.",
      },
      { status: 500 }
    );
  }

  try {
    const at = new AccessToken(apiKey, apiSecret, { identity });
    at.addGrant({
      roomJoin: true,
      room,
      canPublish: true,
      canSubscribe: true,
      canPublishData: true,
    });

    const token = await at.toJwt();

    return NextResponse.json({
      token,
      identity,
      room,
    });
  } catch (error) {
    console.error("Error generating LiveKit token:", error);
    return NextResponse.json(
      { error: "Failed to generate token" },
      { status: 500 }
    );
  }
}
