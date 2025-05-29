import Link from "next/link";
import Image from "next/image";
import FireSightLayout from "@/layouts/FireSightLayout";

export default function Home() {
  return (
    <FireSightLayout>
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={214}
          height={53}
          priority
          className="md:mt-[70px] mt-[60px] sm:w-[214px] sm:h-[53px] w-[141px] h-[35px]"
        />
      </Link>
    </FireSightLayout>
  );
}
