import React from "react";
import style from "./Services.module.css";
import services from "../../helpers/services.json";

const Services = () => {
  return (
    <div className={style.services}>
      <div className={style.nameOverlay}>
        <p className={style.name}>Тренировки</p>
      </div>
      <ul className={style.servicesList}>
        {services.map(el => (
          <li className={style.listItem} key={el.title}>
            <img className={style.listItemImg} src={el.image} alt={el.title} />
            <div className={style.description}>
              <p className={style.listItemTitle}>{el.title}</p>
              <p className={style.price}>
                Разовое занятие - {el.oneLesson} грн
              </p>
              <p className={style.subscription}>
                Абонемент на месяц - {el.subscription} грн
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
