import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import style from "../styles/layout.module.scss";

const Layout = () => {
  return (
    <div className={style.wrapper}>
      <NavBar />
      <div className={style.contents}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
