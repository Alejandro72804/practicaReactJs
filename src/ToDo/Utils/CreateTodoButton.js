function CreateTodoButton() {
  return (
    <button
      className="createTodoButton"
      onClick={(event) => {
        console.log("Le diste click al boton");
        console.log(event);
      }}
    >
      Agregar Tarea
    </button>
  );
}

export { CreateTodoButton };
