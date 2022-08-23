import React from "react";

export default function LabelInput({ label, placeholder }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        className="capitalize text-lg font-normal text-[#727272]"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        id={label}
        className="p-3 w-full border outline-none focus:outline border-[#727272] rounded-md placeholder:text-[#5D698D] placeholder:text-[17px]"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
