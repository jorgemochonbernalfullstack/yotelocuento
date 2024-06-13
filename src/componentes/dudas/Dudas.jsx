import React, { useState } from "react";
import "./../../css/dudas.css";
import Tarjeta from "../Tarjeta";
import Formulario from "../formularios/Formulario";

const Dudas = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const tarjetas = [
    {
      titulo: "Si eres estudiante...",
      contenido:
        "¿Buscas mejorar tu rendimiento académico y alcanzar tus objetivos educativos de manera personalizada? ¡Estás en el lugar indicado! Nuestras clases particulares están diseñadas para ofrecerte un acompañamiento individualizado, adaptado a tus necesidades y ritmo de aprendizaje. Con un enfoque centrado en ti, nuestros experimentados profesores te guiarán paso a paso, reforzando tus habilidades y superando tus desafíos académicos. ¡Potencia tu éxito académico y alcanza tu máximo potencial con nuestras clases particulares!",
      boton: true,
      textoBoton: "Más información",
    },
    {
      titulo: "Si eres profesor/a...",
      contenido:
        "¿Eres un educador comprometido con la excelencia académica y la innovación pedagógica? Descubre nuestra exclusiva colección de recursos didácticos diseñados para transformar tu enseñanza y enriquecer la experiencia educativa de tus estudiantes. Desde materiales interactivos y multimedia hasta actividades creativas y evaluaciones adaptativas, nuestros recursos están creados por expertos en educación para brindarte herramientas efectivas y actualizadas que harán que tus clases destaquen. ¡Potencia tu enseñanza y cautiva a tus estudiantes con nuestros recursos didácticos de calidad superior!",
      boton: true,
      textoBoton: "Explorar recursos",
    },
  ];

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Tarjeta tarjetas={tarjetas} />
      <div className="button-container">
        <button className="register-button" onClick={openModal}>
          Registrarse
        </button>
      </div>
      {modalVisible && <Formulario onClose={closeModal} />}
    </>
  );
};

export default Dudas;
