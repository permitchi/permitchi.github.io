'use client';

import Hero from "@/src/sections/Main/hero";
import Projects from "@/src/sections/Main/projects";
import Media from "@/src/sections/Main/media";
import Tools from "@/src/sections/Main/tools";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash; // e.g. "#contact"
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <main className="min-h-screen text-white">
      <h1 className="text-5xl font-bold">
        <Navbar />
        <Hero />
        <Projects />
        <Media />
        <Tools />
        <Footer />
      </h1>
    </main>
  );
}