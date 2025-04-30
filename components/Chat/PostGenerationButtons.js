// constant svgs
import {
  DownloadWithAnswersSvg,
  DownloadWithoutAnswersSvg,
  EditTaskSvg,
} from "../../constants/svgs";
import DownloadTasksButton from "./DownloadTasksButton";

export default function PostGenerationButtons({
  isEditingTasks,
  setIsEditingTasks,
  handleGeneratePDF,
}) {
  return (
    <div className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 w-full sm:max-w-3xl ">
      <div className="sm:w-full bg-gray-200 flex flex-col sm:flex-row items-center gap-4 sm:gap-3 justify-between px-5 py-3 sm:py-5 rounded-md">
        <button
          className="flex items-center justify-center sm:w-auto w-full py-2 sm:py-3 px-4 sm:px-6 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md shadow-sm transition-all duration-200 hover:cursor-pointer lg:text-lg"
          onClick={() => setIsEditingTasks(!isEditingTasks)}
        >
          <EditTaskSvg />
          {!isEditingTasks ? "Edit Task" : "Save"}
        </button>

        {/* Download tasks with answers button */}
        <DownloadTasksButton
          onClick={() => handleGeneratePDF(true)}
          Icon={DownloadWithAnswersSvg}
          label={"Download with Answers"}
          isEditingTasks={isEditingTasks}
        />

        {/* Download tasks without answers button */}
        <DownloadTasksButton
          onClick={() => handleGeneratePDF(false)}
          Icon={DownloadWithoutAnswersSvg}
          label={"Download without Answers"}
          isEditingTasks={isEditingTasks}
        />
      </div>
    </div>
  );
}
