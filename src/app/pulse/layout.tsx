"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PulseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full mx-14">
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
    <div className="w-full border-b-[1px] border-b-[#ffffff05] flex flex-wrap justify-evenly items-center">
      {tabItems.map((ele) => (
        <Link
          href={ele.href}
          className={
            (pathname === ele.href
              ? "border-b-4 border-b-[linear-gradient(180deg,rgba(0, 255, 224, 0.55) 0%,rgba(188,239,255,0.62) 100%)] text-white font-bold "
              : "text-[#86878D] ") +
            "w-18 h-full text-[18px] py-4 flex items-center"
          }
        >
          <span className="text-center w-full">{ele.label}</span>
        </Link>
      ))}
    </div>
  );
}
