import React from "react";
import RideInfoList from "./RideInfoList";
import { BsCheckCircleFill } from "react-icons/bs";

export default function UnorderList2() {
  return (
    <ul className="text-secondayColor space-y-3">
      <RideInfoList
        icon={<BsCheckCircleFill />}
        text="Thousands Of Customer Served"
        color="#4FBDE6"
      />
      <RideInfoList
        icon={<BsCheckCircleFill />}
        text="Instant Confirmation"
        color="#4FBDE6"
      />
      <RideInfoList
        icon={<BsCheckCircleFill />}
        text="All Inclusive Pricing "
        color="#4FBDE6"
      />
      <RideInfoList
        icon={<BsCheckCircleFill />}
        text="Secure Payment By Credit Card,
          And Debit Card Or Paypal"
        color="#4FBDE6"
      />
    </ul>
  );
}
