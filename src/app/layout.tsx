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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Handle browser extension attributes that might be added to body
    const body = document.body;
    if (body) {
      // Remove any browser extension attributes that might cause hydration issues
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName?.startsWith("sapling-")
          ) {
            // Suppress hydration warnings for browser extension attributes
            console.warn(
              "Browser extension attribute detected, suppressing hydration warning"
            );
          }
        });
      });

      observer.observe(body, { attributes: true });

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", handleScroll);
      };
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hideHeader =
    pathname.startsWith("/ai-impact") || pathname.startsWith("/sign");

  return (
    <html lang="en">
      <body
        className={clsx(lekton.className, "bg-[#080B16] relative m-0")}
        suppressHydrationWarning={true}
      >
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
