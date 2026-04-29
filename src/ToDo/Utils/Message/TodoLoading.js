import React from "react";

function TodoLoading() {
  return (
    <div className="loading-container">
      <p className="loading-text">⏳ Cargando tus tareas...</p>

      <div className="loading-skeleton">
        <div className="skeleton-item"></div>
        <div className="skeleton-item"></div>
        <div className="skeleton-item"></div>
      </div>
    </div>
  );
}

export { TodoLoading };