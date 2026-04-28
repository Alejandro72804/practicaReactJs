function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li>
      <span
        onClick={onComplete}
        className={`check ${completed ? "check--active" : ""}`}
      >
        ✔
      </span>

      <p className={completed ? "completed" : ""}>{text}</p>

      <span className="status">{completed ? "😊" : "😢"}</span>

      <span onClick={onDelete} className="delete">
        ❌
      </span>
    </li>
  );
}

export { TodoItem };
