import React, { useEffect, useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Navigation } from "swiper";
import SectionTitle from "./SectionTitle";
import "swiper/css/navigation";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";

const cars = [
  {
    img: "/img/Van-First-Class.png",
    title: "Van First Class",
    desc: "Up To 6 Passengers",
  },
  {
    img: "/img/Van-First-Class.png",
    title: "Economy Taxi",
    desc: "Up To 3 Passengers",
  },
  {
    img: "/img/Van-First-Class-2.png",
    title: "Van First Class",
    desc: "Up To 6 Passengers",
  },
  {
    img: "/img/Van-First-Class-2.png",
    title: "Van First Class",
    desc: "Up To 6 Passengers",
  },
  {
    img: "/img/Van-First-Class-2.png",
    title: "Van First Class",
    desc: "Up To 6 Passengers",
  },
];

export default function Slider() {
  return (
    <div className="space-y-7 container-md !my-20">
      <SectionTitle
        title="Our Car Categorys"
        desc="there have our car category which are on service"
      />
      <div className="relative">
        <div
          id={`navigationPrevRef`}
          className="absolute -bottom-14 md:bottom-0 md:top-1/2 left-1/2 -translate-x-[100%] md:translate-x-0 md:-translate-y-1/2 md:left-0 text-primaryColor cursor-pointer"
        >
          <ImArrowLeft2 size={28} />
        </div>

        <div
          id={`navigationNextRef`}
          className="absolute -bottom-14 md:bottom-0 md:top-1/2 right-1/2 translate-x-[100%] md:translate-x-0 md:-translate-y-1/2 md:right-0 text-primaryColor cursor-pointer"
        >
          <ImArrowRight2 size={28} />
        </div>
        <div className="carWrapper">
          <Swiper
            navigation={{
              prevEl: `#navigationPrevRef`,
              nextEl: `#navigationNextRef`,
            }}
            loop={true}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper w-[80%]"
          >
            {cars.map((car) => {
              const { img, title, desc, id } = car;
              return (
                <SwiperSlide key={Math.random()}>
                  <article>
                    <div className="flex flex-col items-center">
                      <div>
                        <img src={img} alt={img} />
                      </div>
                      <h5 className="text-primaryColor text-lg">{title}</h5>

                      <p className="text-[#9E9E9E]">{desc}</p>
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
