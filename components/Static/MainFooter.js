"use client";

// next.js functions
import { usePathname } from "next/navigation";

import Link from "next/link";

export default function MainFooter() {
  const pathname = usePathname(); // Corrected spelling of pathname

  return (
    <>
      {pathname === "/" && (
        <div className="w-full px-0">
          <footer className="w-full h-72 sm:h-54 bg-neutral-900 text-neutral-400 inter-regular rounded-t-xl px-5 sm:px-10 pb-5 sm:pb-15 pt-10 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="pb-2 text-lg">
                🧠 Built by language learners, for language learners
              </h2>
              <Link
                href="/refund-policy"
                className="hover:text-white transition "
              >
                Refund Policy
              </Link>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition"
              >
                Terms of Service
              </Link>
            </div>

            <div className="text-sm text-center sm:text-right">
              <p className="font-semibold text-neutral-300">LangAI © 2025</p>
              <p>Learn smarter. Powered by AI.</p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
