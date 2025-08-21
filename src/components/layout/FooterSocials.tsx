"use client";
import Link from "next/link";
import Image from "next/image";

export default function FooterSocials({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={className}>
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
          alt="Discord"
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
}
