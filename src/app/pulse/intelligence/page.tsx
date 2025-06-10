import { Button } from "@/components/ui/button";
import Image from "next/image";
import "./page.css";
import FireSightFooter from "@/layouts/FireSightFooter";
import Link from "next/link";

export default function Intelligence() {
  return (
    <>
      {/* Pulse section */}
      <section
        id="pulse"
        className="relative mt-auto flex flex-col items-center justify-center w-full md:px-14 px-4"
      >
        <div className="blue-shine-pulse-overview bottom-[-212px] left-[-140px]"></div>
        <div className="blue-shine-pulse-overview-mobile top-[100px] left-[-105px] md:hidden block"></div>
        <div className="bottom-[-270px] absolute bg-[url('/images/pulse-bg-2.svg')] bg-no-repeat bg-cover w-full h-[40.2778vw] opacity-50 md:block hidden"></div>

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
            background: 'url("/images/pulse-intelligence-show.svg")',
            backgroundSize: "cover",
          }}
          className="rounded-4xl w-[72.7777vw] h-[60.07vw] bg-no-repeat md:block hidden"
        ></div>

        <div
          style={{
            background:
              'url("/images/mobile/pulse-intelligence-show-mobile.svg")',
            backgroundSize: "cover",
          }}
          className="w-[100vw] h-[206.07vw] bg-no-repeat block md:hidden"
        ></div>

        <div className="md:mt-[-23.5vw] mt-[-95vw] w-full">
          <div className="main-box text-white">
            <div className="flex flex-col w-full gap-6 items-center md:pt-[46px] md:pb-15 md:px-[50px] px-4 py-6">
              <p className="sub-header-title md:text-[24px] text-[16px]">
                INTELLIGENCE
              </p>
              <h2 className="md:text-[43.8px] text-[28px] text-center font-extrabold uppercase md:leading-[50px] leading-[140%] max-w-[703px]">
                Intelligence Cards: Insights, Forecasts & Responses
              </h2>
              <p className="text-center text-white text-[16px] leading-normal">
                Intelligence is where your data meets the world’s. This is the
                core of connected intelligence - a personalised, always-on feed
                of insights, forecasts, and responses tailored to you and your
                business. Pulse dynamically fuses your internal context with
                vetted external signals from our news & reports product regions,
                distilling information into bite-sized yet powerful intelligence
                cards. Each card is formatted to help you think, decide, and act
                smarter & faster.
                <br />
                <br />
                Whether you’re tracking customer sentiment, assessing
                competitive risk, anticipating regulatory impact, or making
                tactical decisions - Pulse ensures what you see is relevant,
                ranked, and ready. From freelancers and founders to analysts and
                strategy leads, users can switch seamlessly between Modes to
                match their workflow—be it strategic, operational, or reactive.
                <br />
                <br />
                AI-powered but human-calibrated, Intelligence cards evolve with
                your behaviour and preferences.{" "}
                <b className="text-[rgba(0,255,224,0.60)]">Insights</b>{" "}
                <b>reveal what’s unfolding</b>,{" "}
                <b className="text-[rgba(0,255,224,0.60)]">Forecasts</b>{" "}
                <b>suggest what’s likely to happen</b>, and{" "}
                <b className="text-[rgba(0,255,224,0.60)]">Responses</b>{" "}
                <b>recommend what to do next</b> - crafted with context,
                stripped of bias, and mapped to your current focus. It’s not a
                stream of content — it’s a stream of clarity.
              </p>

              <Button
                variant="outline"
                className="cursor-pointer gradient-border-btn md:text-[22px] text-[14px] md:mt-10 bg-transparent rounded-full md:px-[50px] px-9 md:py-[20px] py-3 text-white leading-normal md:h-18 h-11 hover:text-white"
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
        className="relative flex flex-col justify-center w-full md:pt-[140px] pt-[81px] gap-11"
      >
        <div className="top-[30px] absolute bg-[url('/images/mobile/pulse-bg-1-mobile.svg')] bg-no-repeat bg-cover w-full h-[100vw] opacity-50 md:hidden block"></div>

        <div className="blue-shine-pulse-overview md:block hidden bottom-[-140px] right-[-175px]"></div>
        <div className="flex justify-between items-center gap-[10vw] md:flex-row flex-col md:mx-14 mx-4">
          <div className="flex flex-col gap-6 md:items-start items-center">
            <p className="sub-header-title md:text-[24px] text-[16px]">
              INTELLIGENCE
            </p>
            <h2 className="md:text-[43.8px] text-[28px] font-extrabold uppercase md:leading-[50px] leading-[120%] text-white md:text-start text-center">
              Intelligence Briefings: Your clarity stream
            </h2>
            <p className="text-white text-[16px] leading-normal md:text-start text-center">
              In a landscape oversaturated with headlines, Pulse Briefings
              deliver only what matters—clean, relevant, and ready for action.{" "}
              <b className="text-[rgba(0,255,224,0.60)]">
                Designed for knowledge workers
              </b>
              , freelancers, SMEs, and growing teams, briefings are your filter
              for clarity in an otherwise chaotic flow of information.
              <br />
              <br />
              <b>News Briefing:</b> surfaces the most critical
              developments—curated and ranked by topic, category, region, or
              timeframe. This view gives you a structured overview of the
              external landscape, stripped of bias and noise.
              <br />
              <b>My Briefing:</b> on the other hand, is where connected
              intelligence becomes personal. Infused with your onboarding data
              and adaptive to your role, behaviours, and priorities, it’s a{" "}
              <b>state-of-the-art intelligence briefing as</b>{" "}
              <b className="text-[rgba(0,255,224,0.60)]">
                unique as your fingerprint
              </b>
              . Every signal is matched to your workflow, every headline scored
              for relevance, and every card designed to support your next
              decision.
              <br />
              <br />
              No fluff. No scroll fatigue. Just timely, personalised, ad-free
              intelligence—delivered in a premium interface built for modern
              work.
            </p>
            <Button
              variant="outline"
              className="cursor-pointer gradient-border-btn md:text-[22px] text-[14px] mt-[10px] bg-transparent rounded-full md:px-[50px] px-9 md:py-[20px] py-3 text-white leading-normal md:h-18 h-11 hover:text-white"
            >
              14 Day Trial | <span className="font-bold">Start Now</span>
            </Button>
          </div>
          <Image
            src="/images/pulse-intelligence-ad.svg"
            alt="news ad"
            width={645}
            height={702}
            className="md:h-[48.75vw] md:w-[44.8vw]"
          ></Image>
        </div>
      </section>

      {/* Explore1 section */}
      <section
        id="explore1"
        className="relative mt-auto flex flex-col items-center justify-center w-full md:px-14 px-4 md:pb-[115px] pb-15"
      >
        <div className="top-25 absolute bg-[url('/images/pulse-bg-2.svg')] bg-no-repeat bg-cover w-full h-[40.2778vw] opacity-50 md:block hidden"></div>
        <div className="top-8 absolute bg-[url('/images/mobile/pulse-bg-0-mobile.svg')] bg-no-repeat bg-cover w-full h-[66.66vw] opacity-50 md:hidden block"></div>

        <p className="sub-header-title md:text-[24px] text-[16px] md:mt-[104px] mt-20 md:mb-[50px] mb-3">
          EXPLORE
        </p>
        <h2 className="text-white md:text-[43.8px] text-[28px] font-extrabold uppercase md:leading-[50px] leading-[120%] !m-0 md:max-w-[640px] max-w-[266px] text-center">
          FIND OUT HOW <br className="md:hidden block" />{" "}
          <b className="text-[#219A98]">Pulse</b> CAN TRANSFORM YOUR WORKDAY
        </h2>

        <Button
          variant="outline"
          className="cursor-pointer gradient-border-btn md:text-[22px] text-[14px] md:mt-9 mt-6 bg-transparent rounded-full md:px-[50px] px-9 md:py-[20px] py-3 text-white leading-normal md:h-18 h-11 hover:text-white"
        >
          14 Day Trial | <span className="font-bold">Start Now</span>
        </Button>
      </section>
      <FireSightFooter>
        <div className="green-shine-footer-mobile md:hidden block z-[-2342]"></div>
        <div className="blue-shine-pulse-overview md:block hidden bottom-[6.8vw] right-[24.653vw] w-[min(602px, 41.8vw)] h-[min(602px, 41.8vw)]"></div>
        <div className="blue-shine-pulse-overview md:block hidden bottom-[-25vw] right-[-17.57vw] w-[min(602px, 41.8vw)] h-[min(602px, 41.8vw)]"></div>
        <div className="blue-shine-pulse-overview md:block hidden bottom-[-32.85vw] left-[-16.666vw] w-[min(602px, 41.8vw)] h-[min(602px, 41.8vw)]"></div>
      </FireSightFooter>
    </>
  );
}
