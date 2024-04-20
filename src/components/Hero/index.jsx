import React from "react";

import { Button } from "../ui/Button";
import HeroStyle from "./HeroStyle.module.scss";
const Hero = () => {
  return (
    <section className={HeroStyle.hero}>
      <div className={HeroStyle.heroBox}>
        <div className={HeroStyle.text}>
          <p>Привет!</p>
          <h2 className={HeroStyle.title}>
            Я Никита — фронтенд-разработчик<span>👻</span>
          </h2>
          <p className={HeroStyle.description}>
            Создаю красивые и удобные веб-интерфейсы для твоего комфорта!
          </p>
          <Button icon="click" title="Контакты" />
        </div>
        <div className={HeroStyle.img}>
          <img src="me.jpg" alt="me" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
