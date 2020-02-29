import React from "react";
import Logo from "../../Logo/Logo";
import style from "./NavHeader.module.css";
import Menu from "../../Menu/Menu";
import PropTypes from "prop-types";

const NavHeader = ({ isOpenMenu, toggleMenu }) => {
  return (
    <div>
      <div className={style.navigation}>
        <Logo />
        <button className={style.menu} onClick={toggleMenu}>
          {isOpenMenu ? (
            <i className="material-icons">close</i>
          ) : (
            <i className="material-icons">menu</i>
          )}
        </button>
        {document.documentElement.clientWidth > 768 && <Menu />}
      </div>
      {isOpenMenu && <Menu toggleMenu={toggleMenu} />}
    </div>
  );
};

NavHeader.propTypes = {
  isOpenMenu: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default NavHeader;
