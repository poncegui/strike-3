import "./tecnologies.css";

import css from "../../img/alpinismo.png";
import git from "../../img/vieja.png";
import github from "../../img/si.png";
import html from "../../img/uva.png";
import jira from "../../img/pregunta.png";
import js from "../../img/cerveza.png";
import node from "../../img/sonrisa.png";
import react from "../../img/policia.png";
import sql from "../../img/no.png";
import { useState } from "react";

const Tecno = () => {

  const [devTool, SetdevTool] = useState("cualidades | Strike #3");
  const [btnClassHtml, SetbtnClassHtml] = useState("icons");
  const [btnClassReact, SetbtnClassReact] = useState("icons");
  const [btnClassSql, SetbtnClassSql] = useState("icons");
  const [btnClassJs, SetbtnClassJs] = useState("icons");
  const [btnClassNode, SetbtnClassNode] = useState("icons");
  const [btnClassGit, SetbtnClassGit] = useState("icons");
  const [btnClassCss, SetbtnClassCss] = useState("icons");
  const [btnClassGithub, SetbtnClassGithub] = useState("icons");
  const [btnClassJira, SetbtnClassJira] = useState("icons");



  const handleClassJira = () => {

    SetbtnClassJira(!btnClassJira);

  };
  const handleClassReact = () => {
    SetbtnClassReact(!btnClassReact);

  };
  const handleClassNode = () => {
    SetbtnClassNode(!btnClassNode);

  };

  const handleClassGithub = () => {
    SetbtnClassGithub(!btnClassGithub);

  };
  const handleClassHtml= () => {
    SetbtnClassHtml(!btnClassHtml);

  };
  const handleClassGit= () => {
    SetbtnClassGit(!btnClassGit);

  };
  const handleClassJs= () => {
    SetbtnClassJs(!btnClassJs);

  };

  const handleClassSql= () => {
    SetbtnClassSql(!btnClassSql);

  };

  const handleClassCss= () => {
    SetbtnClassCss(!btnClassCss);

  };



let toggleClassReact = btnClassReact? "clicked" : "";
let toggleClassJs = btnClassJs? "clicked" : "icons"; 
let toggleClassNode = btnClassNode? "clicked" : "icons"; 
let toggleClassGit = btnClassGit? "clicked" : "icons"; 
let toggleClassSql = btnClassSql ? "clicked" : "icons"; 
let toggleClassHtml = btnClassHtml ? "clicked" : "icons"; 
let toggleClassCss = btnClassCss? "clicked" : "icons"; 
let toggleClassGithub = btnClassGithub ? "clicked" : "icons"; 
let toggleClassJira = btnClassJira? "clicked" : "icons"; 

  const selectReact= () => {
    SetdevTool("Antecedentes penales expirados");
    handleClassReact();
  };

  const selectJs= () => {
    SetdevTool("Amante de la cerveza");
    handleClassJs();
  };
  const selectNode= () => {
    SetdevTool("Simpática y carismática");
    handleClassNode();
  };
  const selectSql= () => {
    SetdevTool("Respuesta incorrecta, con esta acción el arrepentimiento te perseguirá toda tu vida");
    handleClassSql();
  };
  const selectGit= () => {
    SetdevTool("Madurita sexy");
    handleClassGit();
  };
  const selectHtml= () => {
    SetdevTool("Manchega de pura cepa, los mejores vinos garantizados");
    handleClassHtml();
  };
  const selectCss= () => {
    SetdevTool("No es bollera normativa en contra de tus prejucios");
    handleClassCss();
  };
  const selectGithub= () => {
    SetdevTool("Obvio, no podría decir que no, es más, lo estoy  deseando fervientemente");
    handleClassGithub();
  };
  const selectJira= () => {
        SetdevTool("¿Tomarás unos vinos con la maravillosa poncegui por Legazpi?");
    handleClassJira();
  };



  return (
    <>
      <div className="tecno-main">
        <div className="title">
          <h3>{devTool}</h3>
        </div>

        <div className="gridContainer">

          <div className={`icons ${toggleClassReact}`}>
            <img src={react} alt="logo react" onClick={selectReact}/>
          </div>

          <div className={`icons ${toggleClassJs}`}>
            <img src={js} alt="logo javaScript" onClick={selectJs}/>
          </div>

          <div className={`icons ${toggleClassNode}`}>
            <img src={node} alt="logo node"onClick={selectNode}/> 
          </div>

          <div className={`icons ${toggleClassGit}`}>
            <img src={git} alt="logo git" onClick={selectGit}/>
          </div>

          <div className={`icons ${toggleClassHtml}`}>
            <img src={html} alt="logo html" onClick={selectHtml}/>
          </div>

          <div className={`icons ${toggleClassCss}`}>
            <img src={css} alt="logo css" onClick={selectCss}/>
            </div>

          <div className={`icons ${toggleClassJira}`}>
            <img src={jira} alt="logo jira" onClick={selectJira}/> 
          </div>
          
          <div className={`icons ${toggleClassGithub}`}>
            <img src={github} alt="logo github" onClick={selectGithub}/>
          </div>

          <div className={`icons ${toggleClassSql}`}>
            <img src={sql} alt="logo sql" onClick={selectSql}/>
          </div>
          </div>
         </div>
    </>
  );
};

export default Tecno;
