"use client";

// Extend the Window interface to include pinParticipant
declare global {
  interface Window {
    pinParticipant?: (identity: string) => void;
  }
}

import {
  BotMessageSquare,
  Calendar,
  Clock,
  Copy,
  Hand,
  Link,
  Mic,
  Monitor,
  PhoneOff,
  Smile,
  Users,
  Video,
  MicOff,
  VideoOff,
  MicIcon,
} from "lucide-react";
import React from "react";
import {
  LiveKitRoom,
  useDisconnectButton,
  useParticipants,
  useLocalParticipant,
  useDataChannel,
} from "@livekit/components-react";
import { useRouter } from "next/navigation";
import "@livekit/components-styles";
import { LIVEKIT_CONFIG } from "@/lib/livekit/config";
import { CustomVideoTiles } from "@/components/conference/CustomVideoTiles";
import { useMediaControls } from "@/hooks/useMediaControls";
import { HexAvatar } from "@/components/HexAvatar/HexAvatar";
import { ShowSideRailProvider } from "@/hooks/sideRail";
import { LiveWaveform } from "@/components/Audio/LiveWave";
import { toast } from "sonner";
import LiveKitBottomSheet from "./LiveKitBottomSheet";
import { useFlipCamera } from "@/hooks/useFlipCamera";
import { useTracks } from "@livekit/components-react";
import { Track } from "livekit-client";

import { ParticipantEvent } from "livekit-client";

const mobileTabs = ["Session", "People", "Chat", "Transcript", "Summary"];
function classIf(cond: boolean, a: string, b: string) {
  return cond ? a : b;
}

type Participant = {
  isScreenShareEnabled: unknown;
  identity: string;
  isLocal: boolean;
  isMicrophoneEnabled: boolean;
  isCameraEnabled: boolean;
  sid: string;
};

const Sidebar = React.memo(
  ({
    participants,
    roomName,
    raisedHands,
    chatMessages,
    onSendMessage,
  }: {
    participants?: Participant[];
    roomName: string;
    raisedHands: { [key: string]: boolean };
    chatMessages: { message: string; timestamp: number; username: string }[];
    onSendMessage: (message: string) => void;
  }) => {
    const [activeTab, setActiveTab] = React.useState("People");
    const tabs = ["People", "Chat", "Transcript", "Summary", "Prompts"];

    // Helper function to choose between two class strings based on a condition

    return (
      <div className="flex flex-col min-h-0">
        <div className="flex border-b border-white/10 p-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-2 py-3 text-xs font-medium transition-colors `}
            >
              <span
                className={` ${classIf(
                  activeTab === tab,
                  "text-white border-b-3 border-green-400 mt-1 sm:pb-[20px]",
                  "text-white/60 hover:text-white/80 mt-1"
                )}`}
              >
                {tab}
              </span>
            </button>
          ))}
        </div>

        <div className="flex-1 p-4 overflow-y-auto min-h-0">
          {activeTab === "People" && (
            <PeopleTab
              participants={participants}
              roomName={roomName}
              raisedHands={raisedHands}
            />
          )}
          {activeTab === "Chat" && (
            <div className="h-[80vh] min-h-0 bg-[#141721] rounded-[10px] pt-4 border border-[#FFFFFF1A]">
              <ChatTab messages={chatMessages} onSendMessage={onSendMessage} />
            </div>
          )}
          {activeTab === "Transcript" && <InfoTab type="Transcript" />}
          {activeTab === "Summary" && <InfoTab type="Summary" />}
          {activeTab === "Prompts" && <InfoTab type="Prompts" />}
        </div>
      </div>
    );
  }
);

const PeopleTab = React.memo(
  ({
    participants,
    roomName,
    raisedHands,
  }: {
    participants?: Participant[];
    roomName: string;
    raisedHands: { [key: string]: boolean };
  }) => {
    return (
      <div>
        <div
          className="bg-[rgba(255,255,255,0.02)] rounded-[20px] border border-[rgba(255,255,255,0.1)] md:backdrop-blur-[32px] p-2 mb-4 overflow-auto"
          style={{ height: "72vh" }}
        >
          {participants && participants.length > 0 ? (
            participants.map((participant) => {
              const p = participant as Participant;
              const initials = p.identity.slice(0, 2).toUpperCase();
              const isLocal = p.isLocal;
              const isMicEnabled = !p.isMicrophoneEnabled === false;
              const isCameraEnabled = !p.isCameraEnabled === false;

              return (
                <div
                  key={p.sid}
                  className="relative flex items-center gap-3 p-3 rounded-lg mb-2"
                >
                  {/* Camera Off Icon (left) */}

                  <HexAvatar initials={initials} size={32} fontSize={12} />

                  <div className="flex justify-between w-full">
                    <div className="flex items-center gap-2">
                      <p className="text-white text-sm font-medium">
                        {p.identity} {isLocal && "(Host)"}
                      </p>
                    </div>
                    <div className="flex items-center gap-6">
                      {/* Hand Raised Icon (center top) */}
                      {raisedHands[p.identity] && (
                        <div className="">
                          <img
                            src="/images/icons/hand-active.svg"
                            alt="Hand Raised"
                            width={32}
                            height={32}
                          />
                        </div>
                      )}

                      {/* Mic Off Icon (top right) */}
                      {!isMicEnabled ? (
                        <div className="">
                          <MicOff
                            size={20}
                            color={!isMicEnabled ? "#E93249" : "#FFFFFF"}
                          />
                        </div>
                      ) : (
                        <div className="">
                          <MicIcon
                            size={20}
                            color={!isMicEnabled ? "#E93249" : "#FFFFFF"}
                          />
                        </div>
                      )}
                      {!isCameraEnabled && (
                        <div className="">
                          <VideoOff size={20} color="#E93249" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-white/60 text-sm">No participants yet</p>
          )}
        </div>

        <div className="flex items-center gap-3 p-2 bg-[#0f1419] rounded-lg border border-white/10">
          <Link color="white" />
          <span className="text-white text-sm flex-1 font-mono">
            {`${window.location.origin}/conference?room=${roomName}`}
          </span>
          <button
            className="p-1 hover:bg-white/10 rounded"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(
                  `${window.location.origin}/conference?room=${roomName}`
                );
                toast.success("Copied to clipboard", {
                  style: {
                    width: "200px",
                  },
                });
              } catch (err) {
                console.error("Clipboard write failed:", err);
                toast.error("Unable to copy link. Please copy it manually.");
              }
            }}
          >
            <Copy color="white" />
          </button>
        </div>
      </div>
    );
  }
);

const ChatTab = React.memo(
  ({
    messages,
    onSendMessage,
  }: {
    messages: { message: string; timestamp: number; username: string }[];
    onSendMessage: (message: string) => void;
  }) => {
    const [inputMessage, setInputMessage] = React.useState("");
    const messagesEndRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages.length]);

    const handleSendMessage = () => {
      if (inputMessage.trim()) {
        onSendMessage(inputMessage.trim());
        setInputMessage("");
      }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    };

    return (
      <div className="flex flex-col h-full min-h-0 bg-[#141721] rounded-[10px] p-3">
        <div className="flex-1 overflow-y-auto mb-4 space-y-3 min-h-0">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div className="flex gap-3 ml-2 mr-2 items-center" key={index}>
                <HexAvatar
                  initials={msg.username
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, 2)}
                />
                <div className="bg-white/5 rounded-lg p-3 border border-white/10 w-fit max-w-[75%] min-w-0">
                  <p className="text-white/80 text-sm break-words">
                    {msg.message}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white/60 text-sm text-center py-8">
              No messages yet. Start the conversation!
            </p>
          )}
          {/* <div ref={messagesEndRef} /> */}
        </div>

        <div>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type here..."
            className="flex-1 w-full bg-[#080B1680] border border-white/20 rounded-lg px-3 py-4 text-white text-sm placeholder-white/50 focus:outline-none "
          />
        </div>
      </div>
    );
  }
);

