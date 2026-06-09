import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { FadeIn } from "@/components/ui/FadeIn"
import { getPost, getAllSlugs, calcReadTime, calcExcerpt } from "@/lib/blog"
import type { PostBody } from "@/lib/blog"
import type { Metadata } from "next"

export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Heart Studio Blog`,
    description: calcExcerpt(post.body, post.excerpt),
  }
}

function RichText({ body }: { body: PostBody }) {
  return (
    <div className="prose-hs">
      <PortableText value={body} />
    </div>
  )
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  return (
    <>
      <Navbar subpage />
      <main id="main-content">
        {/* Hero image */}
        <div className="relative h-[52vh] md:h-[62vh] w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            loading="eager"
            className="object-cover"
            sizes="100vw"
          />
          <div className="hero-overlay" />
        </div>

        {/* Article body */}
        <div className="bg-hs-bg">
          <div className="max-w-2xl mx-auto px-6 md:px-8">

            {/* Category */}
            <FadeIn delay={0.06}>
              <span className="text-xs font-medium tracking-widest uppercase text-hs-olive pt-10 block">
                {post.category}
              </span>
            </FadeIn>

            {/* Title */}
            <FadeIn delay={0.1}>
              <h1 className="blog-post-title text-hs-text mt-4">{post.title}</h1>
            </FadeIn>

            {/* Author + read time */}
            <FadeIn delay={0.14}>
              <p className="text-hs-text-muted text-sm mt-5 mb-10">
                By {post.author}
                <span className="mx-2 text-hs-text-muted select-none">·</span>
                {calcReadTime(post.body)} min read
              </p>
            </FadeIn>

            <div className="h-px bg-hs-border/60 mb-10" />

            {/* Body */}
            <FadeIn delay={0.18}>
              <RichText body={post.body} />
            </FadeIn>

            {/* Bottom divider + back link */}
            <div className="h-px bg-hs-border/60 mt-14 mb-8" />

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-hs-text-muted hover:text-hs-olive text-sm pb-16 transition-colors"
            >
              <ArrowLeft size={14} aria-hidden />
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
