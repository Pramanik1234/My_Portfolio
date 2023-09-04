import React from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

const HomeSocial = () => {
    const Style =
      " text-xl lg:text-2xl  text-black p-1  rounded-md bg-white shadow-[0_0_7px_3px_rgb(0,0,0,0.5)] cursor-pointer hover:-translate-y-2 duration-300";
 return (
   <>
     <a href="https://github.com/Pramanik1234/" target="_blank" className={Style} >
       {" "}
       <FaGithub  />
     </a>
     <a href="https://www.linkedin.com/in/subrata-pramanik-4b0014277" target="_blank" className={Style}>
       {" "}
       <FaLinkedin  />
     </a>
   </>
 );
};

export default HomeSocial;
