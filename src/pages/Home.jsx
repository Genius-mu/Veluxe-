import Darling from "../components/Darling";
import Showcase from "../components/Showcase";
import Journey from "../components/Journey";
import StayInTouch from "../components/StayInTouch";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Darling />
      <Showcase />
      <Journey />
      <StayInTouch />
    </main>
  );
}
