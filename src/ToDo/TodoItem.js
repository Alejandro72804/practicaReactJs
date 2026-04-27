function TodoItem(props) {
  return (
    <li>
      <span>V</span>
      <p className={props.completed ? "completed" : ""}>{props.text}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
