import { Button } from "@/components/ui/button";
import Image from "next/image";
import "./page.css";

export default function Overview() {
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
  return (
    <div>
      {/* Pulse section */}
      <section
        id="pulse"
        className="relative mt-auto flex flex-col items-center justify-center w-full px-14"
      >
        <div className="flex gap-11 text-white items-center justify-around h-16 mt-28 mb-40">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={264}
            height={64}
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
            background: 'url("/images/pulse-show.png")',
            backgroundSize: "cover",
          }}
          className="rounded-4xl w-[72.7777vw] h-[60.07vw] bg-no-repeat"
        >
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(8, 11, 22, 0.00) 31.41%, rgba(8, 11, 22, 0.93) 80.91%, #080B16 100%)",
              width: "100%",
              height: "99.1%",
            }}
          ></div>
        </div>

        <div className="mt-[-23.5vw]">
          <div className="flex justify-between">
            <div className="main-box text-white max-w-[59.036%]">
              <div className="flex flex-col w-full gap-6 items-center pt-[46px] pb-[39px] pl-[80px] pr-[69px]">
                <p className="sub-header-title">ABOUT</p>
                <h2 className="md:text-[43.8px] text-[28px] font-extrabold uppercase leading-[50px]">
                  CONNECTED INTELLIGENCE PLATFORM
                </h2>
                <p className="text-center text-white text-[16px] leading-normal">
                  Pulse is a connected intelligence platform built to merge how
                  you think with what the world signals. It begins with
                  onboarding, not as a formality, but as a foundation: capturing
                  your workflows, professional background, and strategic focus
                  to tailor the entire experience to you. That context fuels
                  Firesight’s knowledge engine, unlocking a stream of
                  personalized, real-time intelligence. The result? A second
                  brain in the cloud that understands how you work—and works
                  with you.
                  <br />
                  <br />
                  Leveraging <b>Natural Language AI technology</b> (<b>LLMs</b>
                  ), Pulse integrates
                  <b>business intelligence</b> <i> (your proprietary data)</i>,{" "}
                  <b>media intelligence</b>
                  <i>(news, social media, and cultural sentiment)</i>, and{" "}
                  <b>market intelligence</b>{" "}
                  <i>
                    (customer behavior, competitor strategies, economic trends,
                    and regulatory changes)
                  </i>{" "}
                  into a seamless flow. By fusing
                  <b className="text-[#069F92]">internal</b> and{" "}
                  <b className="text-[#069F92]">external</b> insights, Pulse
                  amplifies the value of every source—creating a unified
                  perspective that reveals emerging trends, pinpoints
                  competitive threats, and helps you strategize with clarity.
                  <br />
                  <br />
                  This synthesis empowers indiviuals & organizations of all
                  sizes to tackle complex challenges head-on,{" "}
                  <b>making better decisions</b>. Whether you’re monitoring
                  shifts in consumer demand, evaluating competitors’ moves, or
                  staying ahead of regulatory shifts, Pulse provides both a
                  high-level understanding and the granular insights critical
                  for daily decision-making.
                </p>
                <Button
                  variant="outline"
                  className="cursor-pointer gradient-border-btn text-[16px] mt-2 bg-transparent rounded-full px-8 py-5 text-white hover:text-white"
                >
                  Explore <span className="font-bold">Platform</span>
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-between max-w-[38.1777%] gap-8">
              <div className="main-box text-white">
                <div className="flex flex-col mb-[44px] mt-[41px] mx-15 gap-6 items-center">
                  <p className="sub-header-title">PRICING</p>
                  <p className="text-center text-white text-[16px] leading-normal">
                    Firesight Pulse is a <b>subscription-based SaaS platform</b>{" "}
                    with simple, seat-based pricing for individuals or
                    businesses.
                    <br />
                    <br />
                    <b>Solo:</b> 1 seat; <b>Team:</b> 2–8 seats;{" "}
                    <b>Enterprise:</b> 9+ seats; <b>White Label:</b> Branded
                    licensing with API and integration support.
                  </p>
                  <Button
                    variant="outline"
                    className="cursor-pointer gradient-border-btn text-[16px] bg-transparent rounded-full px-8 py-5 text-white hover:text-white"
                  >
                    Explore <span className="font-bold">Pricing</span>
                  </Button>
                </div>
              </div>
              <div className="main-box text-white">
                <div className="flex flex-col mb-[44px] mt-[41px] mx-19 gap-6 items-center">
                  <p className="sub-header-title">USE CASES</p>
                  <p className="text-center text-white text-[16px] leading-normal">
                    <b>Trend & Market Sensing:</b> Forecast demand and act
                    before competitors.
                    <br />
                    <b>AI-Curated Briefings:</b> Get only the insights that
                    matter—no scroll needed.
                    <br />
                    <b>Crisis Detection:</b> Catch media spikes early to protect
                    your brand.
                    <br />
                    <b>Data-backed Intelligence:</b> Personalised reports,
                    articles, forecasts & editorial.
                  </p>
                  <Button
                    variant="outline"
                    className="cursor-pointer gradient-border-btn text-[16px] bg-transparent rounded-full px-8 py-5 text-white hover:text-white"
                  >
                    <span className="font-bold">Contact Us</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore section */}
      <section
        id="explore"
        className="relative mt-auto flex flex-col items-center justify-center w-full px-14"
      >
        <div className="top-25 absolute bg-[url('/images/pulse-bg-2.png')] bg-no-repeat bg-cover w-full h-[580px]"></div>

        <p className="sub-header-title mt-[104px] mb-[50px]">EXPLORE</p>
        <h2 className="text-white md:text-[43.8px] text-[28px] font-extrabold uppercase leading-[50px] !m-0 max-w-[640px] text-center">
          FIND OUT HOW <b className="text-[#219A98]">Pulse</b> CAN TRANSFORM
          YOUR WORKDAY
        </h2>

        <Button
          variant="outline"
          className="cursor-pointer gradient-border-btn text-[16px] my-9 bg-transparent rounded-full px-8 py-5 text-white hover:text-white"
        >
          14 Day Trial | <span className="font-bold">Start</span>
        </Button>
      </section>

      {/* Feature section */}
      <section
        id="features"
        className="relative flex flex-col justify-center w-full px-14 pt-[102px] gap-11"
      >
        <p className="sub-header-title mb-[6px]">FEATURES</p>
        <h2 className="text-white md:text-[43.8px] text-[28px] font-extrabold uppercase leading-[50px] !m-0 max-w-[615px]">
          Media, Market & Business intelligence Offering
        </h2>
        <div className="flex flex-wrap w-full justify-between lg:gap-y-16 md:gap-y-10 gap-y-3 items-stretch text-white">
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
      </section>
      {/* Platform section */}
      <section
        id="platform"
        className="relative mt-auto w-full px-17 pt-[164px] pb-16"
      >
        <div className="top-30 absolute bg-[url('/images/pulse-bg-3.png')] bg-no-repeat bg-cover w-full h-[419px]"></div>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col w-full gap-6 max-w-[47.08%]">
            <p className="sub-header-title">PLATFORM</p>
            <h2 className="md:text-[80px] text-[28px] text-white font-extrabold uppercase leading-[100%]">
              WHAT IS CONNECTED INTELLIGENCE?
            </h2>

            <Button
              variant="outline"
              className="cursor-pointer gradient-border-btn text-[16px] mt-2 bg-transparent rounded-full px-8 py-5 text-white hover:text-white"
            >
              14 Day Trial | <span className="font-bold">Start Now</span>
            </Button>
          </div>
          <div className="w-[1px] h-[123px] opacity-30 bg-white"></div>
          <p className="text-white text-[16px] leading-normal max-w-[32.64%]">
            Connected intelligence is the fusion of your personal context with
            real-time media, market, and business signals—delivered in a way
            that works how you work. Firesight learns from your onboarding
            inputs to tailor insights, automate tasks, and support your daily
            decisions. It becomes your second brain in the cloud—offering
            smarter, faster, and more strategic clarity every step of the way.
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-y-26 items-stretch px-2">
          <div className="w-[27.9%]">
            <div className="flex w-full"></div>
            <p className="text-[15px] leading-[140%] tracking-[0.3px]">
              Tailor your experience with <b>intelligent onboarding</b> that adapts to
              your workflows, goals, and working style—no matter your role or
              industry.
            </p>
          </div>
        </div>
      </section>
      {/* Explore1 section */}
      <section
        id="explore1"
        className="relative flex flex-col items-center justify-center w-full px-14"
      >
        <div className="top-12 absolute bg-[url('/images/pulse-bg-4.png')] bg-no-repeat bg-cover w-full h-[555px]"></div>

        <p className="sub-header-title mt-[104px] mb-[50px]">EXPLORE</p>
        <h2 className="text-white md:text-[43.8px] text-[28px] font-extrabold uppercase leading-[50px] !m-0 max-w-[640px] text-center">
          FIND OUT HOW <b className="text-[#219A98]">Pulse</b> CAN TRANSFORM
          YOUR WORKDAY
        </h2>

        <Button
          variant="outline"
          className="cursor-pointer gradient-border-btn text-[16px] my-9 bg-transparent rounded-full px-8 py-5 text-white hover:text-white"
        >
          14 Day Trial | <span className="font-bold">Start</span>
        </Button>
      </section>
    </div>
  );
}
