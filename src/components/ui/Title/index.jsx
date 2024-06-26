import style from "./Style.module.scss";
export const Title = ({ prefix, title }) => {
  return (
    <p className={style.title}>
      <span className={`pink ${style.link}`}>{prefix}</span>
      {title}
    </p>
  );
};
