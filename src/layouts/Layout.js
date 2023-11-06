import { Outlet } from "react-router-dom";
import MenuBar from "../components/MenuBar";

const Layout = () => {
  return (
    <>
      <MenuBar />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
