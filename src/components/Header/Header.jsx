import React from "react";
import HeaderContacts from "./HeaderContacts/HeaderContacts";
import NavHeader from "./NavHeader/NavHeader";

const Header = ({ isOpenMenu, toggleMenu }) => {
  return (
    <div>
      <HeaderContacts />
      <NavHeader isOpenMenu={isOpenMenu} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Header;
