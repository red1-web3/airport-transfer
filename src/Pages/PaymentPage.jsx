import React from "react";
import FreeCancelation from "../carPage-components/FreeCancelation";
import MainSection from "../carPage-components/MainSection";
import NavLinks from "../carPage-components/NavLinks";
import SideBarDetails from "../details-components/SideBarDetails";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import PayPage from "../payment-components/PayPage";

export default function PaymentPage() {
  return (
    <>
      <Header color={false} />
      <FreeCancelation />
      <NavLinks />

      <MainSection sidebar={<SideBarDetails />}>
        <PayPage />
      </MainSection>
      <Footer />
    </>
  );
}
