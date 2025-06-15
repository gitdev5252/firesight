"use client";

import { Button } from "@/components/ui/button";
import "./page.css";
import Image from "next/image";
import FireSightFooter from "@/layouts/FireSightFooter";

export default function Page() {
  return (
    <>
      <div className="w-full relative">
        <div className="blue-shine-pulse-overview w-[41.8vw] h-[41.8vw] top-[-6.46vw] right-[-9.514vw] z-[-2000]"></div>
        <div className="bg-[url('/images/color-pattern-network-brands.svg')] bg-cover w-full h-[1970px] top-[0px] absolute z-[-10000] opacity-70 md:block hidden"></div>
      </div>
      <div className="flex flex-col items-center w-full">
        <h4 className="uppercase md:mt-[107px] mt-[82px] md:mb-[47px] mb-[12px] text-center font-extrabold text-[24px] leading-[150%] text-[rgba(0,255,224,0.6)]">
          network brands
        </h4>
        <h1 className="text-center md:mb-[81px] mb-[50px] md:text-[80px] text-[28px] font-extrabold uppercase text-white leading-[100%] max-w-[1034px]">
          Connected Intelligence Deployed at Scale
        </h1>
      </div>
      <div className="md:mx-14 mx-[16px] backdrop-blur-[34.5px] bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.1)] border text-white text-center lg:px-[140px] md:pt-[105px] pt-[36px] md:pb-[85.67px] pb-[36px] md:p-[40px] p-[16px] md:mb-[30px] mb-[24px] rounded-[20px] lg:text-[35px] text-[20px] relative">
        <div className="blue-shine-pulse-overview top-[13.056vw] left-[-6.25vw] min-w-[min(602px,41.8vw)] min-h-[min(602px,41.8vw)]"></div>
        <h3>
          <span className="font-bold">Firesight | Pulse</span> powers a growing
          network of intelligence-driven platforms. From craft beverage to
          sports media, our{" "}
          <span className="font-bold">white-label network partners</span> are
          deploying connected intelligence in{" "}
          <span className="text-[rgba(0,255,224,0.6)] font-bold">
            sector-specific
          </span>
          , high-impact ways.
        </h3>
        <Button
          variant="outline"
          className="cursor-pointer gradient-border-btn text-[16px] md:mt-[35px] mt-[24px] bg-transparent rounded-full md:px-[50px] px-[36px] md:py-[20px] py-[12px] text-white hover:text-white"
        >
          <a href="mailto:hello@firesight.ai">Contact Us</a>
        </Button>
      </div>
      <div className="flex flex-wrap justify-around md:mx-[58px] mx-[16px] text-white md:gap-[30px] gap-[24px] pb-[30px] relative">
        <div className="blue-shine-pulse-overview bottom-[-24.583vw] right-[-13.47vw] min-w-[min(602px,41.8vw)] min-h-[min(602px,41.8vw)]"></div>
        <div className="flex justify-center items-center flex-col lg:w-[49%] md:w-[47%] w-full backdrop-blur-[34.5px] bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.1)] border md:p-[64px] max-sm:px-[16px] max-sm:py-[36px] text-center rounded-[20px]">
          <Image
            src="/images/icons/bevera.svg"
            height={65}
            width={65}
            alt="bevera"
            className="md:mb-[20px] mb-[24px] max-sm:h-[50px] max-sm:w-[50px]"
          />
          <h5
            className="md:mb-[20px] mb-[15px] leading-[100%] uppercase md:text-[24px] text-[16px] font-extrabold bg-clip-text text-transparent"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,255,224,0.55) 0%, rgba(188,239,255,0.62) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            bevera
          </h5>
          <h3 className="md:text-[26px] text-[24px] italic md:mb-[30px] mb-[12px]">
            Craft Beverage <br />
            Intelligence Reimagined
          </h3>
          <p className="md:text-[16px] text-[12px] md:mb-[40px] mb-[24px]">
            Bevera.ai is a Firesight-powered platform designed exclusively for
            professionals in the beverage industry. From sustainability signals
            to market trend forecasting, Bevera delivers real-time insight to
            brewers, distillers, and beverage entrepreneurs—curated with
            precision, served with personality.
          </p>
          <Button
            variant="outline"
            className="cursor-pointer gradient-border-btn text-[16px] bg-transparent rounded-full md:px-[50px] px-[36px] md:py-[20px] py-[12px] text-white hover:text-white"
          >
            bevera.ai
          </Button>
        </div>
        <div className="flex justify-center items-center flex-col lg:w-[48.5%] w-full backdrop-blur-[34.5px] bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.1)] border md:p-[64px] max-sm:px-[16px] max-sm:py-[36px] text-center rounded-[20px]">
          <Image
            src="/images/icons/stadium.svg"
            height={65}
            width={65}
            alt="bevera"
            className="md:mb-[20px] mb-[24px] max-sm:h-[50px] max-sm:w-[50px]"
          />
          <h5
            className="md:mb-[20px] mb-[16px] leading-[100%] uppercase md:text-[24px] text-[16px] font-extrabold bg-clip-text text-transparent"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,255,224,0.55) 0%, rgba(188,239,255,0.62) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            stadium | enterprise
          </h5>
          <h3 className="md:text-[26px] text-[24px] italic md:mb-[30px] mb-[12px]">
            Sports Media Intelligence
            <br /> for the Sports Business Landscape
          </h3>
          <p className="md:text-[16px] text-[12px]">
            STADIUUM | Enterprise is a verticalized Pulse deployment tailored
            for media, wagering, technology, and sports organisations.
            Delivering high-frequency insights, personalized reporting, and live
            briefings across leagues, teams, sponsors, and tech providers -
            STADIUUM makes sense of industry noise with clarity and speed.
          </p>
          <Button
            variant="outline"
            className="cursor-pointer gradient-border-btn text-[16px] md:mt-[35px] mt-[24px] bg-transparent rounded-full md:px-[50px] px-[36px] md:py-[20px] py-[12px] text-white hover:text-white"
          >
            stadium.com
          </Button>
        </div>
      </div>

      <FireSightFooter>
        <div className="blue-shine-pulse-overview bottom-[-18.264vw] left-[-16.666vw] min-w-[min(602px,41.8vw)] min-h-[min(602px,41.8vw)]"></div>
      </FireSightFooter>
    </>
  );
}
