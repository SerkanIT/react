import React from "react";
import images from "../main";

function Feedback() {
  return (
    <div className="wwrapper">
      <div className="wwrap-left">
        <h2 className="feedbackwrite">Что пишут участники наших путешествий</h2>
        <p className="tourist">
          87% участников приходят по личной рекомендации от друзей. А каждый
          4-ый путешествует с нами больше двух раз!
        </p>
        <button className="read">Читать отзывы</button>
      </div>
      <div className="wwrap-right">
        <img src={images.girl} alt="" />
        <div className="feed">
          <p className="he">Отзыв</p>
          <p className="she">Елена Иванова</p>
          <p className="life">
            Пожалуй, это был самый лучший отпуск в моей жизни…
          </p>
          <img className="arrow12" src={images.arrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
