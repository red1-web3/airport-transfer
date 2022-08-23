import React from "react";
import { MdHomeRepairService } from "react-icons/md";

import { BiPlusMedical } from "react-icons/bi";
import {
  BsFillDoorOpenFill,
  BsShieldCheck,
  BsFillMoonFill,
} from "react-icons/bs";
import { FaUsers, FaRegHandshake } from "react-icons/fa";

const rowTwo = {
  title: "Economy",
  lists: [
    {
      icon: <FaUsers />,
      text: "Upto 3 Passanger",
      icon2: <MdHomeRepairService />,
      text2: "3 Suitcase",
    },
    {
      icon: <FaRegHandshake />,
      text: "Meet And Greet Included",
    },
    {
      icon: <BsFillMoonFill />,
      text: "Free Waiting Time",
    },
    {
      icon: <BsFillDoorOpenFill />,
      text: "Door To Door",
    },
    {
      icon: <BsShieldCheck />,
      text: "Safe Journey",
    },
  ],
  showMoreInfo: (
    <p className="flex items-center gap-1 !mt-8">
      <span className="text-primaryColor text-[14px]">
        <BiPlusMedical />
      </span>{" "}
      <span className="text-xs text-[#B8B8B8]"> Show More Information</span>
    </p>
  ),
};

export default function RowTwo() {
  const { lists, showMoreInfo, title } = rowTwo;
  return (
    <article className="space-y-2.5">
      <h3 className="text-2xl font-medium text-primaryColor">{title}</h3>
      <ul className="space-y-2.5">
        {lists.map((list) => {
          const { icon, text, icon2, text2 } = list;
          return (
            <li key={Math.random()}>
              <p className="flex gap-1 items-center">
                <span className="text-primaryColor text-[14px]">{icon}</span>
                <span className="text-xs text-[#B8B8B8]">{text}</span>
                <span className="text-primaryColor text-[14px]">{icon2}</span>
                <span className="text-xs text-[#B8B8B8]">{text2}</span>
              </p>
            </li>
          );
        })}
      </ul>
      {showMoreInfo}
    </article>
  );
}
