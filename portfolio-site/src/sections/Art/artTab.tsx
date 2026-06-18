"use client"
import { useState } from "react"

type Tab = "3d" | "illustration" | "design"

const tabs: { label: string; value: Tab }[] = [
  { label: "3D", value: "3d" },
  { label: "Illustration", value: "illustration" },
  { label: "Design", value: "design" },
]

interface ArtTabProps {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}

export default function ArtTab({ 
  activeTab, onTabChange 
}: ArtTabProps) {
  return (
    <nav className="bg-(--background) shadow-md fixed w-full z-15 top-16 left-0">
      <div className="flex text-(--secondary) items-center justify-center gap-24 h-12">
        {tabs.map((tab) => (
          <a
            key={tab.value}
            onClick={() => onTabChange(tab.value)}
            className={`cursor-pointer transition-colors ${
              activeTab === tab.value
                ? "text-(--primary) font-medium underline"
                : "hover:text-(--primary)"
            }`}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </nav>
  )
}