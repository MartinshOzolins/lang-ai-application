// components
import FeaturesBoxList from "../../components/Features/FeaturesBoxList";
import FrequentlyAskedQuestionsSection from "../../components/FAQ/FrequentlyAskedQuestionsSection";
import { SignUpButton } from "@clerk/nextjs";

// styling
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div className="w-full flex flex-col px-3 md:px-25 sm:px-7 pb-20 pt-32 inter-regular dotted">
      <h1 className="text-center  instrument-serif-regular-italic text-2xl sm:text-3xl md:text-4xl">
        Boost Your Language Skills with AI-Powered Tasks
      </h1>
      <p className="py-10 text-center mx-auto lg:max-w-3xl text-base sm:text-xl lg:text-2xl text-gray-600">
        From translations to fill-in-the-blanks, create and download language
        tasks in seconds. LangAI is your personalized language learning
        companion, designed to help you practice and improve with ease.
      </p>
      <motion.div
        className="text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.8 }}
        style={""}
      >
        <SignUpButton mode="modal">
          <button className="py-2 px-5 bg-neutral-900 text-white max-w-72 rounded-xl mx-auto text-center hover:cursor-pointer hover:text-gray-100 text-sm sm:text-lg lg:text-xl inter-semibold">
            Generate My First Task
          </button>
        </SignUpButton>
      </motion.div>

      <FeaturesBoxList />
      <FrequentlyAskedQuestionsSection />
    </div>
  );
}
