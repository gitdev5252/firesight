"use client";

import "./page.css";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
  const [period, setPeriod] = useState(0);
  const pricingTiers = [
    {
      plan: "solo",
      price: {
        monthly: 19.99,
        annual: 199.99,
      },
      priceDes: "1 Seat / Per month",
      cta: {
        normal: "14 Day Trial | ",
        bold: "Start Now",
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
      plan: "team",
      price: {
        monthly: 14.99,
        annual: 149.99,
      },
      priceDes: "Per Seat / Per month (2-8 Seat)",
      cta: {
        normal: "",
        bold: "Coming Soon",
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
      plan: "",
      price: {
        monthly: 99,
        annual: 99,
      },
      cta: "",
      description: {
        title: "",
        content: "",
      },
      features: [
        {
          name: "",
          des: "",
        },
      ],
    },
  ];
  return (
    <>
      <div className="flex flex-wrap flex-col justify-center items-center w-ful">
        <h4 className="uppercase mt-[107px] mb-[47px] text-center sub-header-title">
          Pricing
        </h4>
        <h1 className="text-center mb-[76px] text-[80px] font-extrabold uppercase text-white leading-[100%] max-w-[648px]">
          Start Working{" "}
          <span className="text-[rgba(0,255,224,0.60)]">Smarter</span> Today
        </h1>
        <div className="flex items-center justify-center gap-[30px] mb-[81px]">
          <span className="text-[22px] text-white">Monthly</span>
          <Button
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
              <g filter="url(#filter0_dd_2002_30469)">
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
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2002_30469"
                  />
                  <feColorMatrix
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
                  <stop stopColor="#0091FF" stopOpacity="0.55" />
                  <stop offset="1" stopColor="#86A0D8" stopOpacity="0.62" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2002_30469"
                  x1="26.8984"
                  y1="3"
                  x2="26.8984"
                  y2="34.0002"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00FFE0" stopOpacity="0.55" />
                  <stop offset="1" stopColor="#BCEFFF" stopOpacity="0.62" />
                </linearGradient>
              </defs>
            </svg>
          </Button>
          <span className="text-[22px] text-white font-bold">Annual</span>
        </div>
      </div>

      <div className="flex flex-nowrap gap-14 w-full max-w-full">
        {pricingTiers.map((tier) => (
          <div className="main-box">
          <div className="my-9 mx-[50px] gap-9 flex flex-col items-center justify-start">
            <p className="text-white text-[20px]">
              Firesight | <b>Pulse</b>
            </p>
            <p className="uppercase sub-header-title text-[36px] font-bold">
              {tier.plan}
            </p>
            <p className="text-white font-bold text-center">
              <span className="text-[55px]">
                ${period ? tier.price.annual : tier.price.monthly}
              </span>
              <br />
              <span className="text-[18px]">{tier.priceDes}</span>
            </p>
            <Button
              variant="outline"
              className="cursor-pointer gradient-border-btn text-[16px] g-transparent rounded-full px-8 py-5 text-white hover:text-white"
            >
              {/* {tier.cta && tier.cta.normal}{" "}
              <span className="font-bold"> {tier.cta && tier.cta.bold}</span> */}
            </Button>

            <div className="border-y-[rgba(255,255,255,0.1)] border-y-[1px] text-white flex flex-col items-center justify-center">
              <p className="text-[16px] font-bold">
                {tier.description && tier.description.title}
              </p>
              <p className="text-center text-[15px]">
                {tier.description && tier.description.content}
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-8 mb-10">
              {tier.features.map((feature) => (
                <div className="flex items-center justify-between gap-4">
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
                  <p className="text-white">
                    <b>{feature.name}</b>{' '}
                    {feature.des}
                  </p>
                </div>
              ))}
            </div>
          </div>
          </div>
        ))}
      </div>
    </>
  );
}
