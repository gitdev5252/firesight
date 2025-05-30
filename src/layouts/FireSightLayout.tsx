"use client";
import { Header } from "./Header";
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
      <div className="min-h-screen firesight-banner-bg">
        <div className="flex flex-col justify-center items-center ">
          <Header />
          <main className="flex flex-col w-full justify-center items-center">
            {children}
          </main>
          <FireSightFooter />
        </div>
      </div>
    </RootLayout>
  );
}
