// src/components/video/hooks/useVideoRoom.ts
'use client';
import { useState, useEffect } from 'react';
import { Room, RoomEvent } from 'livekit-client';

export function useVideoRoom(roomName: string) {
  const [room, setRoom] = useState<Room | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const room = new Room({
      adaptiveStream: true,
      dynacast: true,
      publishDefaults: {
        simulcast: true,
      },
    });

    room
      .on(RoomEvent.Connected, () => setIsConnected(true))
      .on(RoomEvent.Disconnected, () => setIsConnected(false))
      .on(RoomEvent.ConnectionStateChanged, (state: string) => {
        if (state === 'failed') {
          setError(new Error('Connection failed'));
        }
      });

    setRoom(room);

    return () => {
      room.disconnect();
    };
  }, [roomName]);

  return { room, isConnected, error };
}