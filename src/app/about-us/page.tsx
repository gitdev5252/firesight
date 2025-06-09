"use client";

import FireSightFooter from "@/layouts/FireSightFooter";
import "../page.css";
export default function Page() {
  return (
    <>
      <div className="w-full mt-[96px] mb-[58px]">
        <div className="shineBg_body_top_left !top-0"></div>
        <div className="green-shine-middle-right"></div>
        <div className="bg-[rgba(255,255,255,0.02)] rounded-[20px] border border-[rgba(255,255,255,0.1)] backdrop-blur-[32px] pt-[82px] pl-[81px] pb-[100px] pr-[117px] md:mx-[56px]">
          <h3 className="text-[#E93249] text-[32px] font-extrabold uppercase leading-[120%]">
            about us
          </h3>
          <div className="pl-[40px] pt-[82px] text-center">
            <h3 className="text-white text-[42px] font-extrabold uppercase leading-[80%]">
              about us
            </h3>
            <p className="text-white text-start mt-[47px] text-[17.6px]">
              Founded in February 2023, Firesight is a
              <span className="font-extrabold">horizon-driven AI project</span>{" "}
              exploring the productisation of natural language AI and advanced
              automation technologies. Our goal is to investigate, research, and
              refine practical solutions that help independent professionals,
              freelancers, entrepreneurs, and SMEs navigate an increasingly
              complex information landscape, streamline cognitive workflows, and
              help knowledge workers thrive amidst rapid technological change.
            </p>
            <p className="text-white text-start mt-[20px] text-[17.6px]">
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
            <p className="text-white text-start mt-[20px] text-[17.6px]">
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
