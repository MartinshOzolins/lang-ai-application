import FeaturesBoxList from "../../components/FeaturesBoxList";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col px-3 md:px-25 sm:px-7 pb-20 ">
      <h1 className="text-center  instrument-serif-regular-italic text-xl sm:text-3xl md:text-4xl">
        Boost Your Language Skills with AI-Powered Tasks
      </h1>
      <p className="py-10 text-center mx-auto lg:max-w-xl text-sm sm:text-xl text-gray-600">
        From translations to fill-in-the-blanks, create and download language
        tasks in seconds. LangAI is your personalized language learning
        companion, designed to help you practice and improve with ease.
      </p>
      <button className="py-2 bg-slate-900 text-white w-52  rounded-xl mx-auto text-center">
        Generate My First Task
      </button>
      <h2 className="text-center  instrument-serif-regular-italic text-xl sm:text-2xl md:text-3xl pt-20 sm:pt-30 pb-3 sm:pb-5 md:pb-10 text-center">
        🛠️ Features
      </h2>
      <FeaturesBoxList />
      <div className="flex flex-col pb-10">
        <h2 className="text-center  instrument-serif-regular-italic text-xl sm:text-2xl md:text-3xl pt-20 sm:pt-30 pb-3 sm:pb-5 md:pb-10 text-center">
          📌 Frequently Asked Questions (FAQ)
        </h2>
        <div className="w-full flex flex-col items-center space-y-4">
          <div className="w-full max-w-3xl h-20 bg-stone-200 rounded-xl">
            <p>1. How does this app help me learn a language?</p>
            <p>
              Our AI generates custom exercises—translations, sentence
              corrections, vocabulary challenges, and more—based on your level
              and preferences. You can also download tasks as PDFs to practice
              offline.
            </p>
          </div>
          <div className="w-full max-w-3xl h-16 bg-stone-200 rounded-xl">
            <p>2. Can I choose a specific language?</p>
            <p>
              Absolutely! You can select from multiple languages when generating
              tasks, and AI will tailor the exercises accordingly.
            </p>
          </div>
          <div className="w-full max-w-3xl h-16 bg-stone-200 rounded-xl">
            <p>3. Can I edit or refine the AI-generated tasks?</p>
            <p>
              Yes! You can regenerate exercises if you&apos;re not satisfied or
              refine them to better match your learning style.
            </p>
          </div>
          <div className="w-full max-w-3xl h-16 bg-stone-200 rounded-xl">
            <p>4. Does the AI also provide answer sheets?</p>
            <p>
              Yes! You can choose to generate tasks with or without answers. If
              enabled, the AI will provide solutions or hints for self-checking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
