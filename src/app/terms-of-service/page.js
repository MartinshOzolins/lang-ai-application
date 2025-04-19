import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 dotted inter-regular px-3">
      <div className="max-w-lg w-full p-8 bg-white rounded-xl shadow-xl text-center space-y-6">
        <h2 className="text-3xl text-gray-800">Terms of Service</h2>
        <p className="text-sm text-gray-500">Last updated: April 16, 2025</p>

        <p className="text-lg text-gray-600">
          By using LangAI, you agree to the following terms. You must have a
          Google account or a working email address to use our services and are
          responsible for keeping your account secure.
        </p>
        <p className="text-lg text-gray-600">
          Free users have limited access to AI features, while Pro subscriptions
          are billed monthly or annually and automatically renew. No refunds are
          provided for subscription payments.
        </p>

        <p className="text-lg text-gray-600">
          You are prohibited from bypassing usage limits, generating harmful
          content, sharing your account, or reverse engineering the service. We
          may suspend or terminate accounts that violate these terms, and you
          can cancel your account at any time.
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
