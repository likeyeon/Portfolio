import { Outlet } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import style from "../styles/layout.module.scss";

const Layout = () => {
  return (
    <div className={style.wrapper}>
      <MenuBar />
      <div className={style.content_wrapper}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
