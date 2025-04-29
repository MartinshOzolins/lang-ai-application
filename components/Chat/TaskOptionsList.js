// components
import ChangeTaskOptionButton from "./ChangeTaskOptionButton";
import SmallChangeTaskOptionButton from "./SmallChangeTaskOptionButton";

// Constant values
import {
  TASK_LANGUAGE_OPTIONS,
  TASK_LEVEL_OPTIONS,
  TASK_TOPIC_OPTIONS,
  TASK_STYLE_OPTIONS,
} from "../../constants/options";

export default function TaskOptionsList({
  setLevel,
  level,
  setLanguage,
  language,
  setStyle,
  style,
  setTopic,
  topic,
  isTopicChoiceOpen,
  setIsTopicChoiceOpen,
  isTaskStyleChoiceOpen,
  setIsTaskStyleChoiceOpen,
}) {
  return (
    <>
      <div className="flex flex-col w-full items-end mb-4">
        <p className="text-sm sm:text-base xl:text-lg font-semibold text-black ">
          Choose Level:
        </p>
        <div className="flex flex-row text-base sm:text-lg xl:text-xl">
          {TASK_LEVEL_OPTIONS.map(({ label, value }) => (
            <ChangeTaskOptionButton
              key={value}
              availableValue={value}
              valueLabel={label}
              state={level}
              setStateFunction={setLevel}
            />
          ))}
        </div>
        <input type="hidden" name="level" value={level} />
      </div>
      <div className="flex flex-col w-full items-end mb-4">
        <p className="text-sm sm:text-base xl:text-lg  font-semibold text-black">
          Choose Language:
        </p>
        <div className="flex flex-row text-base sm:text-lg xl:text-xl">
          {TASK_LANGUAGE_OPTIONS.map(({ label, value }) => (
            <ChangeTaskOptionButton
              key={value}
              availableValue={value}
              valueLabel={label}
              state={language}
              setStateFunction={setLanguage}
            />
          ))}
        </div>
        <input type="hidden" name="language" value={language} />
      </div>
      <div className="flex flex-col w-full items-end mb-4">
        <p
          className="hidden sm:inline text-sm sm:text-base xl:text-lg font-semibold text-black "
          type="button"
        >
          Choose Topic:
        </p>
        <div className="hidden sm:flex flex-col sm:flex-row text-base sm:text-lg xl:text-xl">
          {TASK_TOPIC_OPTIONS.map(({ label, value }) => (
            <ChangeTaskOptionButton
              key={value}
              availableValue={value}
              valueLabel={label}
              state={topic}
              setStateFunction={setTopic}
            />
          ))}
        </div>
        {/* Small screen button */}
        <SmallChangeTaskOptionButton
          setIsStateChoiceOpen={setIsTopicChoiceOpen}
          isStateChoiceOpen={isTopicChoiceOpen}
          state={topic}
          setState={setTopic}
          textToDisplay={"Choose Topic:"}
          availableValues={TASK_TOPIC_OPTIONS}
        />
        <input type="hidden" name="topic" value={topic} />
      </div>
      <div className="flex flex-col w-full items-end mb-4">
        <p className="hidden sm:inline text-sm sm:text-base xl:text-lg font-semibold text-black">
          Choose Task Style:
        </p>
        <div className="hidden sm:flex flex-col items-end sm:flex-row sm:justify-end text-base sm:text-lg xl:text-xl">
          {TASK_STYLE_OPTIONS.map(({ label, value }) => (
            <ChangeTaskOptionButton
              key={value}
              availableValue={value}
              valueLabel={label}
              state={style}
              setStateFunction={setStyle}
            />
          ))}
        </div>
        {/* Small screen button */}
        <SmallChangeTaskOptionButton
          setIsStateChoiceOpen={setIsTaskStyleChoiceOpen}
          isStateChoiceOpen={isTaskStyleChoiceOpen}
          state={style}
          setState={setStyle}
          textToDisplay={"Choose Task Style:"}
          availableValues={TASK_STYLE_OPTIONS}
        />
        <input type="hidden" name="style" value={style} />
      </div>
    </>
  );
}
