import React from "react";

import { Link } from "react-router-dom";
import ButtonStyle from "./Button.module.scss";
import Play from "../icons/Play";
import Click from "../icons/Click";
import Mail from "../icons/Mail";

export const Button = ({ icon, href, title }) => {
  switch (icon) {
    case "play":
      return (
        <Link to={href} target="_blank" className={ButtonStyle.button}>
          {title} <Play />
        </Link>
      );
    case "click":
      return (
        <Link to={href} target="_blank" className={ButtonStyle.button}>
          {title} <Click />
        </Link>
      );
    case "mail":
      return (
        <Link to={href} target="_blank" className={ButtonStyle.button}>
          {title} <Mail />
        </Link>
      );
    default:
      return (
        <Link to={href} target="_blank" className={ButtonStyle.button}>
          {title}
        </Link>
      );
  }
};
