import Everything from "../views/everything";
import Header from "../views/header";
import HeroSection from "../views/hero-section";
import Partenaires from "../views/partenaires";
import PremierSection from "../views/premier-section";
import What from "../views/what";

export default function HomePage() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Partenaires />
      <PremierSection />
      <What />
      <Everything />
    </div>
  );
}
