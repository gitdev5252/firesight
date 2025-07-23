"use client";

import { useState, useEffect, useContext } from "react";
import { TabBar, SearchContext } from "./layout";
import CategoryList from "@/components/impact/CategoryList";

type Occupation = {
  id: string;
  core_occupation: string;
  category: string;
  ranking?: number;
};

const fallbackCategories: string[] = [];

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://firesight-backend-3irx.onrender.com";

export default function Page() {
  const [sortIndex, setSortIndex] = useState(1); // Default to Occupational Categories tab (index 1)
  const [categories, setCategories] = useState<string[]>(fallbackCategories);
  const [occupations, setOccupations] = useState<Occupation[]>([]);
  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (sortIndex === 1) {
          // Occupational Categories → fetch just categories
          const res = await fetch(`${API_URL}/categories`, {
            // cache: "no-store",
          });
          if (!res.ok) throw new Error("Failed to fetch categories");
          const data = await res.json();
          setCategories(data);
          setOccupations([]); // Clear occupations when on categories tab
        } else {
          // All other tabs (All, Alphabetical, Most Impacted, Least Impacted) → fetch all occupations
          const res = await fetch(`${API_URL}/categories/all-occupations`, {
            // cache: "no-store",
          });
          if (!res.ok) throw new Error("Failed to fetch occupations");
          const data = await res.json();
          setOccupations(data);
          setCategories(fallbackCategories); // Reset categories to fallback for other tabs
        }
      } catch (err) {
        console.error(err);
        setCategories(fallbackCategories);
      }
    };

    fetchData();
  }, [sortIndex]);
  console.log(occupations, "fullOccupationsList");

  const getSortedOccupationsOrCategories = () => {
    if (sortIndex === 1) {
      // Occupational Categories
      if (searchTerm.trim() !== "") {
        return categories.filter((cat) =>
          cat.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      return categories;
    }

    const sorted = [...occupations];
    switch (sortIndex) {
      case 0: // All (no sorting, just return as is)
        break;
      case 2: // Alphabetical
        sorted.sort((a, b) =>
          a.core_occupation.localeCompare(b.core_occupation)
        );
        break;
      case 3: // Most Impacted (#1 to #4000)
        sorted.sort((a, b) => (a.ranking ?? 0) - (b.ranking ?? 0));
        break;
      case 4: // Least Impacted (#4000 to #1)
        sorted.sort((a, b) => (b.ranking ?? 0) - (a.ranking ?? 0));
        break;
      default:
        break;
    }
    // Filter by search term
    if (searchTerm.trim() !== "") {
      return sorted.filter((occ) =>
        occ.core_occupation.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return sorted;
  };

  return (
    <>
      <div className="w-full lg:my-29 md:mt-9 mt-11 md:mb-13 mb-7">
        <TabBar
          type={1}
          selectedIndex={sortIndex}
          onTabChange={setSortIndex}
          onSortChange={setSortIndex}
        />
      </div>
      <CategoryList
        categories={getSortedOccupationsOrCategories()}
      />
    </>
  );
}
