"use client"

import Link from "next/link"
import Image from "next/image"
import { FadeIn } from "@/components/ui/FadeIn"
import { calcExcerpt } from "@/lib/blog"
import type { Post } from "@/lib/blog"

export function BlogCard({ post, index = 0 }: { post: Post; index?: number; compact?: boolean }) {
  return (
    <FadeIn delay={0.08 * index}>
      <Link href={`/blog/${post.slug}`} className="group block">
        {/* Image — standalone, rounded, no card wrapper */}
        <div className="relative overflow-hidden rounded-3xl aspect-[4/2.55] mb-5">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Text — no background, no border */}
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-medium tracking-widest uppercase text-hs-olive">
            {post.category}
          </span>

          <h3 className="text-hs-text leading-snug group-hover:text-hs-terracotta transition-colors duration-200">
            {post.title}
          </h3>

          <p className="text-hs-text-muted text-sm leading-relaxed line-clamp-3">
            {calcExcerpt(post.body, post.excerpt)}
          </p>

        </div>
      </Link>
    </FadeIn>
  )
}
