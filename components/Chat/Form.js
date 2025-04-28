"use client";

import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import { generateTasks } from "../../actions/actions";

// PDF generator
import jsPDF from "jspdf";

// Clerk
import { useUser } from "@clerk/nextjs";

// context
import { useAvailableRequestsContext } from "../../contexts/AvailableRequestsContext";

import GenerateTaskButton from "./GenerateTaskButton";
import TaskOptionsList from "./TaskOptionsList";
import GeneratedTasksList from "./GeneratedTasksList";

export default function Form() {
  // task state values
  const [level, setLevel] = useState("A1");
  const [language, setLanguage] = useState("spanish");
  const [topic, setTopic] = useState("food");
  const [style, setStyle] = useState("fill-in-the-blank");

  // form state
  const [state, formAction, isPending] = useActionState(generateTasks, []);

  const [tasks, setTasks] = useState([]);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const messagesEndRef = useRef(null); // dummy element for scrolling down

  // context to update available requests
  const { setAvailableRequests } = useAvailableRequestsContext();
  // current user instance to retrieve latest availableReuqests
  const { user } = useUser();

  // UI state for smaller screen
  const [isTopicChoiceOpen, setIsTopicChoiceOpen] = useState(false);
  const [isTaskStyleChoiceOpen, setIsTaskStyleChoiceOpen] = useState(false);

  // handles task option changes
  const handleTaskChange = (e, indexToChange) => {
    setTasks((prev) => {
      return prev.map((task, currIndex) => {
        if (currIndex === indexToChange) {
          return { ...task, sentence: e.target.value };
        }
        return task;
      });
    });
  };

  // splits tasks into separate sentences when generated
  useEffect(() => {
    if (state.response) {
      setTasks(() => {
        return state.response.map((task) => {
          return { ...task };
        });
      });
      setHasGenerated(true);
    }
  }, [state.response]);

  // scrolls to the bottom when tasks are generated
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // updates availableRequests and calls "scrollToBottom" to scroll to the bottom when tasks are generated
  useEffect(() => {
    const reloadUserData = async () => {
      await user.reload(); // refresh user info to display renewed metadata
      setAvailableRequests(user.publicMetadata.availableRequests || 0); // update availableRequests context
    };

    if (hasGenerated) {
      reloadUserData();
      scrollToBottom();
      setHasGenerated(false); // resets hasGenerated after the reload
    }
  }, [hasGenerated]);

  // generates PDF and clears inputs
  const handleGeneratePDF = (shouldIncludeAnswers = false) => {
    const pdf = new jsPDF({ orientation: "p", format: "a4", unit: "mm" });
    pdf.setFontSize(11);

    // 1st page with sentences
    let pageOneY = 20;
    tasks.forEach((task, index) => {
      pdf.text(`${index + 1}. ${task.sentence}`, 5, pageOneY);
      pageOneY += 20;
    });

    // if clicked "download with answers" includes second page as well
    if (shouldIncludeAnswers === true) {
      // 2nd page with answers
      pdf.addPage({ format: "a4", orientation: "p", unit: "mm" });
      let pageTwoY = 20;
      tasks.forEach((task, index) => {
        pdf.text(`${index + 1}. ${task.answer}`, 5, pageTwoY);
        pageTwoY += 20;
      });
    }
    pdf.save("tasks");
    setLevel("A1");
    setLanguage("spanish");
    setTopic("food");
    setStyle("fill-in-the-blank");
    setTasks([]);
    setHasGenerated(false);
    setIsEditing(false);
  };

  return (
    <>
      <div className=" rounded-xl shadow-xl w-full h-full px-2 pt-8 mt-5 pb-40  mx-auto overflow-scroll xl:max-w-4xl border border-gray-100 bg-gray-100 relative inter-regular">
        {/* Form */}
        <form
          action={formAction}
          className={`space-y-3 ${
            tasks.length !== 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={tasks.length !== 0}
        >
          <TaskOptionsList
            tasks={tasks}
            setLevel={setLevel}
            level={level}
            setTopic={setTopic}
            topic={topic}
            setStyle={setStyle}
            style={style}
            setLanguage={setLanguage}
            language={language}
            isTaskStyleChoiceOpen={isTaskStyleChoiceOpen}
            setIsTaskStyleChoiceOpen={setIsTaskStyleChoiceOpen}
            isTopicChoiceOpen={isTopicChoiceOpen}
            setIsTopicChoiceOpen={setIsTopicChoiceOpen}
          />
          {/* Error state */}
          {state?.error && (
            <div className="w-full mt-4 p-4 bg-gray-100 rounded-md text-red-600 font-semibold">
              <p>{state.error}</p>
            </div>
          )}
          {/* Generate task button and loading state  */}
          {tasks.length == 0 ? (
            <GenerateTaskButton tasks={tasks} isPending={isPending} />
          ) : null}
        </form>
        {/* Generated Tasks */}
        <GeneratedTasksList
          tasks={tasks}
          isEditing={isEditing}
          handleTaskChange={handleTaskChange}
        />
        {/* Element to scroll to when tasks are generated (for smaller screens) */}
        <div ref={messagesEndRef} className="h-1"></div>
      </div>
      {/* Buttons to display after generating */}
      {tasks.length !== 0 && (
        <div className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 w-full sm:max-w-3xl ">
          <div className="sm:w-full bg-gray-200 flex flex-col sm:flex-row items-center gap-4 sm:gap-3 justify-between px-5 py-3 sm:py-5 rounded-md">
            <button
              className="flex items-center justify-center sm:w-auto w-full py-2 sm:py-3 px-4 sm:px-6 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md shadow-sm transition-all duration-200 hover:cursor-pointer lg:text-lg"
              onClick={() => setIsEditing(!isEditing)}
            >
              <span className="pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {!isEditing ? "Edit Task" : "Save"}
            </button>

            <button
              className={`flex items-center justify-center sm:w-auto w-full py-2 sm:py-3 px-4 sm:px-6 bg-gray-300 text-gray-800 rounded-md shadow-sm transition-all duration-200 lg:text-lg ${
                isEditing
                  ? "hover:cursor-not-allowed"
                  : "hover:cursor-pointer hover:bg-gray-400"
              }`}
              onClick={() => handleGeneratePDF(true)}
              disabled={isEditing}
            >
              <span className="pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.914 4.086a2 2 0 0 0-2.828 0l-5 5a2 2 0 1 0 2.828 2.828l.556-.555a.75.75 0 0 1 1.06 1.06l-.555.556a3.5 3.5 0 0 1-4.95-4.95l5-5a3.5 3.5 0 0 1 4.95 4.95l-1.972 1.972a2.125 2.125 0 0 1-3.006-3.005L9.97 4.97a.75.75 0 1 1 1.06 1.06L9.058 8.003a.625.625 0 0 0 .884.883l1.972-1.972a2 2 0 0 0 0-2.828Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Download with Answers
            </button>

            <button
              className={`flex items-center justify-center sm:w-auto w-full py-2 sm:py-3 px-4 sm:px-6 bg-gray-300 text-gray-800 rounded-md shadow-sm transition-all duration-200 lg:text-lg ${
                isEditing
                  ? "hover:cursor-not-allowed"
                  : "hover:cursor-pointer hover:bg-gray-400"
              }`}
              onClick={() => handleGeneratePDF(false)}
            >
              <span className="pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M7 1a.75.75 0 0 1 .75.75V6h-1.5V1.75A.75.75 0 0 1 7 1ZM6.25 6v2.94L5.03 7.72a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06L7.75 8.94V6H10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.25Z" />
                  <path d="M4.268 14A2 2 0 0 0 6 15h6a2 2 0 0 0 2-2v-3a2 2 0 0 0-1-1.732V11a3 3 0 0 1-3 3H4.268Z" />
                </svg>
              </span>
              Download without Answers
            </button>
          </div>
        </div>
      )}
    </>
  );
}
