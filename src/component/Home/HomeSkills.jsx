import React from 'react'
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { DiJavascript1 } from "@react-icons/all-files/di/DiJavascript1";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiRedux } from "@react-icons/all-files/si/SiRedux";

const HomeSkills = () => {
     const Style =
      " text-xl lg:text-2xl text-black p-1 rounded-md bg-white shadow-[0_0_7px_3px_rgb(0,0,0,0.2)] cursor-pointer hover:-translate-y-2 duration-300";
 return (
   <>
     <a
       href="https://react.com/"
       target="_blank"
       className={Style}
     >
       <FaReact />
     </a>
     <a
       href="https://javascript.com/"
       target="_blank"
       className={Style}
     >
       <DiJavascript1 />
     </a>

     <a href="https://tailwindcss.com/" target="_blank" className={Style}>
       <SiTailwindcss />
     </a>
     <a
       href="https://redux.com/"
       target="_blank"
       className={Style}
     >
        <SiRedux/>
     </a>
   </>
 )
}

export default HomeSkills;