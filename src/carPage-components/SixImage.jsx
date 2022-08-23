import React from "react";

const images = [
  "/img/visa_small.png",
  "/img/mastercard_small.png",
  "/img/paypal_small.png",
  "/img/discover_small.png",
  "/img/google_pay_small.png",
  "/img/apple_pay_small.png",
];

export default function SixImage() {
  return (
    <div className="grid grid-cols-3">
      {images.map((image) => {
        return (
          <div key={Math.random()} className="justify-self-center">
            <img src={image} alt="all cards" />
          </div>
        );
      })}
    </div>
  );
}
