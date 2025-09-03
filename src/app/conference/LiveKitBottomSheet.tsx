import React from "react";
import { Monitor, Users, Bot, Link } from "lucide-react";
import BottomSheet from "../../components/BottomSheet/BottomSheet";
import { useMediaControls } from "@/hooks/useMediaControls";

interface LiveKitBottomSheetProps {
  open: boolean;
  onClose: () => void;
  meetingDuration: string;
  onInvite: () => void;
}

const LiveKitBottomSheet: React.FC<LiveKitBottomSheetProps> = ({
  open,
  onClose,
  meetingDuration,
  onInvite,
}) => {
  const { startScreenShare, stopScreenShare, isScreenSharing } =
    useMediaControls();

  return (
    <BottomSheet open={open} onClose={onClose}>
      <div className="justify-center items-center flex flex-col gap-3 p-4">
        <button
          className={`backdrop-blur-[16px] text-[#FFFFFF] bg-[#080B1680] rounded-[15px] gap-4 flex flex-row items-center h-[44px] w-auto p-6 shadow-lg justify-center text-center flex-none cursor-pointer ${
            isScreenSharing ? "border border-green-400" : ""
          }`}
          onClick={() => {
            if (isScreenSharing) {
              stopScreenShare();
            } else {
              startScreenShare();
            }
          }}
        >
          <Monitor size={18} />
          <span>{isScreenSharing ? "Stop Presenting" : "Present"}</span>
        </button>
        <div className="backdrop-blur-[16px] text-[#FFFFFF] bg-[#080B1680] rounded-[15px] gap-4 flex flex-row items-center h-[44px] w-auto p-6 shadow-lg justify-center text-center flex-none">
          <Users size={18} />
          <span>Roles</span>
        </div>
        <div
          className="backdrop-blur-[16px] text-[#FFFFFF] bg-[#080B1680] rounded-[15px] gap-4 flex flex-row items-center h-[44px] w-auto p-6 shadow-lg justify-center text-center"
          style={{ flex: "0 0 auto" }}
        >
          <Bot size={18} />
          <span>AI Worker</span>
        </div>
        <div
          className="backdrop-blur-[16px] text-[#FFFFFF] bg-[#080B1680] rounded-[15px] gap-4 flex flex-row items-center h-[44px] w-auto p-6 shadow-lg justify-center text-center"
          style={{ flex: "0 0 auto" }}
          onClick={onInvite}
        >
          <Link size={18} />
          <span>Share Session Link</span>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-white/20 my-4" />
      <div className="justify-center items-center flex  flex-row gap-3 ">
        <span className="text-[#86878D] text-sm">Session State: </span>
        <span className="text-[#FFFFFF] font-bold text-sm">Active</span>
        <span className="text-white/50 text-sm">|</span>
        <span className="text-[#FFFFFF] font-bold text-sm">
          {meetingDuration}
        </span>
      </div>
    </BottomSheet>
  );
};

export default LiveKitBottomSheet;
