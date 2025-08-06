import { BotMessageSquare, Calendar, Clock, Copy, Expand, Hand, Link, Mic, Monitor, PanelLeftClose, PhoneOff, Smile, Users, Video } from "lucide-react";

export default function SessionPage() {
  return (
    <div className="p-8 bg-[#080B16]">
      <div className="w-full h-[950px] flex flex-col bg-[#0D101B] rounded-[20px] border border-[rgba(255,255,255,0.1)] backdrop-blur-[32px] ">
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
            <img src="/images/icons/soundwave.png" alt="" />
            {/* {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className={`w-[3px] bg-green-400 rounded-full ${i % 3 === 0 ? 'h-6' : i % 2 === 0 ? 'h-4' : 'h-2'
                  }`}
                style={{
                  animation: `pulse ${Math.random() * 2 + 1}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.1}s`
                }}
              ></div>
            ))} */}
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
        <div className="flex-1 relative mx-6 mb-6 ">
          <div className="w-full h-full rounded-2xl border border-white/20 relative overflow-hidden">
            {/* User Avatar */}
            <div className="absolute top-6 left-6 bg-[#080B16] pb-2 pt-2 pl-4 pr-4 rounded-[11px] border border-[rgba(211,211,211,0.1)] ">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                  PO
                </div>
                <span className="text-white text-sm font-medium">You</span>
              </div>
            </div>

            {/* Fullscreen Button */}
            <div className="absolute top-6 right-6">
              <button className="w-8 h-8 rounded-lg flex items-center justify-center text-white transition-colors">
                <Expand color="white" />
              </button>
            </div>

            {/* Session Ready Modal */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="border border-white/20 rounded-xl max-w-md w-full mx-6 relative">
                <div className="flex items-center p-4">
                  {/* Close Button */}
                  <button className="absolute right-4 w-6 h-6 flex items-center justify-center text-white/60 hover:text-white">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1l12 12M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>

                  <h2 className="text-white text-lg font-medium">Your Session is ready</h2>
                </div>
                {/* divider */}
                <div className="border-b border-white/10 mb-4 "></div>
                <div className="p-4">
                  <p className="text-white/70 text-sm mb-6 leading-relaxed">
                    Send this link to people you want to invite to the Session.<br />
                    Don&apos;t forget to save the link, so you can use it later.
                  </p>
                  <div className="flex items-center gap-3 p-2 bg-[#0f1419] rounded-lg border border-white/10">
                    {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/60 flex-shrink-0">
                      <path d="M8.5 3.5L7 5H4a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1h-3l-1.5-1.5h-3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg> */}
                    <Link color="white" />
                    <span className="text-white/80 text-sm flex-1 font-mono">sessions.firesight.ai/lijy-oznc</span>
                    <button className="p-1 hover:bg-white/10 rounded">
                      {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/60">
                        <path d="M5.5 2.5h-2a1 1 0 00-1 1v9a1 1 0 001 1h7a1 1 0 001-1v-2m-3-7h4a1 1 0 011 1v4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      </svg> */}
                      <Copy color="white" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Control Bar */}
        <div className="px-6 pb-6">
          <div className="px-2 py-4">
            <div className="flex items-center justify-between">
              {/* Left Controls */}
              <div className="flex items-center gap-4">
                <button className="flex flex-col items-center gap-1 text-gray-400/60 hover:text-gray-400 transition-colors">
                  <div className=" flex items-center justify-center">
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
                <div className="w-px h-8 bg-white/20"></div>
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
                <div className="w-px h-8 bg-white/20"></div>

                <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-400 transition-colors">
                  <div className="items-center justify-center">
                    <BotMessageSquare color="white" />
                  </div>
                  <span className="text-xs mt-2">AI Worker</span>
                </button>
                <div className="w-px h-8 bg-white/20"></div>

                <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-400 transition-colors">
                  <div className="items-center justify-center">
                    <Monitor color="white" />
                  </div>
                  <span className="text-xs mt-2">Present</span>
                </button>
                <div className="w-px h-8 bg-white/20"></div>

                <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-400 transition-colors">
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

                <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-400 transition-colors">
                  <div className="tems-center justify-center">
                    <PhoneOff color="white" />
                  </div>
                  <span className="text-xs mt-2">End Call</span>
                </button>
              </div>

              {/* Right Controls */}
              <div className="flex items-center gap-4">
                <button className="flex flex-col items-center gap-1 text-gray-400/60 hover:text-gray-400 transition-colors">
                  <div className=" flex items-center justify-center">
                    <PanelLeftClose color="white" />
                  </div>
                  <span className="text-xs mt-2">Sidebar</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
      `}</style> */}
      </div>
    </div>
  )
} 