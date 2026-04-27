import logo from "./platzi.webp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoItem txt="Primera funcion de React" />
      <TodoItem txt="Segunda funcion de React" />
      <TodoCounter completed={2} total={2} />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos React
        </a>
      </header>
    </div>
  );
}

function TodoItem({ txt }) {
  return (
    <li>
      <span>V</span>
      <p>{txt}</p>
      <span>X</span>
    </li>
  );
}

function TodoCounter(props) {
  return (
    <p>
      {props.completed} de {props.total} tareas completadas
    </p>
  );
}

export default App;
