import React from "react";
import style from "./Menu.module.css";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

const Menu = ({ toggleMenu }) => {
  return (
    <div className={style.menu}>
      <Link
        className={style.menuLink}
        to="sectionAbout"
        spy={true}
        smooth={true}
        duration={400}
      >
        <p className={style.menuItem} onClick={toggleMenu}>
          О нас
        </p>
      </Link>
      <Link
        className={style.menuLink}
        to="services"
        spy={true}
        smooth={true}
        duration={400}
      >
        <p className={style.menuItem} onClick={toggleMenu}>
          Тренировки
        </p>
      </Link>
      <Link
        className={style.menuLink}
        to="feedback"
        spy={true}
        smooth={true}
        duration={400}
      >
        <p className={style.menuItem} onClick={toggleMenu}>
          Отзывы
        </p>
      </Link>
      <Link
        className={style.menuLink}
        to="contacts"
        spy={true}
        smooth={true}
        duration={400}
      >
        <p className={style.menuItem} onClick={toggleMenu}>
          Контакты
        </p>
      </Link>
    </div>
  );
};

Menu.defaultProps = {
  toggleMenu: () => {}
};

Menu.propTypes = {
  toggleMenu: PropTypes.func
};

export default Menu;
