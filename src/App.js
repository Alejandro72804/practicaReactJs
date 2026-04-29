import React from "react";
import "./ToDo/Utils/Style/TodoStyle.css";
import { AppUIController, TodoProvider } from "./ToDo";

function App() {
  return (
    <TodoProvider>
      <AppUIController/>
    </TodoProvider>
  );
}

export default App;
