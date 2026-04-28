function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li>
      {/* ✔ Check */}
      <span
        onClick={onComplete}
        className={`check ${completed ? "check--active" : ""}`}
      >
        ✔
      </span>

      {/* Texto */}
      <p className={completed ? "completed" : ""}>{text}</p>

      {/* 😊 / 😢 estado */}
      <span className="status">{completed ? "😊" : "😢"}</span>

      {/* ❌ eliminar */}
      <span onClick={onDelete} className="delete">
        ❌
      </span>
    </li>
  );
}

export { TodoItem };
