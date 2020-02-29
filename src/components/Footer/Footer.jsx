import React from "react";
import style from "./Footer.module.css";
import Logo from "../Logo/Logo";
import contacts from "../../helpers/contacts.json";
import PropTypes from "prop-types";

const Footer = ({ scrollToTop }) => {
  return (
    <div className={style.footerOverlay}>
      <div className={style.footer}>
        <div className={style.about}>
          <Logo scrollToTop={scrollToTop} />
          <p className={style.text}>
            В клубе наилучшее оборудование и тренажеры всемирно известных
            брендов.
          </p>
        </div>
        <div className={style.contacts}>
          <p className={style.title}>Контакты</p>
          <p className={`${style.contactsInf} ${style.phone}`}>
            {contacts.phone}
          </p>
          <p className={`${style.contactsInf} ${style.email}`}>
            {contacts.email}
          </p>
          <p className={`${style.contactsInf} ${style.address}`}>
            {contacts.address}
          </p>
        </div>
        <div className={style.scheduleOverlay}>
          <p className={style.title}>График работы</p>
          <p className={`${style.contactsInf} ${style.schedule}`}>
            {contacts.schedule}
          </p>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  scrollToTop: PropTypes.func.isRequired
};

export default Footer;
