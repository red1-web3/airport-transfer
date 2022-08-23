import React from "react";

export default function FooterChildren({ text }) {
  return (
    <li className="lg:text-base md:text-lg text-xl text-white">
      <a href="#">{text}</a>
    </li>
  );
}
