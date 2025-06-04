"use client";
import { Lekton } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireSightLayout from "@/layouts/FireSightLayout";
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
      <body
        className={clsx(
          lekton.className,
          "bg-[#080B16] relative overflow-hidden"
        )}
      >
        <FireSightLayout>{children}</FireSightLayout>
      </body>
    </html>
  );
}
