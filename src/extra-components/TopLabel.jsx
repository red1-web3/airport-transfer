import React from "react";
import { GiAirplaneDeparture } from "react-icons/gi";

export default function TopLabel() {
  return (
    <label htmlFor="inputTop" className="px-[30px] py-5 space-y-5">
      <div className="flex items-center gap-5 px-4">
        <GiAirplaneDeparture size={20} className="text-secondayColor" />
        <input
          type="text"
          id="inputTop"
          placeholder="Example : Lh0987h"
          className="py-1.5 px-2 outline-none placeholder:text-base placeholder:text-[#DCDCDC]"
        />
      </div>
      <p className="text-xs font-light text-[#DEDEDE]">
        Please Provide A Flight Number (The Driver Will Monitor Your Flight)
      </p>
    </label>
  );
}
