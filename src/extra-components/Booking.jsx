import React from "react";
import { BiAlarmOff } from "react-icons/bi";
import { BsMusicNote, BsApple } from "react-icons/bs";
import { MdAlarmOn } from "react-icons/md";

export default function Booking() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="font-medium flex gap-2">
          <BsMusicNote className="text-secondayColor" />
          Your Booking Info
        </p>

        <p className="text-sm font-medium flex gap-2">
          <BsApple />
          Vehicle Category
        </p>
        <p className="pl-[23px] text-primaryColor">Economy</p>
      </div>

      <div className="space-y-2">
        <p className="capitalize font-medium">Total price</p>
        <p className="text-4xl text-primaryColor font-medium">$550</p>
        <p className="text-[#3FDF4B] flex gap-2 items-center text-sm">
          <MdAlarmOn />
          No hidded cost
        </p>
      </div>
    </div>
  );
}
