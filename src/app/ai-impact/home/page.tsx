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
  // mainTabIndex: 0 = All, 1 = Occupational Categories
  // filterTabIndex: 0 = None, 1 = Most Impacted, 2 = Least Impacted, 3 = Alphabetical
  const [mainTabIndex, setMainTabIndex] = useState(0); // Default to All
  const [filterTabIndex, setFilterTabIndex] = useState(1); // Default to Most Impacted
  const [categories, setCategories] = useState<string[]>(fallbackCategories);
  const [occupations, setOccupations] = useState<Occupation[]>([]);
  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (mainTabIndex === 1) {
          // Occupational Categories → fetch just categories
          const res = await fetch(`${API_URL}/categories`, {
            // cache: "no-store",
          });
          if (!res.ok) throw new Error("Failed to fetch categories");
          const data = await res.json();
          setCategories(data);
          setOccupations([]); // Clear occupations when on categories tab
        } else {
          // All and filter tabs → fetch all occupations
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
  }, [mainTabIndex]);

  const getSortedOccupationsOrCategories = () => {
    // If Occupational Categories tab is active
    if (mainTabIndex === 1) {
      if (searchTerm.trim() !== "") {
        return categories.filter((cat) =>
          cat.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      return categories;
    }

    // For All tab and filter tabs, use occupations data
    const sorted = [...occupations];
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
        {/* Pass both active indices and handlers to TabBar */}
        <TabBar
          type={1}
          mainTabIndex={mainTabIndex}
          filterTabIndex={filterTabIndex}
          onMainTabChange={setMainTabIndex}
          onFilterTabChange={setFilterTabIndex}
        />
      </div>
      {/* Component */}
      <CategoryList categories={getSortedOccupationsOrCategories()} />
    </>
  );
}
