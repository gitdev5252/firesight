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
      <div className="shineBg_body_top_left"></div>
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={214}
          height={53}
          priority
          className="md:mt-18 mt-[60px] sm:w-[214px] sm:h-[53px] w-[141px] h-[35px] mb-20"
        />
      </Link>
      <section className="relative w-full flex flex-col items-center justify-center z-50 pb-32">
        <div className="bg-[url('/images/banner.svg')] w-full h-[662px] bg-cover absolute top-[-390px] z-[-10000]"></div>
        {/* Blur Panel */}

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
        <div className="w-full md:rounded-none rounded-2xl absolute top-[160px] bottom-[0px] -z-20 bg-[rgba(255, 255, 255, 0.02)] border-y-[1px] border-y-[rgba(255,255,255,0.1)] backdrop-blur-[32px]"></div>
      </section>

      {/* Pulse section */}
      <section className="relative mt-auto flex flex-col items-center justify-center w-full px-14">
        <div
          className="w-full top-0 h-[910px] left-0 bg-[url('/images/colorpattern.svg')] absolute z-[-10000] bg-no-repeat"
          style={{ backgroundSize: "100% 100%" }}
        ></div>
        <div className="flex gap-11 text-white items-center justify-around h-16 mt-28 mb-40">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={214}
            height={53}
            priority
            className="sm:w-[264px] sm:h-[64px] w-[124px] h-[30px]"
          />
          <span className="md:text-[45px] text-[20px]">|</span>
          <span className="md:text-[65px] text-[30px] font-black font-publica-play">
            Pulse
          </span>
        </div>

        <div
          style={{
            background: 'url("/images/news.svg")',
            backgroundSize: "cover",
          }}
          className="border-[43px] rounded-4xl border-[#080B16] border-solid outline-2 outline-[#121721] w-[72.7777vw] h-[59.51388vw]"
        ></div>

        <div className="main-box text-white absolute mt-[-14.5833vw] md:!p-15 md:!pl-22 !p-[16px]">
          <div className="flex flex-wrap w-full md:mb-16 mb-[50px] gap-5">
            <div className="lg:flex-2 w-full">
              <h2 className="md:text-[43.8px] text-[28px] font-extrabold uppercase leading-11">
                Media, market & Business intelligence platform
              </h2>
              <Button
                variant="outline"
                className="cursor-pointer gradient-border-btn text-[16px] mt-6 bg-transparent rounded-full px-8 py-5 text-white hover:text-white"
              >
                Explore <span className="font-bold">Pulse</span>
              </Button>
            </div>
            <div className="md:text-[18px] text-[12px] lg:flex-3 w-full">
              A media, market & business intelligence platform that seamlessly
              merges your proprietary data with real-time news, social, and
              market signals. By unifying internal and external intelligence
              into a single vantage point, this connected intelligence
              technology reveals new opportunities faster, forecasts outcomes
              more accurately, and empowers you to act with confidence.
            </div>
          </div>
          <div className="flex flex-wrap w-full justify-between lg:gap-y-16 md:gap-y-10 gap-y-3 items-stretch">
            {pulseSectionCardInfo.map((item, index) => (
              <div
                className="main-small-box md:!w-[30%] !w-full relative cursor-pointer"
                key={index}
              >
                <div className="color-pattern-bg md:p-6 p-[20px] opacity-80 md:h-[150px] h-[108px]">
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
        </div>
      </section>

      {/* Session section */}
      <section className="relative px-14 flex flex-col items-center justify-center">
        <div className="session-bg z-[-100]"></div>
        <div className="green-shine-session md:block hidden"></div>
        <div className="green-shine-session-small md:block hidden"></div>
        <div className="green-shine-session-2nd-small md:block hidden"></div>
        <div className="green-shine-session-3rd-small md:block hidden"></div>
        <div className="flex gap-11 text-white items-center justify-between mt-39 mb-15">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={214}
            height={53}
            priority
            className="sm:w-[264px] sm:h-[64px] w-[124px] h-[38px]"
          />
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

        <div className="w-full main-box text-white absolute mt-[-20.83vw] md:!p-15 !p-[16px] !backdrop-blur-3xl">
          <div className="flex flex-wrap w-full md:mb-16 mb-[50px] gap-5">
            <div className="lg:flex-2 w-full">
              <h2 className="md:text-[43.8px] text-[28px] font-extrabold uppercase leading-11">
                Next-Gen COnference Technology
              </h2>
              <Button
                variant="ghost"
                className="cursor-pointer green-btn-bg text-[16px] mt-[20px] bg-transparent border-0 px-8 py-5 text-white hover:text-black font-bold"
              >
                Explore Session
              </Button>
            </div>
            <div className="md:text-[18px] text-[12px] lg:flex-3 w-full">
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
          <div className="flex flex-wrap w-full justify-between lg:gap-y-16 md:gap-y-10 gap-y-3 gap-x-0 items-stretch">
            {sessionSectionCardInfo.map((item, index) => (
              <div
                className="main-small-box md:!w-[30%] !w-full relative cursor-pointer"
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
        </div>
      </section>

      {/* Platform section */}
      <section className="relative mx-14 flex flex-col items-center justify-center">
        <div className="red-purple-shine-session md:block hidden z-[-100000]"></div>
        <div className="flex gap-11 text-white items-center justify-between mt-59 mb-29">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={214}
            height={53}
            priority
            className="sm:w-[264px] sm:h-[64px] w-[124px] h-[30px]"
          />
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

        <div className="w-full main-box text-white absolute mt-[-21.4583vw] md:!p-15 md:!pl-22 !p-[16px] !backdrop-blur-3xl backdrop-brightness-75">
          <div className="flex flex-wrap w-full mb-16 gap-5">
            <div className="lg:flex-2 w-full">
              <h2 className="md:text-[43.8px] text-[28px] font-extrabold uppercase leading-11">
                Unified intelligence platform
              </h2>
              <Button
                variant="outline"
                className="cursor-pointer red-btn-bg text-[16px] mt-[20px] bg-transparent border-0 px-8 py-5 text-white hover:text-black font-bold"
              >
                Explore Platform
              </Button>
            </div>
            <div className="md:text-[18px] text-[12px] lg:flex-3 w-full">
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
          <div className="flex flex-wrap w-full justify-between lg:gap-y-16 md:gap-y-10 gap-y-3 gap-x-0 items-stretch">
            {platformSectionCardInfo.map((item, index) => (
              <div
                className="main-small-box lg:!w-[30%] md:!w-[46%] !w-full relative cursor-pointer"
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
                      className="mr-4 md:h-[23px] h-[20px]"
                    />
                  </div>
                  <p className="md:text-[15px] text-[12px]">{item.content}</p>
                  <div className="red-polygon-piece absolute bottom-0 right-0 w-[150px] h-[150px] pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FireSightLayout>
  );
}
