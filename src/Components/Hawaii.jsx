import React from "react";
import images from "../main";

function Hawaii() {
  return (
    <div className="wrapper">
      <div className="wrap-left">
        <div className="card123">
          <img className="hawaii" src={images.hawaii} alt="" />
          <p className="april">10-24 апреля</p>
          <p className="big123"> Большое ущелье на острове Гавайи</p>
          <img className="arrow123" src={images.arrow} alt="" />
        </div>
      </div>
      <div className="wrap-right">
        <h1 className="tours2">Посмотрите все направления туров</h1>
        <h4 className="ocean">
          Берега океанов и дикие пляжи с редкими породами деревьев. Местная
          архитектура и первозданный вид дикой природы
        </h4>
        <button>Смотреть все</button>
      </div>
    </div>
  );
}

export default Hawaii;
