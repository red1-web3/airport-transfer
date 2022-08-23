import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { AiFillStar } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";

const data = [
  {
    title: "Testimonials",
    totalREV: "4.7 out of 5 based on 846 reviews",
    subTitle: "Client Says",
    desc: "Some days a motivational quote can provide a quick pick-me-up for employees and even management. They can be a breath of fresh air when it comes to a drab afternoon.",

    userProfile: {
      img: "/img/profile.jpg",
      clientName: "patrick bell",
      rating: 5.0,
    },
  },
  {
    title: "Testimonials",
    totalREV: "4.7 out of 5 based on 846 reviews",
    subTitle: "Client Says",
    desc: "Some days a motivational quote can provide a quick pick-me-up for employees and even management. They can be a breath of fresh air when it comes to a drab afternoon.",

    userProfile: {
      img: "/img/profile-2.png",
      clientName: "crimson kayle",
      rating: 5.0,
    },
  },
  {
    title: "Testimonials",
    totalREV: "4.7 out of 5 based on 846 reviews",
    subTitle: "Client Says",
    desc: "Some days a motivational quote can provide a quick pick-me-up for employees and even management. They can be a breath of fresh air when it comes to a drab afternoon.",

    userProfile: {
      img: "/img/profile-3.png",
      clientName: "qarbi baqel",
      rating: 5.0,
    },
  },
];

export default function Testimonial() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        autoplay
      >
        {data.map(({ desc, subTitle, title, totalREV, userProfile }) => {
          const { clientName, img, rating } = userProfile;
          return (
            <SwiperSlide key={Math.random()}>
              <article className="p-5 space-y-8 select-none bg-white">
                <div className="space-y-4">
                  <h6 className="text-lg text-primaryColor">{title}</h6>
                  <p className="text-sm ">{totalREV}</p>

                  <p className="text-primaryColor font-bold text-[15px]">
                    {subTitle}
                  </p>
                  <p className="text-sm text-black">{desc}</p>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    width={40}
                    src={img}
                    alt={clientName}
                    className="aspect-square rounded-sm"
                  />
                  <div>
                    <p className="text-base capitalize text-black font-semibold">
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
    </>
  );
}
