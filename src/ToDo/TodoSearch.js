import React from "react";
function TodoSearch() {
  const [serchValue, setSearchValue] = React.useState("");

  return (
    <input
      className="TodoSearch"
      placeholder="Buscar tarea..."
      value={serchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
