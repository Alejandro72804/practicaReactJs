import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoEmpty } from "./Message/TodoEmpty";
import { TodoError } from "./Message/TodoError";
import { TodoLoading } from "./Message/TodoLoading";
import { TodoContext } from "./TodoContex";

function AppUIController() {
  return (
    <div className="app-container">
      <TodoCounter />
      {({ loading, error, searcherTodos, completeTodo, deleteTodo }) => (
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
      )}
      <TodoSearch />
      <TodoContext.Consumer></TodoContext.Consumer>
      <CreateTodoButton />
    </div>
  );
}

export { AppUIController };
