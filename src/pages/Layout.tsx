import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import SectionsNavigators from "../components/navigation/SectionsNavigators";

const Layout = () => {
  return (
    <>
      <Navbar />
      <SectionsNavigators />
      <Outlet />
    </>
  );
};

export default Layout;
