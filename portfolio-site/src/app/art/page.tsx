"use client";

import "@/src/style/globals.css";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer"
import ArtTab from "@/src/sections/Art/artTab";
import ListView from "@/src/sections/Art/listView";


export default function Art() {
  return (
  <section className="min-h-screen text-white">
        <Navbar />
        <ArtTab />
        <ListView />
        <Footer />
    </section>
  );
}