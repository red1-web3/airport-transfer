import React from "react";

const data = {
  img: "/img/Screenshot_11.svg",
  title: "Free Cancelation 24/7",
  desc: "Book today, lock the price. You can cancel for free within the 29 November 2021 and get a full refund of the transfer.",
};
export default function FreeCancelation() {
  const { img, desc, title } = data;
  return (
    <section className="bg-primaryColor py-5">
      <div className="container-md hidden md:flex items-center gap-3 ">
        <div>
          <img className="aspect-square" width={55} src={img} alt={title} />
        </div>
        <div className="text-white space-y-1">
          <h4 className="text-2xl">{title}</h4>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
      <div className="container-md space-y-2 md:hidden">
        <div className="flex items-center gap-4">
          <img className="aspect-square" width={25} src={img} alt={title} />
          <h4 className="text-lg text-white">{title}</h4>
        </div>

        <p className="text-xs text-white">{desc}</p>
      </div>
    </section>
  );
}
