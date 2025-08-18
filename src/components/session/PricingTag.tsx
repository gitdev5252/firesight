"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const swipeConfidenceThreshold = 100;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function PricingTag() {
  const [period, setPeriod] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const pricingTiers = [
    {
      plan: "instant",
      price: {
        monthly: 0.0,
        annual: 0.0,
      },
      priceDes: "1 Seat / Per month",
      cta: {
        normal: "",
        bold: "Free Forever",
      },
      description: {
        title: "Freelancers, Consultants & Independent Professionals",
        content:
          "The Solo Plan is purpose-built for individual knowledge workers navigating complex industries alone. Whether you're a journalist, strategist, researcher, or SMM, this plan delivers occupation-specific intelligence through pre-tailored Modes",
      },
      features: [
        {
          name: "Pre-Tailored Mode Experience",
          des: "- Choose your Mode (e.g., Freelancer, Marketing Consultant, Startup Advisor) and access intelligence pre-curated to your occupation.",
        },
        {
          name: "Personalised Intelligence Reports",
          des: "- AI-curated insights, forecasts, and suggested actions aligned to your occupational goals.",
        },
        {
          name: "AI Journalism",
          des: " (Human-in-the-Loop) - Editorial content crafted by AI and reviewed by subject-matter experts for quality and insight.",
        },
        {
          name: "Smart News Feed",
          des: "- Aggregated News Headlines, carefully assembled & relevant to your sector, and topics of interest.",
        },
        {
          name: "News Briefing Technology",
          des: "- State-of-the-art personalized news summaries – absorb critical stories fast with concise, context-rich summaries, tailored just for you.",
        },
        {
          name: "Use-Case Aligned Briefings",
          des: "- Custom intelligence briefings by Mode (e.g., Sales Mode, Finance Mode, Creative Mode).",
        },
        {
          name: "Predictive Intelligence & Forecasting",
          des: "- Anticipate trends and competitive shifts with real-time foresight.",
        },
        {
          name: "Deep-Dive Intelligence Reports",
          des: "- Access high-context, sector-specific analysis & insights.",
        },
        {
          name: "User-Tailored Onboarding",
          des: "- Onboarding Q/A powers Firesight’s ability to deliver personalised, context-rich intelligence experiences.",
        },
      ],
    },
    {
      plan: "basic",
      price: {
        monthly: 0.0,
        annual: 0.0,
      },
      priceDes: "Per Seat / Per month (2-8 Seat)",
      cta: {
        normal: "",
        bold: "Try for Free",
      },
      description: {
        title: "Startups, agencies + cross-functional teams",
        content:
          "Each seat is tailored to the team member’s role through their own Mode, while shared projects, dashboards, briefings, and a collective knowledge base keep everyone aligned with collective clarity while maintaining individual depth.",
      },
      features: [
        {
          name: "Multi-Mode Team Support",
          des: "- Each seat activates its own Mode (e.g., Policy Strategist, Market Researcher). Access intelligence pre-curated to an occupation.",
        },
        {
          name: "Personalised Intelligence Reports",
          des: "- Role-aware signals with smart consolidation across your team’s domains.",
        },
        {
          name: "AI Journalism",
          des: "(Human-in-the-Loop) — Editorial content crafted by AI and reviewed by subject-matter experts for every role in your team’s plan.",
        },
        {
          name: "Smart News Feed",
          des: "- Aggregated News Headlines, carefully assembled & relevant to your organizations sector and every memebr of your squad.",
        },
        {
          name: "News Briefing Technology",
          des: "- State-of-the-art personalized news summaries – absorb critical stories fast with concise, context-rich summaries, tailored for every team member and delivered to platform or 3rd party apps (e.g. Slack or Teams)",
        },
        {
          name: "Use-Case Aligned Briefings",
          des: "- Custom intelligence briefings by Mode (e.g., Sales Mode, Finance Mode, Creative Mode).",
        },
        {
          name: "Predictive Intelligence & Forecasting",
          des: "- Understand future shifts in each domain your team touches.",
        },
        {
          name: "Deep-Dive Intelligence Reports",
          des: "- Access high-context, sector-specific analysis & insights and research mapped to business goals.",
        },
        {
          name: "User-Tailored Onboarding",
          des: "- Smart onboarding for every team member, tailored by role, team size, and sector.",
        },
        {
          name: "Shared Intelligence Workspace",
          des: "- Unified dashboards with alert routing, easy sharing, priority pinning, and annotation tools.",
        },
        {
          name: "Workflow Integrations",
          des: "- Slack, Notion, Google Workspace, and more - FastTrack Pulse intelligence integration into your business to make better decisions faster.",
        },
      ],
    },
    {
      plan: "pro",
      price: {
        monthly: 19.99,
        annual: 199.99,
      },
      priceDes: "Contact Us",
      cta: {
        normal: "14 Day Trial | ",
        bold: "Start Now",
      },
      description: {
        title: "Large Organisations & Knowledge Teams",
        content:
          "Designed for larger teams with complex needs. Includes Custom Mode Grouping, Advanced Signal Routing, and admin controls to better manage intelligence at scale.",
      },
      features: [
        {
          name: "Multi-Mode Team Support",
          des: "- Each seat activates its own Mode (e.g., Policy Strategist, Market Researcher). Access intelligence pre-curated to an occupation.",
        },
        {
          name: "Personalised Intelligence Reports",
          des: "- Role-aware signals with smart consolidation across your team’s domains.",
        },
        {
          name: "AI Journalism",
          des: "(Human-in-the-Loop) — Editorial content crafted by AI and reviewed by subject-matter experts for every role in your team’s plan.",
        },
        {
          name: "Smart News Feed",
          des: "- Aggregated News Headlines, carefully assembled & relevant to your organizations sector and every memebr of your squad.",
        },
        {
          name: "News Briefing Technology",
          des: "- State-of-the-art personalized news summaries – absorb critical stories fast with concise, context-rich summaries, tailored for every team member and delivered to platform or 3rd party apps (e.g. Slack or Teams)",
        },
        {
          name: "Use-Case Aligned Briefings",
          des: "- Custom intelligence briefings by Mode (e.g., Sales Mode, Finance Mode, Creative Mode).",
        },
        {
          name: "Predictive Intelligence & Forecasting",
          des: "- Understand future shifts in each domain your team touches.",
        },
        {
          name: "Deep-Dive Intelligence Reports",
          des: "- Access high-context, sector-specific analysis & insights and research mapped to business goals.",
        },
        {
          name: "User-Tailored Onboarding",
          des: "- Smart onboarding for every team member, tailored by role, team size, and sector.",
        },
        {
          name: "Shared Intelligence Workspace",
          des: "- Unified dashboards with alert routing, easy sharing, priority pinning, and annotation tools.",
        },
        {
          name: "Workflow Integrations",
          des: "- Slack, Notion, Google Workspace, and more - FastTrack Pulse intelligence integration into your business to make better decisions faster.",
        },
      ],
    },
    {
      plan: "premium",
      price: {
        monthly: 99.99,
        annual: 999.99,
      },
      priceDes: "Contact Us",
      cta: {
        normal: "14 Day Trial | ",
        bold: "Start Now",
      },
      description: {
        title: "Platforms, Media Groups & Intelligence Providers",
        content:
          "Deploy Firesight Pulse under your brand with full white-label control. Offer customers any combination of our connected intelligence product suite embedded in your platform. Powered by our engine, packaged as yours.",
      },
      features: [
        {
          name: "Custom Branding",
          des: "- Full UI/UX white-label implementation with your identity.",
        },
        {
          name: "Feature Licensing",
          des: "- Modular access to Pulse intelligence across any or all Modes.",
        },
        {
          name: "Enterprise Intelligence API",
          des: "- Plug Pulse data into your existing SaaS stack.",
        },
        {
          name: "Tailored Support & Integration",
          des: "- We work with you to align features, onboarding, and integrations to your needs.",
        },
        {
          name: "Flexible Licensing",
          des: "- Scales with your business, clients, and growth stage.",
        },
      ],
    },
  ];

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => {
      const newPage =
        (prevPage + newDirection + pricingTiers.length) % pricingTiers.length;
      return [newPage, newDirection];
    });
  };

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
    <>
      <div className="flex flex-wrap flex-col justify-center items-center w-full text-center">
        <h3 className="text-[24px] bg-gradient-to-b from-[rgba(20,255,0,0.55)] to-[rgba(0,240,255,0.62)] bg-clip-text text-transparent font-bold md:mb-[50px] mb-[15px]">
          PRICING
        </h3>
        <h1 className="uppercase text-white md:text-[80px] text-[20px] font-bold md:w-[55%] w-full mt-[20px]">
          the perfect plan for your needs
        </h1>
      </div>
      <div
        ref={containerRef}
        className="overflow-x-hidden w-full relative sm:block flex justify-center items-center md:px-[50px] px-[20px] md:py-[60px] py-[20px] border border-[rgba(255,255,255,0.1)] backdrop-blur-[32px] rounded-[20px] bg-[rgba(255,255,255,0.02)]"
      >
        <div className="flex items-center justify-center md:gap-[30px] gap-5 md:mb-[81px] mb-[50px]">
          <span
            className={`md:text-[22px] text-[16px] text-white ${
              period === 0 ? "font-bold" : ""
            }`}
            onClick={() => setPeriod(0)}
          >
            Individual
          </span>
          <div
            className="w-[51px] h-[31px]"
            onClick={() => setPeriod((period + 1) % 2)}
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
                transform={period == 0 ? "translate(-20, 0)" : ""}
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
          <span
            className={`md:text-[22px] text-[16px] text-white ${
              period === 1 ? "font-bold" : ""
            }`}
            onClick={() => setPeriod(1)}
          >
            Team
          </span>
        </div>
        <div className="text-center md:mb-[118px] mb-[30px] text-[24px] md:px-[100px] px-[10px]">
          <p className="font-bold text-white">
            Freelancers, Consultants & Independent Professionals
          </p>
          <br />
          <p className="text-white">
            Sessions isn&apos;t just for meetings - it&apos;s for motion. Built
            for solo knowledge workers navigating complexity alone, Sessions
            transforms every call into forward momentum. Whether you&apos;re a
            strategist, researcher, or creator{" "}
            <span className="font-bold">
              your AI Agent team works beside you in real time,
            </span>{" "}
            streamlining every call into focused, productive output.
          </p>
        </div>
        <motion.div
          ref={contentRef}
          className="cursor-grab pb-14 w-full flex lg:gap-14 sm:gap-9 gap-4"
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.1}
        >
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="lg:min-w-[40.9vw] sm:min-w-[60vw] min-w-[84vw] "
            >
              <div
                className={`my-9 mx-[50px] md:px-[82px] px-[20px] md:py-[70px] py-[30px] gap-9 flex flex-col items-center justify-start border border-[rgba(255,255,255,0.1)] rounded-[20px] relative w-full backdrop-blur-[32px]
                  ${
                    index === 0
                      ? "bg-[linear-gradient(86deg, rgba(3, 139, 152, 0.16) 9.54%, rgba(15, 251, 73, 0.15) 72.65%)]"
                      : "bg-[rgba(255,255,255,0.01)]"
                  }`}
              >
                <p className="text-white text-[20px]">
                  Firesight | <b>Session</b>
                </p>
                <p className="uppercase text-[36px] font-bold text-white">
                  {tier.plan}
                </p>
                <p className="text-white font-bold text-center">
                  <span className="text-[55px] leading-none">
                    ${period ? tier.price.annual : tier.price.monthly}
                  </span>
                  <br />
                </p>
                <Button
                  variant="outline"
                  className="cursor-pointer green-gradient-border-btn text-[16px] g-transparent rounded-full px-8 py-5 text-white hover:text-white"
                >
                  {tier.cta && tier.cta.normal}{" "}
                  <span className="font-bold">
                    {" "}
                    {tier.cta && tier.cta.bold}
                  </span>
                </Button>

                <div className="border-y-[rgba(255,255,255,0.1)] border-y-[1px] text-white flex flex-col items-center justify-center py-[30px] px-[7px] gap-[30px]">
                  <p className="text-center text-[16px] font-bold">
                    {tier.description && tier.description.title}
                  </p>
                  <p className="text-center text-[15px]">
                    {tier.description && tier.description.content}
                  </p>
                </div>

                <div className="flex flex-col gap-5 mt-8 mb-10">
                  {tier.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-4"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="18"
                          viewBox="0 0 17 18"
                          fill="none"
                        >
                          <path
                            d="M8.72656 0L16.7266 4.5V13.5L8.72656 18L0.726562 13.5V4.5L8.72656 0Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <p className="text-white text-[16px]">
                        <b>{feature.name}</b> {feature.des}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="w-full sm:hidden">
        <div className="relative w-full shadow rounded overflow-hidden text-white h-[calc(2164px-180vw)]">
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
              className={
                "absolute w-full h-full flex items-center justify-stretch"
              }
            >
              <div className="main-box lg:min-w-[40.9vw] sm:min-w-[60vw] min-w-[84vw] h-full mx-4 w-auto">
                <div className="my-9 mx-4 gap-6 flex flex-col items-center justify-start h-full">
                  <p className="text-white text-[14px]">
                    Firesight | <b>Session</b>
                  </p>
                  <p className="uppercase text-center text-[30px] font-bold text-[rgba(0,255,224,0.60)]">
                    {pricingTiers[page].plan}
                  </p>
                  <p className="text-white font-bold text-center">
                    {pricingTiers[page].priceDes == "Contact Us" ? (
                      <span className="text-[40px] leading-loose">
                        Contact Us
                      </span>
                    ) : (
                      <>
                        <span className="text-[36px] leading-none">
                          $
                          {period
                            ? pricingTiers[page].price.annual
                            : pricingTiers[page].price.monthly}
                        </span>
                        <br />
                        <span className="text-[14px] font-normal leading-none">
                          {pricingTiers[page].priceDes}
                        </span>
                      </>
                    )}
                  </p>
                  <Button
                    variant="outline"
                    className="cursor-pointer gradient-border-btn text-[16px] g-transparent h-11 mt-3 rounded-full px-9 py-3 text-white hover:text-white"
                  >
                    {pricingTiers[page].cta && pricingTiers[page].cta.normal}{" "}
                    <span className="font-bold">
                      {" "}
                      {pricingTiers[page].cta && pricingTiers[page].cta.bold}
                    </span>
                  </Button>

                  <div className="border-y-[rgba(255,255,255,0.1)] border-y-[1px] text-white flex flex-col items-center justify-center py-6 px-[7px] gap-6">
                    <p className="text-center text-[12px] font-bold">
                      {pricingTiers[page].description &&
                        pricingTiers[page].description.title}
                    </p>
                    <p className="text-center text-[12px]">
                      {pricingTiers[page].description &&
                        pricingTiers[page].description.content}
                    </p>
                  </div>

                  <div className="flex flex-col gap-5">
                    {pricingTiers[page].features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between gap-4"
                      >
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="17"
                            viewBox="0 0 14 17"
                            fill="none"
                          >
                            <path
                              d="M7 0.5L14 4.5V12.5L7 16.5L0 12.5V4.5L7 0.5Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <p className="text-white text-[12px]">
                          <b>{feature.name}</b> {feature.des}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 my-8 sm:hidden">
          {pricingTiers.map((_, index) => (
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
    </>
  );
}

// background: linear-gradient(180deg, rgba(0, 144, 255, 0.28) 0%, rgba(134, 160, 216, 0.31) 100%);
