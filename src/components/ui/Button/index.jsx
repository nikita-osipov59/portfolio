import React from "react";

import { Link } from "react-router-dom";
import ButtonStyle from "./Button.module.scss";

export const Button = ({ href, title }) => {
  return (
    <Link to={href} target="_blank" className={ButtonStyle.button}>
      {title}
    </Link>
  );
};
