import React from "react";

export default function CardComponents({ img, title, desc }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <img src={img} alt={title} />
      <h6 className="text-primaryColor text-lg font-medium">{title}</h6>
      <p className="font-light text-[#9F9F9F] text-center">{desc}</p>
    </div>
  );
}
