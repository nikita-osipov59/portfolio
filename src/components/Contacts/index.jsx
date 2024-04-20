import React from "react";

import ContactsStyle from "./Contacts.module.scss";
import { Link } from "react-router-dom";
import { Git } from "../ui/icons/Git";
import { VK } from "../ui/icons/VK";
import { TG } from "../ui/icons/TG";
import { HH } from "../ui/icons/HH";
import { Title } from "../ui/Title";

const Contacts = () => {
  return (
    <section id="contacts" className={ContactsStyle.contacts}>
      <Title prefix="#" title="Контакты" />
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
              <VK />
            </Link>
          </li>
          <li>
            <Link
              to="https://t.me/nikita_osipov59"
              className={ContactsStyle.link}
              target="_blank"
            >
              <TG />
            </Link>
          </li>
          <li>
            <Link
              to="https://hh.ru/resume/491d40b8ff0cf220c20039ed1f79674d4b3669"
              className={ContactsStyle.link}
              target="_blank"
            >
              <HH />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contacts;
