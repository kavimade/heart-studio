"use client"

import Link from "next/link"
import Image from "next/image"
import { FadeIn } from "@/components/ui/FadeIn"
import type { Post } from "@/lib/blog"

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function BlogCard({ post, index = 0 }: { post: Post; index?: number }) {
  return (
    <FadeIn delay={0.08 * index}>
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col rounded-3xl border border-hs-border/60 overflow-hidden hover:border-hs-border transition-all duration-300 hover:shadow-sm"
        style={{ background: "var(--color-hs-white)" }}
      >
        {/* Cover image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-7 md:p-8 gap-4">
          <span className="text-xs font-medium tracking-widest uppercase text-hs-olive">
            {post.category}
          </span>

          <h3 className="text-hs-text leading-snug group-hover:text-hs-olive transition-colors duration-200">
            {post.title}
          </h3>

          <p className="text-hs-text-muted text-sm leading-relaxed line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-hs-border/50">
            <span className="text-xs text-hs-text-muted">
              {formatDate(post.publishedAt)}&nbsp;&middot;&nbsp;{post.readTime} min read
            </span>
            <span className="text-hs-olive text-sm font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
              Read
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </FadeIn>
  )
}
