import { Link } from "react-router-dom";
import ButtonStyle from "./Button.module.scss";
import Play from "@/components/ui/icons/Play";
import Click from "@/components/ui/icons/Click";
import Mail from "@/components/ui/icons/Mail";
import User from "@/components/ui/icons/User";

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
    case "user":
      return (
        <Link to={href} className={ButtonStyle.button}>
          {title} <User />
        </Link>
      );
    default:
      return (
        <Link to={href} className={ButtonStyle.button}>
          {title}
        </Link>
      );
  }
};
