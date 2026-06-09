import Image from "next/image"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { BlogIndex } from "@/components/blog/BlogIndex"
import { getAllPosts } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog — Heart Studio",
  description:
    "Reflections on yoga, wellbeing, and the practice of living with awareness. By Chan at Heart Studio, Da Nang.",
}

export const revalidate = 60

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <>
      <Navbar subpage />
      <main id="main-content">
        {/* Hero image */}
        <div className="relative h-[44vh] md:h-[53vh] w-full overflow-hidden">
          <Image
            src="/images/heart-studio-yoga-classes-danang-blog-hero.webp"
            alt="Heart Studio — Blog"
            fill
            priority
            loading="eager"
            className="object-cover object-top md:[object-position:center_-200px]"
            sizes="100vw"
          />
          <div className="hero-overlay" />
        </div>

        <BlogIndex posts={posts} />
      </main>
      <Footer />
    </>
  )
}
