import React from "react";

function TodoEmpty() {
  return (
    <div className="empty-container">
      <p className="empty-icon">📝</p>
      <p className="empty-title">Aún no tienes tareas</p>
      <p className="empty-text">
        ¡Empieza creando tu primer ToDo y organiza tu día!
      </p>
    </div>
  );
}

export { TodoEmpty };