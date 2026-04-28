function TodoCounter({ completed, total }) {
  let message = "";
  let className = "counter";

  if (total === 0) {
    message = "📝 Listo para agregar nuevas tareas!";
    className += " counter--empty";
  } else if (completed === 0) {
    message = "🔥 ¡Vamos! Empieza con tu primera tarea";
    className += " counter--start";
  } else if (completed === total) {
    message = "🎉 ¡Felicitaciones! Completaste todas tus tareas";
    className += " counter--success";
  } else {
    message = `🚀 Llevas ${completed} de ${total} tareas completadas`;
    className += " counter--progress";
  }

  return <h1 className={className}>{message}</h1>;
}

export { TodoCounter };
