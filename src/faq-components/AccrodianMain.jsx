import React from "react";
import AccrodianWrapper from "./AccrodianWrapper";
import AccrodinHeader from "./AccrodinHeader";

export default function AccrodianMain() {
  return (
    <section className="container-md space-y-10 md:pt-[100px] py-16 md:pb-[180px]">
      <AccrodinHeader />
      <AccrodianWrapper />
    </section>
  );
}
