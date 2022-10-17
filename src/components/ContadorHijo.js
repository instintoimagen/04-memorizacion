import { memo, useMemo } from "react";

const ContadorHijo = ({ contador, sumar, restar }) => {
  /* superNumero, cálculo pesado sin useMemo: 
  let superNumero = 0;
  for (let i = 0; i < 1000000000; i++) {
    superNumero++;
  } */

  // Función superNumero, con useMemo para memorizar su resultado, guarda el "return".
  const superNumero = useMemo(() => {
    let numero = 0;
    for (let i = 0; i < 1000000000; i++) {
      numero++;
    }

    return numero;
  }, []);
  // 👆 No necesita especificar el arreglo de dependencias al no estar manipulando una variable de estado.

  console.log("☺☻☺☻ - Hijo Counter se renderiza  - ☺☻☺☻");

  return (
    <>
      <div className="contadorHijo">
        <h3>Hijo del counter</h3>
        <nav>
          <button className="btn-sumar" onClick={sumar}>
            +
          </button>
          <button className="btn-restar" onClick={restar}>
            -
          </button>
        </nav>
        <h5>Contador pasa su valor por "props": {contador}</h5>
        <hr />
        <h4>Uso de useCallback</h4>
        <span>
          Cuando tenemos un componente que queramos{" "}
          {
            <em>
              <strong>memorizar</strong>
            </em>
          }{" "}
          usamos "react" {<strong>memo()</strong>} en la definición del
          componente (el archivo .js) y listo!. <br />
          ⚠️{<strong>Muy Importante:</strong>} si ese componente va a recibir
          como propiedades funciones, dichas funciones las tenemos que memorizar
          con el hook {<strong>useCallback</strong>}, para que cada vez que el
          componente padre (dónde están esas funciones), se vuelva a renderizar
          (ya sea porque se modificaron las var de estado, o sus propiedades),
          las funciones que trabajan en el componente hijo no hagan que éste se
          vuelva a renderizar innecesariamente.
        </span>
        <hr />
        <div style={{ textAlign: "left" }}>
          <ul>
            <li>
              Memoriza una función, para no volverla a definir en cada render.
            </li>
            <li>
              Úsalo siempre que se pase una función como {<strong>prop</strong>}{" "}
              a un componente memorizado.
            </li>
            <li>
              Úsalo siempre que se pase una función como parámetro de un efecto.
            </li>
          </ul>
        </div>
        <h4>
          <a
            href="https://es.reactjs.org/docs/hooks-reference.html#usecallback"
            target="_bank"
            rel="noreferrer"
          >
            Doc useCallback
          </a>
          <hr />
        </h4>
        <h3>Uso del useMemo</h3>
        <span>
          Así como useCallback trabaja memorizando una función,{" "}
          {<strong>useMemo</strong>} memoriza el {<em>resuldado</em>} de una
          función.
        </span>
        <div className="descripcion" style={{ textAlign: "center" }}>
          <h3>Cálculo pesado</h3>
          <h4>{superNumero}</h4>
        </div>
        <div style={{ textAlign: "left" }}>
          <ul>
            <li>
              Memoriza un valor calculado, es decir, el resultado de una
              función.
            </li>
            <li>Genera propiedades computadas.</li>
            <li>
              Úsalo en procesos pesados para mejorar el rendimiento, al no
              volver a procesarlos.
            </li>
          </ul>
        </div>
        <h4>
          <a
            href="https://es.reactjs.org/docs/hooks-reference.html#usememo"
            target="_bank"
            rel="noreferrer"
          >
            Doc useMemo
          </a>
        </h4>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default memo(ContadorHijo);
