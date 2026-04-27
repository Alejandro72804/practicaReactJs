import React from "react";
function TodoSearch(props) {
  return (
    <input
      className="TodoSearch"
      placeholder="Buscar tarea..."
      value={props.searchValue}
      onChange={(event) => {
        props.setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
