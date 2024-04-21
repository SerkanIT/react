import React from "react";
import images from "../main";

function Process() {
  return (
    <div>
      <h1 className="open">Открой для себя Новую Ирландию</h1>
      <h3 className="ivan">
        Авторские туры по экзотическим уголкам от Ивана Иванова
      </h3>
      <div className="hehehe">
        <button className="btn">Оставить заявку</button>
        <div className="playBtn">
          <img src={images.playbutton} alt="" />
          <h4 className="year">Посмотрите видео-отчет 2018-2019</h4>
        </div>
      </div>
    </div>
  );
}

export default Process;
