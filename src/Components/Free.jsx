import React from "react";

function Free() {
  return (
    <div className="wrap-all">
      <div className="wrapper2">
        <div className="wrap-lefts">
          <h2 className="free">Оставьте заявку на бесплатную консультацию</h2>
          <p className="callagain">Мы перезвоним вам в ближайшее время</p>
        </div>
        <div className="wrap-rights">
          <input className="name" type="text" placeholder="Ваше имя" />
          <input
            className="name2"
            type="number"
            placeholder="+7 (___)___-__-__"
          />
          <button className="share">Отправить заявку</button>
          
          <div className="click">
            Нажимая кнопку, вы даёте согласие на{" "}
            <span className="orange">обработку персональных данных</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Free;
