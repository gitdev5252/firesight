"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function Header({ scrolled }: { scrolled: boolean }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);
  return (
    <header
      className="top-0 pt-4 w-full h-[100px] text-white z-[1001] fixed"
      style={{
        background: scrolled
          ? "linear-gradient(180deg, #080B16 0%, rgba(8, 11, 22, 0.95) 35.39%, rgba(8, 11, 22, 0.85) 60.89%, rgba(8, 11, 22, 0.30) 82.39%, rgba(8, 11, 22, 0.00) 100%)"
          : "#ffffff00",
      }}
    >
      <div className="flex h-16 items-center md:mx-14 px-4">
        <div className="mr-16 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={140}
              height={36}
              priority
              className="sm:w-[140px] sm:h-[36px] w-[90px] h-[24px]"
            />
          </Link>
        </div>
        {/* Desktop Nav */}
        {/* <nav className="md:hidden flex flex-1 items-center justify-end">
          <Image
            src="/images/mobile/Menu.svg"
            alt="menu"
            width={24}
            height={24}
          />
        </nav> */}
        <nav className="hidden md:flex flex-1 items-center justify-end space-x-[5.56vw] font-medium !text-[18px]">
          <div className="relative">
            <Image
              src="/images/GreenBlurPolygon.svg"
              alt=" "
              width={116}
              height={116}
              className={
                pathname.substring(0, 6) === "/pulse"
                  ? "inline mx-[-48px]"
                  : "hidden"
              }
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-2 text-white !text-[18px] !bg-transparent hover:text-white"
                >
                  {pathname.substring(0, 6) === "/pulse"
                    ? "FIRESIGHT | PULSE"
                    : "PRODUCTS"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                  >
                    <path
                      d="M2.37914 5.72075L6.18247 9.52409C6.63164 9.97325 7.36664 9.97325 7.81581 9.52409L11.6191 5.72075"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-transparent border-none shadow-lg min-w-[220px] z-[1002]">
                <DropdownMenuItem
                  asChild
                  className="text-white hover:!text-gray-300 hover:!bg-transparent cursor-pointer !text-[18px]"
                >
                  <Link href="/sessions">
                    FIRESIGHT | SESSIONS <small>(Comming Soon)</small>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="text-white hover:!text-gray-300 hover:!bg-transparent cursor-pointer !text-[18px]"
                >
                  <Link href="/platform">
                    FIRESIGHT | PLATFORM <small>(Comming Soon)</small>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="text-white hover:!text-gray-300 hover:!bg-transparent cursor-pointer !text-[18px]"
                >
                  <Link href="/pulse">FIRESIGHT | PULSE</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link
            href="/about-us"
            className={
              (pathname === "/about-us" ? "nav-item active" : "nav-item") +
              " lg:block hidden"
            }
          >
            <Image
              className="mr-4 hidden"
              src="/images/PurplePolygon.svg"
              alt=" "
              width={24}
              height={24}
            />
            ABOUT US
          </Link>
          <Link
            href="/ai-impact-index"
            className={
              (pathname === "/ai-impact-index"
                ? "nav-item active"
                : "nav-item") + " lg:block hidden"
            }
          >
            <Image
              className="mr-4 hidden"
              src="/images/PurplePolygon.svg"
              alt=" "
              width={24}
              height={24}
            />
            AI IMPACT INDEX
          </Link>
          <Link
            href="/blog"
            className={
              (pathname === "/blog" ? "nav-item active" : "nav-item") +
              " lg:block hidden"
            }
          >
            <Image
              className="mr-4 hidden"
              src="/images/PurplePolygon.svg"
              alt=" "
              width={24}
              height={24}
            />
            BLOG
          </Link>
        </nav>
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden ml-auto w-6 h-6"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Open menu"
        >
          <Image
            src="/images/mobile/Menu.svg"
            alt="Menu"
            width={24}
            height={24}
          />
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="footer-box !p-6 pb-3 relative overflow-hidden">
          <div className="flex w-full justify-end">
            <Button
              onClick={() => setMobileMenuOpen(false)}
              variant="ghost"
              className="p-0"
            >
              <Image
                src="/images/mobile/menu-close.svg"
                alt="Close"
                width={24}
                height={24}
              />
            </Button>
          </div>
          <div className="relative flex flex-col text-white text-[12px] items-center">
            {/* Pulse */}
            <div className="flex w-full justify-between pt-[35px] pb-[41px] gap-0 font-bold">
              {/* Firesight | PULSE */}
              <div className="flex flex-col flex-1 items-center gap-y-3">
                <div>
                  Firesight |
                  <span
                    className="ml-2"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,255,224,0.55) 0%, rgba(188,239,255,0.62) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    PULSE
                  </span>
                </div>
                <div>
                  <Link href="/pulse/overview" className="hover:underline">
                    Overview
                  </Link>
                </div>
                <div>
                  <Link href="/pulse/platform" className="hover:underline">
                    Platform
                  </Link>
                </div>
                <div>
                  <Link href="/pulse/pricing" className="hover:underline">
                    Pricing
                  </Link>
                </div>
                {/* <li>
                    <Link
                      href="/pulse/network-brands"
                      className="hover:underline"
                    >
                      Network Partners
                    </Link>
                  </li> */}
              </div>
              <div className="vertical-divider !h-[105px]"></div>
              {/* Main Nav */}
              <div className="flex flex-col flex-1 items-center gap-y-3">
                <div>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </div>
                <div>
                  <Link href="/about-us" className="hover:underline">
                    About Us
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://blog.firesight.ai/"
                    className="hover:underline"
                  >
                    Blog
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://impact.firesight.ai/"
                    className="hover:underline"
                  >
                    AI Impact Index
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#ffffff19]"></div>

            {/* Platform | Sessions */}
            <div className="flex w-full justify-between py-10 gap-0 font-bold">
              <div className="flex flex-col flex-1 items-center gap-y-3">
                <div>
                  Firesight |
                  <span
                    className="ml-2"
                    style={{
                      color: "#E93249",
                    }}
                  >
                    PLATFORM
                  </span>
                </div>
                <Link href="/platform/about" className="hover:underline">
                  About
                </Link>
              </div>
              <div className="vertical-divider !h-[48px]"></div>
              <div className="flex flex-col flex-1 items-center gap-y-3">
                <div>
                  Firesight |
                  <span
                    className="ml-2"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(20, 255, 0, 0.55) 0%, rgba(0, 240, 255, 0.62) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    SESSIONS
                  </span>
                </div>
                <Link href="/sessions/about" className="hover:underline">
                  About
                </Link>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#ffffff19]"></div>

            {/* Contact & Social */}
            <div className="py-5">
              <Link
                href="mailto:hello@firesight.ai"
                className="font-normal text-white"
              >
                hello@firesight.ai
              </Link>
            </div>

            <div className="w-full h-[1px] bg-[#ffffff19]"></div>

            {/* Social Icons */}
            <div className="flex gap-[5px] py-6">
              {/* Replace with your actual social icons */}
              <Link
                href="https://www.linkedin.com/company/firesightai/about/?viewAsMember=true"
                aria-label="LinkedIn"
              >
                <Image
                  src="/images/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="/" aria-label="cb">
                <Image
                  src="/images/icons/cb.svg"
                  alt="cb"
                  width={30}
                  height={30}
                />
              </Link>
              <Link
                href="https://twitter.com/FiresightAi/"
                aria-label="Twitter"
              >
                <Image
                  src="/images/icons/x.svg"
                  alt="X"
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://www.discord.com/" aria-label="Discord">
                <Image
                  src="/images/icons/discord.svg"
                  alt="Game"
                  width={30}
                  height={30}
                />
              </Link>
            </div>

            <div className="w-full h-[1px] bg-[#ffffff19]"></div>

            <div className="flex items-center w-[239px] h-[39px] my-8">
              <Link href="/">
                <Image
                  src="/images/mobile/menu-work-less.svg"
                  alt="D'VINCI"
                  width={239}
                  height={39}
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
