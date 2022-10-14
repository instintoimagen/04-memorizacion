import "./App.css";
import Contador from "./components/Contador";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Memorización en React</h2>
      <hr />
      <h3>Teoría</h3>
      <h4>
        <a
          href="https://es.reactjs.org/docs/react-api.html#reactmemo"
          target="_bank"
          rel="noreferrer"
        >
          memo
        </a>
      </h4>
      <hr />
      <Contador />
    </div>
  );
}

export default App;
