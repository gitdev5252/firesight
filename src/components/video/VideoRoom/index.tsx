"use client";
import {
  LiveKitRoom,
  VideoConference,
  GridLayout,
  ParticipantTile,
  RoomAudioRenderer,
  ControlBar,
  useTracks,
} from "@livekit/components-react";
import { Track } from "livekit-client";
import "@livekit/components-styles";
import { VideoRoomProps } from "./types";

export default function VideoRoom({ serverUrl, token }: VideoRoomProps) {
  return (
    <LiveKitRoom
      token={token}
      serverUrl={serverUrl}
      connect={true}
      className="w-full h-[70vh] rounded-lg overflow-hidden bg-gray-900"
      data-lk-theme="default"
    >
      {/* Move useTracks inside the Room context */}
      <VideoRoomContent />
    </LiveKitRoom>
  );
}

// This component is rendered inside the LiveKitRoom context
function VideoRoomContent() {
  const tracks = useTracks([Track.Source.Camera, Track.Source.ScreenShare]);
  return (
    <VideoConference>
      <GridLayout tracks={tracks}>
        <ParticipantTile />
      </GridLayout>
      <RoomAudioRenderer />
      <ControlBar />
    </VideoConference>
  );
}
