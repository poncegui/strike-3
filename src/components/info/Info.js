import "./Info.css";

import { Link } from "react-router-dom";
import React from "react";

const Info = () => {
  return (
    <div className="info-container">
      <div className="info">
        <Link className="Link" to="/experiencia">
          <h1 className="Link">Remitir respuesta oficial al siguiente teléfono</h1>
        </Link>
      
      </div>
    </div>
  );
};

export default Info;
