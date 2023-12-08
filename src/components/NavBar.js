import { Link, useLocation } from "react-router-dom";

import { ReactComponent as Home } from "../assets/icons/home.svg";
import { ReactComponent as About } from "../assets/icons/about.svg";
import { ReactComponent as Project } from "../assets/icons/project.svg";
import { ReactComponent as Writing } from "../assets/icons/writing.svg";
import { ReactComponent as Contact } from "../assets/icons/mail.svg";
import { ReactComponent as Logo } from "../assets/icons/chatGPT-logo.svg";
import { ReactComponent as Profile } from "../assets/imgs/profile.svg";
import style from "../styles/navBar.module.scss";

const NavBar = () => {
  const pathname = useLocation().pathname;

  return (
    <>
      <nav className={style.nav}>
        <div className={style.content}>
          <div>
            <div className={style.nav_header}>
              <Link to="/" className={style.nav_header_title}>
                <Logo />
                PORTFOLIO
              </Link>
            </div>

            <ul className={style.ul}>
              <li
                className={`${style.li} ${
                  pathname === "/" ? style.active : ""
                }`}
              >
                <Link to="/">
                  <Home className={style.icon_main} />
                  <span>Main</span>
                </Link>
              </li>
              <li
                className={`${style.li} ${
                  pathname === "/about" ? style.active : ""
                }`}
              >
                <Link to="/about">
                  <About className={style.icon_about} />
                  <span>About</span>
                </Link>
              </li>
              <li
                className={`${style.li} ${
                  pathname === "/project" ? style.active : ""
                }`}
              >
                <Link to="/project">
                  <Project className={style.icon_project} />
                  <span>Project</span>
                </Link>
              </li>
              <li
                className={`${style.li} ${
                  pathname === "/writing" ? style.active : ""
                }`}
              >
                <Link to="/writing">
                  <Writing className={style.icon_writing} />
                  <span>Writing</span>
                </Link>
              </li>
              <li
                className={`${style.li} ${
                  pathname === "/contact" ? style.active : ""
                }`}
              >
                <Link to="/contact">
                  <Contact className={style.icon_contact} />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className={style.profile}>
            <Profile />
            <span>Visitor</span>
          </div>
        </div>
      </nav>
      <nav className={style.nav_mobile}>
        <div className={style.content}>
          <div>
            <div className={style.nav_header}>
              <Link to="/" className={style.nav_header_title}>
                <Logo />
              </Link>
            </div>

            <ul className={style.ul}>
              <li
                className={`${style.li} ${
                  pathname === "/" ? style.active : ""
                }`}
              >
                <Link to="/">
                  <Home className={style.icon_main} />
                </Link>
              </li>
              <li
                className={`${style.li} ${
                  pathname === "/about" ? style.active : ""
                }`}
              >
                <Link to="/about">
                  <About className={style.icon_about} />
                </Link>
              </li>
              <li
                className={`${style.li} ${
                  pathname === "/project" ? style.active : ""
                }`}
              >
                <Link to="/project">
                  <Project className={style.icon_project} />
                </Link>
              </li>
              <li
                className={`${style.li} ${
                  pathname === "/writing" ? style.active : ""
                }`}
              >
                <Link to="/writing">
                  <Writing className={style.icon_writing} />
                </Link>
              </li>
              <li
                className={`${style.li} ${
                  pathname === "/contact" ? style.active : ""
                }`}
              >
                <Link to="/contact">
                  <Contact className={style.icon_contact} />
                </Link>
              </li>
            </ul>
          </div>

          <div className={style.profile}>
            <Profile />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
