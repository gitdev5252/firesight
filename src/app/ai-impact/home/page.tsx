import "./page.css";
import { TabBar } from "./layout";
import Link from "next/link";

type Category = {
  id: string;
  name: string;
  description: string;
  slug: string;
};

const fallbackCategories: Category[] = [
  {
    id: "1",
    name: "Default Category",
    description: "This is a fallback category.",
    slug: "default-category",
  },
  // Add more fallback categories if needed
];

async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch("http://localhost:8000/categories", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Fetch failed");
    return await res.json();
  } catch (error) {
    // Return fallback categories if fetch fails
    console.error("Error fetching categories:", error);
    return fallbackCategories;
  }
}

export default async function Page() {
  const categories = await getCategories();

  return (
    <>
      <div className="w-full lg:my-29 md:mt-9 mt-11 md:mb-13 mb-7">
        <TabBar type={1} />
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-between lg:gap-y-9 gap-y-4 text-white font-bold lg:text-2xl text-[16px] leading-normal h-[800px] overflow-y-auto p-[40px] mb-[40px]">
        {categories.map((ele, index) => (
          <Link
            key={index}
            href={`/ai-impact/home/category/${ele.slug}`}
            className="main-small-box-1 flex items-center justify-center lg:h-90 md:h-54 h-79 md:!w-[31%] sm:!w-[48.5%] !w-full"
          >
            <div className="color-pattern-bg-1"></div>
            <p className="text-center mx-6">{ele.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
