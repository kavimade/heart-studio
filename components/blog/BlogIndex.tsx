import { BlogCard } from "@/components/blog/BlogCard"
import { FadeIn } from "@/components/ui/FadeIn"
import type { Post } from "@/lib/blog"

export function BlogIndex({ posts }: { posts: Post[] }) {
  return (
    <section className="bg-hs-bg py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-[100px] items-start">

          {/* Sidebar */}
          <FadeIn className="lg:sticky lg:top-28">
            <p className="text-hs-olive text-xs font-medium tracking-widest uppercase mb-5">
              Blog
            </p>
            <h1 className="blog-sidebar-heading text-hs-text mb-5">
              Reflections on Practice&nbsp;&amp;&nbsp;Life
            </h1>
            <p className="text-hs-text-muted text-base leading-relaxed">
              Thoughts on yoga, wellbeing, and the quiet wisdom that emerges
              when we make space to notice.
            </p>
          </FadeIn>

          {/* Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {posts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} compact />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
