import React, { useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";

const items = [
  { value: "en", title: "english" },
  { value: "bn", title: "bangladesh" },
  { value: "ar", title: "arabic" },
  { value: "hn", title: "hindi" },
];

const currentScroll = window.scrollY;

export default function CustomSelect() {
  const [value, setValue] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", closeModalonScroll);

    return () => window.removeEventListener("scroll", closeModalonScroll);
  }, [isOpen]);

  const closeModalonScroll = () => {
    if (window.scrollY > currentScroll && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeModalonClick);
  }, []);

  const closeModalonClick = (e) => {
    if (e.srcElement.id !== "MODAL") {
      setIsOpen(false);
    }
  };

  return (
    <div id="MODAL" className="MODAL relative select-none z-50">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-white cursor-pointer"
      >
        <span>
          <MdLanguage size={25} />
        </span>
        <span id="MODAL" className="capitalize">
          {value}
        </span>
        <span>
          {isOpen ? <BsChevronUp size={12} /> : <BsChevronDown size={12} />}
        </span>
      </div>
      {isOpen && (
        <div className="MODAL absolute top-8 z-50 overflow-y-auto overflow-x-hidden h-[125px] -right-6 bg-slate-50 py-1 rounded-md before:h-5 before:aspect-square before:absolute before:left-1/2 before:-translate-x-1/2 before:-top-1 before:bg-white before:rotate-45 before:-z-10 before:rounded-sm">
          {items.map((item) => {
            return (
              <p
                id="MODAL"
                onClick={() => {
                  setValue(item.title);
                  setIsOpen(false);
                }}
                key={Math.random()}
                className="text-[#222] text-sm capitalize cursor-pointer duration-150 hover:text-[#444] animationTop px-3 py-1 hover:bg-slate-500/20"
              >
                {item.title}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
