import React from "react";

import RowOne from "./RowOne";
import RowThree from "./RowThree";
import RowTwo from "./RowTwo";

export default function CarComponent({ popular }) {
  return (
    <div className="bg-primaryColor/20 p-5 md:p-0 md:bg-transparent">
      {popular && (
        <p className="px-4 py-0.5 capitalize bg-primaryColor rounded-sm text-white w-fit">
          popular
        </p>
      )}
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between md:px-[45px] h-fit md:py-[50px]">
        <RowOne />
        <span className="w-px bg-[#C5C5C5]"></span>
        <RowTwo />
        <span className="w-px bg-[#C5C5C5]"></span>
        <RowThree />
      </div>
    </div>
  );
}
