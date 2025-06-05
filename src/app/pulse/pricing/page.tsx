"use client";

import { Switch } from "@/components/ui/switch";
export default function Page() {
  return (
    <div className="flex flex-wrap flex-col justify-center items-center w-full mb-[30px]">
      <div className="bg-[url('/images/color-pattern-network-brands.svg')] bg-cover w-full h-[1970px] top-[170px] absolute z-[-10000] opacity-70"></div>
      <h4 className="uppercase mt-[107px] mb-[47px] text-center font-extrabold text-[24px] leading-[150%] text-[rgba(0,255,224,0.6)]">
        pricing
      </h4>
      <h1 className="mx-[203px] text-center mb-[76px] text-[80px] font-extrabold uppercase text-white leading-[100%]">
        Start Working <br />
        <span className="text-[rgba(0,255,224,0.6)]">Smarter</span> Today
      </h1>
      <div className="mb-[87px]">
        <div className="p-[2px] rounded-full bg-gradient-to-b from-[rgba(0, 144, 255, 0.28)] to-[rgba(134, 160, 216, 0.31)] inline-block">
          <Switch
            id="subscription"
            className="
              bg-transparent border-none w-[51px] h-[31px] shadow-none
              data-[state=checked]:bg-transparent
              relative
              [&>span]:bg-white
              [&>span]:shadow-none
              [&>span]:border-none
              [&>span]:transition-transform
              [&>span]:duration-200
            "
          />
        </div>
      </div>
    </div>
  );
}

// background: linear-gradient(180deg, rgba(0, 144, 255, 0.28) 0%, rgba(134, 160, 216, 0.31) 100%);
