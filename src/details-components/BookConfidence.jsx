import React from "react";
import SingleBook from "./SingleBook";

export default function BookConfidence() {
  return (
    <section className="container-md space-y-[46px] py-8 md:py-16">
      <h4 className="text-center text-[20px] font-medium capitalize">
        Book With Confidence
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SingleBook />
      </div>
    </section>
  );
}
