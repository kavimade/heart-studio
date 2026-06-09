import { client } from "./client"
import type { Post } from "@/lib/blog"

const POST_FIELDS = `
  "slug": slug.current,
  title,
  excerpt,
  "coverImage": coverImage.asset->url,
  category,
  author,
  body
`

export async function getSanityAllPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(_createdAt desc) { ${POST_FIELDS} }`
  )
}

export async function getSanityPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] { ${POST_FIELDS} }`,
    { slug }
  )
}

export async function getSanitySlugs(): Promise<{ slug: string }[]> {
  return client.fetch(`*[_type == "post"]{ "slug": slug.current }`)
}
