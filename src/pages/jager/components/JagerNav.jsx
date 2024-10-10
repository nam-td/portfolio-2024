import logo from "/jager/logo.svg";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
function JagerNav(props) {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const { navRefs } = props;
  const scrollTo = (section, e) => {
    e.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <nav className="w-full m-auto drop-shadow-lg bg-gray-200 hidden md:block fixed top-0 z-40">
        <div className="w-[90%] container mx-auto flex flex-row justify-between overflow-hidden">
          <ul className="min-h-[80px] text-md text-black flex flex-row flex-nowrap justify-start items-center gap-6 xl:gap-8">
            <li>
              <a href="/livedemo/jager">
                <img src={logo} alt="Logo" />
              </a>
            </li>
            <li className="w-auto px-4 py-2  hover:font-bold transition-all ease-out duration-300">
              <a
                onClick={(e) => {
                  scrollTo(navRefs[0], e);
                }}
                href="#"
              >
                About
              </a>
            </li>
            <li className="w-auto px-4 py-2  hover:font-bold transition-all ease-out duration-300">
              <a
                onClick={(e) => {
                  scrollTo(navRefs[1], e);
                }}
                href="#"
              >
                Services
              </a>
            </li>
            <li className="w-auto px-4 py-2  hover:font-bold transition-all ease-out duration-300">
              <a
                onClick={(e) => {
                  scrollTo(navRefs[2], e);
                }}
                href="#"
              >
                Projects
              </a>
            </li>
            <li className="w-auto px-4 py-2  hover:font-bold transition-all ease-out duration-300">
              <a
                onClick={(e) => {
                  scrollTo(navRefs[3], e);
                }}
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
          <ul className="flex-row flex-nowrap justify-end items-center gap-4 hidden lg:flex">
            <li className="p-3 bg-transparent hover:bg-black hover:text-white rounded-full transition-all ease-out duration-500">
              <a href="#">
                <FaFacebookSquare />
              </a>
            </li>
            <li className="p-3 bg-transparent hover:bg-black hover:text-white rounded-full transition-all ease-out duration-500">
              <a href="#">
                <FaTwitterSquare />
              </a>
            </li>
            <li className="p-3 bg-transparent hover:bg-black hover:text-white rounded-full transition-all ease-out duration-500">
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="w-full m-auto drop-shadow-lg bg-gray-200 md:hidden fixed top-0 z-40">
        <ul className="w-full p-4 flex flex-row justify-between items-center">
          <li>
            <a href="/livedemo/jager">
              <img src={logo} alt="Logo" />
            </a>
          </li>
          <li
            onClick={() => {
              setToggleMobileMenu(true);
            }}
            className="cursor-pointer"
          >
            <GiHamburgerMenu size={24} />
          </li>
        </ul>
      </nav>
      <AnimatePresence initial={true}>
        {toggleMobileMenu && (
          <motion.div
            className="fixed top-0 bottom-0 w-full h-screen bg-neutral-200 md:hidden z-50"
            key="mobile-menu"
            data-lenis-prevent
            initial={{ opacity: 0, x: 150 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.05, duration: 0.7, ease: "anticipate" },
            }}
            exit={{
              opacity: 0,
              x: -150,
              transition: { duration: 0.7, ease: "anticipate" },
            }}
          >
            <div className="w-full flex flex-row justify-between items-center px-6 py-2 mt-12">
              <div>
                <a href="/livedemo/jager">
                  <img src={logo} alt="jager logo" />
                </a>
              </div>
              <div
                onClick={() => {
                  setToggleMobileMenu(false);
                }}
                className="cursor-pointer"
              >
                <IoClose size={28} />
              </div>
            </div>
            <ul className="w-full mt-12 flex flex-col gap-2 text-lg">
              <li className="w-full border-b border-neutral-300 px-6 py-1 transition-all ease-in-out duration-700 hover:bg-neutral-500 hover:text-white">
                <a
                  onClick={(e) => {
                    scrollTo(navRefs[0], e);
                    setToggleMobileMenu(false);
                  }}
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="w-full border-b border-neutral-300 px-6 py-1 transition-all ease-in-out duration-700 hover:bg-neutral-500 hover:text-white">
                <a
                  onClick={(e) => {
                    scrollTo(navRefs[1], e);
                    setToggleMobileMenu(false);
                  }}
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="w-full border-b border-neutral-300 px-6 py-1 transition-all ease-in-out duration-700 hover:bg-neutral-500 hover:text-white">
                <a
                  onClick={(e) => {
                    scrollTo(navRefs[2], e);
                    setToggleMobileMenu(false);
                  }}
                  href="#"
                >
                  Projects
                </a>
              </li>
              <li className="w-full border-b border-neutral-300 px-6 py-1 transition-all ease-in-out duration-700 hover:bg-neutral-500 hover:text-white">
                <a
                  onClick={(e) => {
                    scrollTo(navRefs[3], e);
                    setToggleMobileMenu(false);
                  }}
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default JagerNav;
