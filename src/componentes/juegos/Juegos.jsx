import React from "react";
import Tarjeta from "../Tarjeta";

const Juegos = () => {
  const tarjetas = [
    {
      titulo: "Morfología",
      contenido: "",
    },
    {
      titulo: "Sintaxis",
      contenido: "",
      mostrarBoton: true,
      textoBoton: "Abrir PDF",
    },
    {
      titulo: "Ortografía",
      contenido: "",
    },
  ];

  const tarjetasDos = [
    {
      titulo: "Redacción",
      contenido: "",
    },
    {
      titulo: "Literatura",
      contenido: "",
    },
  ];

  return (
    <>
      <Tarjeta tarjetas={tarjetas} />
      <Tarjeta tarjetas={tarjetasDos} />
    </>
  );
};

export default Juegos;
