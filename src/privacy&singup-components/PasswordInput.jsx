import React from "react";
import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";

export default function PasswordInput() {
  const [type, setType] = useState(false);
  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        className="capitalize text-lg font-normal text-[#727272]"
        htmlFor="Password"
      >
        Password
      </label>
      <div className="relative">
        <input
          id="Password"
          className="p-3 w-full border outline-none border-[#727272] rounded-md placeholder:text-[#5D698D] placeholder:text-[17px]"
          type={type ? "text" : "password"}
          placeholder="hellowroldthisisbangaldesh"
        />

        <span
          onClick={() => setType((prev) => !prev)}
          className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
        >
          <AiFillEyeInvisible size={20} color={"#727272"} />
        </span>
      </div>
    </div>
  );
}
