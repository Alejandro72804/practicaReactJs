import React from "react";

function TodoError() {
  return (
    <div className="error-container">
      <p className="error-icon">⚠️</p>
      <p className="error-title">Ups... algo salió mal</p>
      <p className="error-text">
        No pudimos cargar tus tareas. Intenta nuevamente.
      </p>
    </div>
  );
}

export { TodoError };
