"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export function Header({ scrolled }: { scrolled: boolean }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header
      className="top-0 pt-4 w-[100vw] h-[100px] text-white z-[1001] fixed"
      style={{
        background: scrolled
          ? "linear-gradient(180deg, #080B16 0%, rgba(8, 11, 22, 0.95) 35.39%, rgba(8, 11, 22, 0.85) 60.89%, rgba(8, 11, 22, 0.30) 82.39%, rgba(8, 11, 22, 0.00) 100%)"
          : "#ffffff00",
      }}
    >
      <div className="flex h-16 items-center md:mx-14 px-4">
        <div className="mr-16 flex items-center lg:flex-1/6">
          <Link href="/" className="flex items-center">
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
        <nav className="hidden md:flex md:flex-5/6 flex-auto items-center justify-end font-medium !text-[18px] w-full">
          <div className="flex items-center relative ">
            <Button
              variant="ghost"
              className="px-2 text-white !text-[18px] !bg-transparent hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {pathname === "/pulse/overview" && (
                <Image
                  src="/images/BlueBlurPolygon.svg"
                  alt="Pulse"
                  width={116}
                  height={116}
                  className="inline mx-[-40px]"
                />
              )}
              {pathname.includes("/session") && (
                <Image
                  src="/images/GreenBlurPolygon.svg"
                  alt="Session"
                  width={116}
                  height={116}
                  className="inline mx-[-40px]"
                />
              )}
              {pathname === "/pulse/overview"
                ? "FIRESIGHT | PULSE"
                : pathname.includes("/session")
                ? "FIRESIGHT | SESSION"
                : "PRODUCTS"}
              <Image
                src={
                  menuOpen
                    ? "/images/icons/uparrow.png"
                    : "/images/icons/downarrow.png"
                }
                alt={menuOpen ? "Down Arrow" : "Up Arrow"}
                width={14}
                height={14}
                className="ml-2 mb-1"
              />
            </Button>
            {menuOpen && (
              <div
                ref={menuRef}
                className="main-menu-box text-white !absolute w-[388px] h-[250px] left-0 top-13 mr-0"
              >
                <div className="flex justify-end items-center mt-4 pr-5">
                  <Button
                    onClick={() => setMenuOpen(false)}
                    variant="ghost"
                    className="p-0"
                  >
                    <Image
                      src="/images/mobile/menu-close.svg"
                      alt="Close"
                      width={24}
                      height={24}
                      className="lg:size-6 md:size-[18px] size-[20px]"
                    />
                  </Button>
                </div>
                <div className="flex flex-col px-1">
                  <Link
                    href="/pulse/overview"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="flex items-center justify-start h-[52px]">
                      <Image
                        src="/images/BlueBlurPolygon.svg"
                        alt=" "
                        width={116}
                        height={116}
                        className={"mx-[-33px] my-[-48ox]"}
                      />
                      FIRESIGHT | PULSE
                    </div>
                  </Link>

                  <div className="flex items-center justify-start h-[52px]">
                    <Image
                      src="/images/GreenBlurPolygon.svg"
                      alt=" "
                      width={116}
                      height={116}
                      className={"mx-[-33px] my-[-48ox]"}
                    />
                    <Link href="/session" onClick={() => setMenuOpen(false)}>
                      FIRESIGHT | SESSIONS{" "}
                      <small>
                        <i>(Comming Soon)</i>
                      </small>
                    </Link>
                  </div>
                  <div className="flex items-center justify-start h-[52px]">
                    <Image
                      src="/images/PinkBlurPolygon.svg"
                      alt=" "
                      width={116}
                      height={116}
                      className={"mx-[-33px] my-[-48ox]"}
                    />
                    <Link href="/platform" onClick={() => setMenuOpen(false)}>
                      FIRESIGHT | PLATFORM <small>(Comming Soon)</small>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          {pathname === "/session" ? (
            <div className="start-session-btn-bg">
              <Link
                href="/session/start-session"
                className="nav-item active absolute -top-[8px] w-full h-full flex items-center justify-center"
              >
                Start Session Now
              </Link>
            </div>
          ) : (
            ""
          )}
          {pathname === "/session/start-session" ? (
            <>
              <Button
                variant="outline"
                className="green-gradient-border-btn text-[18px] px-[35px] py-[25px] !text-white 2xl:ml-10 md:ml-[16px]"
              >
                14 Days Trial | <span className="font-bold ">Start Now</span>
              </Button>
              <Button
                variant="outline"
                className="2xl:ml-10 md:ml-[16px] !bg-[rgba(8,11,22,0.5)] rounded-[55px] py-[25px] px-[35px] text-[18px] !text-white border border-[#262933]"
              >
                Log In
              </Button>
            </>
          ) : (
            ""
          )}
          {pathname !== "/session/start-session" && (
            <div
              className={`flex  ${pathname === "/session" ? "ml-0" : "ml-10"}`}
            >
              {" "}
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
                href="/ai-impact"
                className={
                  pathname === "/ai-impact" ? "nav-item active" : "nav-item"
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
                href="https://blog.firesight.ai/"
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
            </div>
          )}
        </nav>
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden block ml-auto w-6 h-6"
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
              </div>
              <div className="vertical-divider !h-[105px]"></div>
              {/* Main Nav */}
              <div className="flex flex-col flex-1 items-center gap-y-3">
                <div>
                  <Link href="/ai-impact" className="hover:underline">
                    AI Impact Index
                  </Link>
                </div>
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
