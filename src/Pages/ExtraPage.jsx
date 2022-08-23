import React from "react";
import FreeCancelation from "../carPage-components/FreeCancelation";
import MainSection from "../carPage-components/MainSection";
import NavLinks from "../carPage-components/NavLinks";
import Form from "../extra-components/Form";
import SideBarExtra from "../extra-components/SideBarExtra";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function ExtraPage() {
  return (
    <>
      <Header color={false} />
      <FreeCancelation />
      <NavLinks />

      <MainSection sidebar={<SideBarExtra />} title="Extra">
        <Form />
      </MainSection>

      <Footer />
    </>
  );
}
