import ClientSection from "../home-components/ClientSection";
import Header from "../header/Header";
import HeroSection from "../home-components/HeroSection";
import JourneySection from "../home-components/JourneySection";
import DownSection from "../home-components/DownSection";
import Location from "../home-components/Location";
import Slider from "../home-components/Swipper";
import WeHaveSection from "../home-components/WeHaveSection";
import WorkSection from "../home-components/WorkSection";
import LastSection from "../home-components/LastSection";
import Footer from "../footer/Footer";

export default function Home() {
  return (
    <>
      <section
        style={{
          backgroundImage: "url(./img/hero_image.jpg)",
          backgroundSize: "cover",
        }}
        className="h-[70vh] lg:h-[120vh] flex flex-col"
      >
        <Header color={true} />
        <HeroSection />
      </section>
      <main>
        <Location />
        <JourneySection />
        <Slider />
        <WorkSection />
        <WeHaveSection />
        <ClientSection />
        <DownSection />
        <LastSection />
        <Footer />
      </main>
    </>
  );
}
