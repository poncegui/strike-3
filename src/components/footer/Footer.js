import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>CONTACTO</h1>
      </div>
      <nav className="footer-contact">
        
        <a
          className="mail"
          href="mailto:marta.ponceg@gmail.com"
          target="_blank"
          title="e-mail Marta Ponce de León"
        >
                (+34) 722 177 717
        </a>
        {/* <a
          className="tel"
          href="tel:+34722177717"
          target="_blank"
          title="teléfono Marta Ponce de León"
        >
          (+34) 722 177 717
        </a> */}

      <div className="footer-sns">
      
          <a
            href="https://www.instagram.com/poncegui/?hl=es"
            target="_blank"
            rel="noreferrer"
          >
<i class="fa-brands fa-square-instagram"></i>
          </a>
          
  
      </div>
      </nav>
    </footer>
  );
};

export default Footer;
