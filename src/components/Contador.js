import { useCallback, useState } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState("");

  // Se pasan a "useCallback" las funciones sumar y restar
  /* const sumar = () => setContador(contador + 1); */
  const sumar = useCallback(() => setContador(contador + 1), [contador]);
  /*  const restar = () => {
    if (contador > 0) setContador(contador - 1);
  }; */
  const restar = useCallback(() => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }, [contador]);

  const handleInput = (e) => setInput(e.target.value);

  return (
    <div>
      <h2>Counter Padre</h2>
      <h3>Usando {<mark>MEMORIZACIÓN</mark>}</h3>
      <div className="descripcion">
        <ul>
          <li>Se encarga de memorizar un componente</li>
          <li>Lo vuelve a memorizar al momento de que sus props cambian.</li>
          <li>Evita re-renderizados</li>
          <li>Usar cuando</li>
          <ul>
            <li>Tenemos muchos elementos renderizados en una lista</li>
            <li>Llamamos datos de APIs</li>
            <li>Un componente se vueve muy pesado</li>
            <li>Salen alertas de rendimiento en la consola</li>
          </ul>
        </ul>
      </div>
      <nav>
        <button className="btn-sumar" onClick={sumar}>
          +
        </button>
        <button className="btn-restar" onClick={restar}>
          -
        </button>
      </nav>
      <h4>Contador = {contador}</h4>
      <label htmlFor="varEstado">
        {`<`}input{`>`} para modificar {<em>variable de estado</em>}
      </label>
      <br />
      <input type="text" id="varEstado" onChange={handleInput} value={input} />
      <p>No modifica el componente hijo por usar useCallback</p>
      <ContadorHijo contador={contador} sumar={sumar} restar={restar} />
    </div>
  );
};

export default Contador;
