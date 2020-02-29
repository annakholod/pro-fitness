import React from "react";
import style from "./HeaderContacts.module.css";
import contacts from "../../../helpers/contacts.json";

const HeaderContacts = () => {
  return (
    <div className={style.topHeader}>
      <div className={style.overlay}>
        <div className={style.contacts}>
          <p className={`${style.contactsInf} ${style.phone}`}>
            {contacts.phone}
          </p>
          <p className={`${style.contactsInf} ${style.email}`}>
            {contacts.email}
          </p>
          <p className={`${style.contactsInf} ${style.address}`}>
            {contacts.address}
          </p>
          <p className={`${style.contactsInf} ${style.schedule}`}>
            {contacts.schedule}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderContacts;
