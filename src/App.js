import React from "react";
import "./ToDo/Utils/Style/TodoStyle.css";
import { TodoCounter } from "./ToDo/TodoCounter";
import { TodoItem } from "./ToDo/TodoItem";
import { TodoList } from "./ToDo/TodoList";
import { TodoSearch } from "./ToDo/TodoSearch";
import { CreateTodoButton } from "./ToDo/Utils/CreateTodoButton";

const defaultTodos = [
  { text: "Primera funcion de React", completed: true },
  { text: "Segunda funcion de React", completed: false },
  { text: "Tercera funcion de React", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [serchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <div className="app-container">
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={serchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            key={todo.text}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
