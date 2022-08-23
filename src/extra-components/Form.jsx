import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import Buttons from "./Buttons";
import NoteForTravel from "./NoteForTravel";
import Seat from "./SeatMain";
import TopLabel from "./TopLabel";

export default function Form() {
  return (
    <section className="mt-8">
      <h5 className="capitalize text-primaryColor text-lg font-medium flex gap-2 items-center">
        fight numbers
        <AiFillQuestionCircle />
      </h5>
      <form>
        <TopLabel />
        <Seat />
        <NoteForTravel />
        <Buttons />
      </form>
    </section>
  );
}
