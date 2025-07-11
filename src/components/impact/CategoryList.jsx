"use client";

import PropTypes from "prop-types";
import Link from "next/link";

export default function CategoryList({ categories }) {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-between lg:gap-y-9 gap-y-4 text-white font-bold lg:text-2xl text-[16px] leading-normal h-[800px] overflow-y-auto p-[40px] mb-[40px]">
      {categories.map((ele, index) => (
        <Link
          key={index}
          href={`/ai-impact/home/category/${encodeURIComponent(ele)}`}
          className="main-small-box-1 flex items-center justify-center lg:h-90 md:h-54 h-79 md:!w-[31%] sm:!w-[48.5%] !w-full cursor-pointer"
        >
          <div className="color-pattern-bg-1"></div>
          <p className="text-center mx-6">{ele}</p>
        </Link>
      ))}
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};