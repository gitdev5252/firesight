import { Lekton } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import "./page.css";
import ClientLayout from "./ClientLayout";
import FireSightFooter from "@/layouts/FireSightFooter";

const lekton = Lekton({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lekton",
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(lekton.className, "bg-[#080B16] relative m-0")}>
        <ClientLayout>{children}</ClientLayout>
        <FireSightFooter>
          <div className="green-shine-footer-mobile md:hidden block z-[-2342]"></div>
          <div className="blue-shine-pulse-overview w-[min(602px,41.8vw)] h-[min(602px,41.8vw)] bottom-[7.7vw] right-[19.3vw] md:block hidden"></div>
          <div className="blue-shine-pulse-overview bottom-[-25.555vw] right-[-20.277vw] w-[min(602px,41.8vw)] h-[min(602px,41.8vw)] md:block hidden"></div>
          <div className="blue-shine-pulse-overview bottom-[-32.847vw] left-[-16.666vw] w-[min(602px,41.8vw)] h-[min(602px,41.8vw)] md:block hidden"></div>
        </FireSightFooter>
      </body>
    </html>
  );
}
