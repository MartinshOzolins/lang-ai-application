// MUI components
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import StopCircleIcon from "@mui/icons-material/StopCircle";

// contexts
import { useGlobalContext } from "../../contexts/GlobalContext";

export default function GenerateTaskButton({ isPending }) {
  // retrieving global state for generated tasks
  const { tasks } = useGlobalContext();
  return (
    <div className="w-full flex justify-end items-center gap-2 px-2">
      {isPending ? (
        <>
          <StopCircleIcon className="text-gray-400 animate-pulse hover:cursor-pointer" />
          <span className="text-sm sm:text-base xl:text-lg text-gray-500">
            Generating...
          </span>
        </>
      ) : (
        <button
          disabled={tasks.length !== 0}
          type="submit"
          className="flex items-center gap-1 text-black hover:cursor-pointer"
        >
          <ArrowUpwardIcon />
          <span className="text-sm sm:text-base xl:text-lg font-medium hover:font-semibold">
            Generate
          </span>
        </button>
      )}
    </div>
  );
}
