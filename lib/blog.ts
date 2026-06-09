import { getSanityAllPosts, getSanityPost, getSanitySlugs } from "@/sanity/lib/queries"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PostBody = any[]

export type Post = {
  slug: string
  title: string
  excerpt?: string
  body: PostBody
  coverImage: string
  category: string
  author: string
}

export function calcReadTime(body: PostBody): number {
  const text = body
    .filter((b) => b._type === "block")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((b) => (b.children ?? []).map((c: any) => c.text ?? "").join(""))
    .join(" ")
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

export function calcExcerpt(body: PostBody, excerpt?: string): string {
  if (excerpt?.trim()) return excerpt
  const first = body.find((b) => b._type === "block" && b.style === "normal")
  if (!first) return ""
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const text = (first.children ?? []).map((c: any) => c.text ?? "").join("").trim()
  return text.length <= 160 ? text : text.slice(0, 157) + "…"
}

// ── Portable Text helpers ─────────────────────────────────

const span = (text: string, key: string) => ({
  _type: "span" as const, _key: `${key}s`, text, marks: [] as string[],
})

const block = (text: string, key: string, style: string) => ({
  _type: "block" as const, _key: key, style, markDefs: [] as unknown[], children: [span(text, key)],
})

const p  = (t: string, k: string) => block(t, k, "normal")
const h2 = (t: string, k: string) => block(t, k, "h2")
const bq = (t: string, k: string) => block(t, k, "blockquote")

// ── Mock data (fallback when Sanity has no posts yet) ─────

const MOCK_POSTS: Post[] = [
  {
    slug: "finding-stillness-in-movement",
    title: "Finding Stillness in Movement",
    excerpt: "Every yoga practice begins before you step onto the mat. It starts with the simple act of choosing to arrive — to put down what you were carrying and breathe.",
    coverImage: "/images/space-01.webp",
    category: "Practice",
    author: "Chan",
    body: [
      p("Every yoga practice begins before you step onto the mat. It starts with the simple act of choosing to arrive — to put down what you were carrying and breathe.", "p1"),
      h2("The Paradox of Stillness", "h1"),
      p("We often think of stillness as the absence of movement. But in yoga, we discover something different: stillness as a quality that exists inside movement. When you hold a pose long enough, you begin to feel the micro-adjustments, the quiet negotiation between effort and ease.", "p2"),
      bq("\"The pose begins when you want to leave it.\"", "bq1"),
      p("This ancient teaching points to something we encounter again and again in practice. The edge of discomfort — not pain, but the honest resistance of the body — is exactly where transformation lives.", "p3"),
      h2("Breath as Anchor", "h2"),
      p("Whenever I feel students losing connection with themselves in a posture, I return to the same invitation: come back to your breath. The breath is not just a physical function. In yoga, it is a bridge between what the mind wants and what the body knows.", "p4"),
      p("Ujjayi breath — the ocean breath — creates an internal sound that you can listen to. When you can hear your own breathing, you are present. That is the whole practice.", "p5"),
    ],
  },
  {
    slug: "the-morning-ritual-that-changes-everything",
    title: "The Morning Ritual That Changes Everything",
    excerpt: "Fifteen minutes of intentional movement before the world starts asking things of you can transform how you meet the entire day.",
    coverImage: "/images/heart-studio-yoga-danang-welcome-1.webp",
    category: "Wellbeing",
    author: "Chan",
    body: [
      p("Fifteen minutes. That's all it takes to fundamentally shift the quality of your day. Not a full practice, not a 90-minute flow — just fifteen intentional minutes before the world starts asking things of you.", "p1"),
      h2("Why Morning?", "h1"),
      p("The morning has a quality that no other time of day possesses. Your mind hasn't yet been claimed by the demands of work, family, or screens. You exist in a soft, open state — and movement in that state reaches deeper.", "p2"),
      p("In Ayurveda, the hours before sunrise are called Brahma Muhurta — the Creator's Hour. It's considered the most auspicious time for spiritual practice. Whether or not you hold that belief, there is something measurably different about morning stillness.", "p3"),
      bq("\"Motivation follows action, not the other way around. Start moving, and the desire to continue arrives.\"", "bq1"),
      h2("A Simple Morning Sequence", "h2"),
      p("Begin lying on your back. Three deep breaths. Then a gentle reclined twist on each side. Come to table-top for cat-cow. Rise to downward-facing dog. Walk to the top of your mat. Stand in mountain. From here, let your body guide you — even five minutes of intuitive movement is complete.", "p4"),
    ],
  },
  {
    slug: "on-teaching-yoga-in-da-nang",
    title: "On Teaching Yoga in Da Nang",
    excerpt: "When I opened Heart Studio, I wasn't just opening a yoga studio. I was following a thread of trust that began on a mat in Hanoi, years before I had any idea where it would lead.",
    coverImage: "/images/heart-studio-yoga-danang-chan-owner.webp",
    category: "Studio",
    author: "Chan",
    body: [
      p("When I opened Heart Studio, I wasn't just opening a yoga studio. I was following a thread of trust that began on a mat in Hanoi, years before I had any idea where it would lead.", "p1"),
      h2("How Da Nang Found Me", "h1"),
      p("Da Nang is a city that surprises you. It doesn't announce itself the way Hanoi or Ho Chi Minh City do. It moves at a different tempo — the ocean is always there, and the mountains, and something about that geography creates a kind of openness in people.", "p2"),
      p("I started teaching small groups in borrowed spaces. A friend's living room. A guesthouse courtyard. One unforgettable class on a rooftop as the sun rose over the Han River. Each one taught me something about what people were really looking for.", "p3"),
      bq("\"People don't come to yoga to stretch. They come because somewhere inside them, they know there is more space available than they're currently living in.\"", "bq1"),
      h2("What Heart Studio Means to Me", "h2"),
      p("The studio is a container. The walls, the light, the sound of the fan, the smell of incense — all of it is there to help people arrive. My job as a teacher is to create conditions where transformation is possible. I can't make it happen. I can only make the space safe enough for it to happen on its own.", "p4"),
      p("If you've been to class and felt something shift — a tightness in your chest release, a worry dissolve for an hour — that's not something I did. That was already in you. The practice just helped you find it.", "p5"),
    ],
  },
  {
    slug: "yin-yoga-and-the-art-of-waiting",
    title: "Yin Yoga and the Art of Waiting",
    excerpt: "In a culture obsessed with progress, yin yoga offers a radical invitation: stop trying to get somewhere and notice where you already are.",
    coverImage: "/images/props-04.webp",
    category: "Practice",
    author: "Chan",
    body: [
      p("Most yoga practices are yang in nature — dynamic, heating, effort-based. Yin yoga inverts this entirely. You sink into a pose, you find your edge, and then you stay — three, four, sometimes five minutes — while gravity and time do the work that muscles cannot.", "p1"),
      h2("Targeting the Fascia", "h1"),
      p("Yin works on connective tissue — fascia, ligaments, and tendons — rather than muscle. These structures respond to slow, sustained loading, not repetitive movement. It's why a few minutes in dragon pose can create more opening in the hips than many months of vinyasa.", "p2"),
      p("But the deeper work of yin is not physical. It is the practice of staying with what is uncomfortable without trying to change it. This is a skill — perhaps the most important skill a human being can develop.", "p3"),
      bq("\"Yin is not passive. It is one of the most active things you can do: choose to stay present with difficulty.\"", "bq1"),
      h2("The Emotional Release", "h2"),
      p("It is common in yin practice to experience sudden waves of emotion — sadness, grief, frustration, or sometimes unexpected joy. The fascia stores more than structural tension. It holds history. When you release the tissue, you sometimes release what was held there with it.", "p4"),
      p("This is not something to fear or analyze. Simply notice it, breathe through it, and let it pass. The mat is a safe place to feel things you haven't had time to feel.", "p5"),
    ],
  },
]

// ── Public API ────────────────────────────────────────────

export async function getAllPosts(): Promise<Post[]> {
  try {
    const posts = await getSanityAllPosts()
    if (posts && posts.length > 0) return posts
  } catch {
    // Sanity not configured or no posts yet — fall through to mock data
  }
  return [...MOCK_POSTS]
}

export async function getPost(slug: string): Promise<Post | undefined> {
  try {
    const post = await getSanityPost(slug)
    if (post) return post
  } catch {
    // fall through to mock data
  }
  return MOCK_POSTS.find((p) => p.slug === slug)
}

export async function getAllSlugs(): Promise<string[]> {
  try {
    const sanitySligs = await getSanitySlugs()
    if (sanitySligs && sanitySligs.length > 0) return sanitySligs.map((s) => s.slug)
  } catch {
    // fall through
  }
  return MOCK_POSTS.map((p) => p.slug)
}
