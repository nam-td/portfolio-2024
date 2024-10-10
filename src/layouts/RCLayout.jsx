import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";


const LoadFallback = () => {
  return (
    <div className="w-full h-full bg-black flex flex-row justify-center items-center">
      <p>Loading...</p>
    </div>
  )
}

const RCLayout = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    const urlCheck = location.pathname.includes('livedemo/record-label')
    if(urlCheck){
      document.querySelector("html").style.width = "100%"
      document.querySelector("html").style.height = "100%"
      document.querySelector("html").style.overflow = "hidden"
      document.querySelector("html").style.backgroundColor = "#000"
      document.querySelector("body").style.width = "100%"
      document.querySelector("body").style.height = "100%"
      document.querySelector("body").style.overflow = "hidden"
      document.querySelector("body").style.backgroundColor = "#000"
    } 
  }, [window.document.body, location])
  return (
    <Suspense fallback={<LoadFallback />}>
    <div className="w-full h-full bg-black text-gray-100">
      <Outlet />
    </div>
    </Suspense>
  );
};

export default RCLayout;
