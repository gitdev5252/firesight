import { Button } from "@/components/ui/button";
import Image from "next/image";
import "./page.css";
import FireSightFooter from "@/layouts/FireSightFooter";
import Link from "next/link";

export default function Report() {
  return (
    <>
      {/* Pulse section */}
      <section
        id="pulse"
        className="relative mt-auto flex flex-col items-center justify-center w-full md:px-14 px-4"
      >
        <div className="blue-shine-pulse-overview bottom-[-212px] left-[-140px]"></div>

        <div className="bottom-[-190px] absolute bg-[url('/images/pulse-bg-2.svg')] bg-no-repeat bg-cover w-full h-[40.2778vw] opacity-50"></div>

        <div className="flex md:gap-11 gap-3 text-white items-center justify-around md:h-16 h-[30px] md:mt-28 mt-20 md:mb-[77px] mb-0">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={264}
              height={64}
              priority
              className="md:w-[264px] md:h-[64px] w-[124px] h-[30px]"
            />
          </Link>
          <span className="md:text-[45px] text-[20px]">|</span>
          <span className="md:text-[65px] text-[30px] font-black font-publica-play">
            Pulse
          </span>
        </div>

        <div
          style={{
            background: 'url("/images/pulse-report-show.svg")',
            backgroundSize: "cover",
          }}
          className="rounded-4xl w-[72.7777vw] h-[60.07vw] bg-no-repeat"
        >
          {/* <div
            style={{
              background:
                "linear-gradient(180deg, rgba(8, 11, 22, 0.00) 31.41%, rgba(8, 11, 22, 0.93) 80.91%, #080B16 100%)",
              width: "100%",
              height: "99.1%",
            }}
          ></div> */}
        </div>

        <div className="mt-[-22.4vw] px-[7.15vw]">
          <div className="main-box text-white">
            <div className="flex flex-col w-full gap-6 items-center pt-[46px] pb-15 px-[50px]">
              <p className="sub-header-title md:text-[24px] text-[16px]">REPORTS</p>
              <h2 className="md:text-[43.8px] text-[28px] text-center font-extrabold uppercase md:leading-[50px] leading-[120%]">
                Mission critical analysis
              </h2>
              <p className="text-center text-white text-[16px] leading-normal">
                Reports are where raw information becomes working intelligence.
                Leveraging <b>Natural Language AI</b> and your onboarding data
                profile, each report is crafted from live data sources—trusted
                news, competitor moves, social sentiment, economic shifts, and
                regulatory developments—distilled into focused, professionally
                relevant insight. Each report explores a mission-critical topic
                within your professional domain—whether you&apos;re operating in
                finance, marketing, IT, real estate, healthcare, consulting, or
                creative industries. From consumer trends and regulatory
                insights to competitive dynamics and regional market shifts,
                Pulse delivers <b>structured analysis & intelligence</b> on the
                issues that shape strategy, influence operations & drive
                outcomes.
                <br />
                <br />
                Transforming complexity into clarity - framing the signals that
                matter with the depth and context today’s professionals require.
                And with Firesight’s flexible Modes system, you’re never locked
                into one view. Multi-Mode functionality enables every
                subscription seat to access any Mode - Freelancer, Marketing
                Consultant, Startup Advisor, Finance Analyst etc., each with
                pre-curated categories, topics, data and intelligence tailored
                to that occupational context. Switch modes freely as your focus
                shifts. The result? <b>Sector-specific reports</b> that speaks
                your language and supports how you work. All Reports include{" "}
                <b>interactive</b>{" "}
                <b className="text-[rgba(0,255,224,0.60)]">
                  AI-generated summaries
                </b>{" "}
                and <b>report narrative analysis</b> of the report contents, as
                well as all sources used in <b>citation badges</b>. Easy PDF
                export feature, Be confidently ready to drop into decks, share
                with clients, or brief internal teams. It’s trustworthy, expert
                backed insight that’s built for action, formatted for business,
                and delivered with the professional in mind.
                <br />
                <br />
              </p>
              <Button
                variant="outline"
                className="cursor-pointer gradient-border-btn text-[22px] mt-10 bg-transparent rounded-full px-[50px] py-[20px] text-white leading-normal h-18 hover:text-white"
              >
                14 Day Trial | <span className="font-bold">Start Now</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature section */}
      <section
        id="feature"
        className="relative flex flex-col justify-center w-full md:px-14 px-4 pt-[140px] gap-11"
      >
        <div className="blue-shine-pulse-overview bottom-[-140px] right-[-175px]"></div>
        <div className="flex justify-between items-center gap-[10vw] w-full">
          <div className="flex flex-col gap-6 items-start">
            <p className="sub-header-title md:text-[24px] text-[16px]">REPORTS</p>
            <h2 className="md:text-[43.8px] text-[28px] font-extrabold uppercase md:leading-[50px] leading-[120%] text-white">
              Turning Information Into Direction
            </h2>
            <p className="text-white text-[16px] leading-normal">
              Reports are designed to help <b>modern knowledge workers</b> plan,
              adapt, and grow—delivering deep, sector-specific intelligence
              powered by large language models and refined with expert context.
              These aren’t surface-level summaries, but strategic tools built to
              shift perspective and <b>sharpen decision-making</b>. A single
              report can reshape your next move - when it’s grounded in
              complete, accurate, and actionable intelligence. Firesight
              combines qualitative insight, quantitative data, and the
              machine-speed interpretation of LLMs to deliver a{" "}
              <b className="text-[rgba(0,255,224,0.60)]">
                360° view of your landscape
              </b>{" "}
              - distilled into clear, useful narratives.
              <br />
              <br />
              Each report is tuned to your industry and role. Whether
              you&apos;re in marketing, real estate, SaaS, finance, healthcare,
              or consulting, Pulse Reports adapt to your category. For{" "}
              <b>freelancers, independent professionals, SMEs,</b>
              and <b>growing businesses</b>, Reports turn information into
              forward momentum—clear, fast, and formatted for the way modern
              work happens.
            </p>
            <Button
              variant="outline"
              className="cursor-pointer gradient-border-btn text-[22px] mt-[10px] bg-transparent rounded-full px-[50px] py-[20px] text-white leading-normal h-18 hover:text-white"
            >
              14 Day Trial | <span className="font-bold">Start Now</span>
            </Button>
          </div>
          <Image
            src="/images/pulse-report-ad.svg"
            alt="news ad"
            width={645}
            height={702}
            className="h-[48.75vw] w-[44.8vw]"
          ></Image>
        </div>
      </section>

      {/* Explore1 section */}
      <section
        id="explore1"
        className="relative flex flex-col items-center justify-center w-full md:px-14 px-4 pb-[177px]"
      >
        <div className="top-8 absolute bg-[url('/images/pulse-bg-4.svg')] bg-no-repeat bg-cover w-full h-[38.5417vw] opacity-50"></div>

        <p className="sub-header-title md:text-[24px] text-[16px] mt-[80px] mb-[50px]">EXPLORE</p>
        <h2 className="text-white md:text-[43.8px] text-[28px] font-extrabold uppercase md:leading-[50px] leading-[120%] !m-0 max-w-[640px] text-center">
          FIND OUT HOW <b className="text-[#219A98]">Pulse</b> CAN TRANSFORM
          YOUR WORKDAY
        </h2>

        <Button
          variant="outline"
          className="cursor-pointer gradient-border-btn text-[22px] mt-9 bg-transparent rounded-full px-[50px] py-[20px] text-white leading-normal h-18 hover:text-white"
        >
          14 Day Trial | <span className="font-bold">Start Now</span>
        </Button>
      </section>

      <FireSightFooter>
        <div className="blue-shine-pulse-overview bottom-[6.8vw] right-[24.653vw] w-[min(602px, 41.8vw)] h-[min(602px, 41.8vw)]"></div>
        <div className="blue-shine-pulse-overview bottom-[-16.25vw] right-[-20.277vw] w-[min(602px, 41.8vw)] h-[min(602px, 41.8vw)]"></div>
        <div className="blue-shine-pulse-overview bottom-[-23.542vw] left-[-16.666vw] w-[min(602px, 41.8vw)] h-[min(602px, 41.8vw)]"></div>
      </FireSightFooter>
    </>
  );
}
