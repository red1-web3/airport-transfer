import React from "react";

export default function RideInfoList({ icon, text, color }) {
  return (
    <li className="flex items-center gap-3 text-secondayColor">
      <span className="text-primaryColor text-[16px]">{icon}</span>
      <p style={{ color: color }}>{text}</p>
    </li>
  );
}
