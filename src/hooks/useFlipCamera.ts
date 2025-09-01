// hooks/useFlipCamera.ts
import * as React from "react";
import { useRoomContext, useLocalParticipant } from "@livekit/components-react";
import { Track } from "livekit-client";

export function useFlipCamera() {
  const room = useRoomContext();
  const { localParticipant } = useLocalParticipant();
  const [facing, setFacing] = React.useState<"user" | "environment">("user");

  const flipCamera = React.useCallback(async () => {
    if (!room || !localParticipant) return;

    // get current local camera track
    const pub = localParticipant.getTrackPublication(Track.Source.Camera);
    const track = pub?.track;
    if (!track) {
      // if camera is off, start it with desired facing
      await localParticipant.setCameraEnabled(true, { facingMode: facing === "user" ? "environment" : "user" });
      setFacing((f) => (f === "user" ? "environment" : "user"));
      return;
    }

    // if camera is already on, restart with the opposite facing mode
    await track.restartTrack({ facingMode: facing === "user" ? "environment" : "user" });
    setFacing((f) => (f === "user" ? "environment" : "user"));
  }, [room, localParticipant, facing]);

  return { flipCamera, facing };
}
