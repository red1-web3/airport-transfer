import React from "react";

export default function Buttons() {
  return (
    <div className="flex justify-end gap-2 mt-[65px]">
      <button
        type="button"
        className="py-1 px-6 rounded-sm border border-[#AEAEAE] text-[#AEAEAE]"
      >
        Skip
      </button>
      <button
        type="button"
        className="py-1 bg-primaryColor px-6 rounded-sm border border-primaryColor text-white"
      >
        Continue
      </button>
    </div>
  );
}
