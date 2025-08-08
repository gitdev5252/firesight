import Link from "next/link";
import Image from "next/image";
import "../page.css";

export default function SessionPage() {
  return (
    <div className="w-full flex relative md:px-14 px-4 flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 pointer-events-none z-[-100]">
        <div className="session-bg h-[66.66vw] top-[calc(27vw+125px)] md:top-[350px] md:h-[30vw]"></div>
        <div className="green-shine-session-mobile md:hidden block"></div>
        <div className="green-shine-session md:block hidden"></div>
        <div className="green-shine-session-small md:block hidden"></div>
        <div className="green-shine-session-2nd-small md:block hidden"></div>
        <div className="green-shine-session-3rd-small md:block hidden"></div>
      </div>

      <div className="flex md:gap-11 gap-3 text-white items-center justify-between md:mt-[185px] mt-20 mb-0 md:h-16 h-[30px]">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={214}
            height={53}
            priority
            className="md:w-[264px] md:h-[64px] w-[124px] h-[38px]"
          />
        </Link>
        <span className="md:text-[45px] text-[20px]">|</span>
        <span className="md:text-[65px] text-[30px] font-publica-play">
          Sessions
        </span>
      </div>

      <div
        style={{
          background: 'url("/images/sessions.svg")',
          backgroundSize: "cover",
          width: "72.57vw",
          height: "60.14vw",
        }}
        className="hidden md:block mt-20"
      >
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(8, 11, 22, 0.00) 31.41%, rgba(8, 11, 22, 0.93) 80.91%, #080B16 100%)",
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div>

      <div
        style={{
          background: 'url("/images/mobile/sessions-show-mobile.svg")',
          backgroundSize: "contain",
        }}
        className="w-[100vw] h-[206.07vw] bg-no-repeat block md:hidden"
      ></div>
    </div>
  );
}
