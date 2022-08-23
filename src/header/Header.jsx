import React from "react";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

export default function Header({ color }) {
  return (
    <div id="headerParent">
      <HeaderTop color={color} />
      <HeaderBottom color={color} />
    </div>
  );
}
