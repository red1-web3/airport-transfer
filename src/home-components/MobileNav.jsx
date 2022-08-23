import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoAirplaneOutline } from "react-icons/io5";
import { FaCity } from "react-icons/fa";
import { BiTaxi } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import classNames from "classnames";
import { Link } from "react-router-dom";

export default function MobileNav({ isOpenNav, setIsOpenNav }) {
  return (
    <div
      className={classNames(
        "fixed top-0 left-0 h-full w-full bg-black/30 flex justify-end",
        isOpenNav
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      )}
    >
      <ul
        className={classNames(
          "w-[60%] bg-white py-6 duration-200 transition-transform",
          isOpenNav ? "translate-x-0" : "translate-x-full",
        )}
      >
        <button
          onClick={() => setIsOpenNav(!isOpenNav)}
          className="pt-1 pr-1 pl-[22px] pb-2 mb-3 bg-slate-300 rounded-r-md"
        >
          <MdOutlineClose size={28} color="#111" />
        </button>
        <li className="flex items-center gap-3 text-xl px-6 duration-150 hover:bg-slate-300 py-3 hover:text-[#fff] text-[#222] capitalize">
          <span>
            <AiOutlineHome size={25} />
          </span>
          <Link to="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="flex items-center gap-3 text-xl px-6 duration-150 hover:bg-slate-300 py-3 hover:text-[#e9e9e9] text-[#222] capitalize">
          <span>
            <IoAirplaneOutline size={25} />
          </span>
          <a href="#">airport taxi</a>
        </li>
        <li className="flex items-center gap-3 text-xl px-6 duration-150 hover:bg-slate-300 py-3 hover:text-[#fff] text-[#222] capitalize">
          <span>
            <FaCity size={25} />{" "}
          </span>
          <a href="#">city rides</a>
        </li>
        <li className="flex items-center gap-3 text-xl px-6 duration-150 hover:bg-slate-300 py-3 hover:text-[#fff] text-[#222] capitalize">
          <span>
            <BiTaxi size={25} />
          </span>
          <a href="#">Taxi</a>
        </li>
      </ul>
    </div>
  );
}
