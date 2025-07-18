"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useGetOccupationByNameQuery, useGetRelatedOccupationsByNameQuery, useGetOccupationTaskByNameQuery } from "@/store/api/occupationApi";

import "../home/page.css";
import { getThermometer } from "@/utils/getThermometer";
import AIImpactFooter from "@/layouts/AIImpactFooter";

const itemsPerSlide = 12; // or 6 or whatever your layout supports (like 4 per row × 2 rows)
const swipeConfidenceThreshold = 100;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [occupationTab, setOccupationTab] = useState(0);
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  // useSearchOccupationsQuery,
  const occupationParam = params?.occupation_detail;
  const occupation = decodeURIComponent(
    Array.isArray(occupationParam) ? occupationParam[0] : occupationParam || "Unknown Occupation"
  );

  // Query data
  const taskProgress = [50, 0, 100, 0];

  const { data: impactData } = useGetOccupationByNameQuery(occupation);
  const { data: categoryData } = useGetRelatedOccupationsByNameQuery(occupation);
  const { data: taskData, isLoading: isTaskLoading } = useGetOccupationTaskByNameQuery(occupation);
  const transformedTasks = taskData
    ? {
      tasks: !isTaskLoading
        ? Array.from({ length: 20 }, (_, i) => {
          const key = `task_${i + 1}` as keyof typeof taskData;
          const raw = Number(taskData && key in taskData ? taskData[key] : 0);
          return (raw / 10) * 100; // Convert to percent
        })
        : taskProgress,
    }
    : null;


  // Related occupations & pagination
  const relatedOccupations = categoryData?.relatedOccupations || [];
  const totalSlides = Math.ceil(relatedOccupations.length / itemsPerSlide);
  // Responsive occupationsPerSlide
  const [occupationsPerSlide, setOccupationsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setOccupationsPerSlide(2);
      } else {
        setOccupationsPerSlide(3);
      }
    };
    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalOccupationSlides = Math.ceil(relatedOccupations.length / occupationsPerSlide);
  // const [curWindowWidth, setCurWindowWidth] = useState(0);

  const thermometerSrc = getThermometer(impactData?.thermometer);

  const [[page1, direction1], setPage1] = useState([0, 0]);
  const [[page2, direction2], setPage2] = useState([0, 0]);

  const paginate1 = (newDirection: number) => {
    setPage1(([prevPage]) => {
      const newPage = (prevPage + newDirection + totalSlides) % totalSlides;
      return [newPage, newDirection];
    });
  };
  const paginate2 = (newDirection: number) => {
    setPage2(([prevPage]) => {
      const newPage = (prevPage + newDirection + totalOccupationSlides) % totalOccupationSlides;
      return [newPage, newDirection];
    });
  };
  const sortedOccupations =
    occupationTab === 1
      ? [...relatedOccupations].sort((a, b) => b.ranking - a.ranking)
      : occupationTab === 2
        ? [...relatedOccupations].sort((a, b) => a.ranking - b.ranking)
        : relatedOccupations;

  // useEffect(() => {
  //   setCurWindowWidth(window.innerWidth);
  //   const handleResize = () => {
  //     setCurWindowWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    setModalOpen(false);
  }, [pathname]);
  const [selectedEconomy, setSelectedEconomy] = useState("Emerging");
  return (
    <>
      <div className="w-full lg:px-15 md:px-4">
        <div className="absolute top-0 left-0 w-full z-[-1020] h-[73.6vw] bg-[url('/images/polygon-pattern.svg')] bg-cover mix-blend-color"></div>
        <div className="shineBg_body_blue_circle lg:size-[546px] lg:left-[-255px] lg:top-[-217px] md:size-[409px] md:left-[-121px] md:top-[-90px] size-[229px] left-[-48px] top-[-58px]"></div>
        <div className="shineBg_body_blue_circle lg:size-[602px] lg:right-[-220px] lg:top-[465px] md:size-[352px] md:right-[-94px] md:top-[278px] md:block hidden"></div>
        <div className="shineBg_body_blue_circle lg:size-[546px] lg:left-[-200px] lg:top-[32.83%] md:w-[426px] md:h-[402px] md:left-[-143px] md:top-[26.25%] md:block hidden"></div>
        <div className="shineBg_body_blue_circle lg:size-[602px] lg:right-[-270px] lg:top-[48.32%] md:w-[426px] md:h-[402px] md:right-[-172px] md:top-[42.47%] md:block hidden"></div>
        <div className="shineBg_body_blue_circle lg:w-[904px] lg:h-[852px] lg:left-[-324px] lg:bottom-[260px] md:w-[426px] md:h-[402px] md:left-[-117px] md:bottom-[836px] md:block hidden"></div>

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
        <div className="flex w-full justify-start items-center gap-2 h-6 md:mt-[50px] mt-[10px] md:p-0 pl-4 z-[200]">
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
        <div className="main-box-1 lg:mt-[55px] md:mt-8 mt-4 lg:mb-[42px] md:mb-4 mb-6 w-full lg:p-10 lg:pr-11 px-4 py-[30px] text-white">
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
                    The Professional Development Hub is Firesight&apos;s gateway to
                    future-proof skills. Your gateway to mastering the future of
                    work. Our platform is designed to empower solopreneurs with
                    the tools and knowledge needed to thrive in an ever-growing
                    AI-driven job market. Dedicated to facilitating personalised
                    and occupation-specific learning experiences, empowered by
                    our cutting edge AI technology. By focusing on the tools and
                    skills critical for today&apos;s dynamic job landscape, the
                    Professional Development Hub is your partner in adapting to
                    and excelling in the era of AI-driven employment.
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

          {/* Back to AI Impact Home*/}
          <div className="flex w-full justify-start items-center gap-2 h-6 lg:mt-15 lg:mb-12 md:mt-11 md:mb-9 mt-8 mb-10 cursor-pointer" onClick={() => router.back()}  >
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
          <div className="flex w-full gap-2">
            <div className="flex flex-col gap-3 flex-3">
              <p className="lg:text-[32px] md:text-[20px] text-[18px] font-bold text-[#E93249]">
                {occupation}
              </p>
              <div className="flex gap-3 items-end mt-15">
                <p className="lg:text-[70px] md:text-[36px] text-[32px] font-bold leading-none lg:h-[60px] md:h-[32px] h-[30px]">
                  #{impactData?.ranking}
                </p>
                <div className="w-[1px] lg:h-[18px] md:h-[14px] h-[13px] lg:mb-[6px] mb-1 bg-[#ffffff1a]"></div>
                <p className="lg:text-[18px] md:text-sm text-[13px]">
                  {impactData?.ranking} of {impactData?.totalOccupations}
                </p>
                <div className="w-[1px] lg:h-[18px] md:h-[14px] h-[13px] lg:mb-[6px] mb-1 bg-[#ffffff1a]"></div>
                <p className="lg:text-[18px] md:text-sm text-[13px]">
                  Risk Level: <b>{impactData?.thermometer}</b>
                </p>
              </div>
              <div className="lg:flex-4 flex-3 md:hidden items-center justify-end flex pt-[30px]">
                <Image
                  src={"/images/speedometer.svg"}
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
                {taskData?.description ||
                  "This occupation is not available in the database."}
              </p>
            </div>
            <div className="lg:flex-4 flex-3 md:flex items-center justify-end hidden pt-[30px]">
              <Image
                src={thermometerSrc}
                alt="speedometer"
                width={596}
                height={372}
              // className="size-fit"
              />
              {/* <Image
                src="/images/speedometer.svg"
                alt="speedometer"
                width={596}
                height={372}
                className="size-fit"
              /> */}
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#ffffff1a] lg:my-18 my-9"></div>

          {/* Constituent Occupations*/}
          <div className="lg:my-18 my-9">
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

            <div className="relative w-full lg:mt-16 lg:mb-6 my-8 lg:min-h-[130px] min-h-[230px]">
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
                  transition={{ duration: 0.5 }}
                  className="absolute w-full h-full flex flex-col items-center justify-stretch pb-10"
                >
                  <div className="sm:w-full w-auto -mx-[50px] sm:mx-0">
                    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-2 gap-y-4
  px-4 sm:px-0">

                      {relatedOccupations
                        .slice(page1 * 12, (page1 + 1) * 12)
                        .map((occ, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-center text-[14px] rounded-[50px] border border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.04)] h-[45px] w-full max-w-[165px]"
                          >
                            <span className="font-semibold text-center truncate w-[90%] block">
                              {occ.core_occupation}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-center gap-6 sm:mt-0">
              <div>
                <Image
                  src="/images/icons/back-btn.svg"
                  alt="Back Btn"
                  width={24}
                  height={24}
                  onClick={() => paginate1(-1)}
                />
              </div>
              <div className="flex justify-center gap-1">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate1(index - page1)}
                    className="w-[10px] h-[10px]"
                  >
                    {page1 === index ? (
                      <Image
                        src="/images/slide-show-btn-on.svg"
                        alt="ON"
                        width={10}
                        height={10}
                      ></Image>
                    ) : (
                      <Image
                        src="/images/slide-show-btn-off.svg"
                        alt="OFF"
                        width={10}
                        height={10}
                      ></Image>
                    )}
                  </button>
                ))}
              </div>
              <div>
                <Image
                  src="/images/icons/arrow-right-btn.svg"
                  alt="Arrow Right"
                  width={24}
                  height={24}
                  onClick={() => paginate1(1)}
                />
              </div>
            </div>
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
                  {impactData?.substi_sco}
                </p>
                <div className="w-[1px] lg:h-[18px] md:h-[14px] h-[13px] lg:mb-[6px] mb-1 bg-[#ffffff1a]"></div>
                <p className="lg:text-[18px] md:text-sm text-[13px]">{impactData?.substi_sco}/10</p>
                <div className="w-[1px] lg:h-[18px] md:h-[14px] h-[13px] lg:mb-[6px] mb-1 bg-[#ffffff1a] md:block hidden"></div>
                <p className="lg:text-[18px] md:text-sm text-[13px]">
                  Risk Level: <b>{impactData?.thermometer}</b>
                </p>
              </div>
              <p className="lg:text-[15.7px] text-[11px] lg:mt-7 mt-4">
                {taskData?.description}
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
                {[
                  { label: "Low Income", value: "Low Income" },
                  { label: "Emerging", value: "Emerging" },
                  { label: "Advanced", value: "Advanced" },
                ].map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => setSelectedEconomy(option.value)}
                  >
                    <Image
                      src={
                        selectedEconomy === option.value
                          ? "/images/radio-on.svg"
                          : "/images/radio-off.svg"
                      }
                      alt={option.label}
                      width={24}
                      height={24}
                      className="lg:w-[24px] lg:h-[24px] md:w-[17px] md:h-[17px] w-[16px] h-[16px]"
                    />
                    <p
                      className={
                        "lg:text-[18px] md:text-sm text-[13px] font-bold transition-colors duration-200 " +
                        (selectedEconomy === option.value ? "text-white" : "text-[#86878D]")
                      }
                    >
                      {option.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="lg:mt-7 md:mt-4 flex items-center justify-center flex-1 lg:pl-15 pl-3">
                <Image
                  src={
                    selectedEconomy === "Low Income"
                      ? "/images/low income.svg"
                      : selectedEconomy === "Emerging"
                      ? "/images/emerging.svg"
                      : "/images/advanced.svg"
                  }
                  alt={selectedEconomy}
                  width={700}
                  height={411}
                />
              </div>
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#ffffff1a]"></div>

          <div className="flex md:flex-row flex-col md:border-b-[1px] border-b-[#ffffff1a]">
            <div className="flex flex-col lg:gap-11 gap-6 lg:flex-12 flex-13 md:border-r-[1px] md:border-t-0 border-t-[1px] border-[#ffffff1a] lg:py-15 md:py-8 py-10 lg:pr-15 lg:pl-4 md:pr-5">
              <div className="flex gap-3 items-center justify-start self-center md:hidden">
                <p className="text-[18px] font-bold uppercase">
                  Automatability Score
                </p>
                <Image
                  src="/images/icons/union.svg"
                  alt="union"
                  width={24}
                  height={24}
                  className="lg:w-[24px] lg:h-[24px] md:w-[17px] md:h-[17px] w-[16px] h-[16px]"
                />
              </div>
              <div className="md:block flex items-center w-full mb-3 md:hidden">
                <div className="flex-1 h-[1px] bg-[#ffffff0d]"></div>
                <p className="text-[71px] font-bold leading-[130%]">
                  {Math.floor(
                    taskProgress.reduce((s, ele) => s + ele) /
                    taskProgress.length
                  )}
                  %
                </p>
                <div className="flex-1 h-[1px] bg-[#ffffff0d]"></div>
              </div>
              <div className="flex gap-3 w-full items-center justify-start lg:ml-13">
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
              <div className="flex lg:gap-9 gap-5">
                <div className="lg:w-3 md:w-2 w-1 md:h-full relative md:order-none order-last">
                  <div className="absolute w-full h-[218px] top-[190px] rounded-[5px] border-[1px] border-[#252832] bg-[#131621] z-20"></div>
                  <div className="absolute w-[1px] bg-[#19202c] h-full left-[50%] z-10"></div>
                </div>


                {/* <div className="flex flex-col flex-1 lg:gap-11 gap-6">
                  {taskProgress.map((ele, index) => (
                    <div key={index} className="flex flex-col"> */}


                <div className="flex flex-col flex-1 lg:gap-11 gap-6 h-[1000px] overflow-y-auto overflow-x-hidden custom-scroll w-auto p-2">
                  {transformedTasks?.tasks?.map((ele, index) => (
                    <div key={index} className="flex flex-col ">
                      <div className="bg-[url(/images/poly-btn.svg)] bg-no-repeat w-[78px] h-[34px] flex items-center justify-center lg:text-[22px] text-[16px]">
                        {ele}%
                      </div>
                      <p className="lg:text-[19px] md:text-[18px] text-[16px] font-bold mt-6 lg:mb-3 mb-1">
                        Reviewing Developer Work
                      </p>
                      <div className="relative w-full h-[14px]">
                        <div className="absolute top-[5px] h-1 w-full bg-[#ffffff43] z-10"></div>
                        <div
                          className={`absolute top-[5px] h-1 left-0 bg-[#E93249] z-20`}
                          style={{
                            width: `${ele}%`,
                          }}
                        ></div>
                        <div
                          className={`absolute top-0 h-[14px] w-[14px] z-30 bg-[url(/images/slider-ring.svg)] bg-no-repeat bg-cover`}
                          style={{
                            left: `${ele}%`,
                            transform: "translateX(-7px)",
                          }}
                        ></div>
                      </div>
                      <div className="flex w-full lg:text-[16px] text-[11px] lg:mt-4 mt-2">
                        <p className="opacity-50">0%</p>
                        <p className="flex-1 font-bold text-center">
                          Automation (%)
                        </p>
                        <p className="opacity-50">100%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-12">
              <div className="md:flex flex-col items-center w-full lg:pt-20 lg:pb-15 py-9 hidden">
                <div className="flex gap-3 items-center justify-start">
                  <p className="lg:text-[20px] md:text-[18px] text-[16px] font-bold uppercase">
                    Automatability Score
                  </p>
                  <Image
                    src="/images/icons/union.svg"
                    alt="union"
                    width={24}
                    height={24}
                    className="lg:w-[24px] lg:h-[24px] md:w-[17px] md:h-[17px] w-[16px] h-[16px]"
                  />
                </div>
                <p className="lg:text-[109px] text-[71px] font-bold leading-[130%]">
                  {Math.floor((impactData?.auto_avg ?? 0) * 10)}
                  {/* {Math.floor(
                    taskProgress.reduce((s, ele) => s + ele) /
                    taskProgress.length
                  )} */}
                  %
                </p>
              </div>
              <div className="flex flex-col lg:gap-6 gap-0 w-full border-t-[1px] border-t-[#ffffff1a] lg:pt-20 lg:pb-15 lg:pl-24 md:pt-8 pb-12 pt-11 md:pl-11">
                <p className="lg:text-[20px] md:text-[18px] text-[16px] font-bold uppercase">
                  Firesight Observations
                </p>
                <p className="lg:text-[16px] text-[11px] lg:mt-7 mt-4">
                  {isTaskLoading ? "Loading..." :
                    taskData?.firesight_observations
                    || `AI can suggest complementary colour palettes based on a
                  selected colour or image, ensuring aesthetically pleasing
                  design outcomes.AI can suggest complementary colour palettes
                  based on a selected colour or image, ensuring aesthetically
                  pleasing design outcomes. AI can suggest complementary colour
                  palettes based on a selected colour or image, ensuring
                  aesthetically pleasing design outcomes.`}                </p>
              </div>
              <div className="flex flex-col lg:gap-11 gap-7 items-center w-full border-t-[1px] border-t-[#ffffff1a] lg:pt-20 lg:pb-15 lg:pl-6 py-10">
                <p className="text-[24px] font-bold uppercase text-center leading-[120%] bg-[linear-gradient(180deg,rgba(0,255,224,0.55)0%,rgba(188,239,255,0.62)100%)] bg-clip-text text-transparent lg:block hidden">
                  Explore
                </p>
                <p className="lg:text-[43px] md:text-[20px] text-[28px] font-bold uppercase text-center leading-[120%]">
                  FIND OUT HOW <br className="lg:hidden md:block hidden" />
                  <b className="bg-[linear-gradient(180deg,rgba(0,255,224,0.55)0%,rgba(188,239,255,0.62)100%)] bg-clip-text text-transparent">
                    Firesight
                  </b>{" "}
                  CAN TRANSFORM
                  <br className="lg:hidden md:block hidden" /> YOUR WORKDAY
                </p>
                <Button
                  variant="outline"
                  className="cursor-pointer gradient-border-btn lg:text-[22px] md:text-[14px] text-[16px] bg-transparent rounded-full lg:px-[50px] md:px-9 px-[50px] lg:py-5 md:py-3 py-5 text-white leading-normal lg:h-18 h-11 hover:text-white"
                >
                  14 Day Trial | <span className="font-bold">Start Now</span>
                </Button>
              </div>
            </div>
          </div>

          {/*Last section*/}
          <div className="flex flex-col items-center w-full mt-13">
            <TabBar type={1} curItem={occupationTab} setCurItem={setOccupationTab} />

            <div className="relative w-full lg:mt-16 lg:mb-6 my-8 lg:h-90 md:h-54 h-79">
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
                  transition={{ duration: 0.5 }}
                  className="absolute w-full h-full flex items-center justify-stretch"
                >
                  <div className="sm:w-full w-auto -mx-[50px] sm:mx-0">

                    <div className="flex justify-between lg:gap-y-9 gap-y-4 text-white font-bold lg:text-2xl text-[16px] leading-normal w-full">
                      {sortedOccupations
                        .slice(page2 * occupationsPerSlide, (page2 + 1) * occupationsPerSlide)
                        .map((ele, index) => (
                          <div
                            key={index}
                            className="main-small-box-1 relative overflow-hidden rounded-[...] flex items-center justify-center lg:h-90 md:h-54 h-79 md:w-[31%] w-full ml-7"
                          >
                            <div className="color-pattern-bg-1"></div>
                            <p className="text-center mx-6">{ele.core_occupation}</p>
                            <div
                              className="absolute flex items-center justify-center lg:bottom-[21px] lg:right-[22px] md:bottom-3 md:right-3 right-5 bottom-4 lg:w-[106px] lg:h-[49px] w-[63px] h-[29px] rounded-full overflow-hidden"
                            >
                              <Image
                                src={`/images/tag-back-${Math.floor(ele.ranking / 1000)}.svg`}
                                alt=""
                                fill
                                className="object-cover"
                                priority
                              />
                              <span className="relative z-10 font-bold text-white">#{ele.ranking}</span>
                            </div>

                          </div>
                        ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-center gap-6">
              <div>
                <Image
                  src="/images/icons/back-btn.svg"
                  alt="Back Btn"
                  width={24}
                  height={24}
                  onClick={() => paginate2(-1)}
                />
              </div>
              <div className="flex justify-center gap-1">
                {Array.from({ length: totalOccupationSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate2(index - page2)}
                    className="w-[10px] h-[10px]"
                  >
                    {page2 === index ? (
                      <Image
                        src="/images/slide-show-btn-on.svg"
                        alt="ON"
                        width={10}
                        height={10}
                      ></Image>
                    ) : (
                      <Image
                        src="/images/slide-show-btn-off.svg"
                        alt="OFF"
                        width={10}
                        height={10}
                      ></Image>
                    )}
                  </button>
                ))}
              </div>
              <div>
                <Image
                  src="/images/icons/arrow-right-btn.svg"
                  alt="Arrow Right"
                  width={24}
                  height={24}
                  onClick={() => paginate2(1)}
                />
              </div>
            </div>

            <div className="md:block hidden">
              <div className="flex items-center gap-2 h-6 md:mt-[50px] mt-[10px] md:p-0 pl-4 z-20  ">
                <Link href="/ai-impact/home/category">
                  <Image
                    src="/images/icons/back-btn.svg"
                    alt="back-btn"
                    width={24}
                    height={24}
                  />
                </Link>
                <p className="text-[16px] text-white">
                  Back to AI Occupational Categories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shineBg_body_blue_circle lg:hidden md:block hidden bottom-[157px] left-[calc(50vw-314px)] w-[629px] h-[592px]"></div>
      <div className="shineBg_body_blue_circle lg:block hidden bottom-[6.8vw] right-[24.653vw] w-[min(602px,41.8vw)] h-[min(602px,41.8vw)]"></div>{" "}
      <AIImpactFooter>
        <div className="circle-footer-mobile md:hidden block z-[-2342]"></div>
        <div className="shineBg_body_blue_circle lg:block hidden bottom-[-25vw] right-[-17.57vw] w-[min(602px,41.8vw)] h-[min(602px,41.8vw)]"></div>
        <div className="shineBg_body_blue_circle lg:block hidden bottom-[-32.85vw] left-[-16.666vw] w-[min(602px,41.8vw)] h-[min(602px,41.8vw)]"></div>
      </AIImpactFooter>
    </>
  );
}

function TabBar({
  type,
  curItem,
  setCurItem,
}: {
  type: number;
  curItem?: number;
  setCurItem?: (index: number) => void;
}) {
  const tabItems = [
    [
      "AI Impact Index",
      "Community",
      "Training Resources",
      "Resume Builder",
      "Career Advisor",
    ],
    [
      "Similar Occupations",
      "Most Impacted",
      "Least Impacted",
      // "Occupational Categories",
    ],
  ];

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
    <div ref={containerRef} className="w-full overflow-x-auto scrollbar-hide" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
      <motion.div
        ref={contentRef}
        className={
          `flex flex-nowrap items-center justify-center ` +
          `gap-6 sm:gap-10 md:gap-14 px-2 sm:px-0 w-max min-w-full relative`
        }
        drag="x"
        dragConstraints={constraints}
        dragElastic={0.1}
        style={{ touchAction: 'pan-x', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
      >
        <div className="border-b border-[#ffffff33] w-full min-w-full">
          <div className="flex flex-nowrap items-center justify-center gap-6 sm:gap-10 md:gap-14 relative px-2 sm:px-0">
            {tabItems[type].map((ele, index) => (
              <div
                key={ele}
                onClick={() => setCurItem && setCurItem(index)}
                className={`relative pb-3 cursor-pointer text-[13px] sm:text-[15px] md:text-[16px] whitespace-nowrap min-w-[90px] text-center ` +
                  (curItem === index ? "text-white font-bold" : "text-[#86878D]")}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {ele}
                {curItem === index && (
                  <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-[80%] h-[4px] bg-[#E93249] rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
