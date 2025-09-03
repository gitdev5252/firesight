"use client";

import { useParams } from "next/navigation";
import { TabBar } from "../../layout";
import Image from "next/image";
import Link from "next/link";
import { useGetOccupationsByCategoryQuery } from "@/store/api/occupationApi";

import "../../page.css";
import { useState, useContext } from "react";
import { SearchContext } from "../../layout";
import { Occupation } from "@/types/occupation";

export const runtime = "edge";

export default function OccupationPage() {
  const params = useParams();
  const occupation = params.occupation
    ? decodeURIComponent(
        Array.isArray(params.occupation)
          ? params.occupation[0]
          : params.occupation
      )
    : "Unknown Occupation";

  // Use RTK Query hook instead of local state
  const {
    data: mainCardInfo = [],
    isLoading,
    error,
  } = useGetOccupationsByCategoryQuery(occupation);
  // mainTabIndex: 0 = All, 1 = Occupational Categories
  // filterTabIndex: 1 = Most Impacted, 2 = Least Impacted, 3 = Alphabetical
  const [mainTabIndex, setMainTabIndex] = useState(1); // Default to Occupational Categories
  const [filterTabIndex, setFilterTabIndex] = useState(1); // Default to Most Impacted
  const { searchTerm } = useContext(SearchContext);
  const fullOccupationsList = [...mainCardInfo]; // Replace with actual list

  // TabBar handlers
  const handleMainTabChange = (index: number) => {
    setMainTabIndex(index);
    setFilterTabIndex(1); // Reset filter to Most Impacted when main tab changes
  };
  const handleFilterTabChange = (index: number) => {
    setFilterTabIndex(index);
  };

  // Get sorted occupations for selected category
  const getSortedOccupations = () => {
    let filtered = fullOccupationsList;
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((occ) =>
        occ.core_occupation.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    const sorted: Occupation[] = [...filtered];
    if (filterTabIndex === 1) {
      // Most Impacted
      sorted.sort((a, b) => (a.ranking ?? 0) - (b.ranking ?? 0));
    } else if (filterTabIndex === 2) {
      // Least Impacted
      sorted.sort((a, b) => (b.ranking ?? 0) - (a.ranking ?? 0));
    } else if (filterTabIndex === 3) {
      // Alphabetical
      sorted.sort((a, b) => a.core_occupation.localeCompare(b.core_occupation));
    }
    return sorted;
  };

  //   setSortedOccupations(sorted);
  // }, [mainCardInfo, searchTerm, tabIndex]);
  // useEffect(() => {
  //   setTabIndex(1); // Always set to Occupational Categories tab
  // }, [occupation]);
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
        <TabBar
          type={1}
          mainTabIndex={mainTabIndex}
          filterTabIndex={filterTabIndex}
          onMainTabChange={handleMainTabChange}
          onFilterTabChange={handleFilterTabChange}
        />
      </div>

      <p className="lg:text-[32px] lg:mt-15 md:mt-12 mt-15 mb-7 font-bold text-[#E93249] leading-[120%]">
        {occupation}
      </p>

      {isLoading ? (
        <p className="text-white">Loading...</p>
      ) : error ? (
        <p className="text-red-500">
          {"status" in error && error.status === "FETCH_ERROR"
            ? "Network error. Please check your connection."
            : "Could not load occupation data."}
        </p>
      ) : (
        <div
          // className={`flex flex-col sm:flex-row flex-wrap ${renderedListLength !== 2 ? "md:justify-between" : ""
          //   } lg:gap-y-9 gap-y-5 gap-x-5 text-white font-bold lg:text-2xl text-[16px] leading-normal h-[800px] overflow-y-auto p-[40px] mb-[40px]`}
          className={`flex flex-col sm:flex-row flex-wrap sm:justify-around lg:gap-x-10 md:gap-x-5 gap-x-7 gap-y-7 lg:gap-y-10 md:gap-y-5 text-white font-bold lg:text-2xl text-[16px] leading-normal sm:h-[800px] h-[750px] overflow-y-auto p-[20px] sm:mb-[40px]`}
        >
          {/* Always show occupations for selected category, filter and sort as needed */}
          {mainCardInfo.length === 0 ? (
            <p className="text-white">No data found for this occupation.</p>
          ) : (
            getSortedOccupations().map((ele) => (
              <Link
                key={ele.id}
                href={`/ai-impact/${encodeURIComponent(ele.core_occupation)}`}
                className="main-small-box-1 flex flex-col items-center justify-center lg:h-90 md:h-54 h-79 md:w-[31%] sm:w-[48.5%] w-full"
              >
                <div className="color-pattern-bg-1"></div>
                <p className="text-center mx-6">{ele.core_occupation}</p>
                <div className="absolute flex items-center justify-center lg:bottom-[21px] lg:right-[22px] md:bottom-3 md:right-3 right-5 bottom-4 lg:w-[106px] lg:h-[49px] w-[63px] h-[29px] rounded-full overflow-hidden">
                  <Image
                    src={`/images/tag-back-${Math.floor(
                      (ele.ranking ?? 0) / 1000
                    )}.svg`}
                    alt=""
                    fill
                    className="object-cover"
                    priority
                  />
                  <span className="relative z-10 font-bold text-white">
                    #{ele.ranking}
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
