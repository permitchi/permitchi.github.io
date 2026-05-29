import Image from "next/image";

import Hero from "@/sections/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <h1 className="text-5xl font-bold p-10">
        <Hero />
      </h1>
    </main>
  );
}