import React from "react";
import images from "../main";

function Social() {
  return (
    <div className="program123">
      <h3 className="program">Подписывайтесь в соцсетях</h3>
      <div className="program-all">
        <div className="programs">
          <img src={images.youtube} alt="" />
          <img src={images.facebook} alt="" />
          <img src={images.twitter} alt="" />
          <img src={images.vk} alt="" />
        </div>
        <div className="cards">
          <div className="card1">
            <img src={images.vodoland} alt="" />
            <p className="raqam">02</p>
            <p className="location">Водопады Исландии</p>
            <img className="arrow" src={images.arrow} alt="" />
          </div>
          <div className="card2">
            <img src={images.dolomit} alt="" />
            <p className="raqam2">03</p>
            <p className="location2">Сказочные Доломиты</p>
            <img className="arrow2" src={images.arrow} alt="" />
          </div>
          <div className="card3">
            <img src={images.novgeri} alt="" />
            <p className="raqam3">04</p>
            <p className="location3">Неизведанная Норвегия</p>
            <img className="arrow3" src={images.arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
