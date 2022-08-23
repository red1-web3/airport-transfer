import React from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function Location() {
  return (
    <div className="p-4 bg-white container-md rounded-md md:!-mt-12">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="grid grid-cols-2 md:grid-cols-[22%,22%,15%,16%,8%,auto] gap-3 text-[#6E6E6E]"
      >
        <div className="bg-[#E2E2E2] py-4 px-[18px] rounded-md">
          <p className="flex items-center gap-2">
            <span>
              <ImLocation2 />
            </span>
            <span className="capitalize md:text-base text-sm">
              pickup Address:
            </span>
          </p>
          <input
            className="font-light text-sm md:text-base outline-none text-[#7F7F7F] bg-transparent placeholder:text-xs md:placeholder:text-base"
            type="text"
            placeholder="Address, Airport , Hotel..."
          />
        </div>
        <div className="bg-[#E2E2E2] py-4 px-[18px] rounded-md">
          <p className="flex items-center gap-2">
            <span>
              <ImLocation2 />
            </span>
            <span className="capitalize md:text-base text-sm">
              pickup Address:
            </span>
          </p>
          <input
            className="font-light text-sm md:text-base outline-none text-[#7F7F7F] bg-transparent placeholder:text-xs md:placeholder:text-base"
            type="text"
            placeholder="Address, Airport , Hotel..."
          />
        </div>
        <div className="bg-[#E2E2E2] py-4 px-[18px] rounded-md flex gap-2 items-center justify-center">
          <span>
            <HiOutlineCalendar />
          </span>
          <span className="capitalize text-sm md:text-base">pickup Date</span>
        </div>
        <div className="bg-[#E2E2E2] py-4 px-[18px] rounded-md flex items-center justify-center flex-col">
          <div className="flex items-center justify-end gap-2">
            <span>
              <HiOutlineCalendar />
            </span>
            <span className="capitalize text-sm md:text-base">ADD return</span>
          </div>
          <p className="font-light text-[#7F7F7F] self-end text-xs">optional</p>
        </div>
        <div className="bg-[#E2E2E2] space-y-2 py-4 px-[18px] rounded-md">
          <p className="relative">
            <FaUserAlt color="#111" size={18} />
            <FaUserAlt
              size={18}
              className="absolute top-0 -left-1.5 text-black/40"
            />
          </p>
          <p>2</p>
        </div>
        <button className="bg-primaryColor text-white text-base font-medium py-4 px-[18px] rounded-md uppercase flex items-center justify-center gap-2">
          <FiSearch size={22} />
          <input
            className="w-full bg-transparent outline-none placeholder:text-white placeholder:text-sm"
            type="text"
            placeholder="SEARCH"
          />
        </button>
      </form>
    </div>
  );
}
