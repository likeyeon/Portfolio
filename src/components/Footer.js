import style from "../styles/footer.module.scss";

const Footer = (props) => {
  return (
    <footer className={style[`${props.layout}`]}>
      <p className={style.wrap}>
        Copyright © 2023 | Designed & Developed By{" "}
        <strong className={style.strong}> Cho Hayeon</strong>
      </p>
    </footer>
  );
};

export default Footer;
