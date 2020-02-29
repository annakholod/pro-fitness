import React, { Component } from "react";
import style from "./SignUpFirstLesson.module.css";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

class SignUpFirstLesson extends Component {
  state = {
    userName: "",
    phone: "",
    date: null,
    time: null,
    isInputNameEmpty: false,
    isInputPhoneEmpty: false,
    isInputDateEmpty: false,
    isInputTimeEmpty: false
  };

  changeDate = date => {
    this.setState({ date });
    if (date) {
      this.setState({ isInputDateEmpty: false });
    }
  };

  changeTime = time => {
    this.setState({ time });
    if (time) {
      this.setState({ isInputTimeEmpty: false });
    }
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    const { userName, phone } = this.state;
    this.setState({ [name]: value });
    if (userName) {
      this.setState({ isInputNameEmpty: false });
    }
    if (phone) {
      this.setState({ isInputPhoneEmpty: false });
    }
  };

  handleSubmit = evt => {
    const { userName, phone, date, time } = this.state;
    evt.preventDefault();
    if (!userName) {
      this.setState({ isInputNameEmpty: true });
    }
    if (!phone) {
      this.setState({ isInputPhoneEmpty: true });
    }
    if (!date) {
      this.setState({ isInputDateEmpty: true });
    }
    if (!time) {
      this.setState({ isInputTimeEmpty: true });
    }
    if (userName && phone && date && time) {
      this.setState({
        userName: "",
        phone: "",
        date: null,
        time: null
      });
    }
  };

  render() {
    const {
      userName,
      phone,
      date,
      time,
      isInputNameEmpty,
      isInputPhoneEmpty,
      isInputDateEmpty,
      isInputTimeEmpty
    } = this.state;

    return (
      <div className={style.formOverlay}>
        <p className={style.title}>Запишись на пробное бесплатное занятие</p>
        <form method="" className={style.form} onSubmit={this.handleSubmit}>
          <input
            className={style.inputName}
            type="text"
            name="userName"
            value={userName}
            placeholder="Имя*"
            onChange={this.handleChange}
            style={{ border: isInputNameEmpty && "1px solid red" }}
          />
          <input
            className={style.inputName}
            type="text"
            name="phone"
            value={phone}
            placeholder="Телефон*"
            onChange={this.handleChange}
            style={{ border: isInputPhoneEmpty && "1px solid red" }}
          />
          <MuiPickersUtilsProvider
            utils={DateFnsUtils}
            className={style.pickerOverlay}
          >
            <div
              className={style.pickerWrapper}
              style={{ borderBottom: isInputDateEmpty && "1px solid red" }}
            >
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                disablePast
                format="MM/dd/yyyy"
                label="Дата*"
                value={date}
                onChange={this.changeDate}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
                InputProps={{
                  className: style.picker
                }}
              />
            </div>
            <div
              className={style.pickerWrapper}
              style={{ borderBottom: isInputTimeEmpty && "1px solid red" }}
            >
              <KeyboardTimePicker
                disableToolbar
                variant="inline"
                label="Время*"
                value={time}
                onChange={this.changeTime}
                KeyboardButtonProps={{
                  "aria-label": "change time"
                }}
                InputProps={{
                  className: style.picker
                }}
              />
            </div>
          </MuiPickersUtilsProvider>
          <button type="submit" className={style.button}>
            Записаться
          </button>
        </form>
      </div>
    );
  }
}

export default SignUpFirstLesson;
