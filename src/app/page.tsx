import Link from "next/link";
import Image from "next/image";
import FireSightLayout from "@/layouts/FireSightLayout";
import "./page.scss";
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
      <div className="w-full h-[450px] mx-auto backdrop-blur-lg shadow-xl absolute mt-[-50px]"></div>
      {/* Pulse section */}
      <section className="relative w-full flex flex-col items-center justify-center z-50 mt-[400px] pulse-bg">
        <h2 className="text-[64px] font-extrabold text-white text-center">
          FIRESIGHT | PULSE
        </h2>
        <p
          className="mt-6 text-gray-300 text-center mx-auto"
          style={{
            width: "970px", // Adjust until it fits 3 lines
            fontSize: "18px", // Adjust as needed
            lineHeight: "1.6", // Adjust as needed
            letterSpacing: "0.01em", // Optional: tweak for best fit
          }}
        >
          Firesight | Pulse is your AI-native productivity hub, seamlessly
          integrating with your favorite tools. From task management to
          intelligent scheduling, Pulse transforms how you work, making every
          minute count.
        </p>
      </section>
    </FireSightLayout>
  );
}
