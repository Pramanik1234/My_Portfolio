import React from "react";

const Icon = () => {
  const icon = [
    {
      name: "/facebook.svg ",
      link: "https://www.facebook.com/profile.php?id=100028557857450&mibextid=ZbWKwL",
    },
    { name: "/twitter.svg", link: "" },
    {
      name: "/linkedin.svg",
      link: "https://www.linkedin.com/in/subrata-pramanik-4b0014277",
    },
    { name: "/github.svg", link: "https://github.com/Pramanik1234/" },
    { name: "/gmail.svg", link: "mailto:subratapramanik533@gmail.com" },
  ];
  return (
    <div className=" flex  gap-2 lg:gap-4">
      {icon.map((item) => (
        <a href={item.link} key={item.name} target="_blank">
          <img
            src={item.name}
            alt=""
            className="w-14 shadow-[0px_0px_2px_2px_rgba(225,225,225,0.5)] rounded-md p-4 cursor-pointer hover:-translate-y-2 duration-300"
          />
        </a>
      ))}
    </div>
  );
};

export default Icon;
