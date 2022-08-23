import React from "react";
import LabelInput from "./LabelInput";
import PasswordInput from "./PasswordInput";
import { BiCheck } from "react-icons/bi";

export default function SignUpForm() {
  return (
    <div className="space-y-10">
      <div>
        <p className="text-primaryColor font-medium">Sing UP</p>
        <p className="text-2xl font-bold text-[#727272]">
          Sign Up for an Account
        </p>
      </div>

      <form className="space-y-7">
        <div className="flex flex-col md:flex-row gap-5">
          <LabelInput label="first name" placeholder="first name" />
          <LabelInput label="last name" placeholder="last name" />
        </div>

        <div className="space-y-4">
          <p className="text-lg font-medium text-[#727272]">Select Gender</p>

          <div className="flex gap-5 items-center">
            <div className="flex items-center gap-2">
              <input name="same" id="male" type="radio" />
              <label className="text-[#727272]" htmlFor="male">
                Male
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input name="same" id="female" type="radio" />
              <label className="text-[#727272]" htmlFor="female">
                Female
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input name="same" id="other" type="radio" />
              <label className="text-[#727272]" htmlFor="other">
                Other
              </label>
            </div>
          </div>
        </div>
        <LabelInput label={"email"} placeholder={"example@gmail.com"} />
        <PasswordInput />

        <p className="flex text-sm md:text-base gap-3 items-center">
          <span className="flex gap-3 items-center">
            <BiCheck size={18} className="text-primaryColor" />I accept
            MyTransfer
          </span>
          <span className="text-primaryColor">Terms {`&`} Conditions</span>
        </p>

        <button className="bg-primaryColor block w-full py-2 rounded-md text-white font-medium">
          Let's Go
        </button>
      </form>
    </div>
  );
}
