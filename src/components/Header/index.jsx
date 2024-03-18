import React from "react";
import { Link, NavLink } from "react-router-dom";

import { Logo } from "../ui/Logo";
import headerStyle from "./Header.module.scss";

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <nav>
        <Link>
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
            <Link>
              <span className="pink">#</span>Проекты
            </Link>
          </li>
          <li>
            <Link>
              <span className="pink">#</span>Обо-мне
            </Link>
          </li>
          <li>
            <Link>
              <span className="pink">#</span>Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
