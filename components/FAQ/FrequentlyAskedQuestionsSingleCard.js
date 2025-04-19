"use client";

import { useState } from "react";

// MUI components
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

export default function FrequentlyAskedQuestionsSingleCard({
  question,
  answer,
  emoji,
}) {
  // state to toggle answer visibility
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  return (
    <div
      className="w-full max-w-3xl bg-stone-200 rounded-xl px-2 py-6 flex flex-col text-sm sm:text-lg lg:text-xl inter-regular"
      onClick={() => setIsAnswerVisible((prev) => !prev)}
    >
      <div className="w-full flex justify-between">
        <div className="flex justify-center items-center">
          <p className="pl-1 pr-5">{emoji}</p>
          <p className="align-middle"> {question}</p>
        </div>

        {!isAnswerVisible && (
          <AddIcon
            onClick={(e) => {
              e.stopPropagation();
              setIsAnswerVisible((prev) => !prev);
            }}
          />
        )}
        {isAnswerVisible && (
          <CloseIcon
            onClick={(e) => {
              e.stopPropagation();
              setIsAnswerVisible((prev) => !prev);
            }}
          />
        )}
      </div>
      <div
        className={`transition-all duration-200 ease-in ${
          isAnswerVisible ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-700">{answer}</p>
      </div>
    </div>
  );
}
