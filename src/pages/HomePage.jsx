import Hero from "../components/hero/Hero";
import Pelajari from "../components/sections/Pelajari";
import Foundation from "../components/sections/Foundation";
import Levels from "../components/sections/Levels";
import Reviews from "../components/sections/Reviews";
import Community from "../components/sections/Community";
import Faq from "../components/sections/Faq";
import Cta from "../components/sections/Cta";
import Footer from "../components/sections/Footer";

/**
 * Home / landing page. Corresponds to the Figma "HOME + NAVBAR" frame plus the
 * scrolling sections below it. Sections render top-to-bottom in this order;
 * each lives in its own file under `src/components/sections/`.
 */
function HomePage() {
  return (
    <>
      <Hero />
      <Pelajari />
      <Foundation />
      <Levels />
      <Reviews />
      <Community />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}

export default HomePage;
