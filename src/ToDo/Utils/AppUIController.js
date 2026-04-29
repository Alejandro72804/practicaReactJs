import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoEmpty } from "./Message/TodoEmpty";
import { TodoError } from "./Message/TodoError";
import { TodoLoading } from "./Message/TodoLoading";

function AppUIController({
  completeTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searcherTodos,
  completeTodo,
  deleteTodo,
  loading,
  error,
}) {
  return (
    <div className="app-container">
      <TodoCounter completed={completeTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <TodoLoading />}

        {error && <TodoError />}

        {!loading && !searcherTodos.length && <TodoEmpty />}

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

export { AppUIController };
