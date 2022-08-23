import React from "react";
import { BiMessageRoundedError } from "react-icons/bi";
import { TbHelp } from "react-icons/tb";

const data = [
  {
    icon: <BiMessageRoundedError size={40} />,
    title: "Help Center",
    desc: "Frequently Aske Question",
  },
  {
    icon: <TbHelp size={40} />,
    title: "Need Help",
    desc: "Frequently Aske Question",
  },
];

export default function Help() {
  return (
    <article className="space-y-5 flex flex-col items-center">
      {data.map(({ desc, icon, title }) => {
        return (
          <div
            key={Math.random()}
            className="flex items-center gap-5 px-2 py-2"
          >
            <span className="text-primaryColor">{icon}</span>

            <div>
              <p className="text-primaryColor text-lg">{title}</p>
              <p className="text-secondayColor text-sm">{desc}</p>
            </div>
          </div>
        );
      })}
    </article>
  );
}
