import { useState } from "react";
import { TodoCard } from "./components/TodoCard";
import { TodoInput } from "./components/TodoInput";
import { TodoTabs } from "./components/TodoTabs";
import logo from "./assets/logo-magnetodo.png";

function App() {
  const [todos, setTodos] = useState([
    {
      task: "Design new icons for Aminotes.com",
      status: "Pending",
    },
    {
      task: "Plan webinar",
      status: "Pending",
    },
    {
      task: "Write blog post",
      status: "Completed",
    },
    {
      task: "Update website",
      status: "Completed",
    },
    {
      task: "Interview candidate",
      status: "Completed",
    },
  ]);

  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleDeleteTodo(title) {
    const newTodos = todos.filter((todo) => todo.task !== title);
    setTodos(newTodos);
  }

  return (
    <>
      <div className="flex justify-center mt-4">
        <img src={logo} className="w-64 h-auto"></img>
      </div>
      <TodoInput todos={todos} handleAddTodo={handleAddTodo} />

      <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 w-[400px] rounded-md bg-white shadow-md z-50">
        <div className="flex justify-center">
          <TodoTabs />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 m-4">
        {todos.map((todo, index) => {
          return (
            <TodoCard
              key={index}
              task={todo.task}
              status={todo.status}
              handleDeleteTodo={handleDeleteTodo}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
