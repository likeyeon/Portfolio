import { useDispatch } from "react-redux";
import { setTheme } from "../redux/themeModeSlice";

import { ReactComponent as Sun } from "../assets/icons/sun.svg";
import { ReactComponent as Moon } from "../assets/icons/moon.svg";
import style from "../styles/themeMode.module.scss";
import { useEffect, useState } from "react";

const ThemeMode = () => {
  const dispatch = useDispatch();
  const [theme, modifyTheme] = useState(localStorage.getItem("theme"));

  /* themeMode 버튼 클릭 함수 */
  const handleClick = (mode) => {
    dispatch(setTheme(mode));
    localStorage.setItem("theme", mode);
    modifyTheme(mode);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className={`${style.header} ${theme === "dark" ? style.dark : ""}`}>
      <div className={style.bar_wrapper}>
        <ul className={style.bar}>
          <li
            className={`${style.bar_light} ${
              theme === "light" ? style.active : ""
            }`}
          >
            <button
              onClick={() => {
                handleClick("light");
              }}
            >
              <Sun className={style.icon_sun} />
              <span>Light</span>
            </button>
          </li>
          <li
            className={`${style.bar_dark} ${
              theme === "dark" ? style.active : ""
            }`}
          >
            <button onClick={() => handleClick("dark")}>
              <Moon className={style.icon_moon} />
              <span>Dark</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default ThemeMode;
