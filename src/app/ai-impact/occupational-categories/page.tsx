"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import "./page.css";
import AIImpactFooter from "@/layouts/AIImpactFooter";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Page() {
  const mainCardInfo = [
    { name: "Carpenter", number: 2890 },
    { name: "Carpenter", number: 2890 },
    { name: "Carpenter", number: 2890 },
    { name: "Copywriter", number: 965 },
    { name: "Mechanic", number: 1890 },
    { name: "Carpenter", number: 3265 },
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setModalOpen(false);
  }, [pathname]);
  return (
    <>
      <div className="w-full lg:px-15 md:px-4">
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
          <Link href="/">
            <Image
              src="/images/icons/back-btn.svg"
              alt="back-btn"
              width={24}
              height={24}
            />
          </Link>
          <p className="text-[16px] text-white">Back to Platform</p>
        </div>
        <div className="main-box lg:mt-[55px] md:mt-8 mt-4 lg:mb-[42px] mb-6 w-full lg:p-10 lg:pr-11 px-4 py-[30px]">
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
          {/* Search Bar */}
          <input
            className="h-12 lg:mt-27 md:mt-12 mt-14 w-full bg-white rounded-[25px] pl-6"
            placeholder="Search Occupations"
          ></input>

          {/* Back to AI Impact Home*/}
          <div className="flex w-full justify-start items-center gap-2 h-6 lg:mt-15 lg:mb-12 md:mt-11 md:mb-9 mt-8 mb-10">
            <Image
              src="/images/icons/back-btn.svg"
              alt="back-btn"
              width={24}
              height={24}
            />
            <p className="text-[16px] text-white">
              Back to AI Impact Index Homepage
            </p>
          </div>

          <div className="w-full my-0">
            <TabBar type={1} />
          </div>
          <p className="lg:text-[20px]  lg:mt-15 lg:mb-14 md:mt-12 md:mb-8 mt-15 mb-7 font-bold text-[#E93249] leading-[120%]">
            Engineering & Agriculture
          </p>

          {/* Main Panel */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-between lg:gap-y-9 gap-y-4 text-white font-bold lg:text-2xl text-[16px] leading-normal">
            {mainCardInfo.map((ele, index) => (
              <div
                key={index}
                className="main-small-box flex items-center justify-center lg:h-90 md:h-54 h-79 md:w-[31%] sm:w-[48.5%] w-full"
              >
                <div className="color-pattern-bg"></div>
                <p className="text-center">{ele.name}</p>
                <div
                  className="absolute flex items-center justify-center lg:bottom-[21px] lg:right-[22px] md:bottom-3 md:right-3 right-5 bottom-4 lg:w-[102px] lg:h-[47px] w-[63px] h-[29px] bg-no-repeat"
                  style={{
                    background: `url(/images/tag-back-${Math.floor(
                      ele.number / 1000
                    )}.svg)`,
                    backgroundSize: "cover",
                  }}
                >
                  #{ele.number}
                </div>
              </div>
            ))}
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
