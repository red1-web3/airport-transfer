import React from "react";
import LabelInput from "./LabelInput";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { BsExclamationCircle, BsFillQuestionCircleFill } from "react-icons/bs";

export default function Form() {
  const [phone, setPhone] = useState("");
  return (
    <section>
      <h5 className="capitalize">passenger details</h5>
      <form className="py-12 md:px-8 px-3 space-y-5">
        <label
          htmlFor="checkbox"
          className="flex gap-3 !mb-6 items-center text-[15px] text-secondayColor"
        >
          <input id="checkbox" className="scale-110" type="checkbox" />
          Booking For Someon Elese
        </label>

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <LabelInput label={"first name"} />
            <LabelInput label={"last name"} />
          </div>
          <LabelInput label={"email address"} />
          <div className="space-y-1">
            <label
              htmlFor=""
              className="text-[13px] capitalize text-secondayColor"
            >
              Phone Number
            </label>
            <div className="bg-slate-200 rounded-sm md:w-1/2">
              <PhoneInput
                className="phoneInpt"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                country={"us"}
              />
            </div>
          </div>
        </div>
        <p className="flex items-center gap-2 text-[13px] font-light">
          <BsExclamationCircle />
          We Will Contact You Trough This Phone Number
        </p>
        <LabelInput
          label={"meet and greet"}
          icon={
            <BsFillQuestionCircleFill size={17} className="text-primaryColor" />
          }
        />
        <p className="flex items-center gap-2 text-[13px] font-light">
          <BsExclamationCircle />
          Write A Name That You Want To Sign
        </p>
      </form>
    </section>
  );
}
