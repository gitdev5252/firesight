import Link from "next/link";
import Image from "next/image";
import FireSightLayout from "@/layouts/FireSightLayout";
import "./page.css";
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
          className="md:mt-[70px] mt-[60px] sm:w-[214px] sm:h-[53px] w-[141px] h-[35px] mb-20"
        />
      </Link>
      <section className="relative w-full flex flex-col items-center justify-center z-50">
        {/* Blur Panel */}

        {/* Headings */}
        <h1
          className="text-[110px] font-extrabold"
          style={{
            background: "linear-gradient(180deg, #14FF00 0%, #00F0FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: "100%",
          }}
        >
          AI NATIVE
        </h1>
        <h1 className="text-[110px] font-extrabold text-white text-center leading-[100%]">
          PRODUCT
          <br />
          ECOSYSTEM
        </h1>
        {/* Description */}
        <p
          className="mt-6 text-gray-300 text-center mx-auto "
          style={{
            width: "970px", // Adjust until it fits 3 lines
            fontSize: "18px", // Adjust as needed
            lineHeight: "1.6", // Adjust as needed
            letterSpacing: "0.01em", // Optional: tweak for best fit
          }}
        >
          Step into the future of productivity with Firesight. Our AI-native
          tools are purpose-built to revolutionize how you work: Our Platform
          unifies your workflows while our intelligent conferencing technology
          transforms how you collaborate. Firesight is your gateway to a better,
          more efficient workday.
        </p>
      </section>
      <div className="w-full h-[520px] backdrop-blur-lg absolute mt-[400px]"></div>
      {/* Pulse section */}
      {/* <div className="w-full h-[450px] pulse-bg absolute mt-[]"></div> */}
      <section className="relative w-full flex flex-col items-center justify-center z-50 ">
        <div className="flex w-[556px] text-white items-center justify-around ">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={214}
            height={53}
            priority
            className="md:mt-[70px] mt-[60px] sm:w-[214px] sm:h-[53px] w-[141px] h-[35px] mb-20"
          />{" "}
          <span className="text-[35px]">|</span>
          <span className="text-[65px] font-extrabold">Pulse</span>
        </div>
      </section>
    </FireSightLayout>
  );
}
