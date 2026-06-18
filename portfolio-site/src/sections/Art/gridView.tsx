import posts from "@/lib/data/art.json"

interface Posts {
  activeTab: string
}

export default function GridView({ activeTab }: Posts) {
    const filtered = posts.post.filter((post) => post.tab === activeTab)
  return (
    <main className="flex mb-8 justify-center px-8">
        <div className="w-full min-w-lg max-w-lg grid grid-cols-2 md:grid-cols-3">        
         {filtered.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-md text-black shadow-sm break-inside-avoid"
          >
            <img
              className={`w-full rounded-t-md aspect-[${post.aspectRatio}] object-cover`}
              src={post.src}
            />
          </div>
        ))}
      </div>
    </main>
  )
}