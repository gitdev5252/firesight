"use client";
import { Header } from "./Header";
import "./layout.css";
import { useEffect, useState } from "react";

export default function FireSightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header scrolled={scrolled} />
      <main className="flex flex-col w-full overflow-x-hidden justify-center items-center">
        {children}
      </main>
    </>
  );
}
