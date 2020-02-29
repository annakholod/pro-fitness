import React from "react";
import style from "./Trainers.module.css";
import trainers from "../../helpers/trainers.json";

const Trainers = () => {
  return (
    <div className={style.trainers}>
      <div className={style.nameOverlay}>
        <p className={style.name}>Тренеры</p>
      </div>
      <ul className={style.trainersList}>
        {trainers.map(el => (
          <li className={style.listItem} key={el.id}>
            <img className={style.trainerImg} src={el.image} alt={el.name} />
            <div className={style.imgOverlay}></div>
            <p className={style.trainerName}>{el.name}</p>
            <p className={style.trainerDescr}>{el.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trainers;
