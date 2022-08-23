import React from "react";
import PlusMinus from "./PlusMinus";
import Seat from "./Seat";

export default function SingleSeat({ icon, title, desc, cost }) {
  return (
    <div className="flex justify-between items-center">
      <Seat icon={icon} title={title} desc={desc} cost={cost} />
      <PlusMinus />
    </div>
  );
}
