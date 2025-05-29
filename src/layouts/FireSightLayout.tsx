"use client";
import { Header } from "./Header";
import RootLayout from "@/app/layout";
import { usePathname } from "next/navigation";
import "./layout.scss";

export default function FireSightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <RootLayout>
      <div className="flex flex-col min-h-screen firesight-banner-bg">
        <div className="flex flex-col mx-[58.5px]">
          <Header />
          {pathname === "/" && (
            <div className="banner-bg">
              {/* You can style .banner-bg in your CSS or use inline styles */}
              {/* Example: <img src="/banner.jpg" alt="Banner" className="w-full" /> */}
            </div>
          )}
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </RootLayout>
  );
}
