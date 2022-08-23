import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import CustomSelect from "../customItems/CustomSelect";
import { Link } from "react-router-dom";

export default function LoginAndRegister({ color }) {
  return (
    <div
      style={{ backgroundColor: color ? "transparent" : "#0A1A34" }}
      id="headerTop"
      className="border-b border-slate-400 py-2"
    >
      <div className="flex justify-between container-md">
        <div className="flex items-center text-white gap-4">
          <a href="#">
            <HiOutlineMail size={22} />
          </a>
          <p className="hidden md:block">example@gmail.com</p>
        </div>
        <div className="flex gap-4 md:gap-10">
          <div className="flex gap-1 items-center">
            <CustomSelect />
          </div>
          <div className="text-white flex gap-3 text-sm items-center py-2">
            <a className="flex items-center gap-1 border-r-2 pr-3" href="#">
              <FaRegUserCircle color="#4FBDE6" size={20} />
              Login
            </a>
            <Link to="/signup">
              <a>Register</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
