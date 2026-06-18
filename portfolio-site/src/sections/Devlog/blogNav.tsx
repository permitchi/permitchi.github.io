"use client"
import { useRouter } from "next/navigation"
import blogs from "@/lib/data/devlog.json"

export default function BlogNav({ slug }: { slug: string }) {
  const router = useRouter()
  const currentIndex = blogs.findIndex(b => b.date === slug)
  
  const next = blogs[currentIndex - 1]
  const prev = blogs[currentIndex + 1]

  return (
    <div className="flex items-center justify-between">
      <button
        onClick={() => next && router.push(`/devlog/${next.date}`)}
        disabled={!next}
        className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 font-medium transition backdrop-blur flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        ← Next 
      </button>
      <button
        onClick={() => prev && router.push(`/devlog/${prev.date}`)}
        disabled={!prev}
        className="rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 font-medium transition backdrop-blur flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Prev →
      </button>
    </div>
  )
}