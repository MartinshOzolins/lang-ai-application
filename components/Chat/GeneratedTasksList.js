export default function GeneratedTasksList({
  tasks,
  isEditing,
  handleTaskChange,
}) {
  return (
    <div className="w-full mt-4 p-4 bg-gray-100 rounded-md flex flex-col ">
      {tasks.length !== 0 && !isEditing && (
        <div className="flex flex-col text-start text-base sm:text-lg xl:text-xl">
          {tasks.map((task, index) => (
            <p className="w-full py-1" key={index}>
              {`${index + 1}. ${task.sentence} `}
            </p>
          ))}
        </div>
      )}
      {tasks.length !== 0 && isEditing && (
        <div>
          {tasks.map((task, index) => (
            <textarea
              className="w-full py-1"
              key={index}
              onChange={(e) => handleTaskChange(e, index)}
              defaultValue={`${index + 1}. ${task.sentence} `}
            ></textarea>
          ))}
        </div>
      )}
    </div>
  );
}
