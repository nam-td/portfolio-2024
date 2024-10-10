import MainNav from "../components/MainNav";
import MainFooter from "../components/MainFooter";
import { Outlet, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
const MainLayout = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    const urlCheck = location.pathname.includes("livedemo/record-label");
    if (urlCheck) {
      document.querySelector("html").style.width = "100%";
      document.querySelector("html").style.height = "100%";
      document.querySelector("html").style.overflow = "hidden";
      document.querySelector("html").style.backgroundColor = "#000";
      document.querySelector("body").style.width = "100%";
      document.querySelector("body").style.height = "100%";
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector("body").style.backgroundColor = "#000";
    } else {
      document.querySelector("html").style.width = "";
      document.querySelector("html").style.height = "";
      document.querySelector("html").style.overflow = "";
      document.querySelector("html").style.backgroundColor = "";
      document.querySelector("body").style.width = "";
      document.querySelector("body").style.height = "";
      document.querySelector("body").style.overflow = "";
      document.querySelector("body").style.backgroundColor = "";
    }
  }, [window.document.body, location]);
  return (
    <div className="bg-gray-950 w-full min-h-screen font-inter">
      <MainNav />
      <Outlet />
      <MainFooter />
    </div>
  );
};

export default MainLayout;
