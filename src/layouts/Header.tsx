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

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 pt-4 w-full h-[130px] text-white z-[1001]"
      style={{
        background:
          "linear-gradient(180deg, #080B16 0%, rgba(8, 11, 22, 0.95) 35.39%, rgba(8, 11, 22, 0.85) 60.89%, rgba(8, 11, 22, 0.30) 82.39%, rgba(8, 11, 22, 0.00) 100%)",
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
        <nav className="hidden md:flex flex-1 items-center justify-end space-x-20 font-medium !text-[18px]">
          <div className="relative">
            <Image
              src="/images/GreenBlurPolygon.svg"
              alt=" "
              width={116}
              height={116}
              className={
                pathname === "/pulse" ? "inline mr-[-48px]" : "hidden"
              }
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-2 text-white !text-[18px] !bg-transparent hover:text-white"
                >
                  PRODUCTS
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
                      stroke-width="1.75"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
              pathname === "/about-us" ? "nav-item active" : "nav-item"
            }
          >
            <svg
              className="mr-4 hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
            >
              <path
                d="M9.25 1.58789C10.2651 1.0018 11.5012 0.964801 12.5439 1.47754L12.75 1.58789L19.1426 5.27832C20.2254 5.90356 20.8926 7.05922 20.8926 8.30957V15.6904C20.8926 16.8626 20.3063 17.9519 19.3408 18.5986L19.1426 18.7217L12.75 22.4121C11.7349 22.9982 10.4988 23.0352 9.45605 22.5225L9.25 22.4121L2.85742 18.7217C1.77464 18.0964 1.10742 16.9408 1.10742 15.6904V8.30957C1.10742 7.13735 1.69369 6.04806 2.65918 5.40137L2.85742 5.27832L9.25 1.58789Z"
                fill="url(#paint0_linear_2287_5337)"
                fill-opacity="0.4"
                stroke="url(#paint1_linear_2287_5337)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2287_5337"
                  x1="0.253731"
                  y1="20.5714"
                  x2="23.345"
                  y2="19.9635"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7A0398" stop-opacity="0.63" />
                  <stop
                    offset="0.703125"
                    stop-color="#690FFB"
                    stop-opacity="0.59"
                  />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2287_5337"
                  x1="11"
                  y1="0"
                  x2="11"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BD00FF" stop-opacity="0.55" />
                  <stop offset="1" stop-color="#0038FF" stop-opacity="0.62" />
                </linearGradient>
              </defs>
            </svg>
            ABOUT US
          </Link>
          <Link
            href="/ai-impact-index"
            className={
              pathname === "/ai-impact-index" ? "nav-item active" : "nav-item"
            }
          >
            <svg
              className="mr-4 hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
            >
              <path
                d="M9.25 1.58789C10.2651 1.0018 11.5012 0.964801 12.5439 1.47754L12.75 1.58789L19.1426 5.27832C20.2254 5.90356 20.8926 7.05922 20.8926 8.30957V15.6904C20.8926 16.8626 20.3063 17.9519 19.3408 18.5986L19.1426 18.7217L12.75 22.4121C11.7349 22.9982 10.4988 23.0352 9.45605 22.5225L9.25 22.4121L2.85742 18.7217C1.77464 18.0964 1.10742 16.9408 1.10742 15.6904V8.30957C1.10742 7.13735 1.69369 6.04806 2.65918 5.40137L2.85742 5.27832L9.25 1.58789Z"
                fill="url(#paint0_linear_2287_5339)"
                fill-opacity="0.4"
                stroke="url(#paint1_linear_2287_5339)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2287_5339"
                  x1="0.253731"
                  y1="20.5714"
                  x2="23.345"
                  y2="19.9635"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7A0398" stop-opacity="0.63" />
                  <stop
                    offset="0.703125"
                    stop-color="#690FFB"
                    stop-opacity="0.59"
                  />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2287_5339"
                  x1="11"
                  y1="0"
                  x2="11"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BD00FF" stop-opacity="0.55" />
                  <stop offset="1" stop-color="#0038FF" stop-opacity="0.62" />
                </linearGradient>
              </defs>
            </svg>
            AI IMPACT INDEX
          </Link>
          <Link
            href="/blog"
            className={pathname === "/blog" ? "nav-item active" : "nav-item"}
          >
            <svg
              className="mr-4 hidden"
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
            >
              <path
                d="M9.25 1.58789C10.2651 1.0018 11.5012 0.964801 12.5439 1.47754L12.75 1.58789L19.1426 5.27832C20.2254 5.90356 20.8926 7.05922 20.8926 8.30957V15.6904C20.8926 16.8626 20.3063 17.9519 19.3408 18.5986L19.1426 18.7217L12.75 22.4121C11.7349 22.9982 10.4988 23.0352 9.45605 22.5225L9.25 22.4121L2.85742 18.7217C1.77464 18.0964 1.10742 16.9408 1.10742 15.6904V8.30957C1.10742 7.13735 1.69369 6.04806 2.65918 5.40137L2.85742 5.27832L9.25 1.58789Z"
                fill="url(#paint0_linear_2287_5338)"
                fill-opacity="0.4"
                stroke="url(#paint1_linear_2287_5338)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2287_5338"
                  x1="0.253731"
                  y1="20.5714"
                  x2="23.345"
                  y2="19.9635"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7A0398" stop-opacity="0.63" />
                  <stop
                    offset="0.703125"
                    stop-color="#690FFB"
                    stop-opacity="0.59"
                  />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2287_5338"
                  x1="11"
                  y1="0"
                  x2="11"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BD00FF" stop-opacity="0.55" />
                  <stop offset="1" stop-color="#0038FF" stop-opacity="0.62" />
                </linearGradient>
              </defs>
            </svg>
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
