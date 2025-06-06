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
        className="relative mt-auto flex flex-col items-center justify-center w-full px-14"
      >
        <div className="blue-shine-pulse-overview bottom-[-212px] left-[-140px]"></div>

        <div className="bottom-[-164px] absolute bg-[url('/images/pulse-bg-2.svg')] bg-no-repeat bg-cover w-full h-[40.2778vw] opacity-50"></div>

        <div className="flex gap-11 text-white items-center justify-around h-16 mt-28 mb-[77px]">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={264}
              height={64}
              priority
              className="sm:w-[264px] sm:h-[64px] w-[124px] h-[30px]"
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

        <div className="mt-[-23.5vw] px-[7.15vw]">
          <div className="main-box text-white">
            <div className="flex flex-col w-full gap-6 items-center pt-[46px] pb-15 px-[50px]">
              <p className="sub-header-title">MEWS</p>
              <h2 className="md:text-[43.8px] text-[28px] text-center font-extrabold uppercase leading-[50px]">
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
                Using <b>Natural Language AI</b> and
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
                className="cursor-pointer gradient-border-btn text-[22px] mt-6 bg-transparent rounded-full px-[50px] py-[20px] text-white leading-normal h-18 hover:text-white"
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
        className="relative flex flex-col justify-center w-full px-14 pt-[140px] gap-11"
      >
        <div className="blue-shine-pulse-overview bottom-[-140px] right-[-175px]"></div>
        <div className="flex justify-between items-center gap-[10vw] w-full">
          <div className="flex flex-col gap-6 items-start">
            <p className="sub-header-title">MEWS</p>
            <h2 className="md:text-[43.8px] text-[28px] font-extrabold uppercase leading-[50px] text-white">
              Editorial Intelligence That{" "}
              <span className="text-[rgba(0,255,224,0.60)]">
                Thinks With You
              </span>
            </h2>
            <p className="text-white text-[16px] leading-normal">
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
              className="cursor-pointer gradient-border-btn text-[22px] mt-[10px] bg-transparent rounded-full px-[50px] py-[20px] text-white leading-normal h-18 hover:text-white"
            >
              14 Day Trial | <span className="font-bold">Start Now</span>
            </Button>
          </div>
          <Image
            src="/images/pulse-news-ad.svg"
            alt="news ad"
            width={650}
            height={684}
            className="h-[47.5vw] w-[45.139vw]"
          ></Image>
        </div>
      </section>

      {/* Explore1 section */}
      <section
        id="explore1"
        className="relative flex flex-col items-center justify-center w-full px-14 pb-[177px]"
      >
        <div className="top-8 absolute bg-[url('/images/pulse-bg-4.svg')] bg-no-repeat bg-cover w-full h-[38.5417vw] opacity-50"></div>

        <p className="sub-header-title mt-[90px] mb-[50px]">EXPLORE</p>
        <h2 className="text-white md:text-[43.8px] text-[28px] font-extrabold uppercase leading-[50px] !m-0 max-w-[640px] text-center">
          FIND OUT HOW <b className="text-[#219A98]">Pulse</b> CAN TRANSFORM
          YOUR WORKDAY
        </h2>

        <Button
          variant="outline"
          className="cursor-pointer gradient-border-btn text-[22px] bg-transparent rounded-full px-[50px] py-[20px] text-white leading-normal h-18 hover:text-white"
        >
          14 Day Trial | <span className="font-bold">Start Now</span>
        </Button>
      </section>

      <FireSightFooter>
        <div className="blue-shine-pulse-overview bottom-[7.7vw] right-[19.3vw] w-[min(602px, 41.8vw)] h-[min(602px, 41.8vw)]"></div>
        <div className="blue-shine-pulse-overview bottom-[-14.375vw] right-[-20.277vw] w-[min(602px, 41.8vw)] h-[min(602px, 41.8vw)]"></div>
        <div className="blue-shine-pulse-overview bottom-[-21.667vw] left-[-16.666vw] w-[min(602px, 41.8vw)] h-[min(602px, 41.8vw)]"></div>
      </FireSightFooter>
    </>
  );
}
