"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { TabBar } from "../../layout";
import Image from "next/image";
import Link from "next/link";
import "../../page.css";

/**
 * @typedef {Object} Occupation
 * @property {string} id
 * @property {string} category
 * @property {string} core_occupation
 * @property {number|null} substi_sco
 * @property {string|null} overall_salary_avg
 * @property {number|null} salary_normal
 * @property {number|null} auto_avg
 * @property {number|null} free_com_sco
 * @property {number|null} occ_cat_sco_com
 * @property {number|null} occ_cat_sco_ai
 * @property {number|null} lab_type_sco
 * @property {number|null} com_index
 * @property {number|null} ai_index
 * @property {number|null} thermometer
 */

export default function OccupationPage() {
  const params = useParams();
  const occupation = params.occupation
    ? decodeURIComponent(params.occupation)
    : "Unknown Occupation";

  /** @type [Occupation[], Function] */
  const [mainCardInfo, setMainCardInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Array of 4 background images
  const bgImages = [
    "/images/tag-back-0.svg",
    "/images/tag-back-1.svg",
    "/images/tag-back-2.svg",
    "/images/tag-back-3.svg",
  ];

  // Function to get random background image for each element
  const getRandomBgImage = () => {
    const randomIndex = Math.floor(Math.random() * bgImages.length);
    const imagePath = bgImages[randomIndex];
    return imagePath;
  };

  useEffect(() => {
    async function fetchOccupationData() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `${
            process.env.NEXT_PUBLIC_API_URL
          }/categories/occupations?category=${encodeURIComponent(occupation)}`
        );
        if (!res.ok) throw new Error("Failed to fetch occupation data");
        const data = await res.json();
        setMainCardInfo(data);
      } catch (err) {
        setError("Could not load occupation data.");
        setMainCardInfo([]);
      } finally {
        setLoading(false);
      }
    }
    fetchOccupationData();
  }, [occupation]);

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

      {loading ? (
        <p className="text-white">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="flex flex-col sm:flex-row flex-wrap justify-between lg:gap-y-9 gap-y-4 text-white font-bold lg:text-2xl text-[16px] leading-normal h-[800px] overflow-y-auto p-[40px] mb-[40px]">
          {mainCardInfo.length === 0 ? (
            <p className="text-white">No data found for this occupation.</p>
          ) : (
            mainCardInfo.map((ele, idx) => (
              <Link
                key={ele.id}
                href={`/ai-impact/occupation-detail/${encodeURIComponent(
                  ele.core_occupation
                )}`}
                className="main-small-box-1 flex flex-col items-center justify-center lg:h-90 md:h-54 h-79 md:w-[31%] sm:w-[48.5%] w-full"
              >
                <div className="color-pattern-bg-1"></div>
                <p className="text-center mx-6">{ele.core_occupation}</p>
                <div
                  className="absolute flex items-center justify-center lg:bottom-[21px] lg:right-[22px] md:bottom-3 md:right-3 right-5 bottom-4 lg:w-[106px] lg:h-[49px] w-[63px] h-[29px]"
                  style={{
                    backgroundImage: `url(${getRandomBgImage()})`,
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
