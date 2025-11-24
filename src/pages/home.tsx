import Everything from "../views/everything";
import HeroSection from "../views/hero-section";
import Partenaires from "../views/partenaires";
import PremierSection from "../views/premier-section";
import What from "../views/what";

export default function HomePage() {
  return (
    <div>
      <HeroSection/>
      <Partenaires />
      <PremierSection />
      <What />
      <Everything />
    </div>
  );
}
