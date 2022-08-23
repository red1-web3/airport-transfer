import React from "react";

export default function HeroSection() {
  return (
    <section className="flex flex-grow items-center">
      <div className="container-md flex justify-center items-center flex-col gap-8 md:gap-20">
        <div className="text-white text-center w-[85%] lg:w-[70%] space-y-1 md:space-y-3 lg:space-y-6">
          <p className="text-xl md:text-2xl lg:text-4xl">
            We Are Here To Give You A
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-[56px] font-bold">
            Reliable{" "}
            <span className="text-primaryColor">Airport Transfers</span>
          </h1>
          <p className="text-sm">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed,
            accumsan scelerisque dui. Morbi purus mauris, vulputate quis felis
            nec, fermentum aliquam orci. Quisque ornare iaculis placerat. Class
            aptent
          </p>
        </div>
        <a className="cursor-pointer scale-75 lg:scale-100">
          <img src="/img/go_down.png" alt="" />
        </a>
      </div>
    </section>
  );
}
