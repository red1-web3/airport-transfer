import React from "react";
import RideInfoList from "./RideInfoList";
import { GrContactInfo } from "react-icons/gr";
import { GiCheckeredFlag } from "react-icons/gi";
import { TiLocationArrowOutline } from "react-icons/ti";
import { MdOutlineLocationDisabled } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi";
import { FaVenusDouble } from "react-icons/fa";
import { BsAlarm } from "react-icons/bs";

export default function () {
  return (
    <ul className="space-y-3">
      <p className="flex gap-3 items-center pb-2 border-b border-[#CBCBCB]">
        <span>
          <GrContactInfo size={28} className="!text-[#21324d]" />
        </span>
        <span className="capitalize">Your ride info</span>
      </p>
      <RideInfoList
        icon={<GiCheckeredFlag />}
        text="Outward Journey"
        color="#4FBDE6"
      />
      <RideInfoList
        icon={<TiLocationArrowOutline />}
        text="Antalya Airport (AYT), Antalya, Turkey"
        color="#0A1A34"
      />
      <RideInfoList
        icon={<MdOutlineLocationDisabled />}
        text="Yalova, Yalova Merkez/Yalova, Turkey"
        color="#0A1A34"
      />
      <RideInfoList icon={<BsCalendar3 />} text="5 Dec,2021" color="#0A1A34" />
      <RideInfoList icon={<BsAlarm />} text="12.00 (Pm)" color="#0A1A34" />
      <RideInfoList icon={<HiOutlineUsers />} text="2 Person" color="#0A1A34" />
      <RideInfoList
        icon={<FaVenusDouble />}
        text="122 Km/50 Miles"
        color="#0A1A34"
      />
      <RideInfoList icon={<IoIosTimer />} text="2 Hours" color="#0A1A34" />
    </ul>
  );
}
