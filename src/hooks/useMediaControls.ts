import { useLocalParticipant } from "@livekit/components-react";
import { useState, useEffect } from "react";
import { useParticipants } from "@livekit/components-react";
import { Participant } from "livekit-client";

export const useMediaControls = () => {
  const { localParticipant } = useLocalParticipant();
  const participants = useParticipants();
  let singleParticipant: Participant | null = null;
  singleParticipant = participants[0];
  const isCameraOn = singleParticipant?.isCameraEnabled ?? false;

  const [isMicrophoneEnabled, setIsMicrophoneEnabled] = useState(true);
  const [isCameraEnabled, setIsCameraEnabled] = useState(isCameraOn);
  // console.log( isCameraOn, "localParticipantlocalParticipant")
  useEffect(() => {
    if (localParticipant) {
      setIsMicrophoneEnabled(localParticipant.isMicrophoneEnabled);
      setIsCameraEnabled(isCameraOn);
    }
  }, [isCameraOn,localParticipant]);

  const toggleMicrophone = async () => {
    if (localParticipant) {
      const enabled = localParticipant.isMicrophoneEnabled;
      await localParticipant.setMicrophoneEnabled(!enabled);
      setIsMicrophoneEnabled(!enabled);
    }
  };

  const toggleCamera = async () => {
    if (localParticipant) {
      const enabled = localParticipant.isCameraEnabled;
      await localParticipant.setCameraEnabled(!enabled);
      setIsCameraEnabled(!enabled);
    }
  };

  const startScreenShare = async () => {
    if (localParticipant) {
      await localParticipant.setScreenShareEnabled(true);
    }
  };

  const stopScreenShare = async () => {
    if (localParticipant) {
      await localParticipant.setScreenShareEnabled(false);
    }
  };

  const isScreenSharing = localParticipant?.isScreenShareEnabled || false;

  return {
    isMicrophoneEnabled,
    isCameraEnabled,
    isScreenSharing,
    toggleMicrophone,
    toggleCamera,
    startScreenShare,
    stopScreenShare,
  };
};
