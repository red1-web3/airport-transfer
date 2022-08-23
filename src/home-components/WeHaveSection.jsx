import React from "react";

const data = [
  {
    amount: "3874",
    itemName: "VEHICLES STOCK",
  },
  {
    amount: "2999+",
    itemName: "DEALERS SERVED",
  },
  {
    amount: "1450+",
    itemName: "VEHICLES ON Ride",
  },
  {
    amount: "6403",
    itemName: "HAPPY CUSTOMERS",
  },
];

export default function WeHaveSection() {
  return (
    <section
      style={{
        background: "url(/img/we_have_bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
      className="py-14 flex items-center justify-center !my-20"
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-primaryColor text-4xl font-bold">We Have</h3>
          <p className="bg-black h-[2px] w-7"></p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {data.map(({ amount, itemName }) => {
            return (
              <div key={Math.random()}>
                <p className="font-semibold text-3xl text-[#0A1A34]">
                  {amount}
                </p>
                <p className="text-[#9E9E9E] font-medium">{itemName}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
