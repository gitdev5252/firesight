"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback, memo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
const MobileMenu = dynamic(() => import("@/components/layout/MobileMenu"), {
  ssr: false,
  loading: () => null,
});
import ProductsMenu from "@/components/layout/ProductsMenu";
import "./header.css";

export const Header = memo(function Header({
  scrolled,
}: {
  scrolled: boolean;
}) {
  const pathname = usePathname();
  const [menus, setMenus] = useState<{ mobile: boolean; products: boolean }>({
    mobile: false,
    products: false,
  });

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenus((m) => ({ ...m, products: false }));
      }
    },
    [setMenus]
  );
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // close mobile menu on navigation
    setMenus((m) => ({ ...m, mobile: false }));
  }, [pathname]);

  useEffect(() => {
    if (!menus.products) return;
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menus.products, handleClickOutside]);

  return (
    <header
      className="top-0 pt-4 w-[100vw] h-[100px] text-white z-[1001] fixed"
      style={{
        background: scrolled
          ? "linear-gradient(180deg, #080B16 0%, rgba(8, 11, 22, 0.95) 35.39%, rgba(8, 11, 22, 0.85) 60.89%, rgba(8, 11, 22, 0.30) 82.39%, rgba(8, 11, 22, 0.00) 100%)"
          : "#ffffff00",
      }}
    >
      <div className="flex h-16 items-center md:mx-14 px-4">
        <div className="mr-16 flex items-center lg:flex-1/6">
          <Link href="/" className="flex items-center">
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
        {/* Desktop Nav */}
        <nav className="hidden md:flex md:flex-5/6 flex-auto items-center justify-end font-medium !text-[18px] w-full">
          <div className="flex items-center relative ">
            <Button
              variant="ghost"
              className="px-2 text-white !text-[18px] !bg-transparent hover:text-white"
              onClick={() => setMenus((m) => ({ ...m, products: !m.products }))}
            >
              {pathname === "/pulse/overview" && (
                <Image
                  src="/images/icons/polygon-blue.svg"
                  alt="Pulse"
                  width={24}
                  height={24}
                />
              )}
              {pathname.includes("/session") && (
                <Image
                  src="/images/icons/polygon-green.svg"
                  alt="Session"
                  width={24}
                  height={24}
                />
              )}
              {pathname === "/pulse/overview"
                ? "FIRESIGHT | PULSE"
                : pathname.includes("/session")
                ? "FIRESIGHT | SESSION"
                : "PRODUCTS"}
              <Image
                src={
                  menus.products
                    ? "/images/icons/uparrow.png"
                    : "/images/icons/downarrow.png"
                }
                alt={menus.products ? "Down Arrow" : "Up Arrow"}
                width={14}
                height={14}
                className="ml-2 mb-1"
              />
            </Button>
            {menus.products && (
              <ProductsMenu
                menuRef={menuRef}
                onClose={() => setMenus((m) => ({ ...m, products: false }))}
              />
            )}
          </div>
          {pathname === "/session" ? (
            <Link href="/session/start-session">
              <Button
                variant="outline"
                className="green-gradient-border-btn text-[18px] px-[35px] py-[25px] !text-white 2xl:ml-10 md:ml-[16px] cursor-pointer"
              >
                Start Session Now
              </Button>
            </Link>
          ) : (
            ""
          )}
          {pathname === "/session/start-session" ? (
            <>
              <Button
                variant="outline"
                className="green-gradient-border-btn text-[18px] px-[35px] py-[25px] !text-white 2xl:ml-10 md:ml-[16px] cursor-pointer"
              >
                14 Days Trial | <span className="font-bold ">Start Now</span>
              </Button>
              <Link href="/auth/signin">
                <Button
                  variant="outline"
                  className="cursor-pointer 2xl:ml-10 md:ml-[16px] !bg-[rgba(8,11,22,0.5)] rounded-[55px] py-[25px] px-[35px] text-[18px] !text-white border border-[#262933]"
                >
                  Log In
                </Button>
              </Link>
            </>
          ) : (
            ""
          )}
          {pathname !== "/session/start-session" && (
            <div className="flex ml-10">
              <Link
                href="/about-us"
                className={
                  (pathname === "/about-us" ? "nav-item active" : "nav-item") +
                  " lg:block hidden"
                }
              >
                <Image
                  className="mr-4 hidden"
                  src="/images/icons/polygon-puple.svg"
                  alt=" "
                  width={24}
                  height={24}
                />
                ABOUT US
              </Link>
              <Link
                href="/ai-impact"
                className={
                  pathname === "/ai-impact" ? "nav-item active" : "nav-item"
                }
              >
                <Image
                  className="mr-4 hidden"
                  src="/images/icons/polygon-puple.svg"
                  alt=" "
                  width={24}
                  height={24}
                />
                AI IMPACT INDEX
              </Link>
              <Link
                href="https://blog.firesight.ai/"
                className={
                  (pathname === "/blog" ? "nav-item active" : "nav-item") +
                  " lg:block hidden"
                }
              >
                <Image
                  className="mr-4 hidden"
                  src="/images/icons/polygon-puple.svg"
                  alt=" "
                  width={24}
                  height={24}
                />
                BLOG
              </Link>
            </div>
          )}
        </nav>
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden block ml-auto w-6 h-6"
          onClick={() => setMenus((m) => ({ ...m, mobile: !m.mobile }))}
          aria-label="Open menu"
        >
          <Image
            src="/images/mobile/Menu.svg"
            alt="Menu"
            width={24}
            height={24}
          />
        </button>
      </div>
      {/* Mobile Menu */}
      {menus.mobile && (
        <MobileMenu
          onClose={() => setMenus((m) => ({ ...m, mobile: false }))}
        />
      )}
    </header>
  );
});

Header.displayName = "Header";
