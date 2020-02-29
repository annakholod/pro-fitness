import React from "react";
import style from "./FirstLesson.module.css";
import Modal from "../Modal/Modal";
import SignUpFirstLesson from "../SignUpFirstLesson/SignUpFirstLesson";
import PropTypes from "prop-types";

const FirstLesson = ({ isOpenModalLesson, toggleModalLesson }) => {
  return (
    <div className={style.overlay}>
      <p className={style.title}>Первое занятие у нас бесплатно</p>
      <button
        type="button"
        className={style.button}
        onClick={toggleModalLesson}
      >
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

FirstLesson.propTypes = {
  isOpenModalLesson: PropTypes.bool.isRequired,
  toggleModalLesson: PropTypes.func.isRequired
};

export default FirstLesson;
