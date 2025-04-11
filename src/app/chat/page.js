"use client";

// React hooks
import { useActionState } from "react";

// Server actions
import { generateTasks } from "../../../actions/actions";

export default function TaskGeneratorPage() {
  const [state, formAction, isPending] = useActionState(generateTasks, {});

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="p-5 bg-white rounded-xl shadow-md max-w-lg w-full">
        <p className="text-lg font-semibold mb-4">Generate Tasks</p>

        <form action={formAction} className="space-y-4">
          <div>
            <label
              htmlFor="input"
              className="block text-sm font-medium text-gray-700"
            >
              Input
            </label>
            <input
              type="text"
              id="input"
              name="input"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter task"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className={`w-full py-2 px-4 bg-blue-500 text-white rounded-md ${
              isPending ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
          >
            {isPending ? "Generating..." : "Generate Tasks"}
          </button>
        </form>

        {state?.response && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p className="font-medium">Response:</p>
            <p>{state.response}</p>
          </div>
        )}
      </div>
    </div>
  );
}
