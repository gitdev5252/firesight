// TODO: remove bottom padding when the footer is not at the bottom of the page

import Link from "next/link";
import Image from "next/image";
import "./layout.css";
import { ReactNode } from "react";

export default function FireSightFooter({
  children,
}: {
  children: ReactNode | null;
}) {
  return (
    <>
      <div className="px-14 pb-14 w-full relative m-0 overflow-hidden hidden md:block">
        {children}
        <div
          className="footer-box md:!pt-[93px] !pt-[40px] md:!pb-[24px] !pb-[49px] relative overflow-hidden"
        >
          {/* Top Section */}
          <div className="relative flex flex-col md:flex-row md:justify-between pb-8 border-b border-[#23263A] text-white text-[14px] md:!pr-[67px] md:!pl-[56px] !px-[24px]">
            {/* Logo & Social */}
            {/* Nav Columns */}
            <div className="flex flex-col items-center md:items-start gap-4 min-w-[150px]">
              <Link href="/">
                <Image
                  src="/images/footer-logo.svg"
                  alt="firesight.ai"
                  width={120}
                  height={120}
                  className="pl-6 md:h-[118px] h-[88px]"
                />
              </Link>

              <div className="flex gap-[5px] mt-2 md:relative absolute bottom-0">
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
            </div>
            <div className="vertical-divider !h-[111px] md:!block !hidden"></div>
            {/* Firesight | PULSE */}
            <div>
              <div className="font-bold mb-[12px]">
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
              <ul className="space-y-[12px]">
                <li>
                  <Link href="/pulse/overview" className="hover:underline">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/pulse/platform" className="hover:underline">
                    Platform
                  </Link>
                </li>
                <li>
                  <Link href="/pulse/pricing" className="hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pulse/network-brands"
                    className="hover:underline"
                  >
                    Network Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div className="vertical-divider !h-[111px]  md:!block !hidden"></div>
            {/* Main Nav */}
            <div>
              <ul className="space-y-[12px] ">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://blog.firesight.ai/"
                    className="hover:underline"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://impact.firesight.ai/"
                    className="hover:underline"
                  >
                    AI Impact Index
                  </Link>
                </li>
              </ul>
            </div>
            <div className="vertical-divider !h-[111px]  md:!block !hidden"></div>
            {/* Firesight | SESSIONS */}
            <div>
              <div className="font-bold mb-2 ">
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
              <ul className="space-y-1">
                <li>
                  <Link href="/sessions/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
              <div className="border-b border-[#23263A] mt-[25px]"></div>
              <div className="font-bold mt-6 mb-2">
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
              <ul className="space-y-1">
                <li>
                  <Link href="/platform/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Locations & Partner */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-8 border-b border-[#23263A] h-full md:!px-[41px] !px-[24px]">
            <div className="flex w-full flex-wrap md:justify-between justify-center items-center gap-6 md:gap-8 text-white h-full">
              <div className="flex items-start">
                <Image
                  src="/images/icons/location.svg"
                  alt="Game"
                  width={13}
                  height={13}
                  className="mr-[13px] mt-1"
                />
                <div>
                  <div className="flex items-center gap-2 text-white">
                    <span className="font-bold">LONDON</span>
                    <span className="italic text-[#A0AEC0] text-xs">
                      (Accountants Office)
                    </span>
                  </div>
                  <div className="text-[#A0AEC0] text-xs text-center md:text-left">
                    1180 N Town Center Dr #100,
                    <br />
                    Nevada, 89144, UNITED STATES
                  </div>
                </div>
              </div>
              <div className="vertical-divider md:!block !hidden !h-[60px]"></div>
              {/* Canberra */}
              <div className="flex items-start">
                <Image
                  src="/images/icons/location.svg"
                  alt="Game"
                  width={13}
                  height={13}
                  className="mr-[13px] mt-1"
                />
                <div>
                  <div className="flex items-center gap-2 text-white">
                    <span className="font-bold">CANBERRA</span>
                    <span className="italic text-[#A0AEC0] text-xs">
                      (Outpost)
                    </span>
                  </div>
                  <div className="text-[#A0AEC0] text-xs text-center md:text-left">
                    1 Moore St, Canberra,
                    <br />
                    ACT, 2601, AUSTRALIA
                  </div>
                </div>
              </div>
              <div className="vertical-divider md:!block !hidden !h-[60px]"></div>
              {/* Miami */}
              <div className="flex items-start">
                <Image
                  src="/images/icons/location.svg"
                  alt="Game"
                  width={13}
                  height={13}
                  className="mr-[13px] mt-1"
                />
                <div>
                  <div className="flex items-center gap-2 text-white">
                    <span className="font-bold">MIAMI</span>
                    <span className="italic text-[#A0AEC0] text-xs">
                      (Outpost)
                    </span>
                  </div>
                  <div className="text-[#A0AEC0] text-xs text-center md:text-left">
                    7600 Dr Phillips Blvd Bay 158,
                    <br />
                    Florida, 32819, UNITED STATES
                  </div>
                </div>
              </div>
              <div className="vertical-divider md:!block !hidden !h-[60px]"></div>
              <div className="flex flex-col items-center md:items-end gap-2">
                <Link href="http://dvincigroup.com/">
                  <Image
                    src="/images/D vinci.svg"
                    alt="D'VINCI GROUP"
                    width={198}
                    height={67}
                  />
                </Link>
              </div>
            </div>
            {/* Partner */}
          </div>
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-[#A0AEC0] md:!px-[41px] !px-[24px]">
            <div className="flex items-center mb-2 md:mb-0 min-w-[135px]">
              <Link href="http://dvincigroup.com/">
                <Image
                  src="/images/icons/dvinci.svg"
                  alt="D'VINCI"
                  width={17}
                  height={17}
                />
              </Link>
              <span className="text-[10px] font-bold border-l-2 border-l-white pl-3 ml-3">
                Crafted by D&apos;Vinci
              </span>
            </div>
            <div className="flex flex-wrap w-full justify-center gap-[34px] underline md:text-[12px] text-[8px] font-bold">
              <Link href="/terms">Terms & Conditions</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <span>Firesight Ltd 2025. All Rights Reserved.</span>
            </div>
            <div className="text-[13px] min-w-[238px]">
              Contact Us:{" "}
              <Link
                href="mailto:hello@firesight.ai"
                className="font-bold text-white"
              >
                hello@firesight.ai
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="p-0 w-full relative m-0 overflow-hidden block md:hidden">
        {children}
        <div
          className="footer-box !pb-[49px] relative overflow-hidden"
        >
          <div className="relative flex flex-col text-white text-[12px] !px-6 items-center">
            {/* Top Section */}
            <Link href="/">
              <Image
                src="/images/footer-logo.svg"
                alt="firesight.ai"
                width={120}
                height={120}
                className="my-[42px] h-[88px]"
              />
            </Link>
            <div className="w-full h-[1px] bg-[#ffffff19]"></div>

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
              <span className="font-bold">Contact Us: </span>
              <Link
                href="mailto:hello@firesight.ai"
                className="font-normal text-white"
              >
                hello@firesight.ai
              </Link>
            </div>

            <div className="w-full h-[1px] bg-[#ffffff19]"></div>

            {/* Locations */}
            <div className="flex flex-col justify-center items-center gap-6 text-white h-full py-9">
              {/* Canberra */}
              <div className="flex items-start">
                <Image
                  src="/images/icons/location.svg"
                  alt="Game"
                  width={13}
                  height={13}
                  className="mr-[13px] mt-1"
                />
                <div>
                  <div className="flex items-center gap-2 text-white">
                    <span className="font-bold">CANBERRA</span>
                    <span className="italic text-[#A0AEC0] text-xs">
                      (Outpost)
                    </span>
                  </div>
                  <div className="text-[#A0AEC0] text-xs text-center md:text-left">
                    1 Moore St, Canberra,
                    <br />
                    ACT, 2601, AUSTRALIA
                  </div>
                </div>
              </div>
              {/* London */}
              <div className="flex items-start">
                <Image
                  src="/images/icons/location.svg"
                  alt="Game"
                  width={13}
                  height={13}
                  className="mr-[13px] mt-1"
                />
                <div>
                  <div className="flex items-center gap-2 text-white">
                    <span className="font-bold">DELAWARE</span>
                    <span className="italic text-[#A0AEC0] text-xs">
                      (Corporate HQ)
                    </span>
                  </div>
                  <div className="text-[#A0AEC0] text-xs text-center md:text-left">
                    1180 N Town Center Dr #100,
                    <br />
                    Nevada, 89144, UNITED STATES
                  </div>
                </div>
              </div>
              {/* Miami */}
              <div className="flex items-start">
                <Image
                  src="/images/icons/location.svg"
                  alt="Game"
                  width={13}
                  height={13}
                  className="mr-[13px] mt-1"
                />
                <div>
                  <div className="flex items-center gap-2 text-white">
                    <span className="font-bold">MIAMI</span>
                    <span className="italic text-[#A0AEC0] text-xs">
                      (Outpost)
                    </span>
                  </div>
                  <div className="text-[#A0AEC0] text-xs text-center md:text-left">
                    7600 Dr Phillips Blvd Bay 158,
                    <br />
                    Florida, 32819, UNITED STATES
                  </div>
                </div>
              </div>
              <div className="vertical-divider md:!block !hidden !h-[60px]"></div>
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

            <Link href="http://dvincigroup.com/" className="py-[42px]">
              <Image
                src="/images/D vinci.svg"
                alt="D'VINCI GROUP"
                width={266}
                height={91}
              />
            </Link>

            <div className="w-full h-[1px] bg-[#ffffff19]"></div>

            <div className="min-w-[135px] flex items-center gap-3 my-5">
              <Link href="http://dvincigroup.com/">
                <Image
                  src="/images/icons/dvinci.svg"
                  alt="D'VINCI"
                  width={17}
                  height={17}
                />
              </Link>
              <p className="text-[10px] font-bold border-l-2 border-l-white pl-3">
                Crafted by <b className="text-[#E93249]">D&apos;Vinci</b>
              </p>
            </div>
            <div className="flex flex-wrap w-full justify-between underline text-[8px] font-normal">
              Firesight Ltd 2025. All Rights Reserved.
              <div className="flex gap-3">
                <Link href="/terms">Terms & Conditions</Link>
                <Link href="/privacy">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
