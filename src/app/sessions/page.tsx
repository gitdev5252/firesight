"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import FireSightFooter from "@/layouts/FireSightFooter";
import { sessionFeaturedCardInfo } from "@/utils/constant/firesight";
import { Button } from "@/components/ui/button";
import PricingTag from "@/components/session/PricingTag";
import "../page.css";

export const dynamic = "force-static";

export default function SessionPage() {
  const [toggle, setToggle] = useState(0);

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

      <div className="w-full flex md:px-14 px-4 flex-col items-center justify-center overflow-hidden lg:mb-[280px] md:mb-[120px] mb-[30px]">
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
        <div className="flex md:gap-11 gap-3 text-white items-center justify-between md:mt-[185px] mt-20 mb-0 md:h-16 h-[30px]">
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
        <div className="flex flex-wrap gap-1 justify-between absolute md:mx-[56px] mx-[16px] lg:mt-[66vw] md:mt-[89vw] mt-[-87.4vw]">
          <div className="text-center flex flex-col justify-center items-center md:w-[63%] w-full md:p-[46px] p-[20px] border border-[rgba(255,255,255,0.1)] backdrop-blur-[32px] rounded-[20px]">
            <h3 className="text-[24px] bg-gradient-to-b from-[rgba(20,255,0,0.55)] to-[rgba(0,240,255,0.62)] bg-clip-text text-transparent font-bold md:mb-[36px] mb-[15px]">
              ABOUT
            </h3>
            <h2 className="text-[44px] font-bold uppercase md:mb-[33px] mb-[15px] text-white">
              AI-Native Conference platform
            </h2>
            <p className="text-white text-[16px]">
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
                className="green-gradient-border-btn text-[22px] px-[35px] py-[25px] !text-white sm:mt-[50px] mx-[15px] font-bold"
              >
                Try for Free
              </Button>
            </Link>
          </div>
          <div className="flex flex-col justify-between items-center md:w-[35%] w-full gap-6">
            <div className="text-center flex flex-col justify-center items-center border border-[rgba(255,255,255,0.1)] backdrop-blur-[32px] rounded-[20px] md:p-[40px] p-[20px] h-full">
              <h3 className="text-[24px] bg-gradient-to-b from-[rgba(20,255,0,0.55)] to-[rgba(0,240,255,0.62)] bg-clip-text text-transparent font-bold md:mb-[36px] mb-[15px]">
                PRICING
              </h3>
              <h2 className="text-[24px] font-bold uppercase md:mb-[33px] mb-[15px] text-white">
                $0 - $99.95 P/M
              </h2>
              <p className="text-white">
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
              <p className="text-white">
                Firesight | Sessions offers a freemium model with core features
                available at no charge. Scale up with paid tiers to unlock
                advanced AI capabilities and expanded team features. Seamlessly
                grow your conferencing toolkit without breaking the bank.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start flex-col md:px-14 px-4 md:mb-[120px] mb-[30px] sm:mt-[120px]">
        <h3 className="text-[24px] bg-gradient-to-b from-[rgba(20,255,0,0.55)] to-[rgba(0,240,255,0.62)] bg-clip-text text-transparent font-bold md:mb-[50px] mb-[15px]">
          FEATURES
        </h3>
        <h1 className="uppercase text-white md:text-[50px] text-[20px] md:mb-[80px] mb-[20px] font-bold">
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
      </div>

      <div className="flex justify-start flex-col md:px-14 px-4">
        <h3 className="text-[24px] bg-gradient-to-b from-[rgba(20,255,0,0.55)] to-[rgba(0,240,255,0.62)] bg-clip-text text-transparent font-bold md:mb-[50px] mb-[15px]">
          PLATFORM
        </h3>
        <div className="flex justify-between items-center flex-wrap ">
          <h1 className="uppercase text-white md:text-[80px] text-[20px] font-bold md:w-[55%] w-full mt-[20px]">
            explore firesight <br />
            sessions platform
          </h1>
          <p className="text-white md:w-[40%] w-full">
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

      <div className="flex w-full relative 2xl:h-[1400px] md:h-[1100px]">
        <Link href="/sessions/start-session" className="z-[99999]">
          <Button
            variant="outline"
            className="green-gradient-border-btn text-[22px] px-[35px] py-[25px] !text-white md:ml-14 font-bold"
          >
            Try for Free
          </Button>
        </Link>
        <div className="flex justify-center items-center w-full absolute z-[9999]">
          <div
            className="w-[51px] h-[31px]"
            onClick={() => setToggle((toggle + 1) % 2)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="59"
              height="43"
              viewBox="0 0 59 43"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.2554 3.09215C18.9954 2.99215 20.7334 3.00015 22.4734 3.00015C22.4854 3.00015 31.2904 3.00015 31.2904 3.00015C33.0644 3.00015 34.8024 2.99215 36.5414 3.09215C38.1224 3.18215 39.6624 3.37415 41.1954 3.80315C44.4224 4.70515 47.2404 6.58915 49.2774 9.26015C51.3024 11.9142 52.3984 15.1632 52.3984 18.4992C52.3984 21.8392 51.3024 25.0862 49.2774 27.7402C47.2404 30.4102 44.4224 32.2952 41.1954 33.1972C39.6624 33.6262 38.1224 33.8172 36.5414 33.9082C34.8024 34.0082 33.0644 33.9992 31.3244 33.9992C31.3124 33.9992 22.5054 34.0002 22.5054 34.0002C20.7334 33.9992 18.9954 34.0082 17.2554 33.9082C15.6754 33.8172 14.1354 33.6262 12.6024 33.1972C9.37544 32.2952 6.55744 30.4102 4.52044 27.7402C2.49544 25.0862 1.39844 21.8392 1.39844 18.5002C1.39844 15.1632 2.49544 11.9142 4.52044 9.26015C6.55744 6.58915 9.37544 4.70515 12.6024 3.80315C14.1354 3.37415 15.6754 3.18215 17.2554 3.09215Z"
                fill="url(#paint0_linear_2002_30469)"
                fillOpacity="0.5"
                stroke="url(#paint1_linear_2002_30469)"
              />
              <g
                filter="url(#filter0_dd_2002_30469)"
                transform={toggle == 0 ? "translate(-20, 0)" : ""}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36.8984 32C44.3543 32 50.3984 25.9558 50.3984 18.5C50.3984 11.0442 44.3543 5 36.8984 5C29.4426 5 23.3984 11.0442 23.3984 18.5C23.3984 25.9558 29.4426 32 36.8984 32Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dd_2002_30469"
                  x="15.3984"
                  y="0"
                  width="43"
                  height="43"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="3" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                  />
                  <feBlend
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="3" />
                  <feGaussianBlur stdDeviation="4" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_2002_30469"
                    result="effect2_dropShadow_2002_30469"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_2002_30469"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_2002_30469"
                  x1="27.3811"
                  y1="3"
                  x2="27.3811"
                  y2="34.0002"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#038B98" stop-opacity="0.63" />
                  <stop
                    offset="0.703125"
                    stop-color="#0FFB49"
                    stop-opacity="0.59"
                  />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2002_30469"
                  x1="26.8984"
                  y1="3"
                  x2="26.8984"
                  y2="34.0002"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#14FF00" stop-opacity="0.55" />
                  <stop offset="1" stop-color="#00F0FF" stop-opacity="0.62" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        {toggle === 0 ? (
          <Image
            src="/images/session/WorldShare.png"
            fill
            priority
            alt="worldshare"
            className="mt-[30px]"
          />
        ) : (
          <Image
            src="/images/session/Session Summaries.png"
            fill
            priority
            alt="worldshare"
            className="mt-[30px]"
          />
        )}
      </div>

      <div className="absolute inset-0 pointer-events-none z-[-100]">
        <div className="session-bg h-[106.66vw] top-[calc(27vw+125px)] 2xl:top-[3900px] md:top-[3400px] md:h-[50vw]"></div>
      </div>

      <div className=" w-full md:px-14 px-4 md:mb-[58px] mb-[20px] md:mt-[150px]">
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
