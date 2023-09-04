import React, { useEffect } from "react";

const Circle = ({ parsentage }) => {
  let Width;
  let Redius;
  if (window.innerWidth < 600  ) {
    Width = 120;
    Redius = 40;
  } else if (window.innerWidth > 600) {
    Width = 150;
    Redius = 50;
  }

  const Height = Width;

  return (
    <svg width={Width} height={Height}>
      <circle
        r={Redius}
        cx={Width / 2}
        cy={Height / 2}
        fill="transparent"
        stroke="#94a3b8"
        strokeWidth="20"
      />
      <circle
        r={Redius}
        cx={Width / 2}
        cy={Height / 2}
        fill="transparent"
        stroke="green"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={2 * Math.PI * Redius}
        strokeDashoffset={
          2 * Math.PI * Redius - (2 * Math.PI * Redius * parsentage) / 100
        }
        transform={`rotate(-90 ${Width / 2} ${Height / 2})`}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy="0.5rem"
        className=" font-bold"
      >
        {parsentage}%
      </text>
    </svg>
  );
};

export default Circle;
