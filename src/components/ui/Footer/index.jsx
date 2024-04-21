import React from "react";

import { Link } from "react-router-dom";
import { Git } from "../../ui/icons/Git";
import { VK } from "../../ui/icons/VK";
import { TG } from "../../ui/icons/TG";
import { HH } from "../../ui/icons/HH";

import footerStyle from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.wrapper}>
        <ul className={footerStyle.description}>
          <li>
            <Link
              to="https://github.com/nikita-osipov59"
              className={footerStyle.link}
              target="_blank"
            >
              <Git />
            </Link>
          </li>
          <li>
            <Link
              to="https://vk.com/nikita.osipov59"
              className={footerStyle.link}
              target="_blank"
            >
              <VK />
            </Link>
          </li>
          <li>
            <Link
              to="https://t.me/nikita_osipov59"
              className={footerStyle.link}
              target="_blank"
            >
              <TG />
            </Link>
          </li>
          <li>
            <Link
              to="https://hh.ru/resume/491d40b8ff0cf220c20039ed1f79674d4b3669"
              className={footerStyle.link}
              target="_blank"
            >
              <HH />
            </Link>
          </li>
        </ul>
        <p className="pink">© 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
