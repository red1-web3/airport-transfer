import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";

export default function NoteForTravel() {
  return (
    <article className="px-[30px] py-5 space-y-2">
      <p className="flex item-center gap-2 font-medium text-primaryColor text-xl">
        Note For Travel
        <span>
          <FaQuestionCircle className="translate-y-1" />
        </span>
      </p>
      <p className="text-[11px] text-secondayColor font-extralight">
        From: Antalya Airport (AYT), Antalya, Turkey To: Yalova, Yalova
        Merkez/Yalova, Turkey
      </p>

      <textarea
        className="!ml-5 placeholder:text-[#DCDCDC] !mt-6 w-full p-3 resize-none outline-none text-secondayColor"
        placeholder="Right Here If You Have Any Spacial Request To Us We Will Try Make It Done For You"
      ></textarea>
    </article>
  );
}
