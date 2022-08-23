import React from "react";

const data = [
  {
    icon: "/img/difference.svg",
    text: (
      <p className="text-sm text-secondayColor w-[70%] text-center">
        Best Price Guarantee. Found Your Transfer For Less?{" "}
        <strong className="!text-primaryColor">
          We'll Refund The Difference.
        </strong>
      </p>
    ),
  },
  {
    icon: "/img/Screenshot_11.svg",
    text: (
      <p className="text-sm text-secondayColor w-[70%] text-center">
        <strong className="!text-primaryColor">Free Cancellation</strong> Up To
        24 Hours Before Pickup.
      </p>
    ),
  },
  {
    icon: "/img/Screenshot_24.svg",
    text: (
      <strong className="!text-primaryColor text-sm w-[70%] text-center">
        All Prices Are Inclusive Of VAT And Local Taxes.
      </strong>
    ),
  },
];
export default function SingleBook() {
  return (
    <>
      {data.map(({ icon, text }) => {
        return (
          <div
            key={Math.random()}
            className="flex flex-col gap-3 items-center p-5"
          >
            <img
              className="text-primaryColor w-14 aspect-square"
              src={icon}
              alt="Image"
            />
            {text}
          </div>
        );
      })}
    </>
  );
}
