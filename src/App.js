import "./App.css";
import { TodoCounter } from "./ToDo/TodoCounter";
import { TodoItem } from "./ToDo/TodoItem";
import { TodoList } from "./ToDo/TodoList";
import { TodoSearch } from "./ToDo/TodoSearch";
import { CreateTodoButton } from "./ToDo/Utils/CreateTodoButton";

function App() {
  return (
    <div className="App">
      <TodoCounter completed={2} total={2} />
      <TodoSearch />

      <TodoList>
        <TodoItem txt="Primera funcion de React" />
        <TodoItem txt="Segunda funcion de React" />
        <TodoItem txt="Tercera funcion de React" />
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
