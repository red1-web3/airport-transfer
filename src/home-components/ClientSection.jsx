import React, { useEffect, useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Navigation } from "swiper";
import { AiFillStar } from "react-icons/ai";
import "swiper/css/navigation";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const user = [
  {
    speech:
      "Some days a motivational quote can provide a quick pick-me-up for employees and even management. They can be a breath of fresh air when it comes to a drab afternoon. ",
    img: "/img/profile.jpg",
    clientName: "Patrick Bell ",
    rating: 5.0,
  },
  {
    speech:
      "Some days a motivational quote can provide a quick pick-me-up for employees and even management. They can be a breath of fresh air when it comes to a drab afternoon. ",
    img: "/img/profile-2.png",
    clientName: "Patrick Bell  ",
    rating: 5.0,
  },
  {
    speech:
      "Some days a motivational quote can provide a quick pick-me-up for employees and even management. They can be a breath of fresh air when it comes to a drab afternoon. ",
    img: "/img/profile-3.png",
    clientName: "Patrick Bell ",
    rating: 5.0,
  },
  {
    speech:
      "Some days a motivational quote can provide a quick pick-me-up for employees and even management. They can be a breath of fresh air when it comes to a drab afternoon. ",
    img: "/img/profile.jpg",
    clientName: "Patrick Bell ",
    rating: 5.0,
  },
];

export default function ClientSection() {
  return (
    <section className="py-24 bg-primaryColor">
      <div className="container-md space-y-6">
        <div className="text-white space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">
            What our client's say
          </h2>
          <div className="flex gap-3 md:flex-row md:gap-0 flex-col justify-between">
            <p className="text-lg font-normal lg:w-[50%]">
              Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.
              Ut sit amet erat nec nibh .
            </p>
            <p className="text-lg font-semibold">
              4.7 out of 5 based on 846 reviews
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            id={`navigationPrevRef2`}
            className="absolute top-1/2 -translate-y-1/2 -left-12 cursor-pointer text-white hidden lg:block"
          >
            <HiOutlineArrowNarrowLeft size={32} />
          </div>

          <div
            id={`navigationNextRef2`}
            className="absolute top-1/2 -translate-y-1/2 -right-12 cursor-pointer text-white hidden lg:block"
          >
            <HiOutlineArrowNarrowRight size={32} />
          </div>
          <Swiper
            navigation={{
              prevEl: `#navigationPrevRef2`,
              nextEl: `#navigationNextRef2`,
            }}
            modules={[Navigation]}
            breakpoints={{
              // when window width is >= 640px
              580: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              730: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
            spaceBetween={30}
          >
            {user.map((user) => {
              const { clientName, img, rating, speech } = user;
              return (
                <SwiperSlide key={Math.random()}>
                  <article className="bg-white rounded-lg p-6 space-y-12">
                    <p className="w-[90%] text-sm font-normal text-black">
                      {speech}
                    </p>

                    <div className="flex items-center gap-3">
                      <img
                        width={50}
                        src={img}
                        alt={clientName}
                        className="aspect-square rounded-sm"
                      />
                      <div>
                        <p className="text-base text-black font-semibold">
                          {clientName}
                        </p>
                        <div className="flex gap-1 items-center">
                          <p className="flex gap-0.5 text-[#FFD013]">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                          </p>
                          <p>{rating}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
