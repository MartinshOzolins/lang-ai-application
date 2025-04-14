"use client";

import Link from "next/link";

// next.js functions
import { usePathname } from "next/navigation";

import {
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { useState } from "react";

export default function MainHeader() {
  const pathname = usePathname(); // Corrected spelling of pathname

  const [isSectionVisible, setIsSectionVisible] = useState(false);

  return (
    <>
      {pathname === "/" && (
        <>
          <div
            className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] sm:max-w-lg md:max-w-2xl lg:max-w-3xl flex items-center bg-neutral-900 text-white h-14 px-5 ${
              isSectionVisible ? "rounded-none rounded-t-xl" : "rounded-xl"
            } `}
          >
            <Link href="/" className="instrument-serif-regular-italic text-xl">
              LangAI{" "}
            </Link>
            <div className="text-xs space-x-2 w-full justify-end hidden sm:flex">
              <a
                className="hover:cursor-pointer hover:text-gray-100"
                href="#features"
              >
                Features
              </a>
              <a
                className="hover:cursor-pointer hover:text-gray-100"
                href="#faq"
              >
                FAQ
              </a>
              <p className="hover:cursor-pointer hover:text-gray-100 pr-3">
                Contact
              </p>
              <div className="border-l-1 h-1/2 ">
                <SignedOut>
                  <SignUpButton mode="modal">
                    <button className="pl-1 hover:cursor-pointer">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <SignOutButton>
                    <button className="pl-1 hover:cursor-pointer">
                      Sign Out
                    </button>
                  </SignOutButton>
                </SignedIn>
              </div>
            </div>
            <div className="text-xs space-x-2 w-full justify-end flex sm:hidden">
              {!isSectionVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 hover:cursor-pointer"
                  onClick={() => setIsSectionVisible((prev) => !prev)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 hover:cursor-pointer"
                  onClick={() => setIsSectionVisible((prev) => !prev)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
          </div>
          {/* Small Screen Header  */}
          {isSectionVisible && (
            <div className="fixed top-19 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] sm:max-w-lg md:max-w-2xl lg:max-w-3xl flex flex-col rounded-b-xl bg-neutral-700 text-white h-32 px-5 flex sm:hidden">
              <div className="text-xs space-x-2 w-full  flex flex-col h-2/3 ">
                <a
                  className="hover:cursor-pointer hover:text-gray-100 pt-2"
                  href="#features"
                >
                  Features
                </a>
                <a
                  className="hover:cursor-pointer hover:text-gray-100 pt-2"
                  href="#faq"
                >
                  FAQ
                </a>
                <p className="hover:cursor-pointer hover:text-gray-100 pt-2 ">
                  Contact
                </p>
              </div>
              <div className="h-1/3">
                <SignedOut>
                  <SignUpButton>
                    <button className="text-sm w-full bg-gray-100 rounded-md text-black py-1 flex justify-center items-center hover:cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="size-4 pr-1 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      Get Started For Free
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <SignOutButton>
                    <button className="text-sm w-full bg-gray-100 rounded-md text-black py-1 flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="size-4 pr-1 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      Get Started For Free
                    </button>
                  </SignOutButton>
                </SignedIn>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
