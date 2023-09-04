import React from "react";
import { Link } from "react-scroll";
const NavImg = () => {
  return (
    <div>
      <li className=" list-none">
        <Link to="/" className="flex justify-center items-center gap-1">
          <img
            src="/mypic11.jpg"
            alt="navImage"
            className="w-10 rounded-full border-2 border-blue-500"
          />
          <span className="text-white uppercase text-xs md:text-base font-CustomFont1 first-letter:text-xl">Subrata</span>{" "}
        </Link>
      </li>
    </div>
  );
};

export default NavImg;
