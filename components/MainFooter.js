import Link from "next/link";

export default function MainFooter() {
  return (
    <div className="w-full px-5">
      <footer className="w-full h-42 bg-neutral-900 text-neutral-400 inter-regular rounded-xl px-6 py-10 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">
        <div className="flex flex-col gap-2">
          <Link href="/refund-policy" className="hover:text-white transition">
            Refund Policy
          </Link>
          <Link href="/privacy-policy" className="hover:text-white transition">
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
  );
}
