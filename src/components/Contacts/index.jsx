import React from "react";

import { Link } from "react-router-dom";
import ContactsStyle from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <section className={ContactsStyle.contacts}>
      <p className={ContactsStyle.title}>
        <span className="pink">#</span>
        Контакты
      </p>
      <div className={ContactsStyle.wrapper}>
        <p>Открыт для предложений, пишите в личные сообщения:</p>
        <ul className={ContactsStyle.description}>
          <li>
            <Link
              to="https://github.com/nikita-osipov59"
              className={ContactsStyle.link}
              target="_blank"
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              to="https://vk.com/nikita.osipov59"
              className={ContactsStyle.link}
              target="_blank"
            >
              Vkontakte
            </Link>
          </li>
          <li>
            <Link
              to="https://t.me/nikita_osipov59"
              className={ContactsStyle.link}
              target="_blank"
            >
              Telegram
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
