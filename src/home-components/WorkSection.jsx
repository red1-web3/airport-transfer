import React from "react";
import { FaRegHeart } from "react-icons/fa";
import CardComponents from "./CardComponents";
import SectionTitle from "./SectionTitle";

const items = [
  {
    img: "/img/select_car_icon.svg",
    title: "Enter Your Route And Select Car",
    desc: "Immediate confirmation, all-inclusive rates – no extra costs, no cash required",
  },
  {
    img: "/img/book_form_icon.svg",
    title: "Complete Booking Form",
    desc: "Enter the details of the lead passenger, add extras if you wish. Proceed to payment and receive your voucher",
  },
  {
    img: "/img/meet_driver_icon.svg",
    title: "Meet Your Driver",
    desc: "You will receive your driver's details 3 hours prior to pickup and he will be waiting for you on-site with a Name Sign.",
  },
];

export default function WorkSection() {
  return (
    <div className="space-y-12 !my-20 container-md">
      <SectionTitle
        title="How Does It Work"
        desc="Lets Know How To Book A Car From Our Website"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {items.map(({ img, title, desc }) => {
          return (
            <CardComponents
              img={img}
              title={title}
              desc={desc}
              key={Math.random()}
            />
          );
        })}
        <div className="bg-primaryColor rounded-lg flex items-center gap-5 justify-center flex-col h-full py-12 md:py-0">
          <div className="bg-white h-24 rounded-full aspect-square flex items-center justify-center">
            <span className="text-primaryColor">
              <FaRegHeart size={30} />
            </span>
          </div>
          <p className="text-lg font-medium text-white">Done For Ride</p>
        </div>
      </div>
    </div>
  );
}
