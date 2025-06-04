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
      <h1 className="text-white">Hello this is About US Page</h1>
      <FireSightFooter />
    </div>
  );
}
