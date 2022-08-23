import classNames from "classnames";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const names = [
  {
    text: "Vehicle",
    url: "/car",
  },
  {
    text: "Extras",
    url: "/extra",
  },
  {
    text: "Details",
    url: "/details",
  },
  {
    text: "Payment",
    url: "/payment",
  },
];

export default function NavLinks() {
  return (
    <nav className="container-md my-14 flex justify-center">
      <ul className="flex gap-16 md:gap-40 scale-[.6] md:scale-100 md:overflow-hidden">
        {names.map((name, i) => {
          const { text, url } = name;

          return (
            <li key={Math.random()}>
              <NavLink
                to={url}
                className={classNames(
                  "text-base w-[90px] aspect-square rounded-full border flex justify-center items-center text-secondayColor relative before:absolute beofore:top-1/2 before:-translate-y-1/2 before:left-[105%] before:h-0.5 before:w-[154px] overflow-hidden md:overflow-visible border-[#A5A5A5] before:bg-[#A5A5A5]"
                )}
                activeclassname="active"
              >
                {text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
