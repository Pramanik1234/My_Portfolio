import React from "react";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

const NavButton = ({ manuButton, setManuButton, setWidthFull, widthFull }) => {
  return (
    <button
      onClick={() => {
        setManuButton((item) => !item);
        setWidthFull(`${widthFull === "w-full" ? 'w-0' : 'w-full'}`);
      }}
      className=" border py-1 px-2 rounded-md  text-2xl text-white sm:hidden"
    >
      {manuButton ? <FaTimes /> : <AiOutlineMenu />}
    </button>
  );
};

export default NavButton;
