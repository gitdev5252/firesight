"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RefObject } from "react";

type Props = {
  menuRef: RefObject<HTMLDivElement | null>;
  onClose: () => void;
};

export default function ProductsMenu({ menuRef, onClose }: Props) {
  return (
    <div
      ref={menuRef}
      className="main-menu-box text-white !absolute w-[388px] h-[250px] left-0 top-13 mr-0"
    >
      <div className="flex justify-end items-center mt-4 pr-5">
        <Button onClick={onClose} variant="ghost" className="p-0">
          <Image
            src="/images/mobile/menu-close.svg"
            alt="Close"
            width={25}
            height={24}
            className="lg:size-6 md:size-[18px] size-[20px]"
          />
        </Button>
      </div>
      <div className="flex flex-col px-4">
        <Link href="/pulse/overview" onClick={onClose}>
          <div className="flex items-center justify-start gap-4 h-[52px]">
            <Image
              src="/images/icons/polygon-blue.svg"
              alt=" "
              width={25}
              height={24}
            />
            FIRESIGHT | PULSE
            <small>
              <i>(Closed Alpha)</i>
            </small>
          </div>
        </Link>

        <div className="flex items-center justify-start gap-4 h-[52px]">
          <Image
            src="/images/icons/polygon-green.svg"
            alt=" "
            width={25}
            height={24}
          />
          <Link href="/sessions" onClick={onClose}>
            FIRESIGHT | SESSIONS{" "}
            <small>
              <i>(Alpha)</i>
            </small>
          </Link>
        </div>
        <div className="flex items-center justify-start gap-4 h-[52px]">
          <Image
            src="/images/icons/polygon-puple.svg"
            alt=" "
            width={25}
            height={24}
          />
          <Link href="#" onClick={onClose}>
            FIRESIGHT | PLATFORM{" "}
            <small>
              <i>(Coming Soon)</i>
            </small>
          </Link>
        </div>
      </div>
    </div>
  );
}
