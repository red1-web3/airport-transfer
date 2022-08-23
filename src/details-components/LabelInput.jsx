import React from "react";

export default function LabelInput({ label, icon }) {
  return (
    <>
      <div className="flex flex-col w-full space-y-1">
        <label
          className="text-[13px] capitalize text-secondayColor flex items-center gap-2"
          htmlFor={label}
        >
          {label}
          {icon}
        </label>
        <input
          className="bg-slate-200 p-3 rounded-sm outline-none focus:ring focus:ring-slate-200 focus:ring-offset-2"
          id={label}
          type="text"
        />
      </div>
    </>
  );
}
