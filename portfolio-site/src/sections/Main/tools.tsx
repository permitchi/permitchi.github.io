"use client";

import GlassCard from "@/src/components/glassCard";
import { motion } from "framer-motion";

export default function Tools() {
  const icons = {
  python:   { file: "python.svg",    label: "Python" },
  html:     { file: "html.svg",      label: "HTML" },
  css:      { file: "css.svg",       label: "CSS" },
  js:       { file: "javascript.svg", label: "JavaScript" },
  react:    { file: "react.svg",     label: "React" },
  nextjs:   { file: "nextjs.svg",    label: "Next.js" },
  mysql:    { file: "mysql.svg",     label: "MySQL" },
  git:      { file: "git.svg",       label: "Git" },
  godot:    { file: "godot.svg",     label: "Godot" },
  tauri:    { file: "tauri.svg",     label: "Tauri" },
  electron: { file: "electron.svg",  label: "Electron" },
  canva:    { file: "canva.svg",     label: "Canva" },
  figma:    { file: "figma.svg",     label: "Figma" },
  csp:      { file: "csp.svg",       label: "Clip Studio Paint" },
  blender:  { file: "blender.svg",   label: "Blender" },
  aseprite: { file: "aseprite.svg",  label: "Aseprite" },
  capcut:   { file: "capcut.svg",    label: "CapCut" },
}
  
  const devTools = ["python", "html", "css", "js", "react", "nextjs", "mysql", "git", "godot", "tauri", "electron"]
  const artTools = ["canva", "figma", "csp", "blender", "aseprite"]
  const otherTools = ["capcut"]

  return (
    <section className="relative flex min-h-screen justify-center overflow-hidden bg-black text-white">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/background_placeholder.jpg')" }}>
        {/* Three.js Canvas goes here later */}
      </div>

      <GlassCard className="relative z-10 p-8 m-20 min-w-2xl max-w-3xl max-h-156">
        <motion.h1
          className="text-5xl font-bold p-4 border-b-2 border-white/20"
          initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Tools I use
        </motion.h1>
        <div className="max-h-100 overflow-auto">

          <div>
            <h1>Development</h1>

            <div className="flex flex-wrap gap-2 mb-4">
              {Object.entries(icons)
                .filter(([key]) => devTools.includes(key))
                .map(([key, { file, label }]) => (
                <div key={key} 
                className="icon-item">
                  <img src={`/icons/${file}`} alt={label} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1>Art</h1>

            <div className="flex flex-wrap gap-2 mb-4">
              {Object.entries(icons)
                .filter(([key]) => artTools.includes(key))
                .map(([key, { file, label }]) => (
                <div key={key} 
                className="icon-item">
                  <img src={`/icons/${file}`} alt={label} />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h1>Other</h1>

            <div className="flex flex-wrap gap-2 mb-4">
              {Object.entries(icons)
                .filter(([key]) => otherTools.includes(key))
                .map(([key, { file, label }]) => (
                <div key={key} 
                className="icon-item">
                  <img src={`/icons/${file}`} alt={label} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </GlassCard>
    </section>
  );
}