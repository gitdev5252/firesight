"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.css";
import Image from "next/image";
import { useState } from "react";
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
        <nav className="md:hidden flex flex-1 items-center justify-end">
          <Image
            src="/images/mobile/Menu.svg"
            alt="menu"
            width={24}
            height={24}
          />
        </nav>
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
          className="md:hidden ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Open menu"
        >
          <Image
            className="mr-4 hidden"
            src="/images/icons/hamburger.svg"
            alt="Menu"
            width={24}
            height={16}
          />
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#080B16] z-[1100] border-t border-[#23263A]">
          <nav className="flex flex-col items-start px-6 py-4 space-y-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-2 text-white !text-[18px] w-full justify-start"
                >
                  PRODUCTS
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#101522] border-none shadow-lg min-w-[220px]">
                <DropdownMenuItem
                  asChild
                  className="text-white cursor-pointer !text-[18px]"
                >
                  <Link href="/sessions">FIRESIGHT | SESSIONS</Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="text-white cursor-pointer !text-[18px]"
                >
                  <Link href="/platform">FIRESIGHT | PLATFORM</Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="text-white cursor-pointer !text-[18px]"
                >
                  <Link href="/pulse">FIRESIGHT | PULSE</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/about-us" className="text-[#86878D] w-full">
              ABOUT US
            </Link>
            <Link href="/ai-impact-index" className="text-[#86878D] w-full">
              AI IMPACT INDEX
            </Link>
            <Link href="/blog" className="text-[#86878D] w-full">
              BLOG
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
