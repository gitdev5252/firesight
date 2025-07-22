"use client";

import { useParams } from "next/navigation";
import { TabBar } from "../../layout";
import Image from "next/image";
import Link from "next/link";
import {
  useGetAllCategoriesQuery,
  useGetOccupationsByCategoryQuery,
} from "@/store/api/occupationApi";

import "../../page.css";
import { useEffect, useState, useContext } from "react";
import { SearchContext } from "../../layout";
import { Occupation } from "@/types/occupation";

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
  const { data: occupations = [] } = useGetAllCategoriesQuery();
  const [sortedOccupations, setSortedOccupations] = useState<Occupation[]>([]);
  const [tabIndex, setTabIndex] = useState(3); // Default to Occupational Categories tab
  const { searchTerm } = useContext(SearchContext);
  const fullOccupationsList = [...mainCardInfo]; // Replace with actual list

  const handleTabChange = (index: number) => {
    setTabIndex(index);
  };
  useEffect(() => {
    let filtered = fullOccupationsList;
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((occ) =>
        occ.core_occupation.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    let sorted: Occupation[] = [];
    switch (tabIndex) {
      case 0: // Alphabetical
        sorted = [...filtered].sort((a, b) =>
          a.core_occupation.localeCompare(b.core_occupation)
        );
        break;
      case 1: // Most Impacted
        sorted = [...filtered].sort(
          (a, b) => (b?.ranking ?? 0) - (a?.ranking ?? 0)
        );
        break;
      case 3: // Categories (optional or no sort)
      default:
        sorted = [];
    }
    setSortedOccupations(sorted);
  }, [mainCardInfo, searchTerm, tabIndex]);
  useEffect(() => {
    setTabIndex(3);
  }, [occupation]);
  const filteredCategories =
    searchTerm.trim() === ""
      ? occupations
      : occupations.filter((cat) =>
          cat.toLowerCase().includes(searchTerm.toLowerCase())
        );
  // const renderedListLength =
  //   tabIndex === 3 ? filteredCategories.length : sortedOccupations.length;

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
          selectedIndex={tabIndex}
          onTabChange={handleTabChange}
          onSortChange={handleTabChange}
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
          className={`flex flex-col sm:flex-row flex-wrap justify-start gap-x-5 gap-y-7 md:gap-y-9 text-white font-bold lg:text-2xl text-[16px] leading-normal h-[800px] overflow-y-auto p-[40px] mb-[40px]`}
        >
          {tabIndex === 3 ? (
            // Render categories as links, filtered by searchTerm
            (() => {
              const filteredCategories =
                searchTerm.trim() === ""
                  ? occupations
                  : occupations.filter((cat) =>
                      cat.toLowerCase().includes(searchTerm.toLowerCase())
                    );
              return filteredCategories.length === 0 ? (
                <p className="text-white">No categories found.</p>
              ) : (
                filteredCategories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/ai-impact/home/category/${encodeURIComponent(cat)}`}
                    className="main-small-box-1 flex items-center justify-center lg:h-90 md:h-54 h-79 md:w-[31%] sm:w-[48.5%] w-full cursor-pointer"
                  >
                    <div className="color-pattern-bg-1"></div>
                    <p className="text-center mx-6">{cat}</p>
                  </Link>
                ))
              );
            })()
          ) : mainCardInfo.length === 0 ? (
            <p className="text-white">No data found for this occupation.</p>
          ) : (
            sortedOccupations.map((ele) => (
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
