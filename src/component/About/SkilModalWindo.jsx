import React from "react";
import Circle from "./Circle";

const skills = [
  {
    name: "Html",
    parsentage: 90,
    tag: [
      "paragraph",
      "header",
      "nav",
      "footer",
      "aside",
      "heading",
      "strong",
      "emphasis",
      "div",
      "input",
      "li",
      "ul",
      "ol",
      "img",
      "span",
      "...etc",
    ],
    style: "border-orange-500",
  },
  {
    name: "css",
    parsentage: 85,
    tag: [
      "color",
      "border",
      "margin",
      "padding",
      "width",
      "height",
      "background",
      "font",
      "text",
      "animation",
      "mediaQuary",
      "cursore",
      "flex",
      "grid",
      "before",
      "after",
      "...etc",
    ],
    style: "border-blue-500",
  },
  {
    name: "Javascript",
    parsentage: 90,
    tag: [
      "data type",
      "function",
      "array",
      "object",
      "Map",
      "Sets",
      "loop",
      "if-else",
      "turnaryOparation",
      "AddOparator",
      "orOparator",
      "Json",
      "async/await",
      "promises",
      "DOM",
      "BOM",
      "...etc",
    ],
    style: "border-yellow-500",
  },
  {
    name: "React",
    parsentage: 70,
    tag: [
      "useState",
      "useReduce",
      "useEffect",
      "props",
      "useContact",
      "ctreateContact",
      "memo",
      "useCallback",
      "Redux",
      "router",
      "...etc",
    ],
    style: "border-blue-600",
  },
  {
    name: "Tailwind",
    parsentage: 80,
    tag: [
      "color",
      "border",
      "margin",
      "padding",
      "width",
      "height",
      "background",
      "font",
      "text",
      "animation",
      "mediaQuary",
      "cursore",
      "flex",
      "grid",
      "before",
      "after",
      "...etc",
    ],
    style: "border-sky-400",
  },
  {
    name: "Next Js",
    parsentage: 1,
    tag: ["START LETER"],
    style: "border-blue-100",
  },
];

const SkilModalWindo = ({setModalWindow ,indexNumber}) => {
  return (
    <div
      className=" fixed left-[50%] top-[50%] w-screen h-screen cursor-pointer -translate-x-1/2 -translate-y-1/2 text-black z-50 bg-[rgba(0,0,0,0.7)]"
      onClick={() => setModalWindow(false)}
    >
      <div
        className={`grid md:grid-cols-2  grid-cols-1 gap-4 w-[75vw] md:w-[60vw] h-[50vh] lg:w-[50vw] ${skills[indexNumber].style} border-t-[10px] rounded-md absolute left-[50%] top-[50%]  -translate-x-1/2 -translate-y-1/2 bg-white `}
      >
        <div
          className={`flex justify-between p-4 font-CustomFont text-2xl font-bold md:col-span-2 `}
        >
          {skills[indexNumber].name} <small className=" cursor-pointer hover:text-red-600">&#x2716;</small>{" "}
        </div>
        <div className={`overflow-y-scroll px-5 flex flex-col   `}>
          {skills[indexNumber].tag.map((tagName, index) => (
            <div className="flex items-center justify-start gap-2 ">
              {" "}
              <strong>{index + 1}.</strong>{" "}
              <li key={tagName} className="list-none ">
                {tagName}
              </li>
            </div>
          ))}
        </div>
        <div
          className={`flex items-center justify-center p-1 gap-4 `}
        >
          <h1 className=" font-bold">Complete : </h1>
          <Circle parsentage={skills[indexNumber].parsentage} />
        </div>
      </div>
    </div>
  );
};

export default SkilModalWindo;
