"use client";

import FireSightFooter from "@/layouts/FireSightFooter";
import "../page.css";
export default function Page() {
  return (
    <>
      <div className="w-full mt-[96px] md:mb-[58px] mb-[24px]">
        <div className="shineBg_body_top_left !top-0"></div>
        <div className="green-shine-middle-right"></div>
        <div className="bg-[rgba(255,255,255,0.02)] rounded-[20px] border border-[rgba(255,255,255,0.1)] backdrop-blur-[32px] md:pt-[82px] pt-[32px] md:pl-[81px] pl-[16px] md:pb-[100px] pb-[42px] md:pr-[117px] pr-[16px] md:mx-[56px]">
          <h3 className="text-[#E93249] md:text-[32px] text-[18px] font-extrabold md:uppercase leading-[120%]">
            About us
          </h3>
          <div className="md:pl-[40px] pl-0 md:pt-[82px] pt-[42px] text-center">
            <h3 className="text-white md:text-[42px] text-[28px] font-extrabold uppercase leading-[80%]">
              about us
            </h3>
            <p className="text-white text-start md:mt-[47px] mt-[42px] md:text-[17.6px] text-[12px]">
              Founded in February 2023, Firesight is a
              <span className="font-extrabold">horizon-driven AI project</span>{" "}
              exploring the productisation of natural language AI and advanced
              automation technologies. Our goal is to investigate, research, and
              refine practical solutions that help independent professionals,
              freelancers, entrepreneurs, and SMEs navigate an increasingly
              complex information landscape, streamline cognitive workflows, and
              help knowledge workers thrive amidst rapid technological change.
            </p>
            <p className="text-white text-start mt-[20px] md:text-[17.6px] text-[12px]">
              <span className="font-extrabold">
                AI-native conferencing technology
              </span>
              , autonomous work technology,{" "}
              <span className="font-extrabold">
                Decentralized Axiomatic Intelligence Network (DAIN)
              </span>{" "}
              — an experimental global AI-agent edge network, and{" "}
              <span className="font-extrabold">
                D2C AI-native media intelligence
              </span>{" "}
              technology (powering
              <span className="font-extrabold">Firesight | Pulse</span>) are
              just a few of the projects currently underway at Firesight. Each
              reflects our commitment to building useful, context-aware systems
              that meet the evolving needs of modern professionals; irrespective
              of whether they reach it to the market.{" "}
            </p>
            <p className="text-white text-start mt-[20px] md:text-[17.6px] text-[12px]">
              At Firesight, we remain dedicated to carefully aligning
              technological exploration with meaningful real-world applications.
              As we design, prototype, iterate, and refine, our ultimate vision
              is clear: to create accessible tools that empower professionals
              and SMEs to manage information more effectively,{" "}
              <span className="font-extrabold">
                improve productivity, reshape how global news and events are
                accessed, monitored, and understood & transform the way people
                work for the better.
              </span>
            </p>
          </div>
        </div>
      </div>
      <FireSightFooter>
        <div></div> {/* Provide valid children content */}
      </FireSightFooter>
    </>
  );
}
