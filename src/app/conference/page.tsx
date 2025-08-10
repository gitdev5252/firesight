"use client";
import { BotMessageSquare, Calendar, Clock, Copy, Hand, Link, Mic, Monitor, PanelLeftClose, PhoneOff, Smile, Users, Video, MicOff, VideoOff } from "lucide-react";
import React, { useEffect } from "react";
import {
  LiveKitRoom,
  useDisconnectButton,
  useParticipants,
  useLocalParticipant,
  useDataChannel,
} from "@livekit/components-react";
import "@livekit/components-styles"; // Required styles
import { LIVEKIT_CONFIG } from "@/lib/livekit/config";
import { CustomVideoTiles } from "@/components/conference/CustomVideoTiles";
import { useMediaControls } from "@/hooks/useMediaControls";

// Sidebar Component
const Sidebar = ({ participants, roomName, raisedHands, chatMessages, onSendMessage }: { 
  participants?: unknown[], 
  roomName: string, 
  raisedHands: {[key: string]: boolean},
  chatMessages: {message: string, timestamp: number, username: string}[],
  onSendMessage: (message: string) => void
}) => {
  const [activeTab, setActiveTab] = React.useState("People");
  const tabs = ["People", "Chat", "Transcript", "Summary", "Prompts"];

  return (
    <div className="h-full flex flex-col">
      {/* Tabs - moved to top without header */}
      <div className="flex border-b border-white/10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-2 py-3 text-xs font-medium transition-colors ${activeTab === tab
              ? "text-white border-b-2 border-green-500 bg-white/5"
              : "text-white/60 hover:text-white/80"
              }`}
          >
            {tab}
          </button>
        ))}

      </div>

      {/* Tab Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {activeTab === "People" && <PeopleTab participants={participants} roomName={roomName} raisedHands={raisedHands} />}
        {activeTab === "Chat" && <ChatTab messages={chatMessages} onSendMessage={onSendMessage} />}
        {activeTab === "Transcript" && <TranscriptTab />}
        {activeTab === "Summary" && <SummaryTab />}
        {activeTab === "Prompts" && <PromptsTab />}
      </div>
    </div>
  );
};

// Tab Components
type Participant = {
  identity: string;
  isLocal: boolean;
  isMicrophoneEnabled: boolean;
  isCameraEnabled: boolean;
  sid: string;
};

const PeopleTab = ({ participants, roomName, raisedHands }: { participants?: unknown[], roomName: string, raisedHands: {[key: string]: boolean} }) => {
  console.log('PeopleTab raisedHands:', raisedHands);
  console.log('PeopleTab participants:', participants);
  
  return (
    <div className="h-screen mt-8">
      <div className="bg-[rgba(255,255,255,0.02)] rounded-[20px] border border-[rgba(255,255,255,0.1)] backdrop-blur-[32px] p-2 mb-4 h-[70%]">
        {participants && participants.length > 0 ? (
          participants.map((participant) => {
            const p = participant as Participant;
            const initials = p.identity.slice(0, 2).toUpperCase();
            const isLocal = p.isLocal;
            const isMicEnabled = !p.isMicrophoneEnabled === false;
            const isCameraEnabled = !p.isCameraEnabled === false;

            return (
              <div key={p.sid} className="flex items-center gap-3 p-3 rounded-lg mb-2 ">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {initials}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-white text-sm font-medium">
                      {p.identity} {isLocal && "(Host)"}
                    </p>
                    {(() => {
                      console.log(`Checking hand for ${p.identity}:`, raisedHands[p.identity]);
                      return raisedHands[p.identity] && (
                        <Hand size={16} color="#fbbf24" className="animate-pulse" />
                      );
                    })()}
                  </div>
                </div>
                <div className="flex gap-5 mr-4">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center`}>
                    {isMicEnabled ? <Mic size={24} color="white" /> : <MicOff size={24} color="white" />}
                  </div>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center `}>
                    {isCameraEnabled ? <Video size={24} color="white" /> : <VideoOff size={24} color="white" />}
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
        <span className="text-white/80 text-sm flex-1 font-mono">
          {`${window.location.origin}/conference?room=${roomName}`}
        </span>
        <button
          className="p-1 hover:bg-white/10 rounded"
          onClick={() => {
            navigator.clipboard.writeText(`${window.location.origin}/conference?room=${roomName}`);
          }}
        >
          <Copy color="white" />
        </button>
      </div>
    </div>
  );
};

const ChatTab = ({ messages, onSendMessage }: { 
  messages: {message: string, timestamp: number, username: string}[], 
  onSendMessage: (message: string) => void 
}) => {
  const [inputMessage, setInputMessage] = React.useState("");
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages container */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-3">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="flex items-center justify-between mb-1">
                <span className="text-white/90 text-sm font-medium">{msg.username}</span>
                <span className="text-white/50 text-xs">{formatTime(msg.timestamp)}</span>
              </div>
              <p className="text-white/80 text-sm">{msg.message}</p>
            </div>
          ))
        ) : (
          <p className="text-white/60 text-sm text-center py-8">No messages yet. Start the conversation!</p>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-white/10 pt-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:opacity-50 text-white rounded-lg text-sm font-medium transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

const TranscriptTab = () => (
  <div>
    <p className="text-white/60 text-sm">Transcript will appear here when the session starts...</p>
  </div>
);

const SummaryTab = () => (
  <div>
    <p className="text-white/60 text-sm">Session summary will be generated automatically...</p>
  </div>
);

const PromptsTab = () => (
  <div>
    <p className="text-white/60 text-sm">AI prompts and suggestions will appear here...</p>
  </div>
);

// Component to handle real-time messaging for emojis and hand raises
const RealtimeMessaging = ({ 
  onEmojiReceived, 
  onHandRaiseReceived,
  onChatReceived 
}: { 
  onEmojiReceived: (data: {emoji: string, timestamp: number, username: string}) => void;
  onHandRaiseReceived: (data: {username: string, isRaised: boolean}) => void;
  onChatReceived: (data: {message: string, timestamp: number, username: string}) => void;
}) => {
  const { localParticipant } = useLocalParticipant();
  
  // Data channel for emojis
  const { send: sendEmojiData } = useDataChannel('emoji', (message) => {
    const data = JSON.parse(new TextDecoder().decode(message.payload));
    onEmojiReceived(data);
  });

  // Data channel for hand raises
  const { send: sendHandData } = useDataChannel('hand-raise', (message) => {
    const data = JSON.parse(new TextDecoder().decode(message.payload));
    onHandRaiseReceived(data);
  });

  // Data channel for chat messages
  const { send: sendChatData } = useDataChannel('chat', (message) => {
    const data = JSON.parse(new TextDecoder().decode(message.payload));
    onChatReceived(data);
  });

  // Expose send functions globally
  React.useEffect(() => {
    if (localParticipant) {
      (window as unknown as { sendEmojiToAll?: (emoji: string, username: string) => void }).sendEmojiToAll = (emoji: string, username: string) => {
        const data = { emoji, timestamp: Date.now(), username };
        sendEmojiData(new TextEncoder().encode(JSON.stringify(data)), { reliable: true });
      };

      (window as unknown as { sendHandRaiseToAll?: (username: string, isRaised: boolean) => void }).sendHandRaiseToAll = (username: string, isRaised: boolean) => {
        const data = { username, isRaised };
        sendHandData(new TextEncoder().encode(JSON.stringify(data)), { reliable: true });
      };

      (window as unknown as { sendChatToAll?: (message: string, username: string) => void }).sendChatToAll = (message: string, username: string) => {
        const data = { message, timestamp: Date.now(), username };
        sendChatData(new TextEncoder().encode(JSON.stringify(data)), { reliable: true });
      };
    }
  }, [localParticipant, sendEmojiData, sendHandData, sendChatData]);

  return null;
};

// Component to bridge LiveKit context with sidebar
const ParticipantProvider = ({ onParticipantsChange }: { onParticipantsChange: (participants: unknown[]) => void }) => {
  const participants = useParticipants();

  React.useEffect(() => {
    onParticipantsChange(participants);
  }, [participants, onParticipantsChange]);

  return null;
};
const ConferenceControls = ({ onInvite, onToggleSidebar, onSendEmoji, onToggleHandRaise, currentUser, raisedHands }: { 
  onInvite: () => void; 
  onToggleSidebar: () => void;
  onSendEmoji: (username: string) => void;
  onToggleHandRaise: (username: string) => void;
  currentUser: string;
  raisedHands: {[key: string]: boolean};
}) => {
  const {
    isMicrophoneEnabled,
    isCameraEnabled,
    toggleMicrophone,
    toggleCamera,
    startScreenShare,
    stopScreenShare,
    isScreenSharing
  } = useMediaControls();

  const { buttonProps: disconnectButtonProps } = useDisconnectButton({});

  return (
    <div className="px-6 pb-6">
      <div className="px-2 py-4">
        <div className="flex items-center justify-between">
          {/* Left Controls */}
          <div className="flex items-center gap-4">
            <button className="flex flex-col items-center gap-1 text-gray-400/60 hover:text-gray-400 transition-colors" onClick={onInvite}>
              <div className=" flex items-center justify-center">
                <Link color="white" />
              </div>
              <span className="text-xs mt-2">Invite</span>
            </button>
          </div>

          {/* Center Controls */}
          <div className="flex items-center gap-6">
            <button className={`flex flex-col items-center gap-1 transition-colors ${isMicrophoneEnabled
              ? 'text-gray-400 hover:text-gray-400'
              : 'text-red-400 hover:text-red-300'
              }`} onClick={toggleMicrophone}>
              <div className="items-center justify-center">
                {isMicrophoneEnabled ? <Mic color="white" /> : <MicOff color="red" />}              </div>
              <span className="text-xs mt-2">Mic</span>
            </button>
            <div className="w-px h-8 bg-white/20"></div>
            <button className={`flex flex-col items-center gap-1 transition-colors ${isCameraEnabled
              ? 'text-gray-400 hover:text-gray-400'
              : 'text-red-400 hover:text-red-300'
              }`} onClick={toggleCamera}>
              <div className="items-center justify-center">
                {isCameraEnabled ? <Video color="white" /> : <VideoOff color="red" />}
              </div>
              <span className="text-xs mt-2">Camera</span>
            </button>

            {/* Divider */}
            <div className="w-px h-8 bg-white/20"></div>

            <button 
              className={`flex flex-col items-center gap-1 transition-colors ${
                raisedHands[currentUser] 
                  ? 'text-yellow-400 hover:text-yellow-500' 
                  : 'text-gray-400 hover:text-gray-400'
              }`}
              onClick={() => {
                console.log('Hand button clicked, currentUser:', currentUser);
                onToggleHandRaise(currentUser);
              }}
            >
              <div className="items-center justify-center">
                <Hand color={raisedHands[currentUser] ? "#fbbf24" : "white"} />
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
              className={`flex flex-col items-center gap-1 transition-colors ${isScreenSharing
                ? 'text-green-400 hover:text-green-300'
                : 'text-gray-400 hover:text-gray-400'
                }`}>
              <div className="items-center justify-center">
                <Monitor color={isScreenSharing ? "#10b981" : "white"} />
              </div>
              <span className="text-xs mt-2">{isScreenSharing ? "Stop" : "Present"}</span>
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
              className="flex flex-col items-center gap-1 transition-colors text-gray-400 hover:text-gray-400"
            >
              <div className="items-center justify-center">
                <PhoneOff color="white" />
              </div>
              <span className="text-xs mt-2">End Call</span>
            </button>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            <button
              className="flex flex-col items-center gap-1 text-gray-400/60 hover:text-gray-400 transition-colors"
              onClick={onToggleSidebar}
            >
              <div className=" flex items-center justify-center">
                <PanelLeftClose color="white" />
              </div>
              <span className="text-xs mt-2">Sidebar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SessionPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [token, setToken] = React.useState<string | null>(null);
  const [roomName, setRoomName] = React.useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [participants, setParticipants] = React.useState<unknown[]>([]);
  const [currentUser, setCurrentUser] = React.useState<string>("You");
  const [currentTime, setCurrentTime] = React.useState<string>("");
  const [activeEmojis, setActiveEmojis] = React.useState<{[key: string]: {emoji: string, timestamp: number, username: string}}>({}); // Add emoji state
  const [raisedHands, setRaisedHands] = React.useState<{[key: string]: boolean}>({}); // Add raised hands state
  const [chatMessages, setChatMessages] = React.useState<{message: string, timestamp: number, username: string}[]>([]); // Add chat state

  // for now i am adding the rnadom emojiss
  const emojis = ['😀', '😂', '😍', '🤔', '😮', '👍', '👏', '❤️', '🔥', '💯', '😎', '🎉', '😊', '👋', '💪'];

  // sending emoji on others
  const sendEmoji = (username: string) => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const timestamp = Date.now();
    
    // Update local state
    setActiveEmojis(prev => ({
      ...prev,
      [username]: { emoji: randomEmoji, timestamp, username }
    }));

    // Send to all participants
    if ((window as Window & { sendEmojiToAll?: (emoji: string, username: string) => void }).sendEmojiToAll) {
      const sendEmojiToAll = (window as Window & { sendEmojiToAll?: (emoji: string, username: string) => void }).sendEmojiToAll;
      if (sendEmojiToAll) {
        sendEmojiToAll(randomEmoji, username);
      }
    }

    // Remove emoji after 3 seconds
    setTimeout(() => {
      setActiveEmojis(prev => {
        const newEmojis = { ...prev };
        delete newEmojis[username];
        return newEmojis;
      });
    }, 3000);
  };

  // Function to handle received emojis
  const handleEmojiReceived = (data: {emoji: string, timestamp: number, username: string}) => {
    setActiveEmojis(prev => ({
      ...prev,
      [data.username]: data
    }));

    // Remove emoji after 3 seconds
    setTimeout(() => {
      setActiveEmojis(prev => {
        const newEmojis = { ...prev };
        delete newEmojis[data.username];
        return newEmojis;
      });
    }, 3000);
  };

  // Function to toggle hand raise
  const toggleHandRaise = (username: string) => {
    console.log('Toggling hand raise for:', username);
    console.log('Current raisedHands state:', raisedHands);
    const newState = !raisedHands[username];
    
    setRaisedHands(prev => {
      const updatedState = {
        ...prev,
        [username]: newState
      };
      console.log('New raisedHands state:', updatedState);
      return updatedState;
    });

    // Send to all participants
    const sendHandRaiseToAll = (window as Window & { sendHandRaiseToAll?: (username: string, isRaised: boolean) => void }).sendHandRaiseToAll;
    if (sendHandRaiseToAll) {
      sendHandRaiseToAll(username, newState);
    }
  };

  // Function to handle received hand raise
  const handleHandRaiseReceived = (data: {username: string, isRaised: boolean}) => {
    setRaisedHands(prev => ({
      ...prev,
      [data.username]: data.isRaised
    }));
  };

  // Function to send chat message
  const sendChatMessage = (message: string) => {
    const timestamp = Date.now();
    const chatData = { message, timestamp, username: currentUser };
    
    // Add to local state
    setChatMessages(prev => [...prev, chatData]);

    // Send to all participants
    const sendChatToAll = (window as Window & { sendChatToAll?: (message: string, username: string) => void }).sendChatToAll;
    if (sendChatToAll) {
      sendChatToAll(message, currentUser);
    }
  };

  // Function to handle received chat message
  const handleChatReceived = (data: {message: string, timestamp: number, username: string}) => {
    setChatMessages(prev => [...prev, data]);
  };

  // Update real time every second
  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Get current user from participants
  React.useEffect(() => {
    const localParticipant = participants.find((p: unknown) => (p as Participant).isLocal);
    if (localParticipant) {
      const identity = (localParticipant as Participant).identity;
      console.log('Setting currentUser to:', identity);
      setCurrentUser(identity);
    }
  }, [participants]);

  useEffect(() => {
    const fetchToken = async () => {
      const userName = `user-${Math.random().toString(36).slice(2, 8)}`;

      // Get room from URL params or create new one
      const urlParams = new URLSearchParams(window.location.search);
      const roomFromUrl = urlParams.get('room');
      const currentRoom = roomFromUrl || `room-${Math.random().toString(36).slice(2, 8)}`;

      setRoomName(currentRoom);
      const res = await fetch(`/api/livekit-token?room=${currentRoom}&identity=${userName}`);
      const data = await res.json();
      console.log(data, "LiveKit Token Data");
      setToken(data.token);
    };
    fetchToken();
  }, []);


  return (
    <div className="p-8 bg-[#080B16]">
      <div className={`w-full h-[950px] flex flex-col bg-[#0D101B] rounded-[20px] border border-[rgba(255,255,255,0.1)] backdrop-blur-[32px] relative transition-all duration-300 ${isSidebarOpen ? 'pr-120' : ''}`}>
        {/* Sidebar - keep in original position */}
        {isSidebarOpen && (
          <div className="absolute right-0 top-0 bottom-0 w-120 z-30 rounded-r-[20px] overflow-hidden border-l-1 border-white/10 bg-[#0D101B]">
            <Sidebar 
              participants={participants} 
              roomName={roomName} 
              raisedHands={raisedHands} 
              chatMessages={chatMessages}
              onSendMessage={sendChatMessage}
            />
          </div>
        )}

        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 text-white mb-4 mt-3">
          <div className="flex items-center gap-2 ml-4">
            <div className="w-4 h-4 rounded-full flex items-center justify-center">
              <Clock color="white" />
            </div>
            <span className="text-sm font-medium">{currentTime}</span>
            <span className="mx-2 text-gray-400 ml-20">|</span>
          </div>

          {/* Soundwave visualization */}
          <div className="flex items-center gap-[2px] h-8">
            <img src="/images/icons/soundwave.png" alt="" />
          </div>

          <div className="flex items-center gap-2 mr-4">
            <div className="w-4 h-4 rounded flex items-center justify-center">
              <span className="mx-2 text-gray-400 mr-28">|</span>
              <Calendar color="white" />
            </div>
            <span className="text-sm font-medium">8th July 2024</span>
          </div>
        </div>

        {/* Main Video Area */}
        <div className="flex-1 relative mx-6 mb-6">
          <div className="w-full h-full rounded-2xl border border-white/20 relative overflow-hidden">
            {/* User Avatar */}
            <div className="absolute top-6 left-6 bg-[#080B16] pb-2 pt-2 pl-4 pr-4 rounded-[11px] border border-[rgba(211,211,211,0.1)] z-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                  {currentUser.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-white text-sm font-medium">{currentUser}</span>
              </div>
            </div>

            {/* Fullscreen Button */}
            <div className="absolute top-6 right-6 flex gap-2 z-10">
              {/* <button
                onClick={() => setIsModalOpen(true)}
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4v8M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button> */}
              {/* <button className="w-8 h-8 rounded-lg flex items-center justify-center text-white transition-colors">
                <Expand color="white" />
              </button> */}
            </div>

            {/* Session Ready Modal */}
            {isModalOpen && (
              <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50">
                <div className="bg-[#1e2328] border border-white/20 rounded-xl max-w-md w-full mx-6 relative">
                  <div className="flex items-center p-4">
                    {/* Close Button */}
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute right-4 w-6 h-6 flex items-center justify-center text-white/60 hover:text-white"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1l12 12M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                    <h2 className="text-white text-lg font-medium">Your Session is ready</h2>
                  </div>
                  {/* divider */}
                  <div className="border-b border-white/10 mb-4"></div>
                  <div className="p-4">
                    <p className="text-white/70 text-sm mb-6 leading-relaxed">
                      Send this link to people you want to invite to the Session.<br />
                      Don&apos;t forget to save the link, so you can use it later.
                    </p>
                    <div className="flex items-center gap-3 p-2 bg-[#0f1419] rounded-lg border border-white/10">
                      <Link color="white" />
                      <span className="text-white/80 text-sm flex-1 font-mono">
                        {`${window.location.origin}/conference?room=${roomName}`}
                      </span>
                      <button
                        className="p-1 hover:bg-white/10 rounded"
                        onClick={() => {
                          navigator.clipboard.writeText(`${window.location.origin}/conference?room=${roomName}`);
                        }}
                      >
                        <Copy color="white" />
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
                className="w-full h-full"
              >
                <CustomVideoTiles activeEmojis={activeEmojis} />
                <ParticipantProvider onParticipantsChange={setParticipants} />
                <RealtimeMessaging 
                  onEmojiReceived={handleEmojiReceived}
                  onHandRaiseReceived={handleHandRaiseReceived}
                  onChatReceived={handleChatReceived}
                />

                <div className="absolute bottom-0 left-0 right-0">
                  <ConferenceControls
                    onInvite={() => setIsModalOpen(true)}
                    onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                    onSendEmoji={sendEmoji}
                    onToggleHandRaise={toggleHandRaise}
                    currentUser={currentUser}
                    raisedHands={raisedHands}
                  />
                </div>
              </LiveKitRoom>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-white text-lg animate-pulse">
                  Joining session...
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Control Bar - Only show when not connected */}
        {!token && (
          <div className="px-6 pb-6">
            <div className="px-2 py-4">
              <div className="flex items-center justify-center">
                <div className="text-white/50 text-sm">Connecting to session...</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
