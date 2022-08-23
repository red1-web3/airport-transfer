import React from "react";
import SignUpForm from "./SignUpForm";

export default function SignUpMainSection() {
  return (
    <section className="container-md md:container-rmv grid grid-cols-1 md:grid-cols-[665px,540px] gap-24">
      <div className="hidden md:block">
        <img src="/img/signup-illustrator.jpg" alt="" />
      </div>

      <div className="py-20 w-full">
        <SignUpForm />
      </div>
    </section>
  );
}
