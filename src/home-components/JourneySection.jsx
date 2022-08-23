import React from "react";
import CardComponents from "./CardComponents";
import SectionTitle from "./SectionTitle";

const items = [
  {
    img: "/img/safe_secure_icon.svg",
    title: "Safe And Secure Travel",
    desc: "Our drivers regularly sanitize vehicles, wear masks and comply with all local laws",
  },
  {
    img: "/img/wait_time_icon.svg",
    title: "Complimentary Wait Time",
    desc: "Take your time, with 1 hour of complimentary wait time and flight tracking.",
  },
  {
    img: "/img/clear_price_icon.svg",
    title: "Clear Price",
    desc: "Immediate confirmation, all-inclusive rates – no extra costs, no cash required",
  },
  {
    img: "/img/professional_drivers_icon.svg",
    title: "Professional Drivers",
    desc: "Reach your destination safely and relaxed with a licensed, insured and professional chauffeur.",
  },
];

export default function JourneySection() {
  return (
    <section className="container-md space-y-14 !my-20">
      <SectionTitle
        title="Ride A Safe Journey"
        desc="Our car booking company is very proffestional and secure agency"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {items.map(({ img, title, desc }) => {
          return (
            <CardComponents
              img={img}
              title={title}
              desc={desc}
              key={Math.random()}
            />
          );
        })}
      </div>
    </section>
  );
}
