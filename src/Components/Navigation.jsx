import React, { Fragment } from "react";
import images from "../main";

function Navigation() {
  return (
    <Fragment>
      <nav>
        <img className="images" src={images.logo} alt="" />
        <ul>
          <li className="tours">Все туры</li>
          <li className="feedbacks">Отзывы</li>
          <li className="contacts">Контакты</li>
        </ul>
        <img src={images.burger} alt="" />
      </nav>
    </Fragment>
  );
}

export default Navigation;
