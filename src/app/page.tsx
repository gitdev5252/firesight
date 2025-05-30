import Link from "next/link";
import Image from "next/image";
import FireSightLayout from "@/layouts/FireSightLayout";
import "./page.css";
import { Button } from "@/components/ui/button";

export default function Home() {
  const pulseSectionCardInfo: {
    title: string;
    content: string;
    feature: string;
  }[] = [
    {
      title: "Report",
      content: "Your hub for workflows, insights, and productivity.",
      feature: "",
    },
    {
      title: "News",
      content:
        "AI-filtered media feed—monitor topics, brands, and trends in real time.",
      feature: "",
    },
    {
      title: "Intelligence",
      content:
        "Personalised intelligence compiled from internal and external information.",
      feature: "",
    },
    {
      title: "Signals",
      content:
        "State-of-the-Art keyword, phase and narrative tracking technology.",
      feature: "(coming soon)",
    },
    {
      title: "Spotlight",
      content:
        "Discover what’s trending, loved, or hated - by location, sector, or time period.",
      feature: "(coming soon)",
    },
    {
      title: "Surveillance",
      content:
        "self-guided media intelligence driving deeper comprehension of current events.",
      feature: "(coming soon)",
    },
  ];

  const sessionSectionCardInfo: { title: string; content: string }[] = [
    {
      title: "Agent",
      content:
        "A new medium of collaboration: You and an AI agent working together seamlessly",
    },
    {
      title: "Conference Sessions",
      content:
        "Smarter, more efficient group calls -complete with prompts, summaries & Agents",
    },
    {
      title: "Embedded Agents",
      content: "AI-powered agents that actively participate in your meetings",
    },
    {
      title: "Session Summaries",
      content:
        "Capture decisions and next steps instantly with actionable summaries",
    },
    {
      title: "WorldShare",
      content:
        "AI agents listen, retrieve (RAG), present and share in real time",
    },
    {
      title: "Embedded Prompts",
      content:
        "Intuitive prompts that guide your meetings and ensure no opportunity is overlooked",
    },
  ];

  const platformSectionCardInfo: {
    title: string;
    content: string;
    icon: string;
  }[] = [
    {
      title: "Dashboard",
      content: "Your hub for workflows, insights, and productivity",
      icon: "/images/icons/dashboard.svg",
    },
    {
      title: "Chat",
      content: "A multi-modal, multi-agent AI-powered chat region",
      icon: "/images/icons/chat.svg",
    },
    {
      title: "Page",
      content: "AI-assisted writing editor with multi-agent collaboration",
      icon: "/images/icons/page.svg",
    },
    {
      title: "Sessions",
      content:
        "Transform meetings with AI-native conferencing with embedded AI Agents",
      icon: "/images/icons/sessions.svg",
    },
    {
      title: "Graph",
      content: "Interactive knowledge graph for advanced knowledge management",
      icon: "/images/icons/graph.svg",
    },
    {
      title: "Projects",
      content:
        "Effortless organisational control for your workflows and projects",
      icon: "/images/icons/projects.svg",
    },
  ];
  return (
    <FireSightLayout>
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={214}
          height={53}
          priority
          className="md:mt-[70px] mt-[60px] sm:w-[214px] sm:h-[53px] w-[141px] h-[35px] mb-20"
        />
      </Link>
      <section className="relative w-full flex flex-col items-center justify-center z-50">
        {/* Blur Panel */}

        {/* Headings */}
        <h1
          className="text-[110px] font-extrabold"
          style={{
            background: "linear-gradient(180deg, #14FF00 0%, #00F0FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: "100%",
          }}
        >
          AI NATIVE
        </h1>
        <h1 className="text-[110px] font-extrabold text-white text-center leading-[100%]">
          PRODUCT
          <br />
          ECOSYSTEM
        </h1>
        {/* Description */}
        <p
          className="mt-6 text-gray-300 text-center mx-auto "
          style={{
            width: "970px", // Adjust until it fits 3 lines
            fontSize: "18px", // Adjust as needed
            lineHeight: "1.6", // Adjust as needed
            letterSpacing: "0.01em", // Optional: tweak for best fit
          }}
        >
          Step into the future of productivity with Firesight. Our AI-native
          tools are purpose-built to revolutionize how you work: Our Platform
          unifies your workflows while our intelligent conferencing technology
          transforms how you collaborate. Firesight is your gateway to a better,
          more efficient workday.
        </p>
      </section>

      <div className="w-full h-[414px] backdrop-blur-lg backdrop-brightness-150 absolute mt-[-3950px]"></div>

      {/* Pulse section */}
      <div className="w-full h-[1000px] pulse-bg absolute mt-[-2600px]"></div>
      <section className="relative w-[92%] mx-auto flex flex-col items-center justify-center mt-[150px]">
        <div className="flex w-[556px] text-white items-center justify-around ">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={214}
            height={53}
            priority
            className="md:mt-[70px] mt-[60px] sm:w-[214px] sm:h-[53px] w-[141px] h-[35px] mb-20"
          />
          <span className="text-[35px]">|</span>
          <span className="text-[65px] font-extrabold">Pulse</span>
        </div>
        <Image
          src="/images/news.svg"
          alt="News"
          width={962}
          height={671}
          className="border-[43px] rounded-4xl border-[#080B16] border-solid outline-2 outline-[#121721]"
        />

        <div className="w-full main-body text-white absolute mt-[-210px] !p-14">
          <div className="flex flex-wrap w-full">
            <div className="md:w-2/5 w-full mb-[50px]">
              <h2 className="text-[43.8px] font-extrabold uppercase leading-11">
                Media, market & Business intelligence platform
              </h2>
              <Button
                variant="outline"
                className="cursor-pointer gradient-border-btn text-[16px] mt-[20px] bg-transparent rounded-full px-8 py-5 text-white hover:text-white"
              >
                Explorer <span className="font-bold">Platform</span>
              </Button>
            </div>
            <div className="text-[18px] md:w-3/5 w-full">
              A media, market & business intelligence platform that seamlessly
              merges your proprietary data with real-time news, social, and
              market signals. By unifying internal and external intelligence
              into a single vantage point, this connected intelligence
              technology reveals new opportunities faster, forecasts outcomes
              more accurately, and empowers you to act with confidence.
            </div>
          </div>
          <div className="flex flex-wrap w-full gap-13 justify-between items-center">
            {pulseSectionCardInfo.map((item, index) => (
              <div
                className="main-body md:!w-[30%] !w-full relative cursor-pointer"
                key={index}
              >
                <div className="color-pattern-bg p-6 opacity-80  h-[150px]">
                  <div className="flex items-center">
                    <h3 className="text-[30px] font-extrabold">{item.title}</h3>
                    <span className="text-[15px] italic ml-2">
                      {item.feature}
                    </span>
                  </div>
                  <p className="text-[15px]">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session section */}
      <section className="relative w-[92%] mx-auto flex flex-col items-center justify-center mt-[30px]">
        <div className="flex w-[600px] text-white items-center justify-between ">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={214}
            height={53}
            priority
            className="md:mt-[70px] mt-[60px] sm:w-[214px] sm:h-[53px] w-[141px] h-[35px] mb-20"
          />
          <span className="text-[35px]">|</span>
          <span className="text-[65px] font-extrabold">Sessions</span>
        </div>
        <Image
          src="/images/sessions.svg"
          alt="News"
          width={1045}
          height={866}
        />

        <div className="w-full main-body text-white absolute mt-[-300px] !p-14">
          <div className="flex flex-wrap w-full">
            <div className="md:w-2/5 w-full mb-[50px]">
              <h2 className="text-[43.8px] font-extrabold uppercase leading-11">
                Next-Gen COnference Technology
              </h2>
              <Button
                variant="outline"
                className="cursor-pointer gradient-border-btn text-[16px] mt-[20px] bg-transparent rounded-full px-8 py-5 text-white hover:text-white"
              >
                Explorer <span className="font-bold">Platform</span>
              </Button>
            </div>
            <div className="text-[18px] md:w-3/5 w-full">
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
          <div className="flex flex-wrap w-full gap-13 justify-between items-center">
            {sessionSectionCardInfo.map((item, index) => (
              <div
                className="main-body md:!w-[30%] !w-full relative cursor-pointer"
                key={index}
              >
                <div className="color-pattern-bg p-6 opacity-80  h-[150px]">
                  <h3 className="text-[30px] font-extrabold">{item.title}</h3>
                  <p className="text-[15px]">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform section */}
      <section className="relative w-[92%] mx-auto flex flex-col items-center justify-center mt-[30px] mb-[60px]">
        <div className="flex w-[650px] text-white items-center justify-between ">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={214}
            height={53}
            priority
            className="md:mt-[70px] mt-[60px] sm:w-[214px] sm:h-[53px] w-[141px] h-[35px] mb-20"
          />
          <span className="text-[35px]">|</span>
          <span className="text-[65px] font-extrabold">Platforms</span>
        </div>
        <Image
          src="/images/platforms.svg"
          alt="News"
          width={1045}
          height={866}
        />

        <div className="w-full main-body text-white absolute mt-[-590px] !p-14">
          <div className="flex flex-wrap w-full">
            <div className="md:w-2/5 w-full mb-[50px]">
              <h2 className="text-[43.8px] font-extrabold uppercase leading-11">
                Unified intelligence platform
              </h2>
              <Button
                variant="outline"
                className="cursor-pointer gradient-border-btn text-[16px] mt-[20px] bg-transparent rounded-full px-8 py-5 text-white hover:text-white"
              >
                Explorer <span className="font-bold">Platform</span>
              </Button>
            </div>
            <div className="text-[18px] md:w-3/5 w-full">
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
          <div className="flex flex-wrap w-full gap-13 justify-between items-center">
            {platformSectionCardInfo.map((item, index) => (
              <div
                className="main-body md:!w-[30%] !w-full relative cursor-pointer"
                key={index}
              >
                <div className="color-pattern-bg p-6 opacity-80  h-[130px]">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-[30px] font-extrabold">{item.title}</h3>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={23}
                      height={23}
                      className="mr-4"
                    />
                  </div>
                  <p className="text-[15px]">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FireSightLayout>
  );
}
