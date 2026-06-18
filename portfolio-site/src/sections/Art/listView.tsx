import GridListToggle from "@/src/components/toggleGridList";
import posts from "@/lib/data/art.json"

interface Posts {
  activeTab: string
}

export default function ListView({ activeTab }: Posts) {
    const filtered = posts.post.filter((post) => post.tab === activeTab)
  return (
    <main className="flex justify-center px-8">
        <div className="min-w-lg min-w-lg">
            {filtered.map((post) => (
            <div
                key={post.id}
                className="mb-8 bg-white rounded-md text-black shadow-sm"
            >
                <img
                className={`w-full rounded-t-md aspect-[${post.aspectRatio}] object-cover`}
                src={post.src}
                />
                <p className="px-4 py-3 text-sm text-neutral-600">{post.caption}</p>
            </div>
            ))}
        </div>
    </main>
  )
}
