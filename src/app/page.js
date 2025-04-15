// components
import FeaturesBoxList from "../../components/Features/FeaturesBoxList";
import FrequentlyAskedQuestionsSection from "../../components/FAQ/FrequentlyAskedQuestionsSection";
import { SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="w-full  flex flex-col px-3 md:px-25 sm:px-7 pb-20 pt-28 inter-regular dotted">
      <h1 className="text-center  instrument-serif-regular-italic text-xl sm:text-3xl md:text-4xl">
        Boost Your Language Skills with AI-Powered Tasks
      </h1>
      <p className="py-10 text-center mx-auto lg:max-w-xl text-sm sm:text-xl text-gray-600">
        From translations to fill-in-the-blanks, create and download language
        tasks in seconds. LangAI is your personalized language learning
        companion, designed to help you practice and improve with ease.
      </p>
      <SignUpButton mode="modal">
        <button className="py-2 bg-neutral-900 text-white w-52  rounded-xl mx-auto text-center hover:cursor-pointer hover:text-gray-100">
          Generate My First Task
        </button>
      </SignUpButton>
      <FeaturesBoxList />
      <FrequentlyAskedQuestionsSection />
    </div>
  );
}
