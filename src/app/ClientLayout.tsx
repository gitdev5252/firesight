"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { Header } from "@/layouts/Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hideHeader =
    pathname.startsWith("/ai-impact") || pathname.startsWith("/sign");

  return (
    <Provider store={store}>
      {!hideHeader && <Header scrolled={scrolled} />}
      <main
        className={
          (hideHeader ? "overflow-y-hidden" : "overflow-x-hidden ") +
          "flex flex-col w-full justify-center items-center relative overflow-x-hidden"
        }
      >
        {children}
      </main>
    </Provider>
  );
}
