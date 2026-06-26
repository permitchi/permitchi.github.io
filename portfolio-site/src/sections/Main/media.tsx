"use client";

import GlassCard from "@/src/components/glassCard";
import { motion } from "framer-motion";

export default function Media() {
  return (
    <section className="relative flex min-h-screen items-center justify-start overflow-hidden bg-black text-white">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/background_placeholder.jpg')" }}>
        {/* Three.js Canvas goes here later */}
      </div>

      <GlassCard className="relative z-10 p-12 m-20 max-w-lg">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I'm Permitchi!
        </motion.h1>
        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          a computer science student in Indonesia. <br />
          Aside from that I do other art related stuff <br />
          and aspire to create my own game one day!
        </motion.p>

         <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105">
            View Projects
          </button>

          <button className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur transition hover:bg-white/10">
            Contact
          </button>
        </motion.div>
      </GlassCard>
    </section>
  );
}