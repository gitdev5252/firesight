import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import FireSightFooter from "@/layouts/FireSightFooter";
import "../page.css";
import { sessionFeaturedCardInfo } from "@/utils/constant/firesight";
import { Button } from "@/components/ui/button";
import PricingTag from "@/components/session/PricingTag";
export const dynamic = "force-static";

export default function SessionPage() {
  return (
    <>
      <Head>
        <link rel="preload" href="/images/sessions.svg" as="image" />
        <link
          rel="preload"
          href="/images/mobile/sessions-show-mobile.svg"
          as="image"
        />
      </Head>

      <div className="w-full flex md:px-14 px-4 flex-col items-center justify-center overflow-hidden lg:mb-[280px] md:mb-[120px] mb-[30px]">
        {/* Backgrounds */}
        <div className="absolute inset-0 pointer-events-none z-[-100]">
          <div className="session-bg h-[66.66vw] top-[calc(27vw+125px)] md:top-[350px] md:h-[30vw]"></div>
          <div className="green-shine-session-mobile md:hidden block"></div>
          <div className="green-shine-session md:block hidden"></div>
          <div className="green-shine-session-small md:block hidden"></div>
          <div className="green-shine-session-2nd-small md:block hidden"></div>
          <div className="green-shine-session-3rd-small md:block hidden"></div>
        </div>

        {/* Header */}
        <div className="flex md:gap-11 gap-3 text-white items-center justify-between md:mt-[185px] mt-20 mb-0 md:h-16 h-[30px]">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={214}
              height={53}
              priority
              className="md:w-[264px] md:h-[64px] w-[124px] h-[38px]"
            />
          </Link>
          <span className="md:text-[45px] text-[20px]">|</span>
          <span className="md:text-[65px] text-[30px] font-publica-play">
            Sessions
          </span>
        </div>

        {/* Desktop Background */}
        <div className="hidden md:block mt-20 relative w-[72.57vw] h-[60.14vw]">
          <Image
            src="/images/sessions.svg"
            alt="Sessions Background"
            fill
            priority
            className="object-cover"
          />
          <div className="session-gradient absolute inset-0"></div>
        </div>

        {/* Mobile Background */}
        <div className="w-[100vw] h-[206.07vw] bg-no-repeat block md:hidden bg-contain bg-[url('/images/mobile/sessions-show-mobile.svg')]"></div>

        {/* Introduction */}
        <div className="flex flex-wrap gap-1 justify-between absolute md:mx-[56px] mx-[16px] lg:mt-[66vw] md:mt-[89vw] mt-[-87.4vw]">
          <div className="text-center flex flex-col justify-center items-center md:w-[63%] w-full md:p-[46px] p-[20px] border border-[rgba(255,255,255,0.1)] backdrop-blur-[32px] rounded-[20px]">
            <h3 className="text-[24px] bg-gradient-to-b from-[rgba(20,255,0,0.55)] to-[rgba(0,240,255,0.62)] bg-clip-text text-transparent font-bold md:mb-[36px] mb-[15px]">
              ABOUT
            </h3>
            <h2 className="text-[44px] font-bold uppercase md:mb-[33px] mb-[15px] text-white">
              AI-Native Conference platform
            </h2>
            <p className="text-white">
              Sessions is a next-generation, browser-based conferencing solution
              that combines intuitive collaboration tools with the power of
              embedded AI Agents. In addition to seamless integration with
              platforms like Zoom and Google Meet, Sessions empowers you to host
              and manage your calls directly in a single interface. From the
              moment a meeting begins, intelligent AI agents work behind the
              scenes to transcribe conversations, generate real-time summaries,
              pinpoint action items - even analyse conversation sentiment.
              Sessions helps you stay focused on high-value discussions rather
              than routine admin.{" "}
              <span className="font-bold">
                By unifying live video calls and AI-driven intelligence in one
                place, Sessions transforms the way teams brainstorm, plan & make
                decisions.
              </span>{" "}
              <br />
              Hosts can easily switch user roles, invite new participants on the
              fly, and tag important moments for quick review. Sessions can be
              stopped & started - pause a meeting today, continue it next week
              and pick up right where you left off. Once the session stops, all
              recordings, chat logs, and transcripts are automatically saved to
              your library, making them easy to search, reference, or export
              (manually or by AI Agents), forming a{" "}
              <span className="font-bold">
                continuously growing, AI-powered knowledge base.
              </span>{" "}
              ENever lose track of the &quot;why&quot; behind decisions, nor
              waste time digging for meeting notes. Extract more value from
              calls and{" "}
              <span className="font-bold">
                build momentum, not memory gaps.
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center md:w-[35%] w-full gap-6">
            <div className="text-center flex flex-col justify-center items-center border border-[rgba(255,255,255,0.1)] backdrop-blur-[32px] rounded-[20px] md:p-[40px] p-[20px]">
              <h3 className="text-[24px] bg-gradient-to-b from-[rgba(20,255,0,0.55)] to-[rgba(0,240,255,0.62)] bg-clip-text text-transparent font-bold md:mb-[36px] mb-[15px]">
                PRICING
              </h3>
              <h2 className="text-[24px] font-bold uppercase md:mb-[33px] mb-[15px] text-white">
                $0 - $99.95 P/M
              </h2>
              <p className="text-white">
                Firesight | Sessions offers a freemium model with core features
                available at no charge. Scale up with paid tiers to unlock
                advanced AI capabilities and expanded team features. Seamlessly
                grow your conferencing toolkit without breaking the bank.
              </p>
            </div>
            <div className="text-center flex flex-col justify-center items-center border border-[rgba(255,255,255,0.1)] backdrop-blur-[32px] rounded-[20px] md:p-[40px] p-[20px]">
              <h3 className="text-[24px] bg-gradient-to-b from-[rgba(20,255,0,0.55)] to-[rgba(0,240,255,0.62)] bg-clip-text text-transparent font-bold md:mb-[36px] mb-[15px]">
                USE CASES
              </h3>
              <p className="text-white">
                Firesight | Sessions offers a freemium model with core features
                available at no charge. Scale up with paid tiers to unlock
                advanced AI capabilities and expanded team features. Seamlessly
                grow your conferencing toolkit without breaking the bank.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start flex-col md:px-14 px-4 md:mb-[120px] mb-[30px]">
        <h3 className="text-[24px] bg-gradient-to-b from-[rgba(20,255,0,0.55)] to-[rgba(0,240,255,0.62)] bg-clip-text text-transparent font-bold md:mb-[50px] mb-[15px]">
          FEATURES
        </h3>
        <h1 className="uppercase text-white md:text-[50px] text-[20px] md:mb-[80px] mb-[20px] font-bold">
          AI-Driven Collaboration: <br />
          TRANSFORM YOUR WORKFLOW
        </h1>
        <div className="sm:flex hidden flex-wrap w-full justify-between lg:gap-y-16 md:gap-y-10 gap-y-3 gap-x-0 items-stretch">
          {sessionFeaturedCardInfo.map((item, index) => (
            <div
              className="main-small-box lg:!w-[30%] sm:!w-[46%] !w-full relative cursor-pointer "
              key={index}
            >
              <div className="md:p-6 p-[16px] opacity-80">
                <h3 className="md:text-[30px] text-[20px] font-extrabold text-white">
                  {item.title}
                </h3>
                <p className="md:text-[15px] text-[12px] text-white">
                  {item.content}
                </p>
                <div className="green-polygon-piece absolute bottom-0 right-0 w-[150px] h-[150px] pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-start flex-col md:px-14 px-4">
        <h3 className="text-[24px] bg-gradient-to-b from-[rgba(20,255,0,0.55)] to-[rgba(0,240,255,0.62)] bg-clip-text text-transparent font-bold md:mb-[50px] mb-[15px]">
          PLATFORM
        </h3>
        <div className="flex justify-between items-center flex-wrap ">
          <h1 className="uppercase text-white md:text-[80px] text-[20px] font-bold md:w-[55%] w-full mt-[20px]">
            explore firesight <br />
            sessions platform
          </h1>
          <p className="text-white md:w-[40%] w-full">
            Sessions adapts to any setup—whether a one-on-one with an AI Agent
            or a team engaging multiple agents. AI enhances discussions in real
            time, transcribing, summarising, and analysing sentiment without
            disrupting the flow. By unifying live video calls with AI-driven
            intelligence, Sessions streamlines brainstorming, planning, and
            decision-making, ensuring every meeting leads to actionable
            outcomes.
          </p>
        </div>
      </div>

      <div className="flex justify-start w-full md:px-14 px-4 ">
        <Button
          variant="outline"
          className="green-gradient-border-btn text-[22px] px-[35px] py-[25px] text-white"
        >
          Try for Free
        </Button>
      </div>

      <div className="absolute inset-0 pointer-events-none z-[-100]">
        <div className="session-bg h-[106.66vw] top-[calc(27vw+125px)] md:top-[2900px] md:h-[30vw]"></div>
      </div>

      <div className=" w-full md:px-14 px-4 md:mb-[58px] mb-[20px]">
        <PricingTag />
      </div>

      <div className="w-full">
        <FireSightFooter>
          <div className="green-shine-footer-mobile md:hidden block z-[-2342]"></div>
          <div className="blue-shine-pulse-overview w-[min(602px,41.8vw)] h-[min(602px,41.8vw)] bottom-[7.7vw] right-[19.3vw] md:block hidden"></div>
          <div className="blue-shine-pulse-overview bottom-[-25.555vw] right-[-20.277vw] w-[min(602px,41.8vw)] h-[min(602px,41.8vw)] md:block hidden"></div>
          <div className="blue-shine-pulse-overview bottom-[-32.847vw] left-[-16.666vw] w-[min(602px,41.8vw)] h-[min(602px,41.8vw)] md:block hidden"></div>
        </FireSightFooter>
      </div>
    </>
  );
}
