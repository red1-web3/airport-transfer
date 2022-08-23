import React from "react";
import FreeCancelation from "../carPage-components/FreeCancelation";
import MainSection from "../carPage-components/MainSection";
import NavLinks from "../carPage-components/NavLinks";
import Header from "../header/Header";
import WorkSection from "../home-components/WorkSection";
import LastSection from "../home-components/LastSection";
import Footer from "../footer/Footer";
import CarMainComonent from "../carPage-components/CarMainComonent";
import CarSideBar from "../carPage-components/CarSideBar";

export default function CarsPage() {
  return (
    <>
      <Header color={false} />
      <FreeCancelation />
      <NavLinks />
      <main>
        <MainSection title="Available Cars" sidebar={<CarSideBar />}>
          <CarMainComonent />
        </MainSection>
        <WorkSection />
        <LastSection />
      </main>
      <Footer />
    </>
  );
}
