"use client";

import GlassCard from "@/src/components/glassCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import projects from "@/lib/data/projects.json"

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNavigation = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const project = projects[currentIndex];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-white">
      
      {/* Background */}
        <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/background_placeholder.jpg')" }}
        >
            {/* Three.js Canvas goes here later */}
        </div>

        {/* Carousel Container */}
        <div className="items-center justify-center z-10 px-8">
            <div className="flex items-center gap-4">
            
            {/* Prev Button */}
            <button
                onClick={prev}
                className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 font-medium transition backdrop-blur flex-shrink-0"
            >
                ←
            </button>

            {/* Carousel Slide */}
            <div className="flex-1 flex justify-center min-w-280 min-h-160 rounded-lg overflow-hidden">
                <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-4xl"
                >
                    <GlassCard className="flex w-full h-full">
                      <div style={{overflow: "hidden" }}>
                          <img
                          className="w-full h-full object-cover"
                          src={project.image}
                          alt={project.title}
                          />
                      </div>

                      <div className="p-6 flex flex-col justify-between">
                          <div className="fit-content">
                          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                          
                          {/* Render the nested tags container securely */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags?.map((tag, tIndex) => (
                              <span 
                                key={tIndex} 
                                className="px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          
                          <p className="text-lg mb-6">{project.description}</p>
                          <button className="self-start rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700" onClick={() => handleNavigation(project.link)}>
                              Github Repo
                          </button>
                          </div>
                      </div>
                    </GlassCard>
                </motion.div>
                </AnimatePresence>
            </div>

            {/* Next Button */}
            <button
                onClick={next}
                className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 font-medium transition backdrop-blur flex-shrink-0"
            >
                →
            </button>
        </div>

        {/* Indicators */}
        <div className="flex gap-2 justify-center mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition ${
                index === currentIndex ? "bg-white w-8" : "bg-white/40 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}