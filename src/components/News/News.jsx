import React from "react";
import style from "./News.module.css";

const News = () => {
  return (
    <div className={style.newsOverlay}>
      <div className={style.news}>
        <p className={style.join}>Подписаться на новости</p>
        <p className={style.text}>
          Будьте в курсе событий. Подпишитесь на рассылку новостей обо всех
          интересующих вас событиях из мира спорта!
        </p>
        <form action="" className={style.form}>
          <input
            className={style.inputEmail}
            type="text"
            placeholder="Электронная почта"
          />
          <button type="button" className={style.btnJoin}>
            Подписаться
          </button>
        </form>
      </div>
    </div>
  );
};

export default News;
