import {
  BotMessageSquare,
  Calendar,
  Clock,
  Copy,
  Expand,
  Hand,
  Link,
  Mic,
  Monitor,
  PanelLeftClose,
  PhoneOff,
  Smile,
  Users,
  Video,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
export default function SessionPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8 bg-[#080B16]">
      <div className="w-full h-[950px] flex flex-col bg-[#0D101B] rounded-[20px] border border-[rgba(255,255,255,0.1)] backdrop-blur-[32px]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 text-white mb-4 mt-3">
          <div className="flex items-center gap-2 ml-4">
            <div className="w-4 h-4 rounded-full flex items-center justify-center">
              <Clock color="white" />
            </div>
            <span className="text-sm font-medium">26:25</span>
            <span className="mx-2 text-gray-400 ml-20">|</span>
          </div>

          {/* Soundwave visualization */}
          <div className="flex items-center gap-[2px] h-8">
            <Image src="/images/icons/soundwave.png" alt="" />
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
            <div className="absolute top-6 left-6 bg-[#080B16] pb-2 pt-2 pl-4 pr-4 rounded-[11px] border border-[rgba(211,211,211,0.1)]">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                  PO
                </div>
                <span className="text-white text-sm font-medium">You</span>
              </div>
            </div>

            {/* Fullscreen Button */}
            <div className="absolute top-6 right-6 flex gap-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 4v8M4 8h8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-lg flex items-center justify-center text-white transition-colors">
                <Expand color="white" />
              </button>
            </div>

            {/* Session Ready Modal */}
            {isModalOpen && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border border-white/20 rounded-xl max-w-md w-full mx-6 relative">
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
                    <p className="text-white/70 text-sm mb-6 leading-relaxed">
                      Send this link to people you want to invite to the
                      Session.
                      <br />
                      Don&apos;t forget to save the link, so you can use it
                      later.
                    </p>
                    <div className="flex items-center gap-3 p-2 bg-[#0f1419] rounded-lg border border-white/10">
                      <Link color="white" />
                      <span className="text-white/80 text-sm flex-1 font-mono">
                        sessions.firesight.ai/lijy-oznc
                      </span>
                      <button className="p-1 hover:bg-white/10 rounded">
                        <Copy color="white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Control Bar */}
        <div className="px-6 pb-6">
          <div className="px-2 py-4">
            <div className="flex items-center justify-between">
              {/* Left Controls */}
              <div className="flex items-center gap-4">
                <button className="flex flex-col items-center gap-1 text-gray-400/60 hover:text-gray-400 transition-colors">
                  <div className="flex items-center justify-center">
                    <Link color="white" />
                  </div>
                  <span className="text-xs mt-2">Invite</span>
                </button>
              </div>

              {/* Center Controls */}
              <div className="flex items-center gap-6">
                <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-400 transition-colors">
                  <div className="items-center justify-center">
                    <Mic color="white" />
                  </div>
                  <span className="text-xs mt-2">Mic</span>
                </button>

                <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-400 transition-colors">
                  <div className="items-center justify-center">
                    <Video color="white" />
                  </div>
                  <span className="text-xs mt-2">Camera</span>
                </button>

                {/* Divider */}
                <div className="w-px h-8 bg-white/20"></div>

                <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-400 transition-colors">
                  <div className="items-center justify-center">
                    <Hand color="white" />
                  </div>
                  <span className="text-xs mt-2">Hand</span>
                </button>

                <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-400 transition-colors">
                  <div className="items-center justify-center">
                    <BotMessageSquare color="white" />
                  </div>
                  <span className="text-xs mt-2">AI Worker</span>
                </button>

                <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-400 transition-colors">
                  <div className="items-center justify-center">
                    <Monitor color="white" />
                  </div>
                  <span className="text-xs mt-2">Present</span>
                </button>

                <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-400 transition-colors">
                  <div className="items-center justify-center">
                    <Smile color="white" />
                  </div>
                  <span className="text-xs mt-2">Emoji</span>
                </button>

                <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-400 transition-colors">
                  <div className="items-center justify-center">
                    <Users color="white" />
                  </div>
                  <span className="text-xs mt-2">Roles</span>
                </button>

                <button className="flex flex-col items-center gap-1 text-red-400 hover:text-red-300 transition-colors">
                  <div className="items-center justify-center">
                    <PhoneOff color="red" />
                  </div>
                  <span className="text-xs mt-2">End Call</span>
                </button>
              </div>

              {/* Right Controls */}
              <div className="flex items-center gap-4">
                <button className="flex flex-col items-center gap-1 text-gray-400/60 hover:text-gray-400 transition-colors">
                  <div className="flex items-center justify-center">
                    <PanelLeftClose color="white" />
                  </div>
                  <span className="text-xs mt-2">Sidebar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
