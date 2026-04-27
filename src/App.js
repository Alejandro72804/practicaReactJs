import React from "react";
import "./App.css";
import { TodoCounter } from "./ToDo/TodoCounter";
import { TodoItem } from "./ToDo/TodoItem";
import { TodoList } from "./ToDo/TodoList";
import { TodoSearch } from "./ToDo/TodoSearch";
import { CreateTodoButton } from "./ToDo/Utils/CreateTodoButton";

const defaultTodos = [
  { text: "Primera funcion de React", completed: true },
  { text: "Segunda funcion de React", completed: true },
  { text: "Tercera funcion de React", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={2} total={2} />
      <TodoSearch />

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
    </React.Fragment>
  );
}

export default App;
