"use client";

import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Work from "@/components/Work";
import TechStackNew from "@/components/TechStackNew";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import SocialIcons from "@/components/SocialIcons";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <SocialIcons />

      <Landing />
      <About />
      <WhatIDo />
      {/* 
        Ideally Work section uses ScrollTrigger pin. 
        Ensure it has enough height or proper container.
      */}
      <Work />
      <TechStackNew />
      <CallToAction />
      <Contact />
    </main>
  );
}
