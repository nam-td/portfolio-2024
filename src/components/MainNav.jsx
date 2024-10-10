import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
gsap.registerPlugin(useGSAP);

const MainLogo = () => {
  return (
    <Link to="/" className="w-[64px] h-[64px]">
      <svg
        viewBox="0 0 1024 1024"
        className="icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ffffff"
        stroke="#ffffff"
        strokeWidth="5.12"
        width="100%"
        height="100%"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M509.8 139.7l190.5 109.6 0.2 196.5 173.2 99.7 0.2 219.8-190.2 110.1-172.4-99.2-171.5 99.2-190.5-109.6-0.2-219.9 170.7-98.8-0.3-197.3z"
            fill="#FAFAFA"
            className="svg-elem-1"
          ></path>
          <path
            d="M520 527.5V365l-10 5.8-10-5.8v162.2l10.3 5.9zM339.5 666.9l-10-5.7v162.1l10.3 5.9 9.7-5.6V661.2zM693.4 823.6V661.2l-2 1.1c-1.6 0.9-3.3 1.3-5 1.3-3.5 0-6.8-1.8-8.7-5-2.5-4.3-1.4-9.6 2.2-12.7-3.8 1.4-6.6 5.1-6.6 9.4v167.9l10.3 5.9 9.8-5.5z"
            fill="#22D3EE"
            className="svg-elem-2"
          ></path>
          <path
            d="M825.1 563.7l8.4 4.8c-1.9-3.1-5.1-4.8-8.4-4.8zM833.7 568.9v9.5c1.6-2.9 1.7-6.5 0-9.5zM656.7 628.5l-8.7-5c-4.8-2.8-10.9-1.1-13.7 3.7-2.8 4.8-1.1 10.9 3.7 13.7l8.7 5c1.6 0.9 3.3 1.3 5 1.3 3.5 0 6.8-1.8 8.7-5 2.7-4.8 1.1-10.9-3.7-13.7zM613.3 603.6l-8.7-5c-4.8-2.8-10.9-1.1-13.7 3.7-2.8 4.8-1.1 10.9 3.7 13.7l8.7 5c1.6 0.9 3.3 1.3 5 1.3 3.5 0 6.8-1.8 8.7-5 2.8-4.8 1.1-10.9-3.7-13.7z"
            fill="#2563EB"
            className="svg-elem-3"
          ></path>
          <path
            d="M833.6 568.7c0-0.1-0.1-0.1-0.1-0.2l-8.4-4.8c-1.8 0-3.5 0.4-5.2 1.3l-8.7 5c-4.8 2.8-6.4 8.9-3.7 13.7 1.9 3.2 5.2 5 8.7 5 1.7 0 3.4-0.4 5-1.3l8.7-5c1.7-1 2.9-2.3 3.8-3.9V569c0-0.2-0.1-0.3-0.1-0.3zM690 640l-8.7 5c-0.5 0.3-1 0.6-1.4 1-3.7 3.1-4.7 8.4-2.2 12.7 1.9 3.2 5.2 5 8.7 5 1.7 0 3.4-0.4 5-1.3l2-1.1 6.7-3.9c4.8-2.8 6.4-8.9 3.7-13.7-2.9-4.8-9-6.5-13.8-3.7zM570 578.7l-8.7-5c-4.8-2.8-10.9-1.1-13.7 3.7-2.8 4.8-1.1 10.9 3.7 13.7l8.7 5c1.6 0.9 3.3 1.3 5 1.3 3.5 0 6.8-1.8 8.7-5 2.7-4.8 1-11-3.7-13.7zM776.6 590l-8.7 5c-4.8 2.8-6.4 8.9-3.7 13.7 1.9 3.2 5.2 5 8.7 5 1.7 0 3.4-0.4 5-1.3l8.7-5c4.8-2.8 6.4-8.9 3.7-13.7-2.8-4.8-8.9-6.5-13.7-3.7zM733.3 615l-8.7 5c-4.8 2.8-6.4 8.9-3.7 13.7 1.9 3.2 5.2 5 8.7 5 1.7 0 3.4-0.4 5-1.3l8.7-5c4.8-2.8 6.4-8.9 3.7-13.7-2.8-4.8-8.9-6.5-13.7-3.7z"
            fill="#2563EB"
            className="svg-elem-4"
          ></path>
          <path
            d="M873.7 545.5l-173.2-99.7-0.2-196.5-190.5-109.6-190.3 110.1 0.2 197.3L149 546l0.3 219.8 190.5 109.7 171.4-99.3 172.4 99.3 190.2-110.1-0.1-219.9zM509.8 185.9l140.4 80.8-140.3 81L369.5 267l140.3-81.1zM339.3 482l140.4 80.8-140.3 81L199 563.1 339.3 482z m10.2 341.6l-9.7 5.6-10.3-5.9-140.2-80.7-0.2-162.1 140.4 80.7 10 5.8 10-5.8 140.4-81 0.2 162.1-140.6 81.3z m160.8-290.5l-10.3-5.9-140.2-80.7-0.2-162.1L500 365l10 5.8 10-5.8 140.4-81 0.2 162.1L520 527.5l-9.7 5.6z m323.6 209.1l-140.6 81.4-9.7 5.6-10.3-5.9-140.2-80.7L533 569l150.3-87 141.9 81.7c3.3 0.1 6.6 1.8 8.4 4.8l0.2 0.1v0.3c1.7 3.1 1.6 6.7 0 9.5l0.1 163.8z"
            fill="#2563EB"
            className="svg-elem-5"
          ></path>
        </g>
      </svg>
    </Link>
  );
};

