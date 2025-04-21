export default function ChangeStyleButton({
  tasksArray,
  availableValue,
  valueLabel,
  state,
  setStateFunction,
}) {
  return (
    <button
      disabled={tasksArray.length !== 0}
      type="button"
      key={availableValue}
      onClick={() => setStateFunction(availableValue)}
      className={`px-2 ${
        state === availableValue
          ? "text-black font-bold underline "
          : "text-gray-700"
      } ${
        tasksArray.length !== 0
          ? " hover:cursor-not-allowed"
          : "hover:cursor-pointer"
      }`}
    >
      {valueLabel}
    </button>
  );
}
