import React from "react";
import style from "./Map.module.css";

const Map = () => {
  return (
    <iframe
      title="map"
      className={style.map}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.194521878133!2d30.25075851573426!3d50.530552379486465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b322f42cdb569%3A0xed27ef6c22ea28a!2z0YPQuy4g0J_QvtC70YLQsNCy0YHQutCw0Y8sIDMzLCDQmNGA0L_QtdC90YwsINCa0LjQtdCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDA4MjAw!5e0!3m2!1sru!2sua!4v1582376655375!5m2!1sru!2sua"
    ></iframe>
  );
};

export default Map;
