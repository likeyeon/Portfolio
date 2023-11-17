import style from "../styles/windowBar.module.scss";

const WindowBar = (props) => {
  return (
    <div className={style.bar}>
      <span className={style["bar--title"]}>{props.title}</span>
    </div>
  );
};

export default WindowBar;
