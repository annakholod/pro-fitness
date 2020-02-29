import React, { Component, createRef } from "react";
import style from "./Modal.module.css";
import PropTypes from "prop-types";

class Modal extends Component {
  backdropRef = createRef();

  UNSAFE_componentWillMount() {
    window.removeEventListener("keydown", this.handlePressKey);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handlePressKey);
  }

  handlePressKey = evt => {
    if (evt.code !== "Escape") return;
    this.props.toggleModal();
  };

  handleBackdropClick = evt => {
    const { current } = this.backdropRef;
    if (current && evt.target !== current) return;
    this.props.toggleModal();
  };

  render() {
    const { children, toggleModal } = this.props;
    console.log(children);

    return (
      <div
        className={style.overlay}
        role="button"
        tabIndex={0}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className={style.modal}>
          <button type="button" className={style.close} onClick={toggleModal}>
            <i className="material-icons">close</i>
          </button>
          {children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Modal;
