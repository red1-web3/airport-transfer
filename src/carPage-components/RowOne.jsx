import React from "react";

import { AiFillStar } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";

const rowOne = {
  carImage: "/img/Van-First-Class-2.png",
  desc: "Skoda Octavia, Toyota Prius Or Similar.Image For IllustrativePurposes.",
  icnAndTitle: (
    <p className="text-secondayColor flex gap-2 items-center text-[15px]">
      <BsShieldCheck size={20} />
      Private Tranfer
    </p>
  ),
  reveiw: (
    <div className="flex gap-1 items-center">
      <p>5.0</p>
      <p className="flex gap-0.5 text-[#FFD013]">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </p>
    </div>
  ),
  service: (
    <p className="flex gap-1 items-center text-xs text-[#C2C1C1]">
      <img src="/img/service.png" alt="" /> Porter Sercvice
    </p>
  ),
};

export default function RowOne() {
  const { carImage, desc, icnAndTitle, reveiw, service } = rowOne;

  return (
    <article className="flex flex-col gap-2 md:w-[200px]">
      <div className="!mb-1 scale-110 translate-x-3 md:translate-x-0 md:scale-100 ">
        <img
          width={177}
          height={119}
          className={"object-cover"}
          src={carImage}
          alt="car image"
        />
      </div>
      <p className="text-xs text-[#C2C1C1] w-full">{desc}</p>
      {icnAndTitle}
      {reveiw}
      {service}
    </article>
  );
}
