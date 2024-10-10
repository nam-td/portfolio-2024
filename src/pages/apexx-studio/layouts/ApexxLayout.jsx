import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FullscreenImageContextProvider } from "../contexts/FullscreenImageContext";

const ApexxLayout = () => {

  return (

      <FullscreenImageContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </FullscreenImageContextProvider>
  );
};

export default ApexxLayout;