interface InfoTabProps {
  type: "Transcript" | "Summary" | "Prompts";
}

const InfoTab: React.FC<InfoTabProps> = React.memo(({ type }) => {
  const tabTitles: Record<string, string> = {
    Transcript: "Transcript",
    Summary: "Summary",
    Prompts: "Prompts",
  };
  return (
    <div className="flex flex-col items-center h-full min-h-[500px] w-full ">
      <div className="bg-[#181C23] border border-white/10 rounded-2xl p-8 w-full max-w-md flex flex-col items-center shadow-lg h-[90%]">
        <span className="text-green-400 text-base font-mono mb-4">
          Coming Soon
        </span>
        <h2 className="text-white text-2xl font-bold mb-2 text-center tracking-wide">
          Create an Account
        </h2>
        <p className="text-white/70 text-base mb-8 text-center">
          To be among the first to use{" "}
          <span className="font-semibold">{tabTitles[type]}</span>
        </p>
        <button className="w-full py-4 mb-12 rounded-full border border-green-400 text-green-200 text-lg font-mono font-semibold bg-gradient-to-r from-green-400/10 to-cyan-400/10 hover:from-green-400/20 hover:to-cyan-400/20 transition">
          14 Day Trial | <span className="font-bold text-white">Start Now</span>
        </button>
        <div className="w-full border-t border-white/10 my-8"></div>
        <p className="text-white/60 text-center mb-4">
          If you already have an account
        </p>
        <button className="w-full py-3 rounded-full border border-white/20 text-white/80 text-lg font-mono bg-[#10131A] hover:bg-white/10 transition">
          Log In
        </button>
      </div>
    </div>
  );
});
ChatTab.displayName = "ChatTab";
Sidebar.displayName = "Sidebar";

/* ----------------- Realtime Messaging ----------------- */
const RealtimeMessaging = ({
  onEmojiReceived,
  onHandRaiseReceived,
  onChatReceived,
}: {
  onEmojiReceived: (data: {
    emoji: string;
    timestamp: number;
    username: string;
  }) => void;
  onHandRaiseReceived: (data: { username: string; isRaised: boolean }) => void;
  onChatReceived: (data: {
    message: string;
    timestamp: number;
    username: string;
  }) => void;
}) => {
  const { localParticipant } = useLocalParticipant();

  const { send: sendEmojiData } = useDataChannel("emoji", (message) => {
    const data = JSON.parse(new TextDecoder().decode(message.payload));
    onEmojiReceived(data);
  });
  InfoTab.displayName = "InfoTab";
  PeopleTab.displayName = "PeopleTab";
  const { send: sendHandData } = useDataChannel("hand-raise", (message) => {
    const data = JSON.parse(new TextDecoder().decode(message.payload));
    onHandRaiseReceived(data);
  });
  ConferenceControls.displayName = "ConferenceControls";
  const { send: sendChatData } = useDataChannel("chat", (message) => {
    const data = JSON.parse(new TextDecoder().decode(message.payload));
    onChatReceived(data);
  });
  MobileConferenceControls.displayName = "MobileConferenceControls";

  React.useEffect(() => {
    if (!localParticipant) return;
    window.sendEmojiToAll = (emoji: string, username: string) => {
      const data = { emoji, timestamp: Date.now(), username };
      sendEmojiData(new TextEncoder().encode(JSON.stringify(data)), {
        reliable: true,
      });
      MobileTabBarControls.displayName = "MobileTabBarControls";
    };
    window.sendHandRaiseToAll = (username: string, isRaised: boolean) => {
      const data = { username, isRaised };
      sendHandData(new TextEncoder().encode(JSON.stringify(data)), {
        reliable: true,
      });
    };
    window.sendChatToAll = (message: string, username: string) => {
      const data = { message, timestamp: Date.now(), username };
      sendChatData(new TextEncoder().encode(JSON.stringify(data)), {
        reliable: true,
      });
    };
  }, [localParticipant, sendEmojiData, sendHandData, sendChatData]);

  return null;
};

const ParticipantProvider = ({
  onParticipantsChange,
}: {
  onParticipantsChange: (participants: Participant[]) => void;
}) => {
  const participants = useParticipants();
  React.useEffect(() => {
    onParticipantsChange(participants);
  }, [participants, onParticipantsChange]);
  return null;
};

