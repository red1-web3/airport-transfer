import React from "react";
import FreeCancelation from "../carPage-components/FreeCancelation";
import MainSection from "../carPage-components/MainSection";
import NavLinks from "../carPage-components/NavLinks";
import BookConfidence from "../details-components/BookConfidence";
import Form from "../details-components/Form";
import SideBarDetails from "../details-components/SideBarDetails";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import LastSection from "../home-components/LastSection";

export default function DetailsPage() {
  return (
    <>
      <Header color={false} />
      <FreeCancelation />
      <NavLinks />

      <MainSection sidebar={<SideBarDetails />}>
        <Form />
      </MainSection>
      <BookConfidence />
      <LastSection />
      <Footer />
    </>
  );
}
