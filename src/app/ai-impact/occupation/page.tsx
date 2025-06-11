"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import "./page.css";
import AIImpactFooter from "@/layouts/AIImpactFooter";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setModalOpen(false);
  }, [pathname]);
  return (
    <>
      <div className="w-full lg:px-15 md:px-4">
        <div className="absolute top-0 left-0 w-full z-[-1020] h-[73.6vw] bg-[url('/images/polygon-pattern.svg')] bg-cover mix-blend-color"></div>
        <div className="shineBg_body_red_circle lg:size-[546px] lg:left-[-255px] lg:top-[-217px] md:size-[409px] md:left-[-121px] md:top-[-90px] size-[229px] left-[-48px] top-[-58px]"></div>
        <div className="shineBg_body_red_circle lg:size-[602px] lg:right-[-220px] lg:top-[465px] md:size-[352px] md:right-[-94px] md:top-[278px] md:block hidden"></div>

        <div className="md:absolute md:mt-0 mt-2 lg:w-[calc(100vw-140px)] lg:px-5 md:w-[calc(100vw-32px)] w-full flex items-center justify-between top-[41px] h-[42px] z-10 gap-9">
          <div className="h-[1px] flex-1 !bg-[#ffffff1a]"></div>
          <Image
            src="/images/icons/thline.svg"
            alt="logo"
            width={35}
            height={42}
            className="lg:w-[35px] lg:h-[42px] w-[28px] h-[32px] z-20"
          />
          <div className="h-[1px] flex-1 !bg-[#ffffff1a]"></div>
        </div>
        <div className="flex w-full justify-start items-center gap-2 h-6 md:mt-[50px] mt-[10px] md:p-0 pl-4 z-20">
          <Image
            src="/images/icons/back-btn.svg"
            alt="back-btn"
            width={24}
            height={24}
          />
          <p className="text-[16px] text-white">Back to Platform</p>
        </div>
        <div className="main-box lg:mt-[55px] md:mt-8 mt-4 lg:mb-[42px] mb-6 w-full lg:p-10 lg:pr-11 px-4 py-[30px] text-white">
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
                  />
                </Button>
              </div>
              <div className="px-1">
                <p className="lg:text-[18px] text-sm">
                  What Purpose Does it Serve?
                </p>
                <p className="lg:text-[18px] text-xs">
                  The Professional Development Hub stands as a cornerstone of
                  the Firesight Platform. Your gateway to mastering the future
                  of work. Our platform is designed to empower solopreneurs with
                  the tools and knowledge needed to thrive in an ever-growing
                  AI-driven job market. Dedicated to facilitating personalised
                  and occupation-specific learning experiences, empowered by our
                  cutting edge AI technology. By focusing on the tools and
                  skills critical for today’s dynamic job landscape, the
                  Professional Development Hub is your partner in adapting to
                  and excelling in the era of AI-driven employment.
                </p>
              </div>
            </div>
          )}
          <div
            className="w-full flex justify-start items-center gap-4 text-white"
            onClick={() => setModalOpen(!modalOpen)}
          >
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
            <Image
              src="/images/icons/union.svg"
              alt="union"
              width={24}
              height={24}
              className="lg:w-[24px] lg:h-[24px] md:w-[17px] md:h-[17px] w-[16px] h-[16px]"
            />
          </div>

          <div className="w-full lg:mt-19 md:mt-10 mt-15">
            <TabBar type={0} />
          </div>

          {/* Back to AI Impact Home*/}
          <div className="flex w-full justify-start items-center gap-2 h-6 lg:mt-15 lg:mb-12 md:mt-11 md:mb-9 mt-8 mb-10">
            <Image
              src="/images/icons/back-btn.svg"
              alt="back-btn"
              width={24}
              height={24}
            />
            <p className="lg:text-[16px] md:text-[13px] text-white">
              Back to Occupational Categories
            </p>
          </div>

          {/*Summary*/}
          <div className="flex w-full gap-2 lg:mt-22 md:mt-12 mt-8">
            <div className="flex flex-col gap-3 flex-3">
              <p className="lg:text-[32px] md:text-[20px] text-[18px] font-bold text-[#E93249]">
                Creative Director
              </p>
              <div className="flex gap-3 items-end">
                <p className="lg:text-[70px] md:text-[36px] text-[32px] font-bold leading-none lg:h-[60px] md:h-[32px] h-[30px]">
                  #451
                </p>
                <div className="w-[1px] lg:h-[18px] md:h-[14px] h-[13px] lg:mb-[6px] mb-1 bg-[#ffffff1a]"></div>
                <p className="lg:text-[18px] md:text-sm text-[13px]">
                  451 of 3999
                </p>
                <div className="w-[1px] lg:h-[18px] md:h-[14px] h-[13px] lg:mb-[6px] mb-1 bg-[#ffffff1a]"></div>
                <p className="lg:text-[18px] md:text-sm text-[13px]">
                  Risk Level: <b>High</b>
                </p>
              </div>
              <div className="lg:flex-4 flex-3 md:hidden items-center justify-end flex pt-[30px]">
                <Image
                  src="/images/speedometer.svg"
                  alt="speedometer"
                  width={596}
                  height={372}
                  className="size-fit"
                />
              </div>
              <p className="lg:text-[20px] md:text-[18px] text-[16px] font-bold uppercase">
                Occupation description
              </p>
              <p className="lg:text-[15.7px] text-[11px] mr-8">
                A Creative Director is responsible for leading a team of
                creative professionals in developing innovative ideas and
                concepts for various projects, ensuring that the creative vision
                aligns with the objectives of the organization or client.
              </p>
            </div>
            <div className="lg:flex-4 flex-3 md:flex items-center justify-end hidden pt-[30px]">
              <Image
                src="/images/speedometer.svg"
                alt="speedometer"
                width={596}
                height={372}
                className="size-fit"
              />
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#ffffff1a] lg:my-18 my-9"></div>

          {/* Constituent Occupations*/}
          <div className="lg:my-18 my-9 ml-4">
            <div className="flex gap-3 w-full items-center justify-start">
              <p className="lg:text-[20px] md:text-[18px] text-[16px] font-bold uppercase">
                Constituent Occupations
              </p>
              <Image
                src="/images/icons/union.svg"
                alt="union"
                width={24}
                height={24}
                className="lg:w-[24px] lg:h-[24px] md:w-[17px] md:h-[17px] w-[16px] h-[16px]"
              />
            </div>
            <p className="lg:text-[15.7px] text-[11px] mr-8">
              A Creative Director is responsible for leading a team of creative
              professionals in developing innovative ideas and concepts for
              various projects, ensuring that the creative vision aligns with
              the objectives of the organization or client.
            </p>
          </div>

          <div className="h-[1px] w-full bg-[#ffffff1a]"></div>

          <div className="flex md:flex-row flex-col md:gap-5">
            <div className="flex flex-col lg:gap-8 gap-4 flex-7 md:border-r-[1px] md:border-t-0 border-t-[1px] border-[#ffffff1a] md:order-none order-last lg:py-15 md:py-8 py-10 lg:pr-15 lg:pl-4 pr-5">
              <div className="flex gap-3 w-full items-center justify-start">
                <p className="lg:text-[20px] md:text-[18px] text-[16px] font-bold uppercase">
                  SUBSTITUTABILITY SCORE
                </p>
                <Image
                  src="/images/icons/union.svg"
                  alt="union"
                  width={24}
                  height={24}
                  className="lg:w-[24px] lg:h-[24px] md:w-[17px] md:h-[17px] w-[16px] h-[16px]"
                />
              </div>
              <div className="flex gap-3 items-end">
                <p className="lg:text-[70px] text-[48px] font-bold leading-none text-[#E93249] lg:h-[60px] h-[42px]">
                  4
                </p>
                <div className="w-[1px] lg:h-[18px] md:h-[14px] h-[13px] lg:mb-[6px] mb-1 bg-[#ffffff1a]"></div>
                <p className="lg:text-[18px] md:text-sm text-[13px]">4/10</p>
                <div className="w-[1px] lg:h-[18px] md:h-[14px] h-[13px] lg:mb-[6px] mb-1 bg-[#ffffff1a] md:block hidden"></div>
                <p className="lg:text-[18px] md:text-sm text-[13px]">
                  Risk Level: <b>Moderate</b>
                </p>
              </div>
              <p className="lg:text-[15.7px] text-[11px] lg:mt-7 mt-4">
                The role of a Creative Director falls into the moderate
                substitutability category. While some aspects of the role
                involve tasks that can be augmented or supported by AI, such as
                developing creative strategies, reviewing designs, and managing
                budgets, there are critical elements that resist full
                automation. Creative direction, artistic direction, client
                collaboration, pitching concepts, and fostering a creative
                culture all require human intuition, emotional intelligence, and
                strategic decision-making, which are less amenable to
                automation. Therefore, while AI can assist in certain aspects of
                the role, the core functions of a Creative Director are likely
                to remain reliant on human expertise for the foreseeable future.
              </p>
            </div>
            <div className="flex flex-col lg:gap-12 gap-8 flex-13 lg:py-15 py-8 items-center">
              <div className="flex gap-3 items-center justify-start">
                <p className="lg:text-[20px] md:text-[18px] text-[16px] font-bold uppercase">
                  Occupation Economy Selector
                </p>
                <Image
                  src="/images/icons/union.svg"
                  alt="union"
                  width={24}
                  height={24}
                  className="lg:w-[24px] lg:h-[24px] md:w-[17px] md:h-[17px] w-[16px] h-[16px]"
                />
              </div>
              <div className="flex gap-3 items-end">
                <div className="flex items-center gap-1">
                  <Image
                    src="/images/radio-off.svg"
                    alt="Radio Off"
                    width={24}
                    height={24}
                    className="lg:w-[24px] lg:h-[24px] md:w-[17px] md:h-[17px] w-[16px] h-[16px]"
                  />
                  <p className="lg:text-[18px] md:text-sm text-[13px] text-[#86878D]">
                    Low Income
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Image
                    src="/images/radio-on.svg"
                    alt="Radio On"
                    width={24}
                    height={24}
                    className="lg:w-[24px] lg:h-[24px] md:w-[17px] md:h-[17px] w-[16px] h-[16px]"
                  />
                  <p className="lg:text-[18px] md:text-sm text-[13px]">
                    Emerging
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Image
                    src="/images/radio-off.svg"
                    alt="Radio Off"
                    width={24}
                    height={24}
                    className="lg:w-[24px] lg:h-[24px] md:w-[17px] md:h-[17px] w-[16px] h-[16px]"
                  />
                  <p className="lg:text-[18px] md:text-sm text-[13px] text-[#86878D]">
                    Advanced
                  </p>
                </div>
              </div>
              <div className="lg:mt-7 md:mt-4 flex items-center justify-center flex-1 lg:pl-15 pl-3">
                <Image
                  src="/images/map.png"
                  alt="Map"
                  width={700}
                  height={411}
                ></Image>
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col md:gap-5">
            <div className="flex flex-col lg:gap-11 gap-4 flex-1 md:border-r-[1px] md:border-t-0 border-t-[1px] border-[#ffffff1a] md:order-none order-last lg:py-15 md:py-8 py-10 lg:pr-15 lg:pl-4 pr-5">
              <div className="flex gap-3 w-full items-center justify-start ml-13">
                <p className="lg:text-[20px] md:text-[18px] text-[16px] font-bold uppercase">
                  Occupation Task Breakdown
                </p>
                <Image
                  src="/images/icons/union.svg"
                  alt="union"
                  width={24}
                  height={24}
                  className="lg:w-[24px] lg:h-[24px] md:w-[17px] md:h-[17px] w-[16px] h-[16px]"
                />
              </div>
              <div className="flex gap-9">
                <div className="w-3 !h-[725px] relative">
                  <div className="absolute w-3 h-[218px] top-[190px] rounded-[5px] border-[1px] border-[#252832] bg-[#131621] z-20"></div>
                  <div className="absolute w-[1px] bg-[#19202c] h-full left-[6px] z-10"></div>
                </div>
                <div className="flex flex-col "></div>
              </div>
            </div>
            <div className="flex flex-col lg:gap-12 gap-8 flex-1 lg:py-15 py-8 items-center">
              <div className="flex gap-3 items-center justify-start">
                <p className="lg:text-[20px] md:text-[18px] text-[16px] font-bold uppercase">
                  Occupation Economy Selector
                </p>
                <Image
                  src="/images/icons/union.svg"
                  alt="union"
                  width={24}
                  height={24}
                  className="lg:w-[24px] lg:h-[24px] md:w-[17px] md:h-[17px] w-[16px] h-[16px]"
                />
              </div>

              <p className="lg:text-[15.7px] text-[11px] lg:mt-7 mt-4">
                
              </p>
            </div>
          </div>
        </div>
      </div>

      <AIImpactFooter>
        <div className="w-[654px] h-[612px] bottom-0 right-0 overflow-hidden shineBg_body_red_circle bg-[length:138%_139%]"></div>
      </AIImpactFooter>
    </>
  );
}

function TabBar({ type }: { type: number }) {
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
      className="h-16 border-b-[1px] border-b-[#ffffff33] flex px-0 w-auto overflow-x-hidden relative box-border"
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
              "lg:text-[18px] md:text-[13px] text-[12px] pt-4 flex flex-col items-center gap-4 h-[63px]"
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
