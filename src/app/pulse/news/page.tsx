import { Button } from "@/components/ui/button";
import Image from "next/image";
import "./page.css";
import FireSightFooter from "@/layouts/FireSightFooter";
import Link from "next/link";

export default function News() {
  return (
    <>
      {/* Pulse section */}
      <section
        id="pulse"
        className="relative mt-auto flex flex-col items-center justify-center w-full md:px-14 px-4"
      >
        <div className="blue-shine-pulse-overview bottom-[-212px] left-[-140px]"></div>
        <div className="blue-shine-pulse-overview-mobile top-[100px] left-[-105px] md:hidden block"></div>
        <div className="bottom-[-164px] absolute bg-[url('/images/pulse-bg-2.svg')] bg-no-repeat bg-cover w-full h-[40.2778vw] opacity-50 md:block hidden"></div>

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
            background: 'url("/images/pulse-news-show.svg")',
            backgroundSize: "cover",
          }}
          className="rounded-4xl w-[72.7777vw] h-[60.07vw] bg-no-repeat md:block hidden"
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

        <div
          style={{
            background: 'url("/images/mobile/pulse-news-show-mobile.svg")',
            backgroundSize: "cover",
          }}
          className="w-[100vw] h-[206.07vw] bg-no-repeat block md:hidden"
        ></div>

        <div className="md:mt-[-23.5vw] mt-[-95vw] px-0 w-full">
          <div className="main-box text-white">
            <div className="flex flex-col w-full gap-6 items-center md:pt-[46px] md:pb-15 md:px-[50px] py-6 px-4">
              <p className="sub-header-title md:text-[24px] text-[16px]">
                NEWS
              </p>
              <h2 className="md:text-[43.8px] text-[28px] text-center font-extrabold uppercase md:leading-[50px] leading-[140%]">
                Stay ahead of the noise
                <br />
                Act on the{" "}
                <span className="text-[rgba(0,255,224,0.60)]">
                  signals that matter
                </span>
              </h2>
              <p className="text-center text-white text-[16px] leading-normal">
                In a digital landscape oversaturated with noise, News is your
                filter for what matters. Every day, our system ingests thousands
                of global headlines, trusted journalism outlets, specialist
                blogs, industry-specific trade journals, policy changes, and
                cultural shifts across socials - sourced from trusted
                publications, niche outlets, and real-time platforms - distilled
                into an{" "}
                <b>aggregated intelligence feed of actionable signals</b>.
                <br />
                <br />
                But it doesn&apos;t stop there. Pulse goes beyond aggregation.
                Using <b>Natural Language AI</b> and{" "}
                <b>personalised onboarding data</b>, each story is processed,
                stripped of bias, and contextually ranked for relevance to your
                role, company, sector, and focus. Whether you&apos;re a startup
                founder monitoring investor trends, an SME watching industry
                regulation, or a strategist scanning for geopolitical impact,
                News ensures your feed is not just current—it&apos;s personally
                relevant.
                <br />
                <br />
                Our <b>aggregated news headlines</b> are categorised by{" "}
                <b>topic, geography, sector</b>, and <b>keywork entity</b>,
                allowing you to filter your updates like an intelligence
                analyst. No clutter, no scroll fatigue - just high-clarity
                updates that help you stay briefed. Dynamic filters let you
                shift effortlessly between{" "}
                <b className="text-[rgba(0,255,224,0.60)]">news headline</b>{" "}
                snapshots and{" "}
                <b className="text-[rgba(0,255,224,0.60)]">AI external</b> deep
                dives — within an advertising-free, distraction-free interface
                designed to support focused digestion. The result is a
                state-of-the-art experience that turns global signal into
                personalised, decision-ready intelligence faster.
              </p>

              <Button
                variant="outline"
                className="cursor-pointer gradient-border-btn md:text-[22px] text-[14px] md:mt-6 bg-transparent rounded-full md:px-[50px] px-9 md:py-[20px] py-3 text-white leading-normal md:h-18 h-11 hover:text-white"
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
            <p className="sub-header-title md:text-[24px] text-[16px]">NEWS</p>
            <h2 className="md:text-[43.8px] text-[28px] font-extrabold uppercase md:leading-[50px] leading-[120%] text-white md:text-start text-center">
              Editorial Intelligence That{" "}
              <span className="text-[rgba(0,255,224,0.60)]">
                Thinks With You
              </span>
            </h2>
            <p className="text-white text-[16px] leading-normal  md:text-start text-center">
              Beyond the daily flow of headlines, Editorial unlocks the full
              story behind the signal. News Editorial{" "}
              <b>fuses Natural Language AI with human-in-the-loop review</b>,
              producing high-fidelity journalism that bridges raw data and
              decision-ready insight. It’s not just content generation - it’s{" "}
              <b className="text-[rgba(0,255,224,0.60)]">
                a new class of media intelligence
              </b>
              . Each editorial piece draws from a curated blend of aggregated
              news, cultural sentiment, market movements, regulatory shifts, and
              internal data signals - woven together to surface not just what’s
              happening, but why it matters.
              <br />
              <br />
              Editorials come complete with executive summaries, deep narrative
              analysis, geographic mapping, and source citations - bringing
              structure and clarity to complex topics. Every article is
              traceable, ostensibly debiased, and presentation-ready for
              stakeholder briefings or strategic review.
              <br />
              <br />
              It’s <b>journalism re-engineered for decision-makers</b>. Every
              article is an intelligence brief, generated with AI, refined by
              experts, and delivered with precision.
            </p>

            <Button
              variant="outline"
              className="cursor-pointer gradient-border-btn md:text-[22px] text-[14px] mt-[10px] bg-transparent rounded-full md:px-[50px] px-9 md:py-[20px] py-3 text-white leading-normal md:h-18 h-11 hover:text-white"
            >
              14 Day Trial | <span className="font-bold">Start Now</span>
            </Button>
          </div>
          <Image
            src="/images/pulse-news-ad.svg"
            alt="news ad"
            width={650}
            height={684}
            className="md:h-[47.5vw] md:w-[45.139vw]"
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
        <div className="blue-shine-pulse-overview md:block hidden bottom-[7.7vw] right-[19.3vw] w-[min(602px,41.8vw)] h-[min(602px,41.8vw)]"></div>
        <div className="blue-shine-pulse-overview md:block hidden bottom-[-14.375vw] right-[-20.277vw] w-[min(602px,41.8vw)] h-[min(602px,41.8vw)]"></div>
        <div className="blue-shine-pulse-overview md:block hidden bottom-[-21.667vw] left-[-16.666vw] w-[min(602px,41.8vw)] h-[min(602px,41.8vw)]"></div>
      </FireSightFooter>
    </>
  );
}
