import blogs from "@/lib/data/devlog.json"
import ReactMarkdown from "react-markdown"
import { notFound } from "next/navigation"
import fs from "fs"
import path from "path"
import Link from "next/link"

import Navbar from "@/src/components/navbar"
import Footer from "@/src/components/footer"
import BlogNav from "@/src/sections/Devlog/blogNav"

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = blogs.find(b => b.date === slug)
  
  if (!blog) notFound()

  const filePath = path.join(process.cwd(), "public", "blogs", `${slug}.md`)
  const content = fs.readFileSync(filePath, "utf-8")

  return (
    <div className="flex flex-col min-h-screen bg-(--primary-dark)">
        <Navbar />
        
        <div className="flex-1 mt-32 mb-16 max-w-4xl mx-auto">
            <Link href="/devlog" className="text-(--background) text-xl">← Back to all</Link>
                <article className="mt-4 flex ">
                    <div className="min-w-4xl p-4 bg-white rounded-md text-black shadow-sm break-inside-avoid">
                    
                    {/* header */}
                    <div className="border-b-2 border-black/20">
                        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
                        <div className="flex justify-between gap-4 my-4 text-lg">
                            <div className="flex flex-start">
                                {blog.tags?.map((tag, i) => (
                                <span key={i} className="px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded">
                                    {tag}
                                </span>
                                ))}
                            </div>

                            <p className="underline">{blog.date}</p>
                        </div>
                    </div>

                    {/* content     */}
                    <div className="prose text-xl p-4">
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </div>

                    <BlogNav slug={slug} />
                    
                    </div>
                </article>
            </div>
        <Footer />
    </div>
  )
}

