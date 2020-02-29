import React, { Component } from "react";
import style from "./AddFeedback.module.css";

class AddFeedback extends Component {
  state = {
    userName: "",
    feedback: "",
    isInputNameEmpty: false,
    isInputFeedbackEmpty: false
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    const { userName, feedback } = this.state;
    this.setState({ [name]: value });
    if (userName) {
      this.setState({ isInputNameEmpty: false });
    }
    if (feedback) {
      this.setState({ isInputFeedbackEmpty: false });
    }
  };

  handleSubmit = evt => {
    const { userName, feedback } = this.state;
    evt.preventDefault();
    if (!userName) {
      this.setState({ isInputNameEmpty: true });
    }
    if (!feedback) {
      this.setState({ isInputFeedbackEmpty: true });
    }
    if (userName && feedback) {
      this.setState({
        userName: "",
        feedback: ""
      });
    }
  };

  render() {
    const {
      userName,
      feedback,
      isInputNameEmpty,
      isInputFeedbackEmpty
    } = this.state;

    return (
      <div className={style.formOverlay}>
        <p className={style.title}>Добавьте отзыв о нашем клубе</p>
        <form action="" className={style.form} onSubmit={this.handleSubmit}>
          <input
            className={style.input}
            type="text"
            value={userName}
            name="userName"
            id="userName"
            placeholder="Имя*"
            onChange={this.handleChange}
            style={{ border: isInputNameEmpty && "1px solid red" }}
          />
          <textarea
            className={style.textarea}
            value={feedback}
            name="feedback"
            id="feedback"
            cols="30"
            rows="10"
            placeholder="Отзыв*"
            onChange={this.handleChange}
            style={{ border: isInputFeedbackEmpty && "1px solid red" }}
          ></textarea>
          <button className={style.button} type="submit">
            Добавить отзыв
          </button>
        </form>
      </div>
    );
  }
}

export default AddFeedback;
