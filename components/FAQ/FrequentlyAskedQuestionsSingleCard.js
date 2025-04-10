"use client";

import { useState } from "react";

// MUI components
import AddIcon from "@mui/icons-material/Add";

export default function FrequentlyAskedQuestionsSingleCard({
  question,
  answer,
  emoji,
}) {
  // state to toggle answer visibility
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  return (
    <div className="w-full max-w-3xl bg-stone-200 rounded-xl px-2 py-6 flex flex-col text-sm sm:text-base inter-regular">
      <div className="w-full flex justify-between">
        <div className="flex justify-center items-center">
          <p className="pl-1 pr-5">{emoji}</p>
          <p className="align-middle"> {question}</p>
        </div>

        <AddIcon onClick={() => setIsAnswerVisible((prev) => !prev)} />
      </div>
      {isAnswerVisible && <p className="py-2 text-gray-700 ">{answer}</p>}
    </div>
  );
}
