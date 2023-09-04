import React from "react";
import Downlodecv from "./Downlodecv";
import { Link } from "react-scroll";

const navManu = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Project",
    to: "/project",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];
const NavLi = ({ setManuButton , widthFull , setWidthFull }) => {
  return (
    <ul
      className={`absolute bg-slate-950 left-0 top-16  flex flex-col h-auto py-4
     text-white sm:flex justify-center items-center font-thin transition-all duration-200  ${widthFull} overflow-hidden sm:justify-end sm:relative sm:top-0 sm:w-full sm:left-0 sm:flex-row sm:opacity-100 sm:bg-transparent sm:gap-2 md:gap-6 lg:gap-8
     `}
    >
      {navManu.map((item) => (
        <li key={item.name}>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to={item.name}
            className=" cursor-pointer hover:opacity-50 px-6 py-1 m-4 rounded-md flex items-center justify-center  md:text-base sm:text-xs sm:m-0"
            onClick={() => {
              setWidthFull("w-0");
              setManuButton((item) => !item);
            }}
          >
            {item.name}
          </Link>
        </li>
      ))}
      <Downlodecv />
    </ul>
  );
};

export default NavLi;
