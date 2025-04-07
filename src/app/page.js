export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col px-3 sm:px-7 ">
      <h1 className="text-center  instrument-serif-regular-italic text-xl sm:text-3xl md:text-4xl">
        Boost Your Language Skills with AI-Powered Tasks
      </h1>
      <p className="py-10 text-center mx-auto lg:max-w-xl">
        From translations to fill-in-the-blanks, create and download language
        tasks in seconds. LangAI is your personalized language learning
        companion, designed to help you practice and improve with ease.
      </p>
      <button className="py-2 bg-slate-900 text-white w-52  rounded-xl mx-auto text-center">
        Generate My First Task
      </button>
      <h2 className="text-center  instrument-serif-regular-italic text-xl sm:text-2xl md:text-3xl pt-20 sm:pt-30 pb-3 sm:pb-5 md:pb-10 text-center">
        Features
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 text-sm sm:text-xl">
        <div className="w-full h-62 sm:h-80 bg-white shadow-lg rounded-md flex flex-col ">
          <div className="h-1/2 bg-linear-to-t from-white-500 to-gray-500 rounded-xl"></div>
          <div className="h-1/2 px-2 flex flex-col justify-start">
            <h2 className="font-semibold">Custom AI-Generated Tasks</h2>
            <p>
              <span className="">🎯 </span>Personalized exercises based on your
              level and learning goals. Choose from translations, sentence
              corrections, vocabulary matching, and more.
            </p>
          </div>
        </div>
        <div className="w-full h-62 sm:h-80 bg-white shadow-lg rounded-xl flex flex-col ">
          <div className="h-1/2 bg-linear-to-t from-white-500 to-gray-500 rounded-xl"></div>
          <div className="h-1/2 px-2 flex flex-col justify-start">
            <h2 className="font-semibold">Instant PDF Downloads</h2>
            <p>
              <span className="">📄 </span>Save and practice offline. Generate
              your tasks and download them as a neatly formatted PDF to print or
              use anytime.
            </p>
          </div>
        </div>
        <div className="w-full h-62 sm:h-80 bg-white shadow-lg rounded-md flex flex-col ">
          <div className="h-1/2 bg-linear-to-t from-white-500 to-gray-500 rounded-xl"></div>
          <div className="h-1/2 px-2 flex flex-col justify-start">
            <h2 className="font-semibold">Smart Language Selection</h2>
            <p>
              <span className="">🌍</span>Learn in multiple languages. Pick from
              a range of supported languages and let AI craft exercises tailored
              to your needs.
            </p>
          </div>
        </div>
        <div className="w-full h-62 sm:h-80 bg-white shadow-lg rounded-md flex flex-col ">
          <div className="h-1/2 bg-linear-to-t from-white-500 to-gray-500 rounded-xl"></div>
          <div className="h-1/2 px-2 flex flex-col justify-start">
            <h2 className="font-semibold">Refine & Regenerate</h2>
            <p>
              <span className="">🔄</span> Not satisfied with the task? Refine
              AI-generated content to better match your style, or regenerate
              exercises with a single click
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
