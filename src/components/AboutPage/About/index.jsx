import style from "./style.module.scss";
import { Title } from "@/components/ui/Title";
import { Button } from "@/components/ui/Button";

export const About = () => {
  return (
    <section className={style.about}>
      <Title prefix="/" title="обо-мне" />
      <div className={style.wrapper}>
        <div className={style.description}>
          <p className={style.addition}>
            Привет, <span className="pink">Читатель!</span>
          </p>
          <pre>
            Я фронтенд разработчик, живу в Москве, мне 21 год. <br />
            Создаю красивые и удобные веб-интерфейсы для твоего комфорта.
            <p className={style.addition}>
              Регулярно учусь новому и улучшаю свои знания на практике.
              Компьютеры и программирование - мое любимое дело в жизни.
            </p>
            Это и моя работа, и мое хобби.
          </pre>
          <Button
            icon="mail"
            title="Написать"
            href="https://t.me/nikita_osipov59"
          />
        </div>
        <div className={style.img}>
          <img src="/me3.webp" alt="me" />
        </div>
      </div>
    </section>
  );
};
