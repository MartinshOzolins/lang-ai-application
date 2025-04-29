// contexts
import { useGlobalContext } from "../../contexts/GlobalContext";

export default function ChangeTaskOptionButton({
  availableValue,
  valueLabel,
  state,
  setStateFunction,
}) {
  // retrieving global state for generated tasks
  const { tasks } = useGlobalContext();
  return (
    <button
      disabled={tasks.length !== 0}
      type="button"
      key={availableValue}
      onClick={() => setStateFunction(availableValue)}
      className={`px-2 ${
        state === availableValue
          ? "text-black underline font-medium"
          : "text-gray-700"
      } ${
        tasks.length !== 0 ? "hover:cursor-not-allowed" : "hover:cursor-pointer"
      }`}
    >
      {valueLabel}
    </button>
  );
}
