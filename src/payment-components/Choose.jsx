import React from "react";

const images = [
  "/img/visa_small.png",
  "/img/mastercard_small.png",
  "/img/paypal_small.png",
  "/img/discover_small.png",
  "/img/google_pay_small.png",
  "/img/apple_pay_small.png",
];

export default function Choose() {
  return (
    <div className="pb-[100px] pt-12">
      <p className="text-lg text-primaryColor font-medium">
        Choose Payment Option
      </p>

      <div className="p-4 space-y-7">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {images.map((image) => {
            const unique = image.slice(5, 9);
            return (
              <label
                key={Math.random()}
                htmlFor={unique}
                className="flex items-center"
              >
                <input className="accent-red-700" type="radio" name="radio" />
                <img src={image} alt={unique} />
              </label>
            );
          })}
        </div>
        <div className="text-[15px] flex gap-2 items-center">
          <input type="checkbox" />I Accept The{" "}
          <span className="text-primaryColor">
            Terms And Service - Booking Condotion{" "}
          </span>{" "}
          And <span className="text-primaryColor">Privecy Policy</span>
        </div>

        <button className="text-sm text-white font-medium px-[100px] py-2 bg-primaryColor rounded-sm">
          Payment Process
        </button>
      </div>
    </div>
  );
}
