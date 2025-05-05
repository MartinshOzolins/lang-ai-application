"use client";

// Next.js functions and components
import { usePathname } from "next/navigation";
import Link from "next/link";

import { useState } from "react";

// Components
import MainNavbar from "./HeaderComponents/MainNavBar";
import MobileNavToggle from "./HeaderComponents/MobileNavToggle";
import SmallNavbar from "./HeaderComponents/SmallNavbar";

export default function MainHeader() {
  const pathname = usePathname();

  const [isSmallNavBarOpen, setIsSmallNavBarOpen] = useState(false);

  return (
    <>
      {pathname === "/" && (
        <>
          {/* Main Upper Header with logo and navigation */}
          <div
            className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] sm:max-w-lg md:max-w-2xl lg:max-w-3xl flex items-center bg-neutral-900 text-white h-14 px-5 ${
              isSmallNavBarOpen ? "rounded-none rounded-t-xl" : "rounded-xl"
            } `}
          >
            <Link href="/" className="instrument-serif-regular-italic text-xl">
              LangAI{" "}
            </Link>

            {/* Main navigation for large screens */}
            <MainNavbar />

            {/* Hamburger menu toggle for small screens (replaces links with toggle buttons for dropdown options when smaller screens) */}
            <MobileNavToggle
              isSmallNavBarOpen={isSmallNavBarOpen}
              setIsSmallNavBarOpen={setIsSmallNavBarOpen}
            />
          </div>

          {/* Small screen navigation dropdown options*/}
          {isSmallNavBarOpen && <SmallNavbar />}
        </>
      )}
    </>
  );
}
