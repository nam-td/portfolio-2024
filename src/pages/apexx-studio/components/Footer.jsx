import React, { memo } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaBehanceSquare,
} from "react-icons/fa";
import { IconContext } from "react-icons";
const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="w-full h-24  bg-gray-300">
      <div className="h-full max-w-[1440px] px-4 m-auto flex flex-col 3cols:flex-row 3cols:justify-between flex-wrap justify-center items-center gap-2">
        <div className="text-sm xs:text-md font-abel font-bold text-zinc-600">
          © APEXX STUDIO {year}. ALL RIGHTS RESERVED.
        </div>

        <ul className="flex flex-row flex-wrap justify-between gap-4 text-zinc-600">
          <IconContext.Provider value={{ size: "1rem" }}>
            <li>
              <Link to="#">
                <FaFacebookSquare />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaBehanceSquare />
              </Link>
            </li>
          </IconContext.Provider>
        </ul>
      </div>
    </footer>
  );
};

export default memo(Footer);
