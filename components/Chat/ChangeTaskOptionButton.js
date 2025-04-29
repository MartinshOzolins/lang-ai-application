export default function ChangeTaskOptionButton({
  tasks,
  availableValue,
  valueLabel,
  state,
  setStateFunction,
}) {
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
