'use client';
import { use } from 'react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import VideoRoom from '@/components/video/VideoRoom';
import { LIVEKIT_CONFIG } from '@/lib/livekit/config';

export default function SessionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // Unwrap the params Promise
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const userName = `user-${Math.random().toString(36).slice(2, 8)}`;
      const res = await fetch(`/api/livekit-token?room=${id}&user=${userName}`);
      const data = await res.json();
      setToken(data.token);
    };
    fetchToken();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Session ID: {id}</h1>
      <h2 className="text-xl text-gray-700 mb-8">
        Session Type: {type === 'agent' ? 'Agent (1:1 with AI)' : 'Conference (Multi-user)'}
      </h2>
      {token ? (
        <div className="w-full max-w-6xl">
          <VideoRoom
            token={token}
            serverUrl={LIVEKIT_CONFIG.serverUrl}
            roomName={id}
            userName={`user-${Math.random().toString(36).slice(2, 8)}`}
          />
        </div>
      ) : (
        <div className="text-gray-600">Loading video room...</div>
      )}
    </div>
  );
}