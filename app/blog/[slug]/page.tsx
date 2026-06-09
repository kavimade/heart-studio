import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { FadeIn } from "@/components/ui/FadeIn"
import { getPost, getAllPosts } from "@/lib/blog"
import type { PostBlock } from "@/lib/blog"
import type { Metadata } from "next"

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Heart Studio Journal`,
    description: post.excerpt,
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

function BackArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M12 7H2M6 3L2 7l4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function RichText({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="prose-hs">
      {blocks.map((block, i) => {
        if (block._type === "paragraph") {
          return <p key={i}>{block.text}</p>
        }
        if (block._type === "heading") {
          if (block.level === 3) return <h3 key={i}>{block.text}</h3>
          return <h2 key={i}>{block.text}</h2>
        }
        if (block._type === "blockquote") {
          return <blockquote key={i}>{block.text}</blockquote>
        }
        return null
      })}
    </div>
  )
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
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
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(61,56,48,0.1) 0%, rgba(61,56,48,0.55) 100%)",
            }}
          />
        </div>

        {/* Article body */}
        <div className="bg-hs-bg">
          <div className="max-w-2xl mx-auto px-6 md:px-8">

            {/* Back link */}
            <FadeIn>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-hs-text-muted hover:text-hs-olive text-sm pt-10 pb-8 transition-colors"
              >
                <BackArrow />
                Back to Journal
              </Link>
            </FadeIn>

            {/* Category + meta */}
            <FadeIn delay={0.06}>
              <div className="flex flex-wrap items-center gap-2 mb-5 text-xs text-hs-text-muted">
                <span className="font-medium tracking-widest uppercase text-hs-olive">
                  {post.category}
                </span>
                <span className="text-hs-border select-none">·</span>
                <span>{formatDate(post.publishedAt)}</span>
                <span className="text-hs-border select-none">·</span>
                <span>{post.readTime} min read</span>
              </div>
            </FadeIn>

            {/* Title */}
            <FadeIn delay={0.1}>
              <h1 className="text-hs-text">{post.title}</h1>
            </FadeIn>

            {/* Author */}
            <FadeIn delay={0.14}>
              <p className="text-hs-text-muted text-sm mt-3 mb-10">
                By {post.author}
              </p>
            </FadeIn>

            <div className="h-px bg-hs-border/60 mb-10" />

            {/* Body */}
            <FadeIn delay={0.18}>
              <RichText blocks={post.body} />
            </FadeIn>

            {/* Bottom divider + back link */}
            <div className="h-px bg-hs-border/60 mt-14 mb-8" />

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-hs-text-muted hover:text-hs-olive text-sm pb-16 transition-colors"
            >
              <BackArrow />
              Back to Journal
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
