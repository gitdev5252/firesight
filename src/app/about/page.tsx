"use client";

import { Header } from "@/layouts/Header";
import FireSightFooter from "@/layouts/FireSightFooter";
import "../page.css";
export default function Page() {
  return (
    <div className="relative">
      <Header />
      <div className="shineBg_body_top_left"></div>
      <div className="green-shine-middle-right"></div>
      <div className="bg-transparent rounded-[20px] border border-white/10 backdrop-blur-lg p-8 md:mx-[56px] mt-[16px]">
        <h1 className="text-white">Hello this is About US Page</h1>
      </div>
      <FireSightFooter />
    </div>
  );
}
