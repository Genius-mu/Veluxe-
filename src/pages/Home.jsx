import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Darling from "../components/Darling";
import Showcase from "../components/Showcase";
import Journey from "../components/Journey";
import StayInTouch from "../components/StayInTouch";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Darling />
      <Showcase />
      <Journey />
      <StayInTouch />
      <Footer />
    </main>
  );
}
