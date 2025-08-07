import { useLocalParticipant } from "@livekit/components-react";
import { useState, useEffect } from "react";

export const useMediaControls = () => {
  const { localParticipant } = useLocalParticipant();
  const [isMicrophoneEnabled, setIsMicrophoneEnabled] = useState(true);
  const [isCameraEnabled, setIsCameraEnabled] = useState(true);

  useEffect(() => {
    if (localParticipant) {
      setIsMicrophoneEnabled(localParticipant.isMicrophoneEnabled);
      setIsCameraEnabled(localParticipant.isCameraEnabled);
    }
  }, [localParticipant]);

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
