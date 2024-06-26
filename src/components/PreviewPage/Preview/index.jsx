import style from "./style.module.scss";

const Preview = ({ link }) => {
  return (
    <iframe
      className={style.iframe}
      title="codeCraft"
      src={`https://${link}`}
      allow="fullscreen"
      width="100%"
      height="830px"
    />
  );
};

export default Preview;
