import "./page.css";
import { TabBar } from "./layout";
import CategoryList from "@/components/impact/CategoryList";

const fallbackCategories: string[] = [
  "Default Category 1",
  "Default Category 2",
  "Default Category 3",
  "Default Category 4",
  "Default Category 5",
  "Default Category 6",
  "Default Category 7",
];

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://firesight-backend-3irx.onrender.com";

async function getCategories(): Promise<string[]> {
  try {
    const res = await fetch(`${API_URL}/categories`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Fetch failed");
    return await res.json();
  } catch (error) {
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
      <CategoryList categories={categories} />
    </>
  );
}
