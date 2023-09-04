import React, { useState } from "react";

const text = ` Hi, I'm subrata pramanik. I graduated from the University of
          kalyani in 2023 with a degree in Computer Science. My interests are in
          Front End Engineering, and I love to create beautiful and performant
          products with delightful user experiences.I previously worked my some project. I built the project
              with html css JavaScript React Redux Tailwind.
              I'm interested in the Front End Engineer role at product base
              Company because I like working in this ridesharing space and
              creating products to improve the lives of users.`

const HomeAbout = () => {
  const lessText = text.split('').slice(0, 300).join("") + `....`
  const [expandText, setExpandText] = useState(false)
  return (
    <div className="md:col-span-2 lg:col-span-1">
      <h1 className="text-xl mb-2 lg:text-2xl text-center font-CustomFont2 tracking-widest">
        About me :
      </h1>
      <h3 className=" gap-2 text-sm  lg:text-lg" onClick={() => setExpandText(exp => !exp)}>
        <span>
          {expandText ?text: lessText}
        </span>
        <button className=" text-blue-500">{expandText ? "read less" : " read more"}</button>
      </h3>
    </div>
  );
};

export default HomeAbout;
