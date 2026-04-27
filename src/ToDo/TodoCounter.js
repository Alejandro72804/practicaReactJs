function TodoCounter(props) {
  return (
    <h1>
      {props.completed} de {props.total} tareas completadas
    </h1>
  );
}

export { TodoCounter };