import React from "react";

export default function MainSection({ title, children, sidebar }) {
  return (
    <section className="container-md">
      <h3 className="text-2xl text-secondayColor mb-5 md:mb-0">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-[auto,300px] gap-3">
        {children}

        <div className=" sticky top-0 left-0">
          <div className="space-y-10 p-5">{sidebar}</div>
        </div>
      </div>
    </section>
  );
}
