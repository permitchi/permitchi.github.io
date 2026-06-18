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
  <section className="flex flex-col min-h-screen text-white">
        <Navbar />
        <ArtTab activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="flex-1 mt-36 flex justify-center items-start">
          <div className={isGrid ? "block" : "hidden"}>
            <ListView activeTab={activeTab} />
          </div>
          <div className={isGrid ? "hidden" : "block"}>
            <GridView activeTab={activeTab} />
          </div>

          <GridListToggle isGrid={isGrid} onToggle={() => setIsGrid((prev) => !prev)} />
        </div>
        
        <Footer />
    </section>
  );
}