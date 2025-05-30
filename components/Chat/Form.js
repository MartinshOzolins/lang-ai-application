"use client";

import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";

// next.js action functions
import { generateTasks } from "../../actions/actions";

// Clerk
import { useUser } from "@clerk/nextjs";

// context
import { useGlobalContext } from "../../contexts/GlobalContext";

// components
import GenerateTaskButton from "./GenerateTaskButton";
import TaskOptionsList from "./TaskOptionsList";
import GeneratedTasksList from "./GeneratedTasksList";
import ErrorMessage from "./ErrorMessage";
import PostGenerationButtons from "./PostGenerationButtons";

// PDF generation function
import { generatePDF } from "../../utils/generatePDF";
import { scrollToElement } from "../../utils/scrollToElement";

export default function Form() {
  // form state
  const [formState, formAction, isLoadingTasks] = useActionState(
    generateTasks,
    []
  );

  const [hasGenerated, setHasGenerated] = useState(false);
  // state that affects download button access
  const [isEditingTasks, setIsEditingTasks] = useState(false);
  // state that triggers reset of all option states
  const [shouldResetTaskOptions, setShouldResetTaskOptions] = useState(false);

  // dummy element for scrolling down
  const messagesEndRef = useRef(null);

  // context to update available requests and generated tasks
  const { setAvailableRequests, tasks, setTasks } = useGlobalContext();

  // current user instance used to refresh and get updated available requests
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
    if (formState.response) {
      setTasks(() => {
        return formState.response.map((task) => {
          return { ...task };
        });
      });
      setHasGenerated(true);
    }
  }, [formState.response, setTasks]);

  // refreshes user metadata and scrolls to task list after tasks are generated
  useEffect(() => {
    const reloadUserData = async () => {
      await user.reload(); // refresh user info to display renewed metadata
      setAvailableRequests(user.publicMetadata.availableRequests || 0); // update availableRequests context
    };

    if (hasGenerated) {
      reloadUserData();
      scrollToElement(messagesEndRef); // scrolls to the element when tasks are generated
      setHasGenerated(false); // resets hasGenerated after the reload
    }
  }, [hasGenerated, setAvailableRequests, user]);

  // generates PDF and clears states
  const handleGeneratePDF = (shouldIncludeAnswers = false) => {
    // executes function to generate a PDF file
    generatePDF(shouldIncludeAnswers, tasks);

    // resets all the states
    setShouldResetTaskOptions(true);
    setTasks([]);
    setHasGenerated(false);
    setIsEditingTasks(false);
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
          {/* Available Task Options */}
          <TaskOptionsList
            isTaskStyleChoiceOpen={isTaskStyleChoiceOpen}
            setIsTaskStyleChoiceOpen={setIsTaskStyleChoiceOpen}
            isTopicChoiceOpen={isTopicChoiceOpen}
            setIsTopicChoiceOpen={setIsTopicChoiceOpen}
            shouldResetTaskOptions={shouldResetTaskOptions}
            setShouldResetTaskOptions={setShouldResetTaskOptions}
          />

          {/* Error state */}
          <ErrorMessage formState={formState} />

          {/* Generate task button and loading state  */}
          {tasks.length == 0 ? (
            <GenerateTaskButton isLoadingTasks={isLoadingTasks} />
          ) : null}
        </form>
        {/* Generated Tasks */}
        <GeneratedTasksList
          isEditingTasks={isEditingTasks}
          handleTaskChange={handleTaskChange}
        />
        {/* Element to scroll to when tasks are generated (for smaller screens) */}
        <div ref={messagesEndRef} className="h-1"></div>
      </div>
      {/* Buttons to display after generating */}
      {tasks.length !== 0 && (
        <PostGenerationButtons
          setIsEditingTasks={setIsEditingTasks}
          isEditingTasks={isEditingTasks}
          handleGeneratePDF={handleGeneratePDF}
        />
      )}
    </>
  );
}