const MainNav = forwardRef(function MainNav(props, ref){
  const mobileMenuRef = useRef();
  const { contextSafe } = useGSAP({ scope: mobileMenuRef });
  const location = useLocation();
  const openMobileMenu = contextSafe(() => {
    gsap.to(mobileMenuRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.75,
      ease: "power2",
    });
  });
  const closeMobileMenu = contextSafe(() => {
    gsap.to(mobileMenuRef.current, {
      x: "-100%",
      opacity: 0,
      duration: 0.75,
      ease: "power2",
    });
  });
  useLayoutEffect(() => {
    closeMobileMenu();
  }, []);
  useEffect(() => {
    closeMobileMenu();
  }, [location]);
  return (
    <nav className="w-full min-h-[80px] max-w-[1920px] mx-auto z-50 sticky top-0 left-0 right-0 flex flex-row justify-between items-center bg-gray-800/30 px-8 text-gray-50 text-base shadow-sm shadow-gray-100/50 backdrop-blur-md">
      <div className="w-[64px]">
        <MainLogo />
      </div>
      <ul className="md:flex flex-row items-center gap-6 hidden">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
      <div className="cursor-pointer md:hidden">
        <HiMenuAlt3 onClick={openMobileMenu} size={24} />
      </div>
      <div
        ref={mobileMenuRef}
        className="mobile-menu absolute top-0 left-0 bg-gray-950 w-full h-screen z-[60] md:hidden"
        style={{ transform: "translateX(0%)", opacity: 0 }}
      >
        <div className="w-full max-w-[350px] pl-4 pr-4 py-8 flex flex-row justify-between items-center gap-6">
          <div className="logo w-[64px]">
            <MainLogo />
          </div>
          <div className="close cursor-pointer">
            <IoClose onClick={closeMobileMenu} size={28} />
          </div>
        </div>
        <ul className="w-full max-w-[350px] flex flex-col text-lg">
          <li className="py-2 px-4 bg-gray-700/0 shadow-sm shadow-gray-200/0 hover:bg-gray-900 hover:shadow-sky-400/30 duration-800 ease-in-out transition-all">
            <Link to="/">Home</Link>
          </li>
          <li className="py-2 px-4 bg-gray-700/0 shadow-sm shadow-gray-200/0 hover:bg-gray-900 hover:shadow-sky-400/30 duration-800 ease-in-out transition-all">
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
});
export default MainNav;
