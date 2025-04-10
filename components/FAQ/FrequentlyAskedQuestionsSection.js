import FrequentlyAskedQuestionsSingleCard from "./FrequentlyAskedQuestionsSingleCard";

export default function FrequentlyAskedQuestionsSection() {
  return (
    <div className="flex flex-col pb-10 inter-regular">
      <h2 className="text-center  instrument-serif-regular-italic text-xl sm:text-2xl md:text-3xl pt-20 sm:pt-30 pb-3 sm:pb-5 md:pb-10 text-center">
        📌 Frequently Asked Questions (FAQ)
      </h2>
      <div className="w-full flex flex-col items-center space-y-4">
        <FrequentlyAskedQuestionsSingleCard
          question={"How does this app help me learn a language?"}
          answer={
            "Our AI generates custom exercises—translations, sentence corrections, vocabulary challenges, and more—based on your level and preferences. You can also download tasks as PDFs to practice offline."
          }
          emoji={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 sm:size-6"
              style={{ display: "inline" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
          }
        />
        <FrequentlyAskedQuestionsSingleCard
          question={"Can I choose a specific language?"}
          answer={
            "Absolutely! You can select from multiple languages when generating tasks, and AI will tailor the exercises accordingly."
          }
          emoji={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 sm:size-6"
              style={{ display: "inline" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              />
            </svg>
          }
        />
        <FrequentlyAskedQuestionsSingleCard
          question={"Can I edit or refine the AI-generated tasks?"}
          answer={
            "Yes! You can regenerate exercises if you're not satisfied or refine them to better match your learning style."
          }
          emoji={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 sm:size-6 "
              style={{ display: "inline" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          }
        />
        <FrequentlyAskedQuestionsSingleCard
          question={"Does the AI also provide answer sheets?"}
          answer={
            "Yes! You can choose to generate tasks with or without answers. If enabled, the AI will provide solutions or hints for self-checking."
          }
          emoji={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 sm:size-6"
              style={{ display: "inline" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
}
