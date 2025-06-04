"use client";
import { Header } from "./Header";
import "./layout.css";
import FireSightFooter from "./FireSightFooter";

export default function FireSightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="min-h-screen overflow-y-auto overflow-x-hidden relative w-full h-[100vh]">
        <div className="flex flex-col justify-center items-center relative">
          <Header />
          <main className="flex flex-col w-full justify-center items-center">
            {children}
          </main>
          <FireSightFooter />
        </div>
      </div>
  );
}
