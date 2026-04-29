import React from "react";
import "./ToDo/Utils/Style/TodoStyle.css";
import {
  CreateTodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
} from "./ToDo";

// const defaultTodos = [
//   { text: "Primera funcion de React", completed: true },
//   { text: "Segunda funcion de React", completed: false },
//   { text: "Tercera funcion de React", completed: false },
// ];

// localStorage.setItem("todos", JSON.stringify(defaultTodos));

function useLocalStorage(itemName, initialValue) {
  let localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify([]));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return { item, saveItem };
}

function App() {
  const { item: todos, saveItem: saveTodos } = useLocalStorage("Todos", []);
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
    <div className="app-container">
      <TodoCounter completed={completeTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

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
