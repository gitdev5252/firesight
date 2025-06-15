"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import "./page.css";
import AIImpactFooter from "@/layouts/AIImpactFooter";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();
  const [curPath, setCurPath] = useState("");
  useEffect(() => {
    setModalOpen(false);
    console.log("pathname changed!", pathname);
    setCurPath(pathname);

    const container = document.getElementById("main-container");
    if (container && pathname != "/ai-impact/home")
      container.style.setProperty("background", "#0E111C", "important");
  }, [pathname]);
  return (
    <>
      <div className="w-full lg:px-15 md:px-4">
        <div className="absolute top-0 left-0 w-full z-[-1020] h-[73.6vw] bg-[url('/images/polygon-pattern.svg')] bg-cover mix-blend-color"></div>
        <div className="shineBg_body_red_circle lg:size-[546px] lg:left-[-255px] lg:top-[-217px] md:size-[409px] md:left-[-121px] md:top-[-90px] size-[229px] left-[-48px] top-[-58px]"></div>
        <div className="shineBg_body_red_circle lg:size-[602px] lg:right-[-220px] lg:top-[465px] md:size-[352px] md:right-[-94px] md:top-[278px] md:block hidden"></div>

        <div className="md:absolute md:mt-0 mt-2 lg:w-[calc(100vw-140px)] lg:px-1 md:w-[calc(100vw-32px)] w-full flex items-center justify-center top-[41px] h-[42px] z-[10] gap-9">
          <div className="relative w-full flex items-center justify-center">
            <div
              className="h-[1px] md:left-[162px] left-0 right-[calc(50%+57px)] absolute opacity-10"
              style={{
                background:
                  "linear-gradient(to left, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
              }}
            ></div>
            <Image
              src="/images/icons/thline.svg"
              alt="logo"
              width={35}
              height={42}
              className="lg:w-[35px] lg:h-[42px] w-[28px] h-[32px] z-20"
            />
            <div
              className="h-[1px] left-[calc(50%+57px)] right-0 absolute opacity-10"
              style={{
                background:
                  "linear-gradient(to right, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.45) 47%, rgba(255, 255, 255, 0) 100%)",
              }}
            ></div>
          </div>
        </div>
        <div className="flex w-full justify-start items-center gap-2 h-6 md:mt-[50px] mt-[10px] md:p-0 pl-4 z-20">
          <Link href="/" className="z-[200]">
            <Image
              src="/images/icons/back-btn.svg"
              alt="back-btn"
              width={24}
              height={24}
            />
          </Link>
          <p className="text-[16px] text-white">Back to Platform</p>
        </div>
        <div
          id="main-container"
          className="main-box-1 lg:mt-[55px] md:mt-8 mt-4 lg:mb-[42px] mb-6 w-full lg:p-10 lg:pr-11 px-4 py-[30px]"
          style={{
            background:
              curPath != "/ai-impact/home" ? "#0E111C !important" : "",
          }}
        >
          {modalOpen && (
            <div className="main-modal-box text-white !absolute lg:top-29 lg:left-9 lg:right-19 lg:py-10 lg:px-15 top-18 md:left-8 md:right-8 md:px-6 md:py-8 left-0 right-0 pt-7 pl-7 pr-8 pb-5 z-500">
              <div className="flex justify-between items-center">
                <p className="lg:text-2xl text-[16px]">
                  Professional Development Hub
                </p>
                <Button
                  onClick={() => setModalOpen(false)}
                  variant="ghost"
                  className="p-0"
                >
                  <Image
                    src="/images/mobile/menu-close.svg"
                    alt="Close"
                    width={24}
                    height={24}
                    className="lg:size-6 md:size-[18px] size-[20px]"
                  />
                </Button>
              </div>
              <div className="md:mt-8 mt-17 flex flex-col lg:gap-8 md:gap-7 gap-8">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                    >
                      <path
                        d="M12.3623 3.78809V10.2109L6.7998 13.4229L1.2373 10.2109V3.78809L6.7998 0.576172L12.3623 3.78809Z"
                        fill="white"
                        stroke="white"
                      />
                    </svg>
                    <p className="lg:text-[18px] text-sm md:font-normal font-bold">
                      What Purpose Does it Serve?
                    </p>
                  </div>
                  <p className="lg:text-[18px] text-xs">
                    The Professional Development Hub stands as a cornerstone of
                    the Firesight Platform. Your gateway to mastering the future
                    of work. Our platform is designed to empower solopreneurs
                    with the tools and knowledge needed to thrive in an
                    ever-growing AI-driven job market. Dedicated to facilitating
                    personalised and occupation-specific learning experiences,
                    empowered by our cutting edge AI technology. By focusing on
                    the tools and skills critical for today’s dynamic job
                    landscape, the Professional Development Hub is your partner
                    in adapting to and excelling in the era of AI-driven
                    employment.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                    >
                      <path
                        d="M12.3623 3.78809V10.2109L6.7998 13.4229L1.2373 10.2109V3.78809L6.7998 0.576172L12.3623 3.78809Z"
                        fill="white"
                        stroke="white"
                      />
                    </svg>
                    <p className="lg:text-[18px] text-sm md:font-normal font-bold">
                      AI Impact Index
                    </p>
                  </div>
                  <p className="lg:text-[18px] text-xs">
                    Our pioneering feature of the hub, the AI Impact Index
                    provides an exhaustive analysis of over 40,000 occupations,
                    categorised into 4,000 interactive core occupations
                    evaluating the potential risks and challenges posed by AI
                    and automation. This index is a valuable resource for users,
                    offering insights into how their roles might evolve, and
                    guiding them towards making informed decisions about their
                    career trajectories and reskilling opportunities.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                    >
                      <path
                        d="M12.3623 3.78809V10.2109L6.7998 13.4229L1.2373 10.2109V3.78809L6.7998 0.576172L12.3623 3.78809Z"
                        fill="white"
                        stroke="white"
                      />
                    </svg>
                    <p className="lg:text-[18px] text-sm md:font-normal font-bold">
                      Coming Soon Regions
                    </p>
                  </div>
                  <p className="lg:text-[18px] text-xs">
                    Personalised Learning Modules: Tailored to meet your unique
                    career aspirations and learning needs, these modules will
                    use advanced AI algorithms to recommend the most relevant
                    and impactful learning paths for your professional growth.
                    Resume Builder: Utilising a finely tuned Language Learning
                    Model (LLM) with a comprehensive occupation-specific
                    knowledge base, this module assists users in creating
                    resumes that stand out Firesight Community: Join our
                    dedicated Discord server for networking, peer support, and
                    professional growth—a vibrant community ideal for
                    freelancers and solopreneurs. Career Advisor Chatbot: Also
                    powered by the advanced LLM, this chatbot offers real-time,
                    personalized career guidance. This AI-driven counsellor
                    supports users in navigating their career paths, providing
                    advice on job searches, interview preparation, and career
                    progression.
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="w-full flex justify-start items-center gap-4 text-white">
            <Image
              src="/images/icons/pro-hub.svg"
              alt="professional hub"
              width={49}
              height={41}
              className="lg:w-[49px] lg:h-[41px] md:w-[38px] md:h-[32px] w-[31px] h-[26px]"
            />
            <div className="w-[1px] h-[18px] bg-[#ffffff1a] md:block hidden"></div>
            <p className="lg:text-[32px] md:text-2xl text-[18px] font-bold">
              Professional Development Hub
            </p>
            <div onClick={() => setModalOpen(!modalOpen)}>
              <Image
                src={`/images/icons/union${modalOpen ? "-red" : ""}.svg`}
                alt="union"
                width={24}
                height={24}
                className="lg:w-[24px] lg:h-[24px] md:w-[17px] md:h-[17px] w-[16px] h-[16px]"
              />
            </div>
          </div>

          <div className="w-full lg:mt-19 md:mt-10 mt-15">
            <TabBar type={0} />
          </div>
          {/* Search Bar */}
          <input
            className="h-12 lg:mt-27 md:mt-12 mt-14 w-full bg-white rounded-[25px] pl-6"
            placeholder="Search Occupations"
          ></input>

          {/* <p className="lg:text-[20px] mt-[50px] font-bold text-[#E93249] leading-[120%]">Engineering & Agriculture</p> */}

          {/* Main Panel */}
          {children}
        </div>
      </div>

      <AIImpactFooter>
        <div className="w-[904px] h-[852px] bottom-[-306px] right-[-246px] overflow-hidden shineBg_body_red_circle bg-[length:138%_139%] lg:block hidden"></div>
      </AIImpactFooter>
    </>
  );
}

export function TabBar({ type }: { type: number }) {
  const tabItems = [
    [
      "AI Impact Index",
      "Community",
      "Training Modules",
      "Resume Builder",
      "Career Advisor",
    ],
    [
      "Alphabetical",
      "Most Impacted",
      "Least Impacted",
      "Occupational Categories",
    ],
  ];

  const [curItem, setCurItem] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      const container = containerRef.current;
      const content = contentRef.current;

      if (container && content) {
        const containerWidth = container.offsetWidth;
        const contentWidth = content.scrollWidth;

        const maxDrag = contentWidth - containerWidth;

        if (maxDrag > 0) {
          setConstraints({ left: -maxDrag, right: 0 });
        } else {
          setConstraints({ left: 0, right: 0 });
        }
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);

    return () => window.removeEventListener("resize", updateConstraints);
  }, []);
  return (
    <div
      ref={containerRef}
      className="lg:h-16 h-14 border-b-[1px] border-b-[#ffffff33] flex px-0 w-auto overflow-x-hidden relative box-border"
    >
      <motion.div
        ref={contentRef}
        className={`cursor-grab flex justify-between gap-14 sm:px-0 px-14 box-border w-full ${
          type ? " lg:pr-[16vw]" : ""
        }`}
        drag="x"
        dragConstraints={constraints}
        dragElastic={0.1}
      >
        {tabItems[type].map((ele, index) => (
          <div
            key={ele}
            className={
              (curItem === index
                ? "text-white font-bold "
                : "text-[#86878D] ") +
              "lg:text-[18px] md:text-[13px] text-[12px] pt-4 flex flex-col items-center gap-4 lg:h-[63px] h-[55px]"
            }
            onClick={() => {
              setCurItem(index);
            }}
          >
            <p className="text-center w-full flex text-nowrap">{ele}</p>
            <div
              className={curItem === index ? "w-full h-1 !bg-[#E93249]" : ""}
            ></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
