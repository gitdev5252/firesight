"use client";
import Image from "next/image";

export default function FooterLocation({
  city,
  subtitle,
  address,
  className = "",
}: {
  city: string;
  subtitle?: string;
  address: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Image
        src="/images/icons/location.svg"
        alt="location"
        width={13}
        height={13}
        loading="lazy"
        className="mr-[13px] mt-1"
      />
      <div>
        <div className="flex items-center gap-2 text-white">
          <span className="font-bold">{city}</span>
          {subtitle && (
            <span className="italic text-[#A0AEC0] text-xs">{subtitle}</span>
          )}
        </div>
        <div className="text-[#A0AEC0] text-xs text-center md:text-left">
          {address}
        </div>
      </div>
    </div>
  );
}
