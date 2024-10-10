import { memo, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";

const Navbar = () => {
  const el = useRef();
  const tl = useRef();
  const tl2 = useRef();
  const tl3 = useRef();

  function closeMenu() {
    tl3.current.reverse();
  }

  function openMenu() {
    tl3.current.play();
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".mobile-menu", {
        left: "-20%",
        opacity: 0,
        pointerEvents: "none",
      });
      tl3.current = gsap.timeline().fromTo(
        ".mobile-menu",
        {
          left: "-20%",
          opacity: 0,
          pointerEvents: "none",
        },
        {
          left: 0,
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.75,
          ease: "power1",
        }
      );
      tl3.current.pause();
    }, el);
  });

  function scrollToSection(e) {
    const element = document.querySelector(`#${e.target.innerHTML}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div
      className="w-full h-16 shadow-md fixed top-0 left-0 z-200 bg-gray-100"
      ref={el}
    >
      <header className="w-full max-w-[1440px] h-16 m-auto flex flex-row justify-between items-center overflow-hidden">
        <div
          className="font-abel font-bold text-xl md:text-2xl xl:text-3xl ml-6 text-zinc-500"
          id="logo"
        >
          <Link to="./">
          Apexx Studio
          </Link>
        </div>
        <nav className="mr-6">
          <ul className="hidden xs:flex flex-row items-center gap-4 menu text-md text-zinc-500 font-kanit">
            <li>
              <Link to="#work" onClick={(e) => scrollToSection(e)}>
                work
              </Link>
            </li>
            <li>
              <Link to="#about" onClick={(e) => scrollToSection(e)}>
                about
              </Link>
            </li>
            <li>
              <Link to="#contact" onClick={(e) => scrollToSection(e)}>
                contact
              </Link>
            </li>
          </ul>
          <div className="menu-icon xs:hidden cursor-pointer text-zinc-500" onClick={openMenu}>
            <AiOutlineBars size={20} />
          </div>
          <div className="mobile-menu fixed inset-0 z-50 w-screen h-screen bg-gray-200 flex flex-col justify-center items-center overflow-hidden 4cols:hidden">
            <Link
              to="#"
              className="text-xl text-gray-600 border-b-2 border-gray-300 pb-2 pl-2 w-full text-left hover:bg-yellow-900 hover:text-gray-200 hover:pl-6 transition-all duration-1000 ease-out"
              onClick={(e) => {
                scrollToSection(e);
                closeMenu();
              }}
            >
              work
            </Link>
            <Link
              to="#"
              className="text-xl text-gray-600 border-b-2 border-gray-300 pb-2 pl-2 w-full text-left hover:bg-yellow-900 hover:text-gray-200 hover:pl-6 transition-all duration-1000 ease-out"
              onClick={(e) => {
                scrollToSection(e);
                closeMenu();
              }}
            >
              about
            </Link>
            <Link
              to="#"
              className="text-xl text-gray-600 border-b-2 border-gray-300 pb-2 pl-2 w-full text-left hover:bg-yellow-900 hover:text-gray-200 hover:pl-6 transition-all duration-1000 ease-out"
              onClick={(e) => {
                scrollToSection(e);
                closeMenu();
              }}
            >
              contact
            </Link>
            <div className="close absolute top-6 right-6 cursor-pointer" onClick={closeMenu}>
              <IoClose size={24}/>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default memo(Navbar);
