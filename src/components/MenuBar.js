import { Link } from "react-router-dom";
import { ReactComponent as Home } from "../assets/icons/home.svg";
import { ReactComponent as About } from "../assets/icons/about.svg";
import { ReactComponent as Project } from "../assets/icons/project.svg";
import { ReactComponent as Writing } from "../assets/icons/writing.svg";
import { ReactComponent as Contact } from "../assets/icons/mail.svg";
import { ReactComponent as Window } from "../assets/icons/window.svg";
import { ReactComponent as Profile } from "../assets/imgs/profile.svg";
import style from "../styles/header.module.scss";

const MenuBar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.content}>
        <div className={style.header}>
          <Link to="/" className={style.header_title}>
            PORTFOLIO
          </Link>
          <span className={style.header_icon}>
            <Window className={style.icon_window} />
          </span>
        </div>

        <ul className={style.ul}>
          <li className={style.li}>
            <Home className={style.icon_main} />
            <Link to="/">Main</Link>
          </li>
          <li className={style.li}>
            <About className={style.icon_about} />
            <Link to="/about">About</Link>
          </li>
          <li className={style.li}>
            <Project className={style.icon_project} />
            <Link to="/project">Project</Link>
          </li>
          <li className={style.li}>
            <Writing className={style.icon_writing} />
            <Link to="/writing">Writing</Link>
          </li>
          <li className={style.li}>
            <Contact className={style.icon_contact} />
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className={style.profile}>
          <Profile />
          <span>Visitor</span>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
