import React from "react";
import "./../../css/formulario.css";

const Formulario = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Ingresa tus datos de pago</h2>
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" required />
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" required />
          <label htmlFor="tarjeta">Número de tarjeta:</label>
          <input type="text" id="tarjeta" name="tarjeta" required />
          <label htmlFor="codigo">Código de seguridad:</label>
          <input type="text" id="codigo" name="codigo" required />
          <label htmlFor="fecha">Fecha de caducidad:</label>
          <input type="text" id="fecha" name="fecha" required />
          <button type="submit">Pagar</button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
