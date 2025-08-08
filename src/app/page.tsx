"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import "./page.css";
import { Button } from "@/components/ui/button";

import {
  pulseSectionCardInfo,
  sessionSectionCardInfo,
  platformSectionCardInfo,
} from "@/utils/constant/firesight";

const pages = [
  [0, 3],
  [3, 3],
];

const swipeConfidenceThreshold = 100;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
export default function Home() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [[page1, direction1], setPage1] = useState([0, 0]);
  const [[page2, direction2], setPage2] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => {
      const newPage = (prevPage + newDirection + pages.length) % pages.length;
      return [newPage, newDirection];
    });
  };
  const paginate1 = (newDirection: number) => {
    setPage1(([prevPage]) => {
      const newPage = (prevPage + newDirection + pages.length) % pages.length;
      return [newPage, newDirection];
    });
  };
  const paginate2 = (newDirection: number) => {
    setPage2(([prevPage]) => {
      const newPage = (prevPage + newDirection + pages.length) % pages.length;
      return [newPage, newDirection];
    });
  };

  return (
    <>
      <div className="w-full relative overflow-x-hidden">
        <div className="shineBg_body_top_left"></div>
      </div>
      <Link href="/" className="flex items-center mt-[134px] mb-10 z-[100]">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={214}
          height={53}
          priority
          className="md:w-[214px] md:h-[53px] w-[141px] h-[35px]"
          style={{ width: "auto", height: "auto" }}
        />
      </Link>
      <section className="relative w-full flex flex-col items-center justify-center z-50 md:pb-32 pb-[34px]">
        <div className="bg-[url('/images/hero.png')] w-full h-[662px] bg-cover absolute top-[-390px] z-[-10000] opacity-10 md:block hidden"></div>
        <div className="overflow-hidden w-[200vw] h-[500px] absolute top-[-250px] z-[-10000]">
          <div className="bg-[url('/images/hero.png')] bg-[length:100%_120%] w-[200vw] h-[602px] bg-no-repeat opacity-10 md:hidden block"></div>
        </div>

        {/* Headings */}
        <h1
          className="md:text-[110px] text-[50px] font-extrabold"
          style={{
            background:
              "linear-gradient(180deg, rgba(20, 255, 0, 0.55) 0%, rgba(0, 240, 255, 0.62) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: "100%",
          }}
        >
          AI NATIVE
        </h1>
        <h1 className="md:text-[110px] text-[50px] font-extrabold text-white text-center leading-[100%]">
          PRODUCT
          <br />
          ECOSYSTEM
        </h1>
        {/* Description */}
        <p
          className="mt-[15px] md:text-[18px] text-[12px] text-gray-300 text-center mx-auto md:max-w-[1000px] w-full p-4"
          style={{
            lineHeight: "1.5", // Adjust as needed
            letterSpacing: "0.01em", // Optional: tweak for best fit
          }}
        >
          Step into the future of productivity with Firesight. Our AI-native
          tools are purpose-built to revolutionize how you work: Our Platform
          unifies your workflows while our intelligent conferencing technology
          transforms how you collaborate. Firesight is your gateway to a better,
          more efficient workday.
        </p>
        <div className="w-full md:rounded-none rounded-2xl absolute md:top-[160px] top-[73px] md:bottom-[0px] bottom-0 -z-20 bg-[rgba(255, 255, 255, 0.02)] border-y-[1px] border-y-[rgba(255,255,255,0.1)] backdrop-blur-[32px]"></div>
      </section>

      {/* Pulse section */}
      <section className="relative mt-auto flex flex-col items-center justify-center w-full md:px-14 px-4">
        <div className="md:hidden block top-[calc(-4vw+73px)]  rotate-6 bg-cover w-[170vw] left-[-18vw] h-[150vw]  bg-[url('/images/pulse-bg-top.svg')] absolute z-[-10000] bg-no-repeat opacity-40"></div>
        <div className="md:block hidden w-full top-[calc(-4vw+38px)] h-[63.2vw] left-0 bg-[url('/images/colorpattern.svg')] absolute z-[-10000] bg-no-repeat bg-cover"></div>
        <div className="flex md:gap-11 gap-3 text-white items-center justify-around md:h-16 h-[30px] md:mt-28 mt-20 md:mb-40 mb-0">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={264}
              height={64}
              priority
              className="md:w-[264px] md:h-[64px] w-[124px] h-[30px]"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
          <span className="md:text-[45px] text-[20px]">|</span>
          <span className="md:text-[65px] text-[30px] font-black font-publica-play">
            Pulse
          </span>
        </div>

        <div
          style={{
            background: 'url("/images/news.svg")',
            backgroundSize: "contain",
          }}
          className="border-[43px] rounded-4xl border-[#080B16] border-solid outline-2 outline-[#121721] w-[72.7777vw] h-[59.51388vw] bg-no-repeat hidden md:block"
        ></div>

        <div
          style={{
            background: 'url("/images/mobile/pulse-show-mobile.svg")',
            backgroundSize: "cover",
          }}
          className="w-[100vw] h-[206.07vw] bg-no-repeat block md:hidden"
        ></div>

        <div className="main-box text-white absolute md:mt-[-19.7vw] mt-[-98vw] md:!p-15 md:!pl-22 !p-[16px]">
          <div className="flex flex-wrap w-full md:mb-16 mb-[50px] gap-5">
            <div className="lg:flex-2 w-full">
              <h2 className="md:text-[43.8px] text-[28px] font-extrabold uppercase leading-11">
                Media, market &<br />
                Business intelligence
                <br /> platform
              </h2>
              <p className="text-[12px] leading-normal text-white block md:hidden mt-4">
                SaaS solution designed to centralize and optimize workflows for
                independent professionals. Tailored for freelancers,
                solopreneurs, and consultants in cognitive labor fields, it
                delivers an all-in-one tool to streamline tasks, manage
                projects, and access actionable insights. With seamless
                integration of personal data, apps, and workflows, the
                platform’s Unified Dashboard serves as the command center,
                bringing everything you need into one intuitive space
              </p>
              <Button
                variant="outline"
                className="cursor-pointer gradient-border-btn text-[16px] mt-6 bg-transparent rounded-full px-8 py-5 text-white hover:text-white"
              >
                Explore <span className="font-bold">Pulse</span>
              </Button>
            </div>
            <div className="md:text-[18px] text-[12px] lg:flex-3 w-full hidden md:block">
              A media, market & business intelligence platform that seamlessly
              merges your proprietary data with real-time news, social, and
              market signals. By unifying internal and external intelligence
              into a single vantage point, this connected intelligence
              technology reveals new opportunities faster, forecasts outcomes
              more accurately, and empowers you to act with confidence.
            </div>
          </div>
          <div className="sm:flex hidden flex-wrap w-full justify-between lg:gap-y-16 md:gap-y-10 gap-y-3 items-stretch">
            {pulseSectionCardInfo.map((item, index) => (
              <div
                className="main-small-box lg:!w-[30%] sm:!w-[46%] !w-full relative cursor-pointer"
                key={index}
              >
                <div className="color-pattern-bg md:p-6 p-[20px] opacity-80 md:h-[150px]">
                  <div className="flex items-center">
                    <h3 className="md:text-[30px] text-[20px] font-extrabold">
                      {item.title}
                    </h3>
                    <span className="md:text-[15px] text-[12px] italic ml-2">
                      {item.feature}
                    </span>
                  </div>
                  <p className="md:text-[15px] text-[12px]">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-full shadow h-87 rounded overflow-hidden sm:hidden block">
            <AnimatePresence initial={false} custom={direction1}>
              <motion.div
                key={page1}
                custom={direction1}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) paginate1(1);
                  else if (swipe > swipeConfidenceThreshold) paginate1(-1);
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
                  {pulseSectionCardInfo
                    .slice(pages[page1][0], pages[page1][0] + pages[page1][1])
                    .map((item, index) => (
                      <div
                        className="main-small-box w-full relative cursor-pointer"
                        key={index}
                      >
                        <div className="color-pattern-bg p-[20px] opacity-80">
                          <div className="flex items-center">
                            <h3 className="text-[20px] font-extrabold">
                              {item.title}
                            </h3>
                            <span className="text-[12px] italic ml-2">
                              {item.feature}
                            </span>
                          </div>
                          <p className="text-[12px]">{item.content}</p>
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
                onClick={() => paginate1(index - page1)}
                className={`${
                  page1 === index
                    ? "h-[8.66px] w-[26px]"
                    : "w-[10px] h-[10px] opacity-50"
                }`}
              >
                {page1 === index ? (
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
      </section>

      {/* Session section */}
      <section className="relative md:px-14 px-4 w-full flex flex-col items-center justify-center">
        <div className="session-bg z-[-100] h-[66.66vw] top-[calc(27vw+125px)] md:top-[300px] md:h-[30vw]"></div>
        <div className="green-shine-session-mobile md:hidden block z-[-100]"></div>
        <div className="green-shine-session md:block hidden z-[-100]"></div>
        <div className="green-shine-session-small md:block hidden z-[-100]"></div>
        <div className="green-shine-session-2nd-small md:block hidden z-[-100]"></div>
        <div className="green-shine-session-3rd-small md:block hidden z-[-100]"></div>
        <div className="flex md:gap-11 gap-3 text-white items-center justify-between md:mt-39 mt-20 mb-0 md:h-16 h-[30px]">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={214}
              height={53}
              priority
              className="md:w-[264px] md:h-[64px] w-[124px] h-[38px]"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
          <span className="md:text-[45px] text-[20px]">|</span>
          <span className="md:text-[65px] text-[30px] font-publica-play">
            Sessions
          </span>
        </div>

        <div
          style={{
            background: 'url("/images/sessions.svg")',
            backgroundSize: "cover",
            width: "72.57vw",
            height: "60.14vw",
          }}
          className="hidden md:block mt-13"
        >
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(8, 11, 22, 0.00) 31.41%, rgba(8, 11, 22, 0.93) 80.91%, #080B16 100%)",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div>

        <div
          style={{
            background: 'url("/images/mobile/sessions-show-mobile.svg")',
            backgroundSize: "contain",
          }}
          className="w-[100vw] h-[206.07vw] bg-no-repeat block md:hidden"
        ></div>

        <div className="main-box text-white absolute md:mt-[-20.33vw] mt-[-87.4vw] md:!p-15 !px-[16px] !py-5">
          <div className="flex flex-wrap w-full md:mb-16 mb-[50px] gap-5">
            <div className="lg:flex-2 w-full">
              <h2 className="md:text-[43.8px] text-[28px] font-extrabold uppercase leading-11">
                Next-Gen Conference
                <br /> Technology
              </h2>
              <p className="text-[12px] leading-normal text-white block md:hidden mt-2">
                Sessions is a next-generation browser-based conferencing
                solution. Seamlessly integrating with platforms like Zoom and
                Google Meets, Sessions also delivers the power to host your
                meetings directly. Deploy intelligent AI agents to join and
                enhance discussions, providing real-time summaries, action item
                extraction, and sentiment analysis. With modular add-ons for
                task delegation and automated follow-ups, make every meeting
                smarter, more productive with Sessions.
              </p>
              <Button
                variant="ghost"
                className="cursor-pointer green-btn-bg text-[16px] mt-[20px] bg-transparent border-0 px-8 py-5 text-white hover:text-black font-bold"
              >
                Explore Session
              </Button>
            </div>
            <div className="md:text-[18px] text-[12px] lg:flex-3 w-full hidden md:block">
              Sessions is a next-generation browser-based conferencing solution.
              Seamlessly integrating with platforms like Zoom and Google Meets,
              Sessions also delivers the power to host your meetings directly.
              Deploy intelligent AI agents to join and enhance discussions,
              providing real-time summaries, action item extraction, and
              sentiment analysis. With modular add-ons for task delegation and
              automated follow-ups, make every meeting smarter, more productive
              with Sessions.
            </div>
          </div>
          <div className="sm:flex hidden flex-wrap w-full justify-between lg:gap-y-16 md:gap-y-10 gap-y-3 gap-x-0 items-stretch">
            {sessionSectionCardInfo.map((item, index) => (
              <div
                className="main-small-box lg:!w-[30%] sm:!w-[46%] !w-full relative cursor-pointer"
                key={index}
              >
                <div className="md:p-6 p-[16px] opacity-80">
                  <h3 className="md:text-[30px] text-[20px] font-extrabold">
                    {item.title}
                  </h3>
                  <p className="md:text-[15px] text-[12px]">{item.content}</p>
                  <div className="green-polygon-piece absolute bottom-0 right-0 w-[150px] h-[150px] pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-full shadow h-82 rounded overflow-hidden sm:hidden block">
            <AnimatePresence initial={false} custom={direction2}>
              <motion.div
                key={page2}
                custom={direction2}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) paginate2(1);
                  else if (swipe > swipeConfidenceThreshold) paginate2(-1);
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
                  {sessionSectionCardInfo
                    .slice(pages[page2][0], pages[page2][0] + pages[page2][1])
                    .map((item, index) => (
                      <div
                        className="main-small-box w-full relative cursor-pointer"
                        key={index}
                      >
                        <div className="p-[16px] opacity-80">
                          <h3 className="text-[20px] font-extrabold">
                            {item.title}
                          </h3>
                          <p className="text-[12px]">{item.content}</p>
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
                onClick={() => paginate2(index - page2)}
                className={`${
                  page2 === index
                    ? "h-[8.66px] w-[26px]"
                    : "w-[10px] h-[10px] opacity-50"
                }`}
              >
                {page2 === index ? (
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
      </section>

      {/* Platform section */}
      <section className="relative md:px-14 px-4 w-full flex flex-col items-center justify-center mb-[73px]">
        <div className="red-purple-shine-session z-[-100000] md:w-[80.56vw] md:h-[69.44vw] w-[223.47vw] h-[164vw] md:top-[16.66vw] top-[150px]"></div>
        <div className="flex md:gap-11 gap-3 text-white items-center justify-between md:mt-59 mt-[90px] md:mb-29 mb-0 md:h-16 h-[30px]">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={214}
              height={53}
              priority
              className="md:w-[264px] md:h-[64px] w-[124px] h-[30px]"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
          <span className="md:text-[45px] text-[20px]">|</span>
          <span className="md:text-[60px] text-[30px] font-publica-play">
            Platform
          </span>
        </div>
        <div
          style={{
            background: 'url("/images/platforms.svg") no-repeat',
            backgroundSize: "cover",
            width: "72.57vw",
            height: "60.14vw",
          }}
          className="hidden md:block"
        >
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(8, 11, 22, 0.00) 31.41%, rgba(8, 11, 22, 0.93) 80.91%, #080B16 100%)",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div>
        <div
          style={{
            background: 'url("/images/mobile/platform-show-mobile.svg")',
            backgroundSize: "contain",
          }}
          className="w-[100vw] h-[206.07vw] bg-no-repeat block md:hidden"
        ></div>

        <div className="w-full main-box text-white absolute md:mt-[-21.46vw] mt-[-93.8vw] md:!p-15 md:!pl-22 !p-[16px] !pb-[30px]">
          <div className="flex flex-wrap w-full mb-16 gap-5">
            <div className="lg:flex-2 w-full">
              <h2 className="md:text-[43.8px] text-[28px] font-extrabold uppercase leading-11">
                Unified intelligence
                <br /> platform
              </h2>
              <p className="text-[12px] leading-normal text-white block md:hidden mt-2">
                SaaS solution designed to centralize and optimize workflows for
                independent professionals. Tailored for freelancers,
                solopreneurs, and consultants in cognitive labor fields, it
                delivers an all-in-one tool to streamline tasks, manage
                projects, and access actionable insights. With seamless
                integration of personal data, apps, and workflows, the
                platform’s Unified Dashboard serves as the command center,
                bringing everything you need into one intuitive space
              </p>
              <Button
                variant="outline"
                className="cursor-pointer red-btn-bg text-[16px] mt-[20px] bg-transparent border-0 px-8 py-5 text-white hover:text-black font-bold"
              >
                Explore Platform
              </Button>
            </div>
            <div className="md:text-[18px] text-[12px] lg:flex-3 w-full hidden md:block">
              SaaS solution designed to centralize and optimize workflows for
              independent professionals. Tailored for freelancers, solopreneurs,
              and consultants in cognitive labor fields, it delivers an
              all-in-one tool to streamline tasks, manage projects, and access
              actionable insights. With seamless integration of personal data,
              apps, and workflows, the platform’s Unified Dashboard serves as
              the command center, bringing everything you need into one
              intuitive space
            </div>
          </div>
          <div className="sm:flex flex-wrap w-full justify-between lg:gap-y-16 md:gap-y-10 gap-y-3 gap-x-0 items-stretch hidden">
            {platformSectionCardInfo.map((item, index) => (
              <div
                className="main-small-box lg:!w-[30%] sm:!w-[46%] !w-full relative cursor-pointer"
                key={index}
              >
                <div className="md:p-6 p-[16px] opacity-80">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="md:text-[30px] text-[20px] font-extrabold">
                      {item.title}
                    </h3>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={23}
                      height={23}
                      className="md:mr-4 mr-1 md:h-[23px] h-[20px]"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <p className="md:text-[15px] text-[12px]">{item.content}</p>
                  <div className="red-polygon-piece absolute bottom-0 right-0 w-[150px] h-[150px] pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-full shadow h-72 rounded overflow-hidden sm:hidden block">
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
                  {platformSectionCardInfo
                    .slice(pages[page][0], pages[page][0] + pages[page][1])
                    .map((item, index) => (
                      <div
                        className="main-small-box lg:!w-[30%] sm:!w-[46%] !w-full relative cursor-pointer"
                        key={index}
                      >
                        <div className="md:p-6 p-[16px] opacity-80">
                          <div className="flex items-center justify-between w-full">
                            <h3 className="md:text-[30px] text-[20px] font-extrabold">
                              {item.title}
                            </h3>
                            <Image
                              src={item.icon}
                              alt={item.title}
                              width={23}
                              height={23}
                              className="md:mr-4 mr-1 md:h-[23px] h-[20px]"
                              style={{ width: "auto", height: "auto" }}
                            />
                          </div>
                          <p className="md:text-[15px] text-[12px]">
                            {item.content}
                          </p>
                          <div className="red-polygon-piece absolute bottom-0 right-0 w-[150px] h-[150px] pointer-events-none" />
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
      </section>
    </>
  );
}
