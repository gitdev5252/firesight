import Image from "next/image";
import { Button } from "@/components/ui/button";
import "./onboarding.css";
export default function Page() {
  const onboardingCon = [
    <>
      <span className="font-bold">No two professionals work the same way.</span>{" "}
      Sessions onboarding is built to give your{" "}
      <span className="!text-[#14FF00]">real-time AI co-pilot</span> the context
      it needs to support you in the moment. By learning how you work: your
      role, responsibilities, decision-making style, current projects etc.{" "}
      <span className="font-bold">
        Sessions becomes an extension of your thought process, not just another
        tool in the background.
      </span>
    </>,
    <>
      From the very first call, your AI co-pilot listens with context, speaks
      with relevance, and intervenes when it matters most. It guides
      discussions, captures insight, and surfaces what you need without
      disrupting the flow.{" "}
      <span className="font-bold">
        This is intelligent collaboration that adapts to you.
      </span>
    </>,
    <>
      The result is not just smarter meetings.{" "}
      <span className="font-bold">
        It&apos;s an intelligent, responsive experience that amplifies how you
        work.
      </span>{" "}
      With Sessions, your meetings become faster, clearer, and more productive
      from the very first interaction.
    </>,
  ];

  return (
    <div className="w-full text-white md:px-[56px] px-[10px] md:py-[48px] py-[60px]">
      <img
        src="/images/onboarding/bg.png"
        alt="background"
        className="bg-image"
      />
      <Image
        src="/images/logo.svg"
        width={147}
        height={36}
        alt="logo"
        className="sm:block hidden"
      />
      <div className="w-full flex justify-center sm:mb-[105px] mb-[55px]">
        <Image
          src="/images/logo-white.png"
          width={30}
          height={36}
          alt="logo"
          className="sm:hidden block"
        />
      </div>
      <div className="sm:px-[40px] px-[10px]">
        <div className="md:px-[38px] px-[29px]">
          <p className="green-gradient-text text-[16px] font-bold sm:mb-[33px] mb-[23px]">
            <span className="text-white">{"<"}</span> Back to Login
          </p>
          <h1 className="uppercase font-bold sm:text-[60px] text-[36px] mb-[20px]">
            onboarding
          </h1>
        </div>
        {onboardingCon.map((con, index) => (
          <div key={index} className="flex mb-[30px] w-full justify-baseline">
            <Image
              src="/images/icons/white-polygon.png"
              width={16}
              height={16}
              alt="white-polygon"
              className="sm:w-[16px] w-[11px] sm:h-[15px] h-[10px] mt-[7px]"
            />
            <p className="md:px-[30px] px-[18px] text-[16px]">{con}</p>
          </div>
        ))}
        <Button
          variant="outline"
          className="green-gradient-border-btn text-[18px] px-[75px] py-[25px] !text-white sm:ml-[40px] cursor-pointer mt-[15px]"
        >
          Start working smarter
        </Button>
      </div>
    </div>
  );
}
