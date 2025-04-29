// MUI components
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

// contexts
import { useGlobalContext } from "../../contexts/GlobalContext";

export default function SmallChangeTaskOptionButton({
  setIsStateChoiceOpen,
  isStateChoiceOpen,
  setState,
  state,
  textToDisplay,
  availableValues,
}) {
  // retrieving global state for generated tasks
  const { tasks } = useGlobalContext();
  return (
    <>
      <button
        className="inline sm:hidden text-sm font-semibold text-black hover:cursor-pointer"
        type="button"
        onClick={() => setIsStateChoiceOpen((prev) => !prev)}
      >
        {textToDisplay}{" "}
        {!isStateChoiceOpen ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </button>
      {isStateChoiceOpen && (
        <div className="flex sm:hidden flex-col sm:flex-row">
          {availableValues.map(({ label, value }) => (
            <button
              type="button"
              key={label}
              onClick={() => setState(value)}
              className={`px-2 text-right ${
                state === value
                  ? "text-black font-bold underline "
                  : "text-gray-700"
              } ${
                tasks.length !== 0
                  ? " hover:cursor-not-allowed"
                  : "hover:cursor-pointer"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
