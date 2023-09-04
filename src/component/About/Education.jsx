import React, { useState } from "react";

const education = [
  {
    name: "secondary",
    year: "2010 - 2016",
    instituteName: "Dhoradaha Rajanikanta High School ",
    details:
      "After complete primary Education i addmition Dhoradaha Rajanikanta High School ( West bengal Board of Secondary Education ). 2010 to 2016 six year study in this school.This school is very beautyfull, every teachers are very good and loving. ",
  },
  {
    name: "Higher secondary",
    year: "2016 - 2018",
    instituteName: "Karimpur Jagannath High School",
    details:
      "After complete my madhyamic exam i addmition Karimpur Jagannath High School ( West bengal Board of Higher Secondary Education ) for learning Science stream . 2016 to 2018 two year year study in this school.This school is very beautyfull, every teachers are very good and loving this school is so far from my home . Home to school distance 7km .I go to school by cycle.",
  },
  {
    name: "College",
    year: "2020 - 2023",
    instituteName: "Domkal college (University of kalayani)",
    details:
      "After complete my school lable study i  addmition Domkal college (University of kalayani) for learning B.sc Computer Science . 2020 to 2023 three year study in this college.This college is very beautyfull, every teachers are very good and loving this college is so far from my home . Home to school distance 23km .I go to school by bus.",
  },
];

const Education = () => {
  const [showDetails , setShowDetails] = useState(null);
  return (
    <div className=" w-full gap-2 grid  grid-cols-1 items-start">
      {education.map((item, index) => (
        <div
          key={item.name}
          className={`p-3 bg-indigo-950 rounded-md ${
            index === showDetails ? "border-green-500 border-t-2" : ""
          } cursor-pointer `}
          onClick={() =>
            setShowDetails((value) =>
              value === Number(`${index}`) ? null : Number(`${index}`)
            )
          }
        >
          <h1 className="  flex items-center justify-between pb-2">
            <span className=" capitalize font-CustomFont1 ">{item.name}</span>
            <small className="text-lg">
              {index === showDetails ? "-" : "+"}
            </small>
          </h1>
          {index === showDetails && (
            <div className="border-t-2 border-indigo-800 py-1 flex flex-col gap-2">
              <strong>
                {" "}
                <span className=" text-lg">Institution :</span> {item.instituteName}
              </strong>
              <p><span>Year :</span> {item.year}</p>
              <p className=" text-sm"><span className=" text-base">Details : </span> {item.details}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Education;
