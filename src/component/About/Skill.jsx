import React from "react";
const skillItem = [
  {
    id: 1,
    name: "html",
    href: "/html.svg",
    style: "shadow-orange-500",
  },
  { id: 2, name: "css", href: "/css.svg", style: "shadow-blue-500" },
  {
    id: 3,
    name: "javascript",
    href: "/javascript.svg",
    style: "shadow-yellow-500",
  },
  { id: 4, name: "react", href: "/react.svg", style: "shadow-blue-600" },
  { id: 5, name: "tailwind", href: "/tailwind.svg", style: "shadow-sky-400" },
  { id: 6, name: "nextjs", href: "/nextjs.svg", style: "shadow-white" },
];
const Skill = ({ setModalWindow, setIndexNumber }) => {
  return (
    <div className="w-full grid grid-cols-2  gap-4">
      {skillItem.map((item, index) => (
        <div
          key={index}
          className={`flex p-3 items-center justify-between shadow-md ${item.style} group cursor-pointer`}
          onClick={() => { setModalWindow(true); setIndexNumber(index) }}
        >
          <img src={item.href} alt="" className="w-10" />
          <p className=" capitalize">{item.name}</p>
          <p className=" transition-all duration-300 group-hover:animate-toggle">
            &rarr;
          </p>
        </div>
      ))}
    </div>
  );
};

export default Skill;
