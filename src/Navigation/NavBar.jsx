import React, { useState } from "react";
import NavLi from "./navLi";
import NavImg from "./NavImg";
import NavButton from "./NavButton";

const NavBar = () => {
   const [manuButton, setManuButton] = useState(false);
   const [widthFull, setWidthFull] = useState("w-0");
  return (
    <header
      className=" top-0 left-0 fixed w-screen px-4 h-16 flex justify-between items-center border-b-[1px]
     border-gray-700 sm:px-8  z-50 gap-6 lg:gap-10 bg-gradient-to-r from-gray-950 via-slate-900 to-black lg:px-10 "
    >
      <NavImg className="w-2/4" />
      <NavLi
        setManuButton={setManuButton}
        widthFull={widthFull}
        setWidthFull={setWidthFull}
      />
      <NavButton
        manuButton={manuButton}
        setManuButton={setManuButton}
        setWidthFull={setWidthFull}
        widthFull={widthFull}
      />
    </header>
  );
};

export default NavBar;
