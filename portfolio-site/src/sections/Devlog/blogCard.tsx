import blogs from "@/lib/data/devlog.json"
import ReactMarkdown from "react-markdown"
import { notFound } from "next/navigation"
import fs from "fs"
import path from "path"

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = blogs.find(b => b.date === slug)
  
  if (!blog) notFound()

  const filePath = path.join(process.cwd(), "public", "blogs", `${slug}.md`)
  const content = fs.readFileSync(filePath, "utf-8")

  return (
    <div>
        <article className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags?.map((tag, i) => (
            <span key={i} className="px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded">
                {tag}
            </span>
            ))}
        </div>
        <div className="prose">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        </article>
    </div>
  )
}