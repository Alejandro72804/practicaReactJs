function TodoItem({ txt }) {
  return (
    <li>
      <span>V</span>
      <p>{txt}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