/* ----------------- Desktop Controls ----------------- */
const ConferenceControls = React.memo(
  ({
    onInvite,
    onToggleSidebar,
    onSendEmoji,
    onToggleHandRaise,
    currentUser,
    raisedHands,
    isSidebarOpen,
    isSideRail,
  }: {
    onInvite: () => void;
    onToggleSidebar: () => void;
    onSendEmoji: (username: string) => void;
    onToggleHandRaise: (username: string) => void;
    currentUser: string;
    raisedHands: { [key: string]: boolean };
    isSidebarOpen: boolean;
    isSideRail: boolean;
  }) => {
    const {
      isMicrophoneEnabled,
      isCameraEnabled,
      toggleMicrophone,
      toggleCamera,
      startScreenShare,
      stopScreenShare,
      isScreenSharing,
    } = useMediaControls();

    // Local booleans for readability
    const micOk = !!isMicrophoneEnabled;
    const camOk = !!isCameraEnabled;

    const { buttonProps: disconnectButtonProps } = useDisconnectButton({});
    const router = useRouter();

    const handleEndCall = async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disconnectButtonProps.onClick) await disconnectButtonProps.onClick(e);
      router.push("/sessions");
    };
    const fullScreenStyle = !isSideRail
      ? "bg-[#080B1680] p-3 rounded-[15px] mt-1"
      : "";
    return (
      <div className="px-6">
        <div className="px-2">
          <div
            className={`flex items-center justify-between ${fullScreenStyle}`}
          >
            <div className="flex items-center gap-4">
              <button
                className="flex flex-col items-center gap-1 text-gray-400/60 hover:text-gray-400 transition-colors"
                onClick={onInvite}
              >
                <div className="flex items-center justify-center">
                  <Link color="white" />
                </div>
                <span className="text-xs mt-2">Invite</span>
              </button>
            </div>

            <div className="flex items-center gap-6">
              <button
                className={`flex flex-col items-center gap-1 transition-colors ${classIf(
                  micOk,
                  "text-gray-400 hover:text-gray-400",
                  "text-red-400 hover:text-red-300"
                )}`}
                onClick={toggleMicrophone}
              >
                <div className="items-center justify-center">
                  {isMicrophoneEnabled ? (
                    <Mic color="white" />
                  ) : (
                    <MicOff color="red" />
                  )}
                </div>
                <span className="text-xs mt-2">Mic</span>
              </button>

              <div className="w-px h-8 bg-white/20"></div>

              <button
                className={`flex flex-col items-center gap-1 transition-colors ${classIf(
                  camOk,
                  "text-gray-400 hover:text-gray-400",
                  "text-red-400 hover:text-red-300"
                )}`}
                onClick={toggleCamera}
              >
                <div className="items-center justify-center">
                  {isCameraEnabled ? (
                    <Video color="white" />
                  ) : (
                    <VideoOff color="red" />
                  )}
                </div>
                <span className="text-xs mt-2">Camera</span>
              </button>

              <div className="w-px h-8 bg-white/20"></div>

              <button
                className={`flex flex-col items-center gap-1 transition-colors text-gray-400 hover:text-gray-400`}
                onClick={() => onToggleHandRaise(currentUser)}
              >
                <div className="items-center justify-center">
                  {raisedHands[currentUser] ? (
                    <img
                      src="/images/icons/hand-active.svg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  ) : (
                    <Hand color="white" />
                  )}
                </div>
                <span className="text-xs mt-2">Hand</span>
              </button>

              <div className="w-px h-8 bg-white/20"></div>

              <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-400 transition-colors">
                <div className="items-center justify-center">
                  <BotMessageSquare color="white" />
                </div>
                <span className="text-xs mt-2">AI Worker</span>
              </button>

              <div className="w-px h-8 bg-white/20"></div>

              <button
                onClick={isScreenSharing ? stopScreenShare : startScreenShare}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  isScreenSharing
                    ? "text-green-400 hover:text-green-300"
                    : "text-gray-400 hover:text-gray-400"
                }`}
              >
                <div className="items-center justify-center">
                  {/* <Monitor color={isScreenSharing ? "#10b981" : "white"} /> */}
                  {isScreenSharing ? (
                    <img
                      src="/images/icons/screen-active.svg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  ) : (
                    <Monitor color={isScreenSharing ? "#10b981" : "white"} />
                  )}
                </div>
                <span className="text-xs mt-2">
                  {isScreenSharing ? "Present" : "Present"}
                </span>
              </button>

              <div className="w-px h-8 bg-white/20"></div>

              <button
                className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-400 transition-colors"
                onClick={() => onSendEmoji(currentUser)}
              >
                <div className="items-center justify-center">
                  <Smile color="white" />
                </div>
                <span className="text-xs mt-2">Emoji</span>
              </button>

              <div className="w-px h-8 bg-white/20"></div>

              <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-400 transition-colors">
                <div className="items-center justify-center">
                  <Users color="white" />
                </div>
                <span className="text-xs mt-2">Roles</span>
              </button>

              <div className="w-px h-8 bg-white/20"></div>

              <button
                {...disconnectButtonProps}
                onClick={handleEndCall}
                className="flex flex-col items-center gap-1 transition-colors text-gray-400 hover:text-gray-400"
              >
                <div className="items-center justify-center">
                  <PhoneOff color="white" />
                </div>
                <span className="text-xs mt-2">End Call</span>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="flex flex-col items-center gap-1 text-gray-400/60 hover:text-gray-400 transition-colors"
                onClick={onToggleSidebar}
              >
                <div className="flex items-center justify-center">
                  {/* <PanelLeftClose color="white" /> */}
                  {isSidebarOpen ? (
                    <img
                      src="/images/icons/sidebar-opened.svg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  ) : (
                    <img
                      src="/images/icons/sidebar-closed.svg"
                      alt=""
                      width={18}
                      height={18}
                    />
                  )}
                </div>
                <span className="text-xs mt-2">Sidebar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

/* ----------------- Mobile Controls (unchanged look) ----------------- */
const MobileConferenceControls = React.memo(
  ({
    onToggleHandRaise,
    currentUser,
    raisedHands,
    setActiveTab,
    activeTab,
    isBottomSheetOpen,
    setIsBottomSheetOpen,
    isMobileFull,
    setIsMobileFull,
  }: {
    onInvite: () => void;
    onToggleHandRaise: (username: string) => void;
    currentUser: string;
    raisedHands: { [key: string]: boolean };
    setActiveTab: (tab: string) => void;
    activeTab: string;
    setIsBottomSheetOpen: (isOpen: boolean) => void;
    isBottomSheetOpen?: boolean;
    isMobileFull: boolean;
    setIsMobileFull: (isFull: boolean) => void;
  }) => {
    const { flipCamera, facing } = useFlipCamera();

    return (
      <div className="px-2 pb-6">
        <div className="px-2 py-4">
          <div className="flex gap-2 justify-evenly items-center">
            <button
              className="flex flex-col items-center gap-1 text-gray-400/60 hover:text-gray-400 transition-colors"
              onClick={() => setIsMobileFull(!isMobileFull)}
            >
              <div className="flex items-center justify-center">
                <img
                  src="/images/icons/full-screen-hex.svg"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </button>
            <div className="w-px h-4 bg-white/20"></div>

            <button
              className="flex flex-col items-center gap-1 transition-colors text-white hover:text-gray-400"
              onClick={flipCamera}
              aria-label="Flip camera"
              title={
                facing === "user"
                  ? "Switch to back camera"
                  : "Switch to front camera"
              }
            >
              <div className="items-center justify-center">
                <img
                  src="/images/icons/turn-camera-hex.svg"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </button>
            <button
              className={`flex flex-col items-center gap-1 transition-colors ${
                raisedHands[currentUser]
                  ? "text-yellow-400 hover:text-yellow-500"
                  : "text-gray-400 hover:text-gray-400"
              }`}
              onClick={() => onToggleHandRaise(currentUser)}
            >
              <div className="items-center justify-center">
                {raisedHands[currentUser] ? (
                  <img
                    src="/images/icons/hand-active.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                ) : (
                  <img
                    src="/images/icons/raise-hand-hex.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                )}
              </div>
            </button>

            <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-400 transition-colors">
              <div className="items-center justify-center">
                <img
                  src="/images/icons/sound-hex.svg"
                  alt=""
                  width={40}
                  height={40}
                />{" "}
              </div>
            </button>
            <div className="w-px h-4 bg-white/20"></div>

            <button
              className="flex flex-col items-center gap-1 transition-colors text-gray-400 hover:text-gray-400"
              onClick={() => setIsBottomSheetOpen(true)}
            >
              <div className="items-center justify-center">
                {!isBottomSheetOpen ? (
                  <img
                    src="/images/icons/three-dots-hex.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                ) : (
                  <img
                    src="/images/icons/hex-options.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                )}
              </div>
            </button>
          </div>
        </div>
        {!isMobileFull && (
          <div className="flex border-b border-white/10">
            {mobileTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-2 py-3 text-xs font-medium transition-colors `}
              >
                <span
                  className={` ${classIf(
                    activeTab === tab,
                    "text-white border-b-3 border-green-400 mt-1 pb-[9px]",
                    "text-white/60 hover:text-white/80 mt-1"
                  )}`}
                >
                  {tab}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
);
const MobileTabBarControls = React.memo(
  ({
    onSendEmoji,
    currentUser,
    onInvite,
    showEmojiBar,
  }: {
    onSendEmoji: (username: string) => void;
    currentUser: string;
    onInvite: () => void;
    showEmojiBar: boolean;
  }) => {
    const {
      isMicrophoneEnabled,
      isCameraEnabled,
      toggleMicrophone,
      toggleCamera,
    } = useMediaControls();
    const { buttonProps: disconnectButtonProps } = useDisconnectButton({});
    const router = useRouter();

    const handleEndCall = async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disconnectButtonProps.onClick) await disconnectButtonProps.onClick(e);
      router.push("/sessions");
    };

    return (
      <div className="px-4 pb-[max(env(safe-area-inset-bottom),1rem)]">
        <div className="w-full rounded-2xl border border-white/10 bg-[#080B1680] backdrop-blur-md">
          {/* GRID that auto-fits items and wraps on tiny screens */}
          <div
            className="
            flex gap-3 p-3 overflow-x-auto snap-x no-scrollbar items-center
          "
          >
            {/* mic */}
            <button
              onClick={toggleMicrophone}
              className={`group flex h-12 w-full items-center justify-center rounded-xl  transition
           
            `}
              aria-label="Toggle microphone"
            >
              {isMicrophoneEnabled ? (
                <Mic color="white" size={22} />
              ) : (
                <MicOff color="red" size={22} />
              )}
            </button>
            <div className="w-px h-8 bg-white/20 "></div>
            {/* camera */}
            <button
              onClick={toggleCamera}
              className={`group flex h-12 w-full items-center justify-center rounded-xl  transition
             
            `}
              aria-label="Toggle camera"
            >
              {isCameraEnabled ? (
                <Video color="white" size={22} />
              ) : (
                <VideoOff color="red" size={22} />
              )}
            </button>
            <div className="w-px h-8 bg-white/20 "></div>

            {/* emoji */}
            <button
              onClick={() => onSendEmoji(currentUser)}
              className="flex h-12 w-full items-center justify-center rounded-xl transition"
              aria-label="Send emoji"
            >
              {showEmojiBar ? (
                <img
                  src="/images/icons/active-emoji-hex.svg"
                  alt=""
                  width={40}
                  height={40}
                />
              ) : (
                <Smile color="white" size={22} />
              )}
            </button>
            <div className="w-px h-8 bg-white/20 "></div>

            {/* invite */}
            <button
              onClick={onInvite}
              className="flex h-12 w-full items-center justify-center rounded-xl transition"
              aria-label="Invite link"
            >
              <Link color="white" size={22} />
            </button>
            <div className="w-px h-8 bg-white/20 "></div>

            {/* end call */}
            <button
              {...disconnectButtonProps}
              onClick={handleEndCall}
              className="flex h-12 w-full items-center justify-center rounded-xl transition"
              aria-label="End call"
            >
              <PhoneOff color="white" size={22} />
            </button>
          </div>
        </div>
      </div>
    );
  }
);
function MobileChipTile({
  participant,
  setFocusedIdentity,
  raisedHands,
}: {
  participant: Participant;
  setFocusedIdentity: (id: string | null) => void;
  raisedHands: { [key: string]: boolean };
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const tracks = useTracks([
    Track.Source.Camera,
    Track.Source.ScreenShare,
    Track.Source.Microphone,
  ]);

  /** Which video source to render (camera/screenshare) */
  const source: Track.Source | null = participant.isScreenShareEnabled
    ? Track.Source.ScreenShare
    : participant.isCameraEnabled
    ? Track.Source.Camera
    : null;
  const videoRefTrack = React.useMemo(() => {
    if (!source) return undefined;
    return tracks.find(
      (tr) =>
        tr.participant.identity === participant.identity && tr.source === source
    );
  }, [tracks, participant.identity, source]);

  React.useEffect(() => {
    const el = videoRef.current;
    // Use the correct type for mediaTrack
    const mediaTrack = videoRefTrack?.publication
      ?.track as unknown as MediaStreamTrack & {
      attach?: (element: HTMLVideoElement) => void;
      detach?: (element: HTMLVideoElement) => void;
    };
    if (!el || !mediaTrack || typeof mediaTrack.attach !== "function") return;
    mediaTrack.attach(el);
    return () => {
      if (typeof mediaTrack.detach === "function") {
        mediaTrack.detach(el);
      }
    };
  }, [videoRefTrack?.publication?.track]);

  /** Find this participant's mic track (for speaking state) */
  const micRef = React.useMemo(
    () =>
      tracks.find(
        (tr) =>
          tr.participant.identity === participant.identity &&
          tr.source === Track.Source.Microphone
      ),
    [tracks, participant.identity]
  );

  /** Speaking state with a tiny decay to avoid flicker */
  const [isTalking, setIsTalking] = React.useState(false);
  React.useEffect(() => {
    const p = micRef?.participant;
    if (!p) return;

    let offTimer: ReturnType<typeof setTimeout> | undefined;
    const handleSpeaking = () => {
      if (p.isSpeaking) {
        // immediate on
        if (offTimer) clearTimeout(offTimer);
        setIsTalking(true);
      } else {
        // delay turning off a touch to reduce flicker
        offTimer = setTimeout(() => setIsTalking(false), 180);
      }
    };

    // set initial
    handleSpeaking();

    p.on(ParticipantEvent.IsSpeakingChanged, handleSpeaking);
    return () => {
      p.off(ParticipantEvent.IsSpeakingChanged, handleSpeaking);
      if (offTimer) clearTimeout(offTimer);
    };
  }, [micRef?.participant]);

  const initials = participant.identity.slice(0, 2).toUpperCase();
  const isMicEnabled = !participant.isMicrophoneEnabled === false;
  const isCameraEnabled = !participant.isCameraEnabled === false;

  return (
    <div
      className={[
        "relative rounded-xl shadow-lg",
        isTalking
          ? "p-[2px] bg-[linear-gradient(90deg,#14FF00_55%,#00F0FF_62%)]"
          : "border border-white/20",
      ].join(" ")}
      onClick={() => {
        window.pinParticipant?.(participant.identity);
        setFocusedIdentity(participant.identity);
      }}
    >
      <div className="flex min-w-[130px] max-w-[130px] h-[140px] rounded-xl bg-black">
        {/* Inner content container (sits inside the border) */}
        <div className="relative flex-1 rounded-[10px] overflow-hidden bg-black/20">
          {/* camera off */}
          {!isCameraEnabled && (
            <div className="absolute left-2 top-1 z-10">
              <VideoOff size={20} color="gray" />
            </div>
          )}

          {/* hand raised */}
          {raisedHands?.[participant.identity] && (
            <div className="absolute left-1/2 -translate-x-1/2 top-1 z-10">
              <Hand color="gray" size={20} />
            </div>
          )}

          {/* mic off */}
          {!isMicEnabled && (
            <div className="absolute right-2 top-1 z-10">
              <MicOff size={20} color="gray" />
            </div>
          )}

          {/* video or avatar (now inside inner wrapper) */}
          {videoRefTrack?.publication?.track ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted={participant.isLocal}
              className="absolute inset-0 w-full h-full object-cover custom-video"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <HexAvatar initials={initials} size={84} fontSize={24} />
            </div>
          )}

          {/* screenshare badge */}
          {source === Track.Source.ScreenShare && (
            <div className="absolute top-1 right-1 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center shadow-lg z-10">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M3 5h18v12H3z" stroke="white" strokeWidth="2" />
                <path d="M8 19h8" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          )}

          {/* name chip */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
            <div className="px-3 py-1 rounded-xl bg-black/40 border border-white/10 text-[11px] leading-none text-white/90 max-w-[90%] truncate">
              {participant.identity}
              {participant.isLocal && " (You)"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------- Page ----------------- */
export default function SessionPage() {
  // Emoji bar state
  const [showEmojiBar, setShowEmojiBar] = React.useState(false);
  // Track when the user joined the session
  const [meetingStart, setMeetingStart] = React.useState<number | null>(null);
  const [meetingDuration, setMeetingDuration] =
    React.useState<string>("00:00:00");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [token, setToken] = React.useState<string | null>(null);
  const [roomName, setRoomName] = React.useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [participants, setParticipants] = React.useState<Participant[]>([]);
  const [currentUser, setCurrentUser] = React.useState<string>("");
  const [focusedIdentity, setFocusedIdentity] = React.useState<string | null>(
    null
  );
  // const [currentTime, setCurrentTime] = React.useState<string>("");
  const [isBottomSheetOpen, setIsBottomSheetOpen] =
    React.useState<boolean>(false);

  const [activeEmojis, setActiveEmojis] = React.useState<{
    [key: string]: { emoji: string; timestamp: number; username: string };
  }>({});
  // For hand raise overlays
  const [activeHands, setActiveHands] = React.useState<{
    [key: string]: { timestamp: number; username: string };
  }>({});
  const [raisedHands, setRaisedHands] = React.useState<{
    [key: string]: boolean;
  }>({});
  const [chatMessages, setChatMessages] = React.useState<
    { message: string; timestamp: number; username: string }[]
  >([]);

  const [nameModalOpen, setNameModalOpen] = React.useState(false);
  const [isMobileFull, setIsMobileFull] = React.useState(false);
  const [userNameInput, setUserNameInput] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [activeTab, setActiveTab] = React.useState("Session");
  const [showSideRail, setShowSideRail] = React.useState(true);

  const emojis = React.useMemo(
    () => [
      "😀",
      "😂",
      "😍",
      "🤔",
      "😮",
      "👍",
      "👏",
      "❤️",
      "🔥",
      "💯",
      "😎",
      "🎉",
      "😊",
      "👋",
      "💪",
    ],
    []
  );

  const sendEmoji = React.useCallback(
    (username: string, emoji?: string) => {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      const timestamp = Date.now();
      setActiveEmojis((prev) => ({
        ...prev,
        [username]: { emoji: emoji ? emoji : randomEmoji, timestamp, username },
      }));
      window.sendEmojiToAll?.(emoji ? emoji : randomEmoji, username);
      setTimeout(() => {
        setActiveEmojis((prev) => {
          const next = { ...prev };
          delete next[username];
          return next;
        });
      }, 3000);
    },
    [emojis]
  );

  const handleEmojiReceived = React.useCallback(
    (data: { emoji: string; timestamp: number; username: string }) => {
      setActiveEmojis((prev) => ({ ...prev, [data.username]: data }));
      setTimeout(() => {
        setActiveEmojis((prev) => {
          const next = { ...prev };
          delete next[data.username];
          return next;
        });
      }, 3000);
    },
    []
  );

  const toggleHandRaise = React.useCallback((username: string) => {
    setRaisedHands((prev) => {
      const newState = !prev[username];
      const next = { ...prev, [username]: newState };
      window.sendHandRaiseToAll?.(username, newState);
      return next;
    });
  }, []);

  const handleHandRaiseReceived = React.useCallback(
    (data: { username: string; isRaised: boolean }) => {
      setRaisedHands((prev) => ({ ...prev, [data.username]: data.isRaised }));
      if (data.isRaised) {
        const timestamp = Date.now();
        setActiveHands((prev) => ({
          ...prev,
          [data.username]: { timestamp, username: data.username },
        }));
        setTimeout(() => {
          setActiveHands((prev) => {
            const next = { ...prev };
            delete next[data.username];
            return next;
          });
        }, 3000);
      }
    },
    []
  );

  const sendChatMessage = React.useCallback(
    (message: string) => {
      const timestamp = Date.now();
      const chatData = { message, timestamp, username: currentUser };
      setChatMessages((prev) => [...prev, chatData]);
      window.sendChatToAll?.(message, currentUser);
    },
    [currentUser]
  );

  const handleChatReceived = React.useCallback(
    (data: { message: string; timestamp: number; username: string }) =>
      setChatMessages((prev) => [...prev, data]),
    []
  );

  // Set meeting start time when token is received (joined session)
  React.useEffect(() => {
    if (token && !meetingStart) {
      setMeetingStart(Date.now());
    }
  }, [token, meetingStart]);

  // Update meeting duration every second
  React.useEffect(() => {
    if (!meetingStart) return;
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - meetingStart) / 1000);
      const hours = Math.floor(elapsed / 3600)
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((elapsed % 3600) / 60)
        .toString()
        .padStart(2, "0");
      const seconds = (elapsed % 60).toString().padStart(2, "0");
      setMeetingDuration(`${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, [meetingStart]);

  React.useEffect(() => {
    const local = participants.find((p) => p.isLocal);
    if (local) setCurrentUser((local as Participant).identity);
  }, [participants]);

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const nameFromUrl = urlParams.get("name");
    if (!nameFromUrl) {
      setNameModalOpen(true);
      return;
    }
    setCurrentUser(nameFromUrl);
    const roomFromUrl = urlParams.get("room");
    const currentRoom =
      roomFromUrl || `room-${Math.random().toString(36).slice(2, 8)}`;
    setRoomName(currentRoom);
    (async () => {
      try {
        const res = await fetch(
          `/api/livekit-token?room=${currentRoom}&identity=${nameFromUrl}`
        );
        if (!res.ok) throw new Error(`Token fetch failed: ${res.status}`);
        const data = await res.json();
        setToken(data.token);
      } catch (err) {
        console.error("Failed to fetch livekit token:", err);
        toast.error("Unable to join session. Please try again.");
        setNameModalOpen(true);
      }
    })();
  }, []);

  const handleNameSubmit = async () => {
    if (!userNameInput.trim()) {
      setNameError("Name is required");
      return;
    }
    setCurrentUser(userNameInput.trim());
    setNameModalOpen(false);
    const urlParams = new URLSearchParams(window.location.search);
    const roomFromUrl = urlParams.get("room");
    const currentRoom =
      roomFromUrl || `room-${Math.random().toString(36).slice(2, 8)}`;
    setRoomName(currentRoom);
    try {
      const res = await fetch(
        `/api/livekit-token?room=${currentRoom}&identity=${userNameInput.trim()}`
      );
      if (!res.ok) throw new Error(`Token fetch failed: ${res.status}`);
      const data = await res.json();
      setToken(data.token);
    } catch (err) {
      console.error("Failed to fetch livekit token on join:", err);
      setNameError("Unable to join session. Please try again.");
      toast.error("Unable to join session. Please try again.");
    }
  };
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages.length]);
  const [inputMessage, setInputMessage] = React.useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      sendChatMessage(inputMessage.trim());
      setInputMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  function getFormattedDate() {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString("default", { month: "long" });
    const year = now.getFullYear();
    function ordinal(n: number) {
      if (n > 3 && n < 21) return "th";
      switch (n % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }
    return `${day}${ordinal(day)} ${month} ${year}`;
  }
  function useIsDesktop() {
    const [isDesktop, setIsDesktop] = React.useState(false);
    React.useEffect(() => {
      const m = window.matchMedia("(min-width: 768px)");
      const update = () => setIsDesktop(m.matches);
      update();
      m.addEventListener("change", update);
      return () => m.removeEventListener("change", update);
    }, []);
    return isDesktop;
  }
  const isDesktop = useIsDesktop();

  const handleToggleSideRail = React.useCallback(
    () => setShowSideRail((prev) => !prev),
    []
  );
  const didRun = React.useRef(false);
  React.useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;
    // init only – DO NOT call onToggleSideRail here
  }, []);

  React.useEffect(() => {
    const onResize = () => {
      /* no implicit toggles here */
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  React.useEffect(() => {
    console.log("[showSideRail]", showSideRail);
  }, [showSideRail]);

  React.useEffect(() => {
    if (isDesktop) {
      setIsMobileFull(false);
    } else {
      setIsSidebarOpen(false);
    }
  }, [isDesktop]);

  return (
    <div
      className={`${
        !isMobileFull && "md:p-8 bg-[#080B16] min-h-screen flex flex-col"
      } md:p-8 md:bg-[#080B16] md:max-h-screen md:flex md:flex-col relative`}
    >
      {isDesktop ? (
        <img
          src="/images/onboarding/bg.png"
          alt="background"
          className="bg-image absolute left-0 bottom-0 w-full h-full"
        />
      ) : (
        <img
          src="/images/onboarding/background-green.png"
          alt="background"
          className="bg-image absolute left-0 bottom-0 w-full h-full"
        />
      )}

      {/* Name Input Modal */}
      {nameModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(255,255,255,0.1)] backdrop-blur-[30px]">
          <div className="bg-[#1e2328] border border-white/20 rounded-xl max-w-md w-full mx-6 relative p-8 flex flex-col items-center">
            <h2 className="text-white text-lg font-medium mb-2">
              Enter Your Name
            </h2>
            <p className="text-white/70 text-sm mb-6 text-center">
              Please enter your name before joining the session.
            </p>
            <input
              type="text"
              value={userNameInput}
              onChange={(e) => {
                setUserNameInput(e.target.value);
                setNameError("");
              }}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black/30 text-white mb-2 focus:outline-none focus:border-green-400"
            />
            {nameError && (
              <span className="text-red-400 text-sm mb-2">{nameError}</span>
            )}
            <button
              className="w-full mt-2 flex items-center justify-center gap-2 text-lg px-6 py-3 font-semibold rounded-[16px] bg-gradient-to-r from-green-400/30 to-cyan-400/30 border border-green-400/40 text-white shadow hover:from-green-400/50 hover:to-cyan-400/50 transition"
              onClick={handleNameSubmit}
            >
              Join Session
            </button>
          </div>
        </div>
      )}

      <div
        className={`w-full flex flex-col md:bg-[#0D101B] md:border md:border-[rgba(255,255,255,0.1)] rounded-[20px] md:backdrop-blur-[32px] relative transition-all duration-300 ${
          isSidebarOpen ? "pr-120" : ""
        } flex-1 min-h-0`}
      >
        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="absolute right-0 top-0 bottom-0 w-120 z-30 rounded-r-[20px] overflow-hidden border-l border-white/10 bg-[#0D101B] md:h-[92vh]">
            <Sidebar
              participants={participants}
              roomName={roomName}
              raisedHands={raisedHands}
              chatMessages={chatMessages}
              onSendMessage={sendChatMessage}
            />
          </div>
        )}
        {isModalOpen && (
          <div className="absolute inset-0 flex items-center justify-center z-100 bg-black/50">
            <div className="bg-[#1e2328] border border-white/20 rounded-xl max-w-md w-full mx-2 relative">
              <div className="flex items-center p-4">
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute right-4 w-6 h-6 flex items-center justify-center text-white/60 hover:text-white"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1l12 12M1 13L13 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <h2 className="text-white text-lg font-medium">
                  Your Session is ready
                </h2>
              </div>
              {/* divider */}
              <div className="border-b border-white/10 mb-4"></div>
              <div className="p-4">
                <p className="text-white/70 text-sm sm:mb-6 mb-3 leading-relaxed">
                  Send this link to people you want to invite to the Session.{" "}
                  <br /> Don&apos;t forget to save the link, so you can use it
                  later.
                </p>
                <div className="flex items-center sm:gap-3 gap-1 p-2 bg-[#0f1419] rounded-lg border border-white/10">
                  <Link
                    color="white"
                    className="sm:w-auto sm:h-auto w-[15px] h-[15px] mr-[3px]"
                  />
                  <input
                    value={`${window.location.origin}/conference?room=${roomName}`}
                    readOnly
                    className="text-white text-sm flex-1 font-mono "
                  />

                  <button
                    className="p-1 hover:bg-white/10 rounded"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${window.location.origin}/conference?room=${roomName}`
                      );
                      toast.success("Copied to clipboard", {
                        style: {
                          width: "200px",
                        },
                      });
                    }}
                  >
                    <Copy
                      color="white"
                      className="sm:w-auto sm:h-auto w-[15px] h-[15px]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* LiveKit Video Area */}
        {token ? (
          <LiveKitRoom
            token={token}
            serverUrl={LIVEKIT_CONFIG.serverUrl}
            connect
            video
            audio
            style={{ height: "fit-content!important" }}
          >
            <div className="hidden md:flex items-center justify-between px-6 py-4 text-white mb-2 mt-3">
              {/* Left: Duration */}
              <div className="flex items-center gap-2 ml-4">
                <div className="w-4 h-4 flex items-center justify-center">
                  <Clock color="white" />
                </div>
                <span className="text-sm font-medium">{meetingDuration}</span>
              </div>

              {/* Divider */}
              <span className="mx-6 text-gray-400">|</span>

              {/* Middle: Waveform */}
              <div className="flex items-center h-8">
                <LiveWaveform />
              </div>

              {/* Divider */}
              <span className="mx-6 text-gray-400">|</span>

              {/* Right: Date */}
              <div className="flex items-center gap-2 mr-4">
                <div className="w-4 h-4 flex items-center justify-center">
                  <Calendar color="white" />
                </div>
                <span className="text-sm font-medium">
                  {getFormattedDate()}
                </span>
              </div>
            </div>
            <div className="flex-1  relative mx-0 md:mx-6 md:mb-6 mb-0">
              <div className="w-full md:border md:border-white/20 relative overflow-hidden rounded-2xl sm:h-[80vh] h-screen">
                <ShowSideRailProvider>
                  {isDesktop ? (
                    <CustomVideoTiles
                      activeEmojis={activeEmojis}
                      activeHands={activeHands}
                      showSideRail={showSideRail}
                      onToggleSideRail={handleToggleSideRail}
                      focusedIdentity={focusedIdentity}
                      setFocusedIdentity={setFocusedIdentity}
                    />
                  ) : (
                    <>
                      {activeTab === "Session" && (
                        <>
                          <CustomVideoTiles
                            activeEmojis={activeEmojis}
                            activeHands={activeHands}
                            isMobileFull={isMobileFull}
                            focusedIdentity={focusedIdentity}
                            setFocusedIdentity={setFocusedIdentity}
                          />
                        </>
                      )}
                      <div className="">
                        {activeTab === "People" && (
                          <>
                            <div className="bg-[rgba(255,255,255,0.02)] rounded-[20px] border border-[rgba(255,255,255,0.1)] backdrop-blur-[32px] p-2 mb-4 max-h-[56vh] overflow-auto mt-38">
                              {participants && participants.length > 0 ? (
                                participants.map((participant) => {
                                  const p = participant as Participant;
                                  const initials = p.identity
                                    .slice(0, 2)
                                    .toUpperCase();
                                  const isLocal = p.isLocal;
                                  const isMicEnabled =
                                    !p.isMicrophoneEnabled === false;
                                  const isCameraEnabled =
                                    !p.isCameraEnabled === false;

                                  return (
                                    <div
                                      key={p.sid}
                                      className="flex items-center gap-3 p-3 rounded-lg"
                                    >
                                      <HexAvatar
                                        initials={initials}
                                        size={32}
                                        fontSize={12}
                                      />

                                      <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                          <p className="text-white text-sm font-medium">
                                            {p.identity} {isLocal && "(Host)"}
                                          </p>
                                          {raisedHands[p.identity] && (
                                            <Hand
                                              size={16}
                                              color="#fbbf24"
                                              className="animate-pulse"
                                            />
                                          )}
                                        </div>
                                      </div>
                                      <div className="flex gap-5 mr-4">
                                        <div className="w-5 h-5 rounded-full flex items-center justify-center">
                                          {isMicEnabled ? (
                                            <Mic size={24} color="white" />
                                          ) : (
                                            <MicOff size={24} color="white" />
                                          )}
                                        </div>
                                        <div className="w-5 h-5 rounded-full flex items-center justify-center">
                                          {isCameraEnabled ? (
                                            <Video size={24} color="white" />
                                          ) : (
                                            <VideoOff size={24} color="white" />
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })
                              ) : (
                                <p className="text-white/60 text-sm">
                                  No participants yet
                                </p>
                              )}
                            </div>
                            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-8">
                              <button
                                className="w-full grid grid-cols-[1fr_auto_1fr] items-center
                                bg-[#0f1419] rounded-lg border border-white/10 shadow
                                focus:outline-none focus:ring-2 focus:ring-red-400 transition
                                "
                                onClick={() => {
                                  navigator.clipboard.writeText(
                                    `${window.location.origin}/conference?room=${roomName}`
                                  );
                                  toast.success("Copied to clipboard", {
                                    style: {
                                      width: "200px",
                                    },
                                  });
                                }}
                              >
                                {/* left spacer to balance the right icon */}
                                <span />

                                {/* centered label */}
                                <span className="justify-self-center text-white font-mono text-base text-center p-4 mr-8 flex items-center gap-3">
                                  <Link />
                                  Share Session Link
                                </span>

                                {/* right icon block */}
                                <span className="flex items-center justify-self-end">
                                  <span className="w-px h-14 bg-white/20 mx-2" />
                                  <div className="p-4 mr-2">
                                    <svg
                                      width="22"
                                      height="22"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="white"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <rect
                                        x="9"
                                        y="9"
                                        width="13"
                                        height="13"
                                        rx="2"
                                      />
                                      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
                                    </svg>
                                  </div>
                                </span>
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                      {activeTab === "Chat" && (
                        <div className="md:hidden relative px-3 mb-4 mt-33">
                          {/* Grid: scroll area + sticky input row */}
                          <div className="grid grid-rows-[1fr_auto] h-[calc(100svh-140px)] overflow-y-auto space-y-3 min-h-0 ">
                            {/* 👆 140px = approx top controls + tab bar; tweak to your UI */}

                            {/* Scrollable messages */}
                            <div className="overflow-y-auto min-h-0 space-y-3 py-3 pr-1">
                              {chatMessages.length > 0 ? (
                                chatMessages.map((msg, index) => (
                                  <div
                                    className="flex gap-3 ml-2 mr-2 items-center"
                                    key={index}
                                  >
                                    <HexAvatar
                                      initials={msg.username
                                        .split(" ")
                                        .map((w) => w[0])
                                        .join("")
                                        .toUpperCase()
                                        .slice(0, 2)}
                                    />
                                    <div
                                      className="
                  bg-white/5 rounded-lg p-3 border border-white/10 w-fit
                  max-w-[85%] sm:max-w-[75%]
                  whitespace-pre-wrap break-words
                "
                                    >
                                      <p className="text-white/80 text-sm">
                                        {msg.message}
                                      </p>
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <p className="text-white/60 text-sm text-center py-8">
                                  No messages yet. Start the conversation!
                                </p>
                              )}
                              {/* <div ref={messagesEndRef} /> */}
                            </div>

                            {/* Sticky input (not fixed) so layout reserves space */}
                            <div
                              className="
                                sticky bottom-0 z-10
                                bg-[#080B16]/70 backdrop-blur
                              "
                            >
                              <div className="flex gap-2">
                                <input
                                  type="text"
                                  value={inputMessage}
                                  onChange={(e) =>
                                    setInputMessage(e.target.value)
                                  }
                                  onKeyPress={handleKeyPress}
                                  placeholder="Type here..."
                                  className="flex-1 w-full bg-[#080B1680] border border-white/20 rounded-lg px-3 py-4 text-white text-sm placeholder-white/50 focus:outline-none "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === "Transcript" && (
                        <div className="mt-[200px] p-3">
                          <InfoTab type="Transcript" />
                        </div>
                      )}
                      {activeTab === "Summary" && (
                        <div className="mt-[200px] p-3">
                          <InfoTab type="Summary" />
                        </div>
                      )}
                    </>
                  )}
                </ShowSideRailProvider>
                <div
                  className="md:hidden fixed top-0 left-0 right-0 z-40
             backdrop-blur
             pt-[env(safe-area-inset-top)]
             bg-gradient-to-b from-black/80 to-transparent"
                >
                  <MobileConferenceControls
                    onInvite={() => setIsModalOpen(true)}
                    onToggleHandRaise={toggleHandRaise}
                    currentUser={currentUser}
                    raisedHands={raisedHands}
                    setActiveTab={setActiveTab}
                    activeTab={activeTab}
                    setIsBottomSheetOpen={setIsBottomSheetOpen}
                    isBottomSheetOpen={isBottomSheetOpen}
                    setIsMobileFull={setIsMobileFull}
                    isMobileFull={isMobileFull}
                  />
                </div>
                <ParticipantProvider onParticipantsChange={setParticipants} />
                <RealtimeMessaging
                  onEmojiReceived={handleEmojiReceived}
                  onHandRaiseReceived={handleHandRaiseReceived}
                  onChatReceived={handleChatReceived}
                />

                {/* Desktop controls */}

                {/* Emoji Bar (desktop) */}
                {showEmojiBar && (
                  <div className="absolute left-1/2 bottom-28 md:bottom-35 -translate-x-1/2 z-50 flex justify-center w-auto pointer-events-none">
                    <div className="bg-[#080B1680] px-6 py-3 flex items-center gap-4 rounded-[10px] shadow-lg animate-fade-in-up pointer-events-auto border border-[#FFFFFF1A]">
                      {["👋", "👍", "❤️", "😂", "😎", "💩"].map((emoji, i) => (
                        <button
                          key={i}
                          className="text-3xl hover:scale-110 transition"
                          onClick={() => {
                            setShowEmojiBar(false);
                            sendEmoji(currentUser, emoji);
                          }}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <div className="absolute 2xl:bottom-[20px] sm:bottom-[15px] bottom-0 left-0 right-0 hidden md:block">
                  <ConferenceControls
                    onInvite={() => setIsModalOpen(true)}
                    onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                    onSendEmoji={() => setShowEmojiBar((v) => !v)}
                    onToggleHandRaise={toggleHandRaise}
                    currentUser={currentUser}
                    raisedHands={raisedHands}
                    isSidebarOpen={isSidebarOpen}
                    isSideRail={showSideRail}
                  />
                </div>
                <div className="md:hidden h-[72px]" />

                {/* Mobile participant chips */}
                {activeTab === "Session" &&
                  participants &&
                  participants.length > 0 && (
                    <div className="absolute bottom-1 left-0 right-0 z-20 block md:hidden px-3 pb-2">
                      <div
                        className={`flex gap-3 overflow-x-auto scrollbar-hide ${
                          participants.length <= 2 &&
                          "items-center justify-center"
                        }`}
                      >
                        {participants.map((p) => {
                          const participant = p as Participant;
                          return (
                            <>
                              <MobileChipTile
                                key={participant.sid}
                                participant={participant}
                                setFocusedIdentity={setFocusedIdentity}
                                raisedHands={raisedHands}
                              />
                            </>
                          );
                        })}
                      </div>
                      <div className="items-center justify-center flex h-[80px]">
                        <LiveWaveform />
                      </div>
                      <div className="items-center justify-center">
                        <MobileTabBarControls
                          // onSendEmoji={sendEmoji}
                          currentUser={currentUser}
                          onInvite={() => setIsModalOpen(true)}
                          onSendEmoji={() => setShowEmojiBar((v) => !v)}
                          showEmojiBar={showEmojiBar}
                        />
                      </div>
                    </div>
                  )}
                {/* Desktop View Full Screen */}
                {!showSideRail && participants && participants.length > 0 && (
                  <div
                    className={`absolute ${
                      showSideRail ? "bottom-28" : "bottom-32"
                    }  left-0 right-0 z-20 px-3 pb-2 hidden md:block`}
                  >
                    <div
                      className={`flex gap-3 overflow-x-auto scrollbar-hide ${
                        participants.length <= 2 &&
                        "items-center justify-center"
                      }`}
                    >
                      {participants.map((p) => {
                        const participant = p as Participant;
                        if (participant.isLocal) return null;
                        return (
                          <div
                            key={participant.sid}
                            className="backdrop-blur-[16px] bg-white/10 border border-white/20 rounded-xl flex flex-col items-center min-w-[130px] max-w-[130px] h-[140px] shadow-lg justify-center text-center flex-none"
                          >
                            <HexAvatar
                              initials={participant.identity
                                .slice(0, 2)
                                .toUpperCase()}
                              size={84}
                              fontSize={24}
                            />
                            <span className="text-white text-xs font-medium mt-1 truncate max-w-[100px] text-center">
                              {participant.identity}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                {/* Mobile bottom bar */}
                {/* {activeTab === "Session" && (
                 
                )} */}
              </div>
            </div>
            <LiveKitBottomSheet
              open={isBottomSheetOpen}
              onClose={() => setIsBottomSheetOpen(false)}
              meetingDuration={meetingDuration}
              onInvite={() => {
                setIsModalOpen(true);
                setIsBottomSheetOpen(false);
              }}
            />
          </LiveKitRoom>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white text-lg animate-pulse">
              Joining session...
            </div>
          </div>
        )}
        {/* </div>
        </div> */}

        {/* Bottom Control Bar - Only show when not connected */}
        {!token && (
          <div className="px-6 pb-6">
            <div className="px-2 py-4">
              <div className="flex items-center justify-center">
                <div className="text-white/50 text-sm">
                  Connecting to session...
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* End button for mobile */}
    </div>
  );
}
