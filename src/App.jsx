import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import GridOverlay from "./components/global/GridOverlay";
import HomePage from "./pages/HomePage";

gsap.registerPlugin(useGSAP);

function App() {
  const container = useRef(null);
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "g") setShowGrid((v) => !v);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useGSAP(
    () => {
      gsap.from(".fade-in", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="min-h-svh bg-[#e8edef] font-satoshi text-black"
    >
      <GridOverlay visible={showGrid} />
      <HomePage />
    </main>
  );
}

export default App;
