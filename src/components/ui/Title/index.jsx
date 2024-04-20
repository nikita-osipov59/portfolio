import React from "react";

import style from "./Style.module.scss";
export const Title = ({ title }) => {
  return (
    <p className={style.title}>
      <span className={`pink ${style.link}`}>#</span>
      {title}
    </p>
  );
};
