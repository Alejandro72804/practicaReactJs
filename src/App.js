import React from "react";
import "./ToDo/Utils/Style/TodoStyle.css";
import { AppUIController, useLocalStorage } from "./ToDo";

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("Todos", []);
  const [searchValue, setSearchValue] = React.useState("");
  const searcherTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (text) => {
    const newTodos = todos.map((t) => {
      if (t.text === text) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });

    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = todos.filter((t) => t.text !== text);
    saveTodos(newTodos);
  };

  return (
    <AppUIController
      completeTodos={completeTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searcherTodos={searcherTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    />
  );
}

export default App;
