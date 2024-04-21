import React from "react";
import images from "../main";

function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <div className="foot-left">
          <img className="logotype" src={images.dark} alt="" />
          <p className="politica">Политика конфиденциальности</p>
          <p className="accept">Соглашение на обработку персональных данных</p>
        </div>
        <div className="foot-right">
            <img src={images.media} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
