"use client";

import Image from "next/image";
import { slideData } from "@/utils/constant/firesight";

interface Props {
  page: number;
  setPage: (fn: (prev: number) => number) => void;
  setDirection: (dir: number) => void;
}

export default function PolygonPagination({
  page,
  setPage,
  setDirection,
}: Props) {
  return (
    <div className="flex items-center justify-center gap-3 mt-6 mb-2 z-10">
      {slideData.map((item, idx) => {
        const isActive = page === idx;
        const width = isActive ? 18 : 10;
        const iconSrc = isActive
          ? "/images/icons/polygon-active.svg"
          : "/images/icons/polygon.svg";

        return (
          <button
            key={item.title}
            onClick={() => {
              setPage(() => idx);
              setDirection(idx > page ? 1 : -1);
            }}
            className="h-6 flex items-center justify-center bg-transparent border-none p-0 focus:outline-none transition-all duration-200"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <Image
              src={iconSrc}
              alt={isActive ? "Active" : "Inactive"}
              width={width}
              height={10}
              style={{
                display: "block",
                objectFit: "contain",
                width: "100%",
                height: "100%",
                transition: "width 0.2s",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
