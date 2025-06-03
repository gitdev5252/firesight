"use client";
import RootLayout from "@/app/layout";
import "./layout.css";
import FireSightFooter from "./FireSightFooter";

export default function FireSightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayout>
      <div className="min-h-screen firesight-banner-bg max-h-full">
        <div className="flex flex-col justify-center items-center relative h-full">
          {/* <Header /> */}
          <div className="flex flex-col w-full justify-center items-center">
            {children}
          </div>
          <FireSightFooter />
        </div>
      </div>
    </RootLayout>
  );
}
