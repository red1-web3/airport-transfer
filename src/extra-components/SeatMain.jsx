import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { GiSeatedMouse } from "react-icons/gi";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import SingleSeat from "./SingleSeat";

export default function SeatMain() {
  return (
    <article className="p-12 space-y-8 select-none">
      <SingleSeat
        icon={<MdAirlineSeatReclineNormal />}
        title={"Child Seat"}
        desc={"Suitable For Toddlers Weighing 0-18 Kg (Approx 0 To 4 Years)."}
        cost={"free"}
      />

      <SingleSeat
        icon={<GiSeatedMouse />}
        title={"Booster Seat"}
        desc={"Suitable For Toddlers Weighing 0-18 Kg (Approx 0 To 4 Years)."}
        cost={"free"}
      />
      <p className="font-extralight text-secondayColor flex gap-2">
        <AiOutlineExclamationCircle />
        <span className="text-[11px]">
          Please Write Into The "Notes For The Chauffeur" The Age And Weight Of
          Your Child/S In Order To Provide An Appropriate Device.
        </span>
      </p>
    </article>
  );
}
