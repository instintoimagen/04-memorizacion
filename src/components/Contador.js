import { useState } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    if (contador > 0) setContador(contador - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <h4>Usando memorización</h4>
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
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h4>{contador}</h4>
      <ContadorHijo />
    </div>
  );
};

export default Contador;
