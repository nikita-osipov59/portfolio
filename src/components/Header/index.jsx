import React from "react";
import { Link, NavLink } from "react-router-dom";

import { Logo } from "../ui/icons/Logo";
import headerStyle from "./Header.module.scss";
import { ROUTER_PATH } from "../../router/PATH";

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <nav>
        <Link to={ROUTER_PATH.HOME}>
          <Logo color="white" />
        </Link>
        <ul>
          <li>
            <NavLink to="/">
              <span className="pink">#</span>
              Главная
            </NavLink>
          </li>
          <li>
            <Link
              onClick={() => projects.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="pink">#</span>Проекты
            </Link>
          </li>
          <li>
            <Link onClick={() => about.scrollIntoView({ behavior: "smooth" })}>
              <span className="pink">#</span>Обо-мне
            </Link>
          </li>
          <li>
            <Link
              onClick={() => contacts.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="pink">#</span>Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
