"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function PulseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full relative overflow-x-hidden">
      <div className="bg-[url('/images/pulse-bg-top.svg')] bg-cover w-full h-[64vw] absolute z-[-10000] opacity-40 md:top-0 top-54"></div>
      <TabBar />
      {children}
    </div>
  );
}

function TabBar() {
  const pathname = usePathname();
  const tabItems = [
    {
      label: "Overview",
      href: "/pulse/overview",
    },
    {
      label: "News",
      href: "/pulse/news",
    },
    {
      label: "Report",
      href: "/pulse/report",
    },
    {
      label: "Intelligence",
      href: "/pulse/intelligence",
    },
    {
      label: "Pricing",
      href: "/pulse/pricing",
    },
    {
      label: "Network Brands",
      href: "/pulse/network-brands",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      const container = containerRef.current;
      const content = contentRef.current;

      if (container && content) {
        const containerWidth = container.offsetWidth;
        const contentWidth = content.scrollWidth;

        const maxDrag = contentWidth - containerWidth;

        if (maxDrag > 0) {
          setConstraints({ left: -maxDrag, right: 0 });
        } else {
          setConstraints({ left: 0, right: 0 });
        }
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);

    return () => window.removeEventListener("resize", updateConstraints);
  }, []);
  return (
    <div
      ref={containerRef}
      className="h-16 border-b-[1px] border-b-[#ffffff33] flex md:justify-evenly justify-between md:mt-[150px] mt-[100px] md:mx-14 md:px-[3.5vw] w-full overflow-x-hidden relative box-border"
    >
      <motion.div
        ref={contentRef}
        className="cursor-grab flex gap-14 md:px-0 px-[3.5vw] box-border"
        drag="x"
        dragConstraints={constraints}
        dragElastic={0.1}
      >
        {tabItems.map((ele) => (
          <Link
            key={ele.label}
            href={ele.href}
            className={
              (pathname === ele.href
                ? "text-white font-bold "
                : "text-[#86878D] ") +
              "text-[18px] pt-4 flex flex-col items-center gap-4 h-[63px]"
            }
          >
            <p className="text-center w-full flex text-nowrap">{ele.label}</p>
            <div
              className={
                pathname === ele.href
                  ? "w-full h-1 !bg-[linear-gradient(180deg,rgba(0,255,224,0.55)0%,rgba(188,239,255,0.62)100%)]"
                  : ""
              }
            ></div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
