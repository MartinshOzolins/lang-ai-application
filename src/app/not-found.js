import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 dotted inter-regular px-3">
      <div className="max-w-lg w-full p-8 bg-white rounded-xl shadow-xl text-center space-y-6">
        <h2 className="text-4xl text-gray-800">404 - Page not found.</h2>

        <Link
          href="/"
          className="py-2 px-5 max-w-72 rounded-xl mx-auto text-center cursor-pointer text-base sm:text-lg lg:text-xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
