import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Logo } from "@/components/ui/icons/Logo";
import headerStyle from "./Header.module.scss";
import { ROUTER_PATH } from "@/router/PATH";
import { Container } from "../Container";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const scroll = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else setSticky(false);
  };

  window.addEventListener("scroll", scroll);
  return (
    <header
      className={
        sticky
          ? [headerStyle.header, headerStyle.scroll].join(" ")
          : headerStyle.header
      }
    >
      <Container>
        <nav>
          <Link className={headerStyle.logo} to={ROUTER_PATH.HOME}>
            <Logo color="white" />
          </Link>
          <ul
            className={
              isOpen
                ? [headerStyle.list, headerStyle.active].join(" ")
                : headerStyle.list
            }
          >
            <li>
              <NavLink
                to="/"
                onClick={() =>
                  hero.scrollIntoView({ behavior: "smooth", block: "center" })
                }
              >
                <span className="pink">#</span>
                Главная
              </NavLink>
            </li>
            <li>
              <Link
                to={ROUTER_PATH.HOME}
                onClick={() => projects.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="pink">#</span>Проекты
              </Link>
            </li>
            <li>
              <NavLink to={ROUTER_PATH.ABOUT}>
                <span className="pink">#</span>Обо-мне
              </NavLink>
            </li>
            <li>
              <Link
                to={ROUTER_PATH.HOME}
                onClick={() => contacts.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="pink">#</span>Контакты
              </Link>
            </li>
          </ul>
          <div className={headerStyle.burger} onClick={() => setOpen(!isOpen)}>
            {isOpen ? (
              <X className={headerStyle.burgerClose} size={38} />
            ) : (
              <Menu className={headerStyle.burgerOpen} size={38} />
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
};
