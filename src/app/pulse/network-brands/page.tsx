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
        <div className="bg-[url('/images/color-pattern-network-brands.svg')] bg-cover w-full h-[1970px] top-[0px] absolute z-[-10000] opacity-70"></div>
      </div>
      <div className="flex flex-col items-center w-full">
        <h4 className="uppercase mt-[107px] mb-[47px] text-center font-extrabold text-[24px] leading-[150%] text-[rgba(0,255,224,0.6)]">
          network brands
        </h4>
        <h1 className="text-center mb-[81px] text-[80px] font-extrabold uppercase text-white leading-[100%] max-w-[1034px]">
          Connected Intelligence Deployed at Scale
        </h1>
      </div>
      <div className="mx-14 backdrop-blur-[34.5px] bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.1)] border text-white text-center lg:px-[140px] lg:pt-[105px] lg:pb-[85.67px] p-[40px] mb-[30px] rounded-[20px] lg:text-[35px] text-[25px] relative">
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
          className="cursor-pointer gradient-border-btn text-[16px] mt-[35px] bg-transparent rounded-full px-[50px] py-[20px] text-white hover:text-white"
        >
          Contact Us
        </Button>
      </div>
      <div className="flex flex-wrap justify-around mx-[58px] text-white gap-[30px] pb-[30px] relative">
        <div className="blue-shine-pulse-overview bottom-[-24.583vw] right-[-13.47vw] min-w-[min(602px,41.8vw)] min-h-[min(602px,41.8vw)]"></div>
        <div className="flex justify-center items-center flex-col lg:w-[49%] md:w-[47%] w-full backdrop-blur-[34.5px] bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.1)] border p-[64px] text-center rounded-[20px]">
          <Image
            src="/images/icons/bevera.svg"
            height={65}
            width={65}
            alt="bevera"
            className="mb-[20px]"
          />
          <h5
            className="mb-[20px] leading-[100%] uppercase text-[24px] font-extrabold bg-clip-text text-transparent"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,255,224,0.55) 0%, rgba(188,239,255,0.62) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            bevera
          </h5>
          <h3 className="text-[26px] italic mb-[30px]">
            Craft Beverage <br />
            Intelligence Reimagined
          </h3>
          <p className="text-[16px] mb-[40px]">
            Bevera.ai is a Firesight-powered platform designed exclusively for
            professionals in the beverage industry. From sustainability signals
            to market trend forecasting, Bevera delivers real-time insight to
            brewers, distillers, and beverage entrepreneurs—curated with
            precision, served with personality.
          </p>
          <Button
            variant="outline"
            className="cursor-pointer gradient-border-btn text-[16px] bg-transparent rounded-full px-[50px] py-[20px] text-white hover:text-white"
          >
            bevera.ai
          </Button>
        </div>
        <div className="flex justify-center items-center flex-col lg:w-[48.5%] w-full backdrop-blur-[34.5px] bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.1)] border p-[64px] text-center rounded-[20px]">
          <Image
            src="/images/icons/stadium.svg"
            height={65}
            width={65}
            alt="bevera"
            className="mb-[20px]"
          />
          <h5
            className="mb-[20px] leading-[100%] uppercase text-[24px] font-extrabold bg-clip-text text-transparent"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,255,224,0.55) 0%, rgba(188,239,255,0.62) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            stadium | enterprise
          </h5>
          <h3 className="text-[26px] italic mb-[30px]">
            Sports Media Intelligence
            <br /> for the Sports Business Landscape
          </h3>
          <p className="text-[16px]">
            STADIUUM | Enterprise is a verticalized Pulse deployment tailored
            for media, wagering, technology, and sports organisations.
            Delivering high-frequency insights, personalized reporting, and live
            briefings across leagues, teams, sponsors, and tech providers -
            STADIUUM makes sense of industry noise with clarity and speed.
          </p>
          <Button
            variant="outline"
            className="cursor-pointer gradient-border-btn text-[16px] mt-[35px] bg-transparent rounded-full px-[50px] py-[20px] text-white hover:text-white"
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
