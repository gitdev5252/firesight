"use client";

import { useParams } from "next/navigation";
import { TabBar } from "../../layout";
import Image from "next/image";
import Link from "next/link";
import { useGetOccupationsByCategoryQuery } from "@/store/api/occupationApi";
import { OccupationService } from "@/services/occupationService";

import "../../page.css";

export default function OccupationPage() {
  const params = useParams();
  const occupation = params.occupation
    ? decodeURIComponent(Array.isArray(params.occupation) ? params.occupation[0] : params.occupation)
    : "Unknown Occupation";

  // Use RTK Query hook instead of local state
  const { data: mainCardInfo = [], isLoading, error } = useGetOccupationsByCategoryQuery(occupation);

  return (
    <div>
      {/* Back to AI Impact Home */}
      <div className="flex w-full justify-start items-center gap-2 h-6 lg:mt-15 lg:mb-12 md:mt-11 md:mb-9 mt-8 mb-10">
        <Link href="/ai-impact/home">
          <Image
            src="/images/icons/back-btn.svg"
            alt="back-btn"
            width={24}
            height={24}
          />
        </Link>
        <p className="text-[16px] text-white">
          Back to AI Impact Index Homepage
        </p>
      </div>

      <div className="w-full my-0">
        <TabBar type={1} />
      </div>

      <p className="lg:text-[32px] lg:mt-15 md:mt-12 mt-15 mb-7 font-bold text-[#E93249] leading-[120%]">
        {occupation}
      </p>

      {isLoading ? (
        <p className="text-white">Loading...</p>
      ) : error ? (
        <p className="text-red-500">
          {'status' in error && error.status === 'FETCH_ERROR'
            ? 'Network error. Please check your connection.'
            : 'Could not load occupation data.'}
        </p>
      ) : (
        <div className="flex flex-col sm:flex-row flex-wrap justify-between lg:gap-y-9 gap-y-4 text-white font-bold lg:text-2xl text-[16px] leading-normal h-[800px] overflow-y-auto p-[40px] mb-[40px]">
          {mainCardInfo.length === 0 ? (
            <p className="text-white">No data found for this occupation.</p>
          ) : (
            mainCardInfo.map((ele) => (
              <Link
                key={ele.id}
                href={`/ai-impact/${encodeURIComponent(
                  ele.core_occupation
                )}`}
                className="main-small-box-1 flex flex-col items-center justify-center lg:h-90 md:h-54 h-79 md:w-[31%] sm:w-[48.5%] w-full"
              >
                <div className="color-pattern-bg-1"></div>
                <p className="text-center mx-6">{ele.core_occupation}</p>
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
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
