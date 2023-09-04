import "./About.css";

import React from "react";

const About = () => {
  return (
    <div id="sobre-mi" className="about-container">
      <div className="about-desc">
        <h3>Sobre mí</h3>
        <p>
 Capricornio con luna en cáncer, poncegui es una chica excepcional capaz de tirar las cartas e inventarse la mejor historia del mundo, 
 conocedora de los mejores bares de Legazpi, es capaz de que cenes con dos vinos y muchas tapas veganas en un entorno gris de barrio abrazable.
        </p>
      </div>
      <div className="about-img">
        {/* <img
          src={photo}
          alt="foto perfil"
        /> */}
      </div>
    </div>
  );
};

export default About;
