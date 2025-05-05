// Clerk auth
import {
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

export default function SmallNavbar() {
  return (
    <div className="fixed top-19 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] sm:max-w-lg md:max-w-2xl lg:max-w-3xl flex flex-col rounded-b-xl bg-neutral-700 text-white h-27 px-5 flex sm:hidden">
      <div className="h-2/3 w-full text-xs flex flex-col  space-x-2 justify-center">
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
      </div>
      <div className="h-1/3">
        <SignedOut>
          <SignUpButton mode="modal">
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
  );
}
