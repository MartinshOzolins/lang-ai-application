export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col px-3 sm:px-7">
      <h1 className="sm:text-center instrument-serif-regular-italic text-xl  sm:text-3xl md:text-4xl">
        Boost Your Language Skills with AI-Powered Tasks
      </h1>
      <p className="py-10 sm:text-center mx-auto lg:max-w-xl">
        From translations to fill-in-the-blanks, create and download language
        tasks in seconds. LangAI is your personalized language learning
        companion, designed to help you practice and improve with ease.
      </p>
      <button className=" py-2 bg-slate-900 text-white w-52 ml-3 sm:pl-0 sm:mx-auto rounded-xl text-center">
        Generate My First Task
      </button>
      <p></p>
    </div>
  );
}
