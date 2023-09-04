import "./Cover.css";

import React from "react";
import coverVideo from "../../img/batman.jpg";

const Cover = () => {
  return (
    <div className="cover-container">
      {/* <video className="video" src={coverVideo} autoPlay loop muted /> */}
      <img className="video" src={coverVideo}  />
      <h3>@poncegui</h3>
      <p>Capricornio | Especialista en pistos </p>
    </div>
  );
};

export default Cover;
