"use client";

import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer"
import BlogGrid from "@/src/sections/Devlog/blogGrid";

export default function DevLog() {
  return (
    <section className="flex flex-col min-h-screen bg-(--primary-dark)">
        <Navbar />
        
        <div className="flex-1 mt-32 mb-16 max-w-4xl mx-auto px-4">
          <h1 className="mb-4 text-(--background) text-5xl">Devlog</h1>
          <BlogGrid />  
        </div>
        
        <Footer />
    </section>
  );
}