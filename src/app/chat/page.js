"use client";

import { useState } from "react";
import { useActionState } from "react";
import { generateTasks } from "../../../actions/actions";

// MUI components
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import StopCircleIcon from "@mui/icons-material/StopCircle";

export default function TaskGeneratorPage() {
  const [language, setLanguage] = useState("spanish");
  const [topic, setTopic] = useState("food");
  const [style, setStyle] = useState("fill-in-the-blank");

  const [state, formAction, isPending] = useActionState(generateTasks, {});

  return (
    <div className="w-full h-full flex flex-col pt-5">
      <div className="border-b border-gray-300">
        <h2 className="text-center instrument-serif-regular-italic text-xl sm:text-2xl md:text-3xl pb-1">
          LangAI
        </h2>
      </div>
      <div className=" rounded-xl shadow-md w-full pt-10 px-2 pt-8 pb-5 max-w-3xl mx-auto max-h-96 mt-5 overflow-scroll ">
        <form action={formAction} className="space-y-3">
          <div className="flex flex-col w-full items-end mb-4">
            <p className="text-sm font-medium text-gray-700">
              Choose Language:
            </p>
            <div className="flex flex-row">
              {["english", "spanish", "italian", "german"].map((lang) => (
                <button
                  type="button"
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 underline ${
                    language === lang
                      ? "text-black font-bold "
                      : " text-gray-700 "
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <input type="hidden" name="language" value={language} />
          </div>
          <div className="flex flex-col w-full items-end mb-4">
            <p className="text-sm font-medium text-gray-700 ">Choose Topic:</p>
            <div className="flex flex-row">
              {["food", "travel", "grammar", "verbs"].map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setTopic(t)}
                  className={`px-2 underline ${
                    topic === t ? "text-black font-bold " : " text-gray-700 "
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <input type="hidden" name="topic" value={topic} />
          </div>
          <div className="flex flex-col w-full items-end mb-4">
            <p className="text-sm font-medium text-gray-700">
              Choose Task Style:
            </p>
            <div className="flex flex-row">
              {[
                { label: "Fill in the blank", value: "fill-in-the-blank" },
                { label: "Translate", value: "translate" },
                { label: "Answer questions", value: "answer-questions" },
              ].map(({ label, value }) => (
                <button
                  type="button"
                  key={value}
                  onClick={() => setStyle(value)}
                  className={`px-2 underline ${
                    style === value
                      ? "text-black font-bold "
                      : " text-gray-700 "
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <input type="hidden" name="style" value={style} />
          </div>
          {state?.error && (
            <div className="w-full mt-4 p-4 bg-gray-100 rounded-md text-red-600 font-semibold">
              <p>{state.error}</p>
            </div>
          )}
          {state?.response && (
            <div className="w-full mt-4 p-4 bg-gray-100 rounded-md flex flex-col">
              {state.response?.split("-").map((sentence, index) => (
                <p key={index}>
                  <span className="font-semibold">{index + 1}.</span> {sentence}
                </p>
              ))}
            </div>
          )}
          <div className="w-full flex justify-end items-center gap-2">
            {isPending ? (
              <>
                <StopCircleIcon className="text-gray-400 animate-pulse" />
                <span className="text-sm text-gray-500">Generating...</span>
              </>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-1 text-black hover:font-bold"
              >
                <ArrowUpwardIcon />
                <span className="text-sm font-medium hover:font-bold">
                  Generate
                </span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
