"use client";
import "./page.css";
import { TabBar } from "./layout";
import Link from "next/link";
export default function Page() {
  const mainCardInfo = [
    "Agriculture Forestry & Fishing",
    "Engineering & Architecture",
    "Art, Culture & Design",
    "Aviation & Aerospace",
    "Business Management & Administration",
    "Construction, Mining & Trades",
  ];
  return (
    <>
      <div className="w-full lg:my-29 md:mt-9 mt-11 md:mb-13 mb-7">
        <TabBar type={1} />
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-between lg:gap-y-9 gap-y-4 text-white font-bold lg:text-2xl text-[16px] leading-normal">
        {mainCardInfo.map((ele, index) => (
          <Link
            key={index}
            href="/ai-impact/home/category"
            className="main-small-box-1 flex items-center justify-center lg:h-90 md:h-54 h-79 md:!w-[31%] sm:!w-[48.5%] !w-full"
          >
            <div className="color-pattern-bg-1"></div>
            <p className="text-center mx-6">{ele}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
