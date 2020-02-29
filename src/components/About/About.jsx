import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.nameOverlay}>
        <p className={style.name}>О нас</p>
      </div>
      <p className={style.description}>
        Мы не исповедуем фитнес, как своего рода фетиш! Мы четко знаем, что
        наличие пластиковой карточки нашего клуба не добавит Вам ни уверенности
        в себе, ни избавит чудным образом от каких-либо замечаний к собственному
        внешнему виду!
      </p>
      <ul className={style.advantages}>
        <li className={`${style.listItem} ${style.equipment}`}>
          <p className={style.listItemDescr}>Эксклюзивное новое оборудование</p>
        </li>
        <li className={`${style.listItem} ${style.approach}`}>
          <p className={style.listItemDescr}>
            Индивидуальный подход к тренировкам
          </p>
        </li>
        <li className={`${style.listItem} ${style.sale}`}>
          <p className={style.listItemDescr}>
            Скидочные программы для постоянных клиентов
          </p>
        </li>
        <li className={`${style.listItem} ${style.inventory}`}>
          <p className={style.listItemDescr}>
            Мы предоставляем свой спортинвентарье
          </p>
        </li>
      </ul>
    </div>
  );
};

export default About;
