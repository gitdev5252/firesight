import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="sticky top-0 w-full mt-[36px] text-white ">
      <div className="flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={140}
              height={36}
              priority
              className="sm:w-[140px] sm:h-[36px] w-[90px] h-[24px]"
            />
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-end space-x-20 font-medium !text-[18px]">
          {/* PRODUCTS Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="px-2 text-white !text-[18px]">
                PRODUCTS
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-transparent border-none shadow-lg min-w-[220px] ">
              <DropdownMenuItem
                asChild
                className=" text-white cursor-pointer !text-[18px]"
              >
                <Link href="/products/sessions">FIRESIGHT | SESSIONS</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className=" text-white cursor-pointer !text-[18px]"
              >
                <Link href="/products/platform">FIRESIGHT | PLATFORM</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className=" text-white cursor-pointer !text-[18px]"
              >
                <Link href="/products/pulse">FIRESIGHT | PULSE</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Other nav items */}
          <Link href="/about-us" className="text-[#86878D]">
            ABOUT US
          </Link>
          <Link href="/ai-impact-index" className="text-[#86878D]">
            AI IMPACT INDEX
          </Link>
          <Link href="/blog" className="text-[#86878D]">
            BLOG
          </Link>
        </nav>
      </div>
    </header>
  );
}
