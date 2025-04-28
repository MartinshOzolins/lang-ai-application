"use client";

import { useState } from "react";

// MUI components
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

// transitions
import { motion, AnimatePresence } from "motion/react";

export default function FrequentlyAskedQuestionsSingleCard({
  question,
  answer,
  emoji,
}) {
  // state to toggle answer visibility
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  return (
    <div
      className="w-full max-w-3xl bg-stone-200 rounded-xl px-2 py-6 flex flex-col text-sm sm:text-lg inter-regular hover:cursor-pointer"
      onClick={() => setIsAnswerVisible((prev) => !prev)}
    >
      <div className="w-full flex justify-between z-10">
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
      {isAnswerVisible && (
        <AnimatePresence>
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden mt-2 text-gray-700"
          >
            {answer}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
