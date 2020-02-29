import React from "react";
import style from "./SectionFitness.module.css";
import Modal from "../Modal/Modal";
import SignUpFirstLesson from "../SignUpFirstLesson/SignUpFirstLesson";
import PropTypes from "prop-types";

const SectionFitness = ({ isOpenModalLesson, toggleModalLesson }) => {
  return (
    <div className={style.fitness}>
      <p className={style.name}>Фитнес центр</p>
      <p className={style.description}>
        Начните свой путь к здоровому образу жизни с помощью наших
        персонализированных программ
      </p>
      <button type="button" className={style.join} onClick={toggleModalLesson}>
        Записаться
      </button>
      {isOpenModalLesson && (
        <Modal toggleModal={toggleModalLesson}>
          <SignUpFirstLesson />
        </Modal>
      )}
    </div>
  );
};

SectionFitness.propTypes = {
  isOpenModalLesson: PropTypes.bool.isRequired,
  toggleModalLesson: PropTypes.func.isRequired
};

export default SectionFitness;
