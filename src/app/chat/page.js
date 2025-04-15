import { auth } from "@clerk/nextjs/server";
import Form from "../../../components/Chat/Form";

import UserIcon from "../../../components/Chat/UserIcon";

export default async function TaskGeneratorPage() {
  const { userId, redirectToSignUp } = await auth();

  if (!userId) return redirectToSignUp();

  return (
    <div className="w-full h-full flex flex-col pb-5 relative dotted">
      <div className="border-b border-gray-300 h-16 px-4 flex items-center justify-between bg-white">
        <UserIcon />
        <h2 className="text-center text-lg sm:text-xl md:text-2xl instrument-serif-regular-italic absolute left-1/2 transform -translate-x-1/2">
          LangAI
        </h2>
        <div className="w-[100px]" />
      </div>
      <Form />
    </div>
  );
}
