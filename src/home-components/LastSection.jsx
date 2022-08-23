import React from "react";

const images = [
  "/img/Visa.svg",
  "/img/MasterCard.svg",
  "/img/Stripe.svg",
  "/img/PayPal.svg",
  "/img/Google_Pay.svg",
  "/img/Apple_Pay.svg",
];
export default function LastSection() {
  return (
    <section className="container-md py-5 flex items-center text-center flex-col space-y-10">
      <p className="text-[#0A1A34] font-medium text-xl md:w-[55%] lg:[45%]">
        Secure, Trusted And Integrated Payment Processing Using Leading Platform
      </p>

      <div className="grid translate-y-20 shadow md:translate-y-14 lg:grid gap-8 lg:gap-16 md:flex md:flex-wrap md:justify-around grid-cols-3 md:grid-cols-3 lg:grid-cols-6 items-center bg-white p-6 rounded-md">
        {images.map((image) => {
          return (
            <img
              src={image}
              className="w-[80px] md:w-[110px] lg:w-[140px]"
              alt={image}
              key={Math.random()}
            />
          );
        })}
      </div>
    </section>
  );
}
