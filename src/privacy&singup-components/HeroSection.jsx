import classNames from "classnames";
import React from "react";
import { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import OurPrivacy from "./OurPrivacy";
import PolicySection from "./PolicySection";
import TermsCondition from "./TermsCondition";

const NavItem = [
  {
    text: "Privacy Policy",
    component: <OurPrivacy />,
  },
  {
    text: "Terms And Service",
    component: <TermsCondition />,
  },
];

export default function PrivacyMainSection() {
  const [cmpnt, setCmpnt] = useState(<OurPrivacy />);
  const [active, setActive] = useState(0);

  return (
    <div className="font-poppins space-y-24">
      <PolicySection />
      <section>
        <div className="container-md grid grid-cols-1 md:grid-cols-[258px,auto] gap-[44px]">
          <div>
            {NavItem.map(({ text, component }, i) => {
              return (
                <button
                  onClick={() => {
                    setActive(i);
                    return setCmpnt(component);
                  }}
                  key={i}
                  className={classNames(
                    "flex gap-3 justify-start px-3 items-center py-3 font-semibold text-xl text-[#6B6B6B] w-full rounded-sm",
                    active === i && "bg-primaryColor !text-white"
                  )}
                >
                  {text}
                  {active === i && (
                    <span>
                      <HiOutlineChevronRight />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          {cmpnt}
        </div>
      </section>
    </div>
  );
}
