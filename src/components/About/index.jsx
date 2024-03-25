import React from "react";

import { Link } from "react-router-dom";
import AboutStyle from "./About.module.scss";
import { Button } from "../ui/Button";

const About = () => {
  return (
    <section className={AboutStyle.about}>
      <p className={AboutStyle.title}>
        <span className="pink">#</span>
        Обо-мне
      </p>
      <div className={AboutStyle.wrapper}>
        <div className={AboutStyle.description}>
          <p>
            Привет, <span className="pink">Читатель!</span>
          </p>
          Я фронтенд разработчик, живу в Москве, мне 21 год.
          <br />
          Создаю красивые и удобные веб-интерфейсы для твоего комфорта! Являюсь
          создателем it-сообщества в Discord —&nbsp;
          <Link
            className={`pink ${AboutStyle.link}`}
            to="https://discord.com/invite/r3r3EMA"
            target="_blank"
          >
            ./codeCraft
          </Link>
          <br />
          Также веду канал в&nbsp;
          <Link
            className={`pink ${AboutStyle.link}`}
            to="https://t.me/nikita_frontendit"
            target="_blank"
          >
            Telegram
          </Link>
          .
          <br />
          <Button title="Написать мне" href="https://t.me/nikita_osipov59" />
        </div>
        <div>
          <img src="/me2.jpg" alt="me" />
        </div>
      </div>
    </section>
  );
};

export default About;
