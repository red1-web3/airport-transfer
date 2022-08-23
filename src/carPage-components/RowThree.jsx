import { list } from "postcss";
import React from "react";

import { MdOutlineCancel, MdOutlineMoneyOffCsred } from "react-icons/md";

const rowThree = {
  way: "Total One Way Price",
  price: "150$",
  list1: {
    icon: <MdOutlineCancel />,
    text: "Free Cancelation",
  },
  list2: {
    icon: <MdOutlineMoneyOffCsred />,
    text: "No Hidden Cost",
  },
};

export default function RowThree() {
  const { list1, list2, price, way } = rowThree;
  return (
    <article className="space-y-6">
      <p className="font-light text-xs text-[#B8B8B8] text-right">{way}</p>
      <div className="space-y-2">
        <p className="text-primaryColor text-5xl font-semibold">{price}</p>
        <li className="text-[#3FDF4B] flex gap-1 items-center">
          <span className="text-xl">{list1.icon}</span>
          <span className="text-[15px]">{list1.text}</span>
        </li>
        <li className="text-primaryColor flex gap-1 items-center">
          <span className="text-xl">{list2.icon}</span>
          <span className="text-[15px]">{list2.text}</span>
        </li>

        <button className="px-5 !mt-8 py-1 text-[15px] bg-primaryColor rounded-sm capitalize text-white duration-100 hover:translate-x-3">
          Select car
        </button>
      </div>
    </article>
  );
}
