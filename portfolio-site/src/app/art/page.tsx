"use client";

import { useState } from "react"  
import "@/src/style/globals.css";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer"
import ArtTab from "@/src/sections/Art/artTab";
import ListView from "@/src/sections/Art/listView";
import GridView from "@/src/sections/Art/gridView";
import GridListToggle from "@/src/components/toggleGridList";

type Tab = "3d" | "illustration" | "design"

export default function Art() {

  const [isGrid, setIsGrid] = useState(false)
  const [activeTab, setActiveTab] = useState<Tab>("3d")
  return (
  <section className="min-h-screen text-white">
        <Navbar />
        <ArtTab activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-36 flex justify-center items-start">
          <div className={isGrid ? "hidden" : "block"}>
            <ListView activeTab={activeTab} />
          </div>
          <div className={isGrid ? "block" : "hidden"}>
            <GridView activeTab={activeTab} />
          </div>

          <GridListToggle isGrid={isGrid} onToggle={() => setIsGrid((prev) => !prev)} />
        </div>
        
        <Footer />
    </section>
  );
}