"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PulseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full relative">
      <div className="bg-[url('/images/pulse-bg-top.svg')] bg-cover w-full h-[112.986vw] absolute z-[-10000] opacity-40"></div>
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
  return (
    <div className="h-16 border-b-[1px] border-b-[#ffffff33] flex flex-wrap justify-evenly mt-[150px] mx-14 px-[3.5vw]">
      {tabItems.map((ele) => (
        <Link
          key={ele.label}
          href={ele.href}
          className={
            (pathname === ele.href
              ? "text-white font-bold "
              : "text-[#86878D] ") +
            "text-[18px] pt-4 flex flex-col items-center gap-4"
          }
        >
          <span className="text-center w-full">{ele.label}</span>
          <div
            className={
              pathname === ele.href
                ? "w-full h-1 bg-[linear-gradient(180deg,rgba(0,255,224,0.55)0%,rgba(188,239,255,0.62)100%)]"
                : ""
            }
          ></div>
        </Link>
      ))}
    </div>
  );
}
