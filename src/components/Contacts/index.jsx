import React from "react";

import { Git } from "../ui/icons/Git";
import { Vk } from "../ui/icons/Vk";
import { Link } from "react-router-dom";
import { Tg } from "../ui/icons/Tg";
import ContactsStyle from "./Contacts.module.scss";
import { Hh } from "../ui/icons/Hh";

const Contacts = () => {
  return (
    <section className={ContactsStyle.contacts}>
      <p className={ContactsStyle.title}>
        <span className="pink">#</span>
        Контакты
      </p>
      <div className={ContactsStyle.wrapper}>
        <p>Открыт для предложений, сотрудничества и тд.</p>
        <ul className={ContactsStyle.description}>
          <li>
            <Link
              to="https://github.com/nikita-osipov59"
              className={ContactsStyle.link}
              target="_blank"
            >
              <Git />
            </Link>
          </li>
          <li>
            <Link
              to="https://vk.com/nikita.osipov59"
              className={ContactsStyle.link}
              target="_blank"
            >
              <Vk />
            </Link>
          </li>
          <li className="test">
            <Link
              to="https://t.me/nikita_osipov59"
              className={ContactsStyle.link}
              target="_blank"
            >
              <Tg />
            </Link>
          </li>
          <li>
            <Link
              to="https://hh.ru/resume/491d40b8ff0cf220c20039ed1f79674d4b3669"
              className={ContactsStyle.link}
              target="_blank"
            >
              <Hh />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
