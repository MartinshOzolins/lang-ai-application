export default function DownloadTasksButton({
  onClick,
  Icon,
  label,
  isEditingTasks,
}) {
  return (
    <button
      className={`flex items-center justify-center sm:w-auto w-full py-2 sm:py-3 px-4 sm:px-6 bg-gray-300 text-gray-800 rounded-md shadow-sm transition-all duration-200 lg:text-lg ${
        isEditingTasks
          ? "hover:cursor-not-allowed"
          : "hover:cursor-pointer hover:bg-gray-400"
      }`}
      onClick={onClick}
      disabled={isEditingTasks}
    >
      {<Icon />}
      {label}
    </button>
  );
}
