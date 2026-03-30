import { PageTransition } from "@/components/core/PageTransition";
import { Navbar } from "@/components/core/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Vision } from "@/components/sections/Vision";
import { WhatWeWant } from "@/components/sections/WhatWeWant";
import { Projects } from "@/components/sections/Projects";
import { Roadmap } from "@/components/sections/Roadmap";
import { Board } from "@/components/sections/Board";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-frost min-h-screen selection:bg-accent/20 selection:text-ink">
      <PageTransition />
      <Navbar />
      
      <Hero />
      <WhoWeAre />
      <Vision />
      <WhatWeWant />
      <Projects />
      <Roadmap />
      <Board />
      <Contact />
    </main>
  );
}
