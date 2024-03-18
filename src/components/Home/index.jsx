import React from "react";

import { Button } from "../ui/Button";
import HomeStyle from "./HomeStyle.module.scss";
const Home = () => {
  return (
    <section className={HomeStyle.home}>
      <div className={HomeStyle.homeBox}>
        <div className={HomeStyle.text}>
          <p>Привет!</p>
          <h2 className={HomeStyle.title}>
            Я Никита, <span className="pink">фронтенд-разработчик</span>!
          </h2>
          <p className={HomeStyle.description}>
            Создаю красивые и удобные веб-интерфейсы для твоего комфорта!
          </p>
          <Button title="Контакты" />
        </div>
        <div className={HomeStyle.img}>
          <img src="me.jpg" alt="me" />
        </div>
      </div>
    </section>
  );
};

export default Home;
