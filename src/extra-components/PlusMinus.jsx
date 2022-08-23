import React from "react";
import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

export default function PlusMinus() {
  const [value, setValue] = useState(1);
  return (
    <div className="flex items-center text-primaryColor py-1 border border-primaryColor rounded-md">
      <span
        onClick={() => setValue((prev) => (prev === 1 ? 1 : prev - 1))}
        className="px-3 cursor-pointer"
      >
        <BiMinus />
      </span>
      {value}
      <span
        onClick={() => setValue((prev) => prev + 1)}
        className="px-3 cursor-pointer"
      >
        <BiPlus />
      </span>
    </div>
  );
}
