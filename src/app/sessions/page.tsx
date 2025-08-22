"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import FireSightFooter from "@/layouts/FireSightFooter";
import { sessionFeaturedCardInfo } from "@/utils/constant/firesight";
import { Button } from "@/components/ui/button";
import PricingTag from "@/components/session/PricingTag";
import "../page.css";

export const dynamic = "force-static";

const swipeConfidenceThreshold = 100;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const pages = [
  [0, 3],
  [3, 3],
  [6, 3],
];

export default function SessionPage() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => {
      const newPage = (prevPage + newDirection + pages.length) % pages.length;
      return [newPage, newDirection];
    });
  };

  return (
    <>
      <Head>
        <link rel="preload" href="/images/sessions.svg" as="image" />
        <link
          rel="preload"
          href="/images/mobile/sessions-show-mobile.svg"
          as="image"
        />
      </Head>

      <div className="w-full flex md:px-14 flex-col items-center justify-center overflow-hidden lg:mb-[280px] md:mb-[120px] mb-[30px]">
        {/* Backgrounds */}
        <div className="absolute inset-0 pointer-events-none z-[-100]">
          <div className="session-bg h-[66.66vw] top-[calc(27vw+125px)] md:top-[350px] md:h-[30vw]"></div>
          <div className="green-shine-session-mobile md:hidden block"></div>
          <div className="green-shine-session md:block hidden"></div>
          <div className="green-shine-session-small md:block hidden"></div>
          <div className="green-shine-session-2nd-small md:block hidden"></div>
          <div className="green-shine-session-3rd-small md:block hidden"></div>
        </div>

        {/* Header */}
        <div className="flex md:gap-11 gap-3 text-white items-center justify-between md:mt-[185px] sm:mt-20 mt-[100px] mb-0 md:h-16 h-[30px]">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={214}
              height={53}
              priority
              className="md:w-[264px] md:h-[64px] w-[124px] h-[38px]"
            />
          </Link>
          <span className="md:text-[45px] text-[20px]">|</span>
          <span className="md:text-[65px] text-[30px] font-publica-play">
            Sessions
          </span>
        </div>

        {/* Desktop Background */}
        <div className="hidden md:block mt-20 relative w-[72.57vw] h-[60.14vw]">
          <Image
            src="/images/sessions.svg"
            alt="Sessions Background"
            fill
            priority
            className="object-cover"
          />
          <div className="session-gradient absolute inset-0"></div>
        </div>

        {/* Mobile Background */}
        <div className="w-[100vw] h-[206.07vw] bg-no-repeat block md:hidden bg-contain bg-[url('/images/mobile/sessions-show-mobile.svg')]"></div>

        {/* Introduction */}
        <div className="flex flex-wrap sm:gap-1 gap-4 justify-between sm:absolute md:mx-[56px] mx-[16px] lg:mt-[66vw] md:mt-[89vw] mt-[-87.4vw]">
          <div className="text-center flex flex-col justify-center items-center md:w-[63%] w-full md:p-[46px] p-[15px] border border-[rgba(255,255,255,0.1)] backdrop-blur-[32px] rounded-[20px]">
            <h3 className="text-[24px] bg-gradient-to-b from-[rgba(20,255,0,0.55)] to-[rgba(0,240,255,0.62)] bg-clip-text text-transparent font-bold md:mb-[36px] mb-[15px]">
              ABOUT
            </h3>
            <h2 className="sm:text-[44px] text-[28px] font-bold uppercase md:mb-[33px] mb-[15px] text-white">
              AI-Native Conference platform
            </h2>
            <p className="text-white sm:text-[16px] text-[14px]">
              Sessions is a next-generation, browser-based conferencing solution
              that combines intuitive collaboration tools with the power of
              embedded AI Agents. In addition to seamless integration with
              platforms like Zoom and Google Meet, Sessions empowers you to host
              and manage your calls directly in a single interface. From the
              moment a meeting begins, intelligent AI agents work behind the
              scenes to transcribe conversations, generate real-time summaries,
              pinpoint action items - even analyse conversation sentiment.
              Sessions helps you stay focused on high-value discussions rather
              than routine admin.{" "}
              <span className="font-bold">
                By unifying live video calls and AI-driven intelligence in one
                place, Sessions transforms the way teams brainstorm, plan & make
                decisions.
              </span>{" "}
              <br />
              <br />
              Hosts can easily switch user roles, invite new participants on the
              fly, and tag important moments for quick review. Sessions can be
              stopped & started - pause a meeting today, continue it next week
              and pick up right where you left off. Once the session stops, all
              recordings, chat logs, and transcripts are automatically saved to
              your library, making them easy to search, reference, or export
              (manually or by AI Agents), forming a{" "}
              <span className="font-bold">
                continuously growing, AI-powered knowledge base.
              </span>{" "}
              ENever lose track of the &quot;why&quot; behind decisions, nor
              waste time digging for meeting notes. Extract more value from
              calls and{" "}
              <span className="font-bold">
                build momentum, not memory gaps.
              </span>
            </p>
            <Link href="/sessions/start-session">
              <Button
                variant="outline"
                className="green-gradient-border-btn sm:text-[22px] text-[16px] px-[35px] sm:py-[25px] py-[20px] !text-white sm:mt-[50px] mt-[15px] mx-[15px] font-bold"
              >
                Try for Free
              </Button>
            </Link>
          </div>
          <div className="flex flex-col justify-between items-center md:w-[35%] w-full sm:gap-6 gap-4">
            <div className="text-center flex flex-col justify-center items-center border border-[rgba(255,255,255,0.1)] backdrop-blur-[32px] rounded-[20px] md:p-[40px] p-[20px] h-full">
              <h3 className="text-[24px] bg-gradient-to-b from-[rgba(20,255,0,0.55)] to-[rgba(0,240,255,0.62)] bg-clip-text text-transparent font-bold md:mb-[36px] mb-[15px]">
                PRICING
              </h3>
              <h2 className="text-[24px] font-bold uppercase md:mb-[33px] mb-[15px] text-white">
                $0 - $99.95 P/M
              </h2>
              <p className="text-white sm:text-[16px] text-[14px]">
                Firesight | Sessions offers a freemium model with core features
                available at no charge. Scale up with paid tiers to unlock
                advanced AI capabilities and expanded team features. Seamlessly
                grow your conferencing toolkit without breaking the bank.
              </p>
            </div>
            <div className="text-center flex flex-col justify-center items-center border border-[rgba(255,255,255,0.1)] backdrop-blur-[32px] rounded-[20px] md:p-[40px] p-[20px] h-full ">
              <h3 className="text-[24px] bg-gradient-to-b from-[rgba(20,255,0,0.55)] to-[rgba(0,240,255,0.62)] bg-clip-text text-transparent font-bold md:mb-[36px] mb-[15px]">
                USE CASES
              </h3>
              <p className="text-white sm:text-[16px] text-[14px]">
                Firesight | Sessions offers a freemium model with core features
                available at no charge. Scale up with paid tiers to unlock
                advanced AI capabilities and expanded team features. Seamlessly
                grow your conferencing toolkit without breaking the bank.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start w-full flex-col md:px-14 px-4 md:mb-[120px] mb-[30px] sm:mt-[120px] ">
        <h3 className="text-[24px] bg-gradient-to-b from-[rgba(20,255,0,0.55)] to-[rgba(0,240,255,0.62)] bg-clip-text text-transparent font-bold md:mb-[50px] mb-[10px]">
          FEATURES
        </h3>
        <h1 className="uppercase text-white md:text-[50px] text-[28px] md:mb-[80px] mb-[20px] font-bold">
          AI-Driven Collaboration: <br />
          TRANSFORM YOUR WORKFLOW
        </h1>
        <div className="sm:flex hidden flex-wrap w-full justify-between lg:gap-y-16 md:gap-y-10 gap-y-3 gap-x-0 items-stretch">
          {sessionFeaturedCardInfo.map((item, index) => (
            <div
              className="main-small-box lg:!w-[30%] sm:!w-[46%] !w-full relative cursor-pointer "
              key={index}
            >
              <div className="md:p-6 p-[16px] opacity-80">
                <h3 className="md:text-[30px] text-[20px] font-extrabold text-white">
                  {item.title}
                </h3>
                <p className="md:text-[15px] text-[12px] text-white">
                  {item.content}
                </p>
                <div className="green-polygon-piece absolute bottom-0 right-0 w-[150px] h-[150px] pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-full shadow h-84 rounded overflow-hidden sm:hidden block text-white">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
              variants={{
                enter: (dir: number) => ({
                  x: dir > 0 ? 300 : -300,
                  opacity: 0,
                }),
                center: {
                  x: 0,
                  opacity: 1,
                },
                exit: (dir: number) => ({
                  x: dir < 0 ? 300 : -300,
                  opacity: 0,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.1 }}
              className="absolute w-full h-full flex items-center justify-stretch"
            >
              <div className="flex flex-col w-full h-full justify-stretch gap-3 items-stretch">
                {sessionFeaturedCardInfo
                  .slice(pages[page][0], pages[page][0] + pages[page][1])
                  .map((item, index) => (
                    <div
                      className="main-small-box !w-full relative cursor-pointer"
                      key={index}
                    >
                      <div className="md:p-6 p-[16px] opacity-80">
                        <h3 className="md:text-[30px] text-[20px] font-extrabold text-white">
                          {item.title}
                        </h3>
                        <p className="md:text-[15px] text-[12px] text-white">
                          {item.content}
                        </p>
                        <div className="green-polygon-piece absolute bottom-0 right-0 w-[150px] h-[150px] pointer-events-none" />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-5 sm:hidden">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index - page)}
              className={`${
                page === index
                  ? "h-[8.66px] w-[26px]"
                  : "w-[10px] h-[10px] opacity-50"
              }`}
            >
              {page === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="10"
                  viewBox="0 0 26 10"
                  fill="none"
                >
                  <path
                    d="M25.5275 4.21311C25.8175 4.69611 25.8124 5.30088 25.5143 5.77894L23.7404 8.62384C23.4665 9.06317 22.9853 9.33018 22.4676 9.33018L3.44896 9.33018C2.92224 9.33018 2.43412 9.05391 2.16298 8.60234L0.463642 5.77221C0.178291 5.29698 0.178291 4.70312 0.463642 4.22788L2.16298 1.39776C2.43412 0.946186 2.92225 0.669921 3.44897 0.669921L22.551 0.669922C23.0778 0.669922 23.5659 0.946188 23.837 1.39776L25.5275 4.21311Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <path
                    opacity="0.5"
                    d="M9.56699 4.25C9.83494 4.7141 9.83494 5.2859 9.56699 5.75L7.93301 8.58013C7.66506 9.04423 7.16987 9.33013 6.63397 9.33013L3.36603 9.33013C2.83013 9.33013 2.33494 9.04423 2.06699 8.58013L0.433013 5.75C0.165064 5.2859 0.165064 4.7141 0.433013 4.25L2.06699 1.41987C2.33494 0.955771 2.83013 0.669872 3.36603 0.669872L6.63397 0.669873C7.16987 0.669873 7.66506 0.955771 7.93301 1.41987L9.56699 4.25Z"
                    fill="white"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none z-[-100]">
        <div className="session-bg h-[106.66vw] top-[calc(27vw+125px)] 2xl:top-[3000px] md:top-[3100px] md:h-[50vw]"></div>
      </div>

      <div className="flex w-full sm:items-start items-center flex-col md:px-14 px-4">
        <h3 className="text-[24px] bg-gradient-to-b from-[rgba(20,255,0,0.55)] to-[rgba(0,240,255,0.62)] bg-clip-text text-transparent font-bold md:mb-[50px] mb-[10px]">
          PLATFORM
        </h3>
        <div className="flex sm:justify-between items-center flex-wrap ">
          <h1 className="uppercase text-white md:text-[80px] text-[28px] font-bold md:w-[55%] w-full sm:mt-[20px] sm:text-start text-center">
            explore firesight <br />
            sessions platform
          </h1>
          <p className="text-white md:w-[40%] w-full sm:text-[16px] text-[14px] sm:text-start text-center sm:mt-auto mt-[10px]">
            Sessions adapts to any setup—whether a one-on-one with an AI Agent
            or a team engaging multiple agents. AI enhances discussions in real
            time, transcribing, summarising, and analysing sentiment without
            disrupting the flow. By unifying live video calls with AI-driven
            intelligence, Sessions streamlines brainstorming, planning, and
            decision-making, ensuring every meeting leads to actionable
            outcomes.
          </p>
        </div>
      </div>

      <div className="flex w-full justify-center relative sm:px-auto px-4 mt-[20px]">
        <Link href="/sessions/start-session" className="z-[99999]">
          <Button
            variant="outline"
            className="green-gradient-border-btn sm:text-[22px] text-[20px] px-[35px] py-[25px] !text-white md:ml-14 font-bold"
          >
            Try for Free
          </Button>
        </Link>
      </div>

      <div className=" w-full md:px-14 px-4 md:mb-[58px] mb-[20px] md:mt-[150px] mt-[50px]">
        <PricingTag />
      </div>

      <div className="w-full">
        <FireSightFooter>
          <div className="green-shine-footer-mobile md:hidden block z-[-2342]"></div>
          <div className="blue-shine-pulse-overview w-[min(602px,41.8vw)] h-[min(602px,41.8vw)] bottom-[7.7vw] right-[19.3vw] md:block hidden"></div>
          <div className="blue-shine-pulse-overview bottom-[-25.555vw] right-[-20.277vw] w-[min(602px,41.8vw)] h-[min(602px,41.8vw)] md:block hidden"></div>
          <div className="blue-shine-pulse-overview bottom-[-32.847vw] left-[-16.666vw] w-[min(602px,41.8vw)] h-[min(602px,41.8vw)] md:block hidden"></div>
        </FireSightFooter>
      </div>
    </>
  );
}
