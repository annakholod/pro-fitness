import React from "react";
import style from "./Feedback.module.css";
import Modal from "../Modal/Modal";
import AddFeedback from "../AddFeedback/AddFeedback";
import PropTypes from "prop-types";

const Feedback = ({
  feedback,
  feedbackForRender,
  feedbackCounter,
  countFeedback,
  isOpenModalFeedback,
  toggleModalFeedback
}) => {
  return (
    <div className={style.feedback}>
      <div className={style.nameOverlay}>
        <p className={style.name}>Отзывы</p>
      </div>
      <ul className={style.feedbackList}>
        {feedbackForRender.map(el => (
          <li key={el.id} className={style.listItem}>
            <p className={style.personName}>{el.name}</p>
            <p className={style.body}>{el.body}</p>
            <p className={style.date}>{el.date}</p>
          </li>
        ))}
      </ul>
      <div className={style.btnOverlay}>
        <button
          type="button"
          name="btnPrev"
          className={`${style.btnNav} ${style.btnPrev}`}
          onClick={countFeedback}
          disabled={feedbackCounter === 0}
        >
          <i className={`material-icons ${style.btnIcon}`}>navigate_before</i>
        </button>
        <button
          type="button"
          name="btnNext"
          className={`${style.btnNav} ${style.btnNext}`}
          onClick={countFeedback}
          disabled={feedbackCounter === feedback.length - 3}
        >
          <i className={`material-icons ${style.btnIcon}`}>navigate_next</i>
        </button>
      </div>
      <button
        type="button"
        className={style.addFeedback}
        onClick={toggleModalFeedback}
      >
        Оставить отзыв
      </button>
      {isOpenModalFeedback && (
        <Modal toggleModal={toggleModalFeedback}>
          <AddFeedback />
        </Modal>
      )}
    </div>
  );
};

Feedback.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  feedbackForRender: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  feedbackCounter: PropTypes.number.isRequired,
  countFeedback: PropTypes.func.isRequired,
  isOpenModalFeedback: PropTypes.bool.isRequired,
  toggleModalFeedback: PropTypes.func.isRequired
};

export default Feedback;
