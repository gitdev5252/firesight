"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: Props) {
  return (
    <div className="footer-box !p-6 pb-3 relative overflow-hidden">
      <div className="flex w-full justify-end">
        <Button onClick={onClose} variant="ghost" className="p-0">
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
            <Link href="/sessions">
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
            </Link>
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
            <Image src="/images/icons/cb.svg" alt="cb" width={30} height={30} />
          </Link>
          <Link href="https://twitter.com/FiresightAi/" aria-label="Twitter">
            <Image src="/images/icons/x.svg" alt="X" width={30} height={30} />
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
  );
}
