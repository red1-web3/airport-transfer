import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";

export default function PolicySection() {
  return (
    <section className="bg-primaryColor Color py-16">
      <div className="container-md flex flex-col gap-12 md:gap-8 lg:flex-row justify-start lg:justify-between items-center">
        <div className="md:w-[50%] text-white space-y-8">
          <h2 className="font-bold text-5xl lg:text-6xl">Privacy Policy</h2>
          <p className="text-[18px] text-center md:text-start">
            Aenean non accumsan ante. Duis et risus accumsan sem tempus porta
            nec sit amet est. Sed ut euismod quam. Suspendisse potenti. Aliquam
            fringilla orci tincidunt,
          </p>
        </div>
        <div className="space-y-5">
          <a
            href="#"
            className="flex gap-6 items-center bg-white px-5 text-primaryColor py-3 rounded-md"
          >
            <span>
              <FaPhoneAlt />
            </span>
            <span className="text-xl">+0928847955232</span>
          </a>
          <a
            href="#"
            className="flex gap-6 items-center bg-[#6B6B6B] px-5 text-white py-3 rounded-md"
          >
            <span>
              <GoMail size={20} />
            </span>
            <span className="text-xl">example@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
