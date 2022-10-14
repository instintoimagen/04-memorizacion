import { memo } from "react";

const ContadorHijo = () => {
  console.log("☺☻☺☻ - Hijo Counter se renderiza  - ☺☻☺☻");

  return (
    <div style={{ border: "thin solid #000", margin: "1rem", padding: "1rem" }}>
      <h4>Hijo del counter</h4>
    </div>
  );
};

export default memo(ContadorHijo);
