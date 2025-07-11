"use client";
import { Lekton } from "next/font/google";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { Header } from "@/layouts/Header";

import "./globals.css";
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
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const hideHeader =
    pathname.startsWith("/ai-impact") || pathname.startsWith("/sign");
  return (
    <html lang="en">
      <body className={clsx(lekton.className, "bg-[#080B16] relative m-0")}>
        <Provider store={store}>
          {!hideHeader && <Header scrolled={scrolled} />}
          <main
            className={clsx(
              hideHeader ? "overflow-y-hidden" : "overflow-x-hidden ",
              "flex flex-col w-full justify-center items-center relative overflow-x-hidden"
            )}
          >
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
