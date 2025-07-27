"use client";
import { BackgroundBeams } from "./components/ui/background-beams";
import { Badge } from "./components/badge";
import { Hero } from "./components/hero";
import { AboutSection } from "./components/aboutSection";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className=" w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <Badge />
      <Hero />
      <AboutSection />
      <BackgroundBeams />
      <Footer />
    </div>
  );
}
