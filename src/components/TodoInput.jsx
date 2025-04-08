import React from "react";
import { useState } from "react";

export const TodoInput = ({ handleAddTodo }) => {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!task.trim()) return; // avoid adding empty tasks

    const newTodo = {
      task: task.trim(),
      status: "Pending",
    };

    handleAddTodo(newTodo);
    setTask(""); // clear input
  }
  return (
    <div className="flex justify-center  mt-4">
      <form onSubmit={handleSubmit} className="flex justify-center mt-4 gap-3">
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter Your To-do here..."
          className="bg-white p-3 border-2 w-65 sm:w-128  border-gray-200 rounded-md focus:outline-0 focus:border-gray-400"
        />
        <button className="bg-[#4A6CF7] text-white p-3 rounded-md font-medium hover:bg-[#3C5DE0]">
          Add To-do
        </button>
      </form>
    </div>
  );
};
