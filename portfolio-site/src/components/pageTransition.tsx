"use client"
import { useEffect, useState } from "react"

export default function PageTransition() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 800)
    return () => clearTimeout(timer)
  }, []) // empty dep array = runs once on mount

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-(--primary-dark) transition-opacity duration-500 pointer-events-none ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <span className="text-4xl font-bold tracking-widest text-white animate-pulse">
        loading
      </span>
    </div>
  )
}