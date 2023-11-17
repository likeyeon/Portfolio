import style from "../styles/header.module.scss";

const Header = (props) => {
  return (
    <header>
      <h1 className={style.header__title}>{props.title}</h1>
    </header>
  );
};

export default Header;
