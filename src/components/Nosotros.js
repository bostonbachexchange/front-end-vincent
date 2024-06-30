import React from 'react';
import './Nosotros.css';

const Nosotros = () => {
  return (
    <section className="nosotros">
      <div className="container">
        <h1 className="heading">Manifesto</h1>
        <p className="quote">"El teatro está muerto. Me voy a casa."</p>
        <p>
          Esto lo dijo, o lo pudo haber dicho –no lo sabemos de cierto– Vincent Jean Kompany cuando salió de su primera y única audición para el papel de Estragón de la compañía belga Les Têtes Ailleurs. Corría el año 2001. Días después y sumido en una aparente depresión –a consecuencia del rechazo– Kompany decidió probar suerte en las fuerzas básicas del Royal Sporting Club Anderlecht. Se le daba el fútbol. No tardó en hacerse notar; años después subiría al primer equipo.
        </p>
        <p>
          En el 2006, gracias a 5 brillantes temporadas en el Anderlecht, sería fichado por el Hamburgo, y en 2008 Kompany sería contratado por el Manchester City. Lo que sigue es historia conocida. Desde el 2004 juega en la selección de su país y tiene un sueldo aproximado de 10.4 millones de libras. Se sabe, por fuentes cercanas, que nunca abandonó la vocación actoral y a pesar de su atareada agenda futbolística, sigue, de vez en cuando, haciendo pequeños papeles en compañías independientes de teatro en Londres.
        </p>
        <p>
          Esta no es una historia de fracaso. O sí. Es la ambigüedad de lo que resulta significativo.
        </p>
        <button className="semblanzas-button">Semblanzas</button>
      </div>
    </section>
  );
};

export default Nosotros;
