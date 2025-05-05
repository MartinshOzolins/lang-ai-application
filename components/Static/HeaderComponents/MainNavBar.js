// Clerk auth
import {
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

export default function MainNavBar() {
  return (
    <>
      {/* NavBar only for larger screens */}
      <div className="text-xs space-x-2 w-full justify-end hidden sm:flex">
        <a
          className="hover:cursor-pointer hover:text-gray-100"
          href="#features"
        >
          Features
        </a>
        <a className="hover:cursor-pointer hover:text-gray-100" href="#faq">
          FAQ
        </a>
        <div className="border-l-1 h-1/2 ">
          <SignedOut>
            <SignUpButton mode="modal">
              <button className="pl-1 hover:cursor-pointer">Sign Up</button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <SignOutButton>
              <button className="pl-1 hover:cursor-pointer">Sign Out</button>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </>
  );
}
