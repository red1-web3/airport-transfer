import React from "react";
import { MdAirlineSeatReclineNormal } from "react-icons/md";

export default function Seat({ icon, title, desc, cost }) {
  return (
    <div>
      <div className="flex items-center gap-1.5">
        <span className="text-primaryColor text-[36px]">{icon}</span>

        <div>
          <div className="flex items-center gap-2">
            <h6 className="text-primaryColor text-xl font-medium">{title}</h6>
            <span className="text-[13px] px-1.5 rounded-sm py-0.5 bg-secondayColor text-white leading-none">
              {cost}
            </span>
          </div>
          <p className="text-[13px] text-[#DEDEDE] font-extralight">{desc}</p>
        </div>
      </div>
    </div>
  );
}
