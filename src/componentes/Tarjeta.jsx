import React from "react";
import "./../css/tarjeta.css";
import sintaxis from "./../pdf/sintaxis.pdf";

const Tarjeta = ({ tarjetas }) => {
  return (
    <div className="tarjeta-container">
      {tarjetas.map((tarjeta, index) => (
        <div key={index} className="tarjeta-card">
          <section className="tarjeta-section">
            <h2 className="title-card-tarjeta">{tarjeta.titulo}</h2>
            <div className="divider"></div>
            {tarjeta.contenido && (
              <p className="tarjeta-content">{tarjeta.contenido}</p>
            )}
            {tarjeta.mostrarBoton && (
              <a href={sintaxis} target="_blank" className="tarjeta-button">
                {tarjeta.textoBoton}
              </a>
            )}
          </section>
        </div>
      ))}
    </div>
  );
};

export default Tarjeta;
