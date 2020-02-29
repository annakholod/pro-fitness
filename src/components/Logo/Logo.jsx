import React from "react";
import style from "./Logo.module.css";
import PropTypes from "prop-types";

const Logo = ({ scrollToTop }) => {
  return (
    <div>
      <div className={style.logo} onClick={scrollToTop}>
        <p className={style.name}>
          Pro<span className={style.nameDecor}>Fitness</span>
        </p>
        <p className={style.description}>Фитнес центр</p>
      </div>
    </div>
  );
};

Logo.defaultProps = {
  scrollToTop: () => {}
};

Logo.propTypes = {
  scrollToTop: PropTypes.func
};

export default Logo;
