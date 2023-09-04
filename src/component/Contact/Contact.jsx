import React from "react";
import ContactFrom from "./ContactFrom";

const icon = [
  {
    name: "Facebook",
    href: "/facebook.svg ",
    link: "https://www.facebook.com/profile.php?id=100028557857450&mibextid=ZbWKwL",
    bg: "bg-[rgb(66,103,178)]",
  },
  {
    name: "Instagram",
    href: "/instagram.svg",
    link: "https://www.instagram.com/subratapramanik6/",
    bg: "bg-gradient-to-l from-[rgb(150,47,191)]  to-[rgb(250,126,30)]",
  },
  {
    name: "Linkedin",
    href: "/linkedin4.svg",
    link: "https://www.linkedin.com/in/subrata-pramanik-4b0014277",
    bg: "bg-[#0E76A8]",
  },
  {
    name: "WhatsApp",
    href: "/whatsapp.svg",
    link: "https://wa.me/918637390820",
    bg: "bg-green-500",
  },
  {
    name: "G-mail",
    href: "/gmail4.svg",
    link: "mailto:subratapramanik533@gmail.com",
    bg: "bg-gradient-to-l from-[#D44638] via-[#B23121] to-[#C6C6C6]",
  },
];
const Contact = () => {
  return (
    <section id="Contact" className=" mt-16 lg:p-10 gap-10 p-4   bg-cover bg-no-repeat bg-center flex flex-col text-white lg:flex-row">
      <div className=" basis-1/2">
        <ContactFrom />
      </div>
      <div className=" basis-1/2 flex flex-col gap-4 p-4">
        <h1 className="text-xl mb-2 lg:mb-5 lg:text-2xl text-center font-CustomFont2 tracking-widest ">
          Direct message
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 ">
          {icon.map((item) => (
            <a
              href={item.link}
              key={item.name}
              target="_blank"
              className={`flex items-center justify-between gap-4 rounded-md px-2 py-1 cursor-pointer ${item.bg} hover:translate-x-2 duration-150`}
            >
              <img src={item.href} alt="" className="w-12 rounded-md  " />
              <strong>
                {item.name} <span>&rarr;</span>
              </strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
