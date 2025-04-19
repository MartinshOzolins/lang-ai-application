import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 dotted inter-regular px-3">
      <div className="max-w-lg w-full p-8 bg-white rounded-xl shadow-xl text-center space-y-6">
        <h2 className="text-3xl text-gray-800">Privacy Policy</h2>
        <p className="text-lg text-gray-600">
          At LangAI, we value your privacy. Your data is used only to generate
          personalized language tasks based on your preferences.
        </p>
        <p className="text-lg text-gray-600">
          We do not share your personal information with third parties. All
          generated tasks are stored temporarily and deleted after use.
        </p>
        <p className="text-base text-gray-500">
          By using our service, you agree to the collection and use of your
          information as described.
        </p>

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
