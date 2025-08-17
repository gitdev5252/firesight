import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import "../page.css";

export const dynamic = "force-static";

export default function SessionPage() {
  return (
    <>
      <Head>
        <link rel="preload" href="/images/sessions.svg" as="image" />
        <link
          rel="preload"
          href="/images/mobile/sessions-show-mobile.svg"
          as="image"
        />
      </Head>

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

        {/* Header */}
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

        {/* Desktop Background */}
        <div className="hidden md:block mt-20 relative w-[72.57vw] h-[60.14vw]">
          <Image
            src="/images/sessions.svg"
            alt="Sessions Background"
            fill
            priority
            className="object-cover"
          />
          <div className="session-gradient absolute inset-0"></div>
        </div>

        {/* Mobile Background */}
        <div className="w-[100vw] h-[206.07vw] bg-no-repeat block md:hidden bg-contain bg-[url('/images/mobile/sessions-show-mobile.svg')]"></div>
      </div>
    </>
  );
}
