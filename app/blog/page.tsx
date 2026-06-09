import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { BlogCard } from "@/components/blog/BlogCard"
import { FadeIn } from "@/components/ui/FadeIn"
import { getAllPosts } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Journal — Heart Studio",
  description:
    "Reflections on yoga, wellbeing, and the practice of living with awareness. By Chan at Heart Studio, Da Nang.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navbar subpage />
      <main id="main-content">
        {/* Page header */}
        <section className="bg-hs-bg pt-32 pb-12 md:pt-44 md:pb-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <FadeIn>
              <p className="text-hs-olive text-xs font-medium tracking-widest uppercase mb-5">
                Journal
              </p>
              <div className="grid md:grid-cols-[5fr_7fr] gap-8 md:gap-16 items-end">
                <h1 className="text-hs-text">
                  Reflections on Practice&nbsp;&amp; Life
                </h1>
                <p className="text-hs-text-muted text-base leading-relaxed pb-1">
                  Thoughts on yoga, wellbeing, and the quiet wisdom that emerges
                  when we make space to notice.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-hs-border/70" />
        </div>

        {/* Post grid */}
        <section className="bg-hs-bg py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
