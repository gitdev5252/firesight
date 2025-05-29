"use client";
import { Header } from "./Header";
import RootLayout from "@/app/layout";
import { usePathname } from "next/navigation";
import "./layout.scss";
import FireSightFooter from "./FireSightFooter";

export default function FireSightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <RootLayout>
      <div className="min-h-screen firesight-banner-bg">
        <div className="flex flex-col justify-center items-center md:mx-[58.5px] mx-[15px]">
          <Header />
          {pathname === "/" && (
            <div className="banner-bg">
              {/* You can style .banner-bg in your CSS or use inline styles */}
              {/* Example: <img src="/banner.jpg" alt="Banner" className="w-full" /> */}
            </div>
          )}
          <main className="flex-1">{children}</main>
          <FireSightFooter />
        </div>
      </div>
    </RootLayout>
  );
}
