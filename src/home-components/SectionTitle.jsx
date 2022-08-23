import React from "react";

export default function SectionTitle({ title, desc }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <h3 className="lg:text-3xl text-2xl text-primaryColor font-bold">
        {title}
      </h3>
      <p className="text-lg font-light text-[#0A1A34] text-center w-[80%] lg:w-[32%]">
        {desc}
      </p>
    </div>
  );
}
