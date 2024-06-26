import style from "./style.module.scss";

export const Container = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};
