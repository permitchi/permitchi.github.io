"use client";

import blogs from "@/lib/data/devlog.json"
import Link from "next/link"
  
export default function BlogGrid() {
    const truncate = (str: string, n: number) => 
    str.length > n ? `${str.slice(0, n).trimEnd()}...` : str

  return (
    <div className="flex">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blogs) => (
            <Link href={`/devlog/${blogs.date}`} key={blogs.id}>
                <div
                key={blogs.id}
                className="p-4 bg-white rounded-md text-black shadow-sm break-inside-avoid "
                >

                {/* header */}
                    <div className="border-b-2 border-black/20">
                        <h1 className="text-2xl">{truncate(blogs.title, 20)}</h1>
                        <div className="flex flex-wrap gap-4 my-4 text-lg">
                        {blogs.tags?.map((tag, tIndex) => (
                            <span 
                                key={tIndex} 
                                className="px-2 py-1 text-xs font-semibold bg-(--accent-light) text-(--foreground) rounded"
                            >
                                {tag}
                            </span>
                            ))}
                        </div>
                    </div> 
                    <p>{truncate(blogs.content, 25)}</p>
                </div>
            </Link>  
          ))}
        </div>
    </div>
  )
}
