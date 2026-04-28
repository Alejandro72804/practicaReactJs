import React from "react";
import "./ToDo/Utils/Style/TodoStyle.css";
import {
  CreateTodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
} from "./ToDo";

const defaultTodos = [
  { text: "Primera funcion de React", completed: true },
  { text: "Segunda funcion de React", completed: false },
  { text: "Tercera funcion de React", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [serchValue, setSearchValue] = React.useState("");
  const searcherTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = serchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const completeTodo = (text) => {
    const newTodos = todos.map((t) => {
      if (t.text === text) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });

    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = todos.filter((t) => t.text !== text);
    setTodos(newTodos);
  };

  return (
    <div className="app-container">
      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={serchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searcherTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
