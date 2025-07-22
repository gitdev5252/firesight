"use client";

import { OccupationService } from "@/services/occupationService";
import Link from "next/link";

interface Occupation {
  id: string;
  core_occupation: string;
  category: string;
  ranking?: number;
}

interface CategoryListProps {
  categories: (string | Occupation)[];
}

export default function CategoryList({ categories }: CategoryListProps) {
  console.log(categories, "newe ta");
  return (
    <div className={`flex flex-col sm:flex-row flex-wrap ${categories.length !== 2 ? "md:justify-between" : ""
      } lg:gap-y-9 gap-y-5 gap-x-5 text-white font-bold lg:text-2xl text-[16px] leading-normal h-[800px] overflow-y-auto px-[40px] mb-[40px]`}>

      {categories.map((ele, index) => {
        if (typeof ele === "string") {
          return (
            <Link
              key={index}
              href={`/ai-impact/home/category/${encodeURIComponent(ele)}`}
              className="main-small-box-1 flex items-center justify-center lg:h-90 md:h-54 h-79 md:!w-[31%] sm:!w-[48.5%] !w-full cursor-pointer"
            >
              <div className="color-pattern-bg-1"></div>
              <p className="text-center mx-6">{ele}</p>
            </Link>
          );
        } else {
          return (
            <Link
              key={ele.id}
              href={`/ai-impact/${encodeURIComponent(ele.core_occupation)}`}
              className="main-small-box-1 flex flex-col items-center justify-center lg:h-90 md:h-54 h-79 md:!w-[31%] sm:!w-[48.5%] !w-full cursor-pointer"
            >
              <div className="color-pattern-bg-1"></div>
              <p className="text-center mx-6">{ele.core_occupation}</p>
              {ele.ranking !== undefined && (
                <div
                  className="absolute flex items-center justify-center lg:bottom-[21px] lg:right-[22px] md:bottom-3 md:right-3 right-5 bottom-4 lg:w-[106px] lg:h-[49px] w-[63px] h-[29px]"
                  style={{
                    backgroundImage: `url(${OccupationService.getRandomBackgroundImage()})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    zIndex: 10,
                  }}
                >
                  <span className="relative z-20 text-[23px]">#{ele.ranking ?? "?"}</span>
                </div>
              )}
            </Link>
          );
        }
      })}
    </div>
  );
}
