import React from "react";
import Tarjeta from "../Tarjeta";

const About = () => {
  const tarjetas = [
    {
      titulo: "Bienvenidos a Yo te lo cuento",
      contenido:
        "Donde las historias cobran vida y la enseñanza de la lengua y la literatura se convierte en una aventura fascinante. Soy Alba Urbano, una entusiasta de la lengua española y la narrativa. Con años de experiencia en la enseñanza, hemos observado cómo el poder de las historias puede transformar el aprendizaje, haciéndolo más accesible, dinámico y memorable. En Yo te lo cuento, creemos que cada lección es una oportunidad para viajar a través de relatos envolventes que no solo educan, sino que también inspiran.",
    },
    {
      titulo: "¿Qué hacemos?",
      contenido:
        "Relatos Cortos como Herramientas Educativas: Utilizamos historias breves y poderosas para enseñar conceptos clave de la lengua y la literatura española, facilitando una comprensión más profunda y atractiva. - Vídeos Dinámicos y Atractivos: Nuestros vídeos están diseñados para captar la atención y fomentar el amor por el aprendizaje, utilizando un lenguaje claro y accesible. - Metodología Interactiva: Fomentamos la participación activa de los estudiantes, invitándolos a sumergirse en las narrativas y a interactuar con el contenido de maneras significativas.",
    },
    {
      titulo: "¿Por qué Yo te lo cuento?",
      contenido:
        "El nombre de nuestro proyecto refleja nuestra esencia: una enseñanza cercana y personalizada, donde Alba Urbano comparte su pasión por la lengua a través de relatos cuidadosamente seleccionados y explicados. Cada 'yo te lo cuento' es una invitación a descubrir, aprender y disfrutar del maravilloso mundo de la literatura. En 'Yo te lo cuento', no solo enseñamos, sino que también contamos historias que marcan. Creemos que el aprendizaje debe ser una experiencia enriquecedora y emocional, y estamos comprometidos a hacer que cada lección sea un viaje memorable. Esperamos que disfrutes de este viaje con nosotros. ¡Bienvenido a 'Yo te lo cuento': donde cada historia cuenta!",
    },
  ];
  return <Tarjeta tarjetas={tarjetas} />;
};

export default About;
