export type PostBlock =
  | { _type: "paragraph"; text: string }
  | { _type: "heading"; text: string; level: 2 | 3 }
  | { _type: "blockquote"; text: string }

export type Post = {
  slug: string
  title: string
  excerpt: string
  body: PostBlock[]
  coverImage: string
  category: string
  author: string
  publishedAt: string
  readTime: number
}

const POSTS: Post[] = [
  {
    slug: "finding-stillness-in-movement",
    title: "Finding Stillness in Movement",
    excerpt:
      "Every yoga practice begins before you step onto the mat. It starts with the simple act of choosing to arrive — to put down what you were carrying and breathe.",
    coverImage: "/images/space-01.webp",
    category: "Practice",
    author: "Chan",
    publishedAt: "2025-11-20",
    readTime: 5,
    body: [
      {
        _type: "paragraph",
        text: "Every yoga practice begins before you step onto the mat. It starts with the simple act of choosing to arrive — to put down what you were carrying and breathe.",
      },
      { _type: "heading", level: 2, text: "The Paradox of Stillness" },
      {
        _type: "paragraph",
        text: "We often think of stillness as the absence of movement. But in yoga, we discover something different: stillness as a quality that exists inside movement. When you hold a pose long enough, you begin to feel the micro-adjustments, the quiet negotiation between effort and ease.",
      },
      {
        _type: "blockquote",
        text: "\"The pose begins when you want to leave it.\"",
      },
      {
        _type: "paragraph",
        text: "This ancient teaching points to something we encounter again and again in practice. The edge of discomfort — not pain, but the honest resistance of the body — is exactly where transformation lives.",
      },
      { _type: "heading", level: 2, text: "Breath as Anchor" },
      {
        _type: "paragraph",
        text: "Whenever I feel students losing connection with themselves in a posture, I return to the same invitation: come back to your breath. The breath is not just a physical function. In yoga, it is a bridge between what the mind wants and what the body knows.",
      },
      {
        _type: "paragraph",
        text: "Ujjayi breath — the ocean breath — creates an internal sound that you can listen to. When you can hear your own breathing, you are present. That is the whole practice.",
      },
    ],
  },
  {
    slug: "the-morning-ritual-that-changes-everything",
    title: "The Morning Ritual That Changes Everything",
    excerpt:
      "Fifteen minutes of intentional movement before the world starts asking things of you can transform how you meet the entire day.",
    coverImage: "/images/heart-studio-yoga-danang-welcome-1.webp",
    category: "Wellbeing",
    author: "Chan",
    publishedAt: "2025-10-14",
    readTime: 4,
    body: [
      {
        _type: "paragraph",
        text: "Fifteen minutes. That's all it takes to fundamentally shift the quality of your day. Not a full practice, not a 90-minute flow — just fifteen intentional minutes before the world starts asking things of you.",
      },
      { _type: "heading", level: 2, text: "Why Morning?" },
      {
        _type: "paragraph",
        text: "The morning has a quality that no other time of day possesses. Your mind hasn't yet been claimed by the demands of work, family, or screens. You exist in a soft, open state — and movement in that state reaches deeper.",
      },
      {
        _type: "paragraph",
        text: "In Ayurveda, the hours before sunrise are called Brahma Muhurta — the Creator's Hour. It's considered the most auspicious time for spiritual practice. Whether or not you hold that belief, there is something measurably different about morning stillness.",
      },
      {
        _type: "blockquote",
        text: "\"Motivation follows action, not the other way around. Start moving, and the desire to continue arrives.\"",
      },
      { _type: "heading", level: 2, text: "A Simple Morning Sequence" },
      {
        _type: "paragraph",
        text: "Begin lying on your back. Three deep breaths. Then a gentle reclined twist on each side. Come to table-top for cat-cow. Rise to downward-facing dog. Walk to the top of your mat. Stand in mountain. From here, let your body guide you — even five minutes of intuitive movement is complete.",
      },
    ],
  },
  {
    slug: "on-teaching-yoga-in-da-nang",
    title: "On Teaching Yoga in Da Nang",
    excerpt:
      "When I opened Heart Studio, I wasn't just opening a yoga studio. I was following a thread of trust that began on a mat in Hanoi, years before I had any idea where it would lead.",
    coverImage: "/images/heart-studio-yoga-danang-chan-owner.webp",
    category: "Studio",
    author: "Chan",
    publishedAt: "2025-09-03",
    readTime: 6,
    body: [
      {
        _type: "paragraph",
        text: "When I opened Heart Studio, I wasn't just opening a yoga studio. I was following a thread of trust that began on a mat in Hanoi, years before I had any idea where it would lead.",
      },
      { _type: "heading", level: 2, text: "How Da Nang Found Me" },
      {
        _type: "paragraph",
        text: "Da Nang is a city that surprises you. It doesn't announce itself the way Hanoi or Ho Chi Minh City do. It moves at a different tempo — the ocean is always there, and the mountains, and something about that geography creates a kind of openness in people.",
      },
      {
        _type: "paragraph",
        text: "I started teaching small groups in borrowed spaces. A friend's living room. A guesthouse courtyard. One unforgettable class on a rooftop as the sun rose over the Han River. Each one taught me something about what people were really looking for.",
      },
      {
        _type: "blockquote",
        text: "\"People don't come to yoga to stretch. They come because somewhere inside them, they know there is more space available than they're currently living in.\"",
      },
      { _type: "heading", level: 2, text: "What Heart Studio Means to Me" },
      {
        _type: "paragraph",
        text: "The studio is a container. The walls, the light, the sound of the fan, the smell of incense — all of it is there to help people arrive. My job as a teacher is to create conditions where transformation is possible. I can't make it happen. I can only make the space safe enough for it to happen on its own.",
      },
      {
        _type: "paragraph",
        text: "If you've been to class and felt something shift — a tightness in your chest release, a worry dissolve for an hour — that's not something I did. That was already in you. The practice just helped you find it.",
      },
    ],
  },
  {
    slug: "yin-yoga-and-the-art-of-waiting",
    title: "Yin Yoga and the Art of Waiting",
    excerpt:
      "In a culture obsessed with progress, yin yoga offers a radical invitation: stop trying to get somewhere and notice where you already are.",
    coverImage: "/images/props-04.webp",
    category: "Practice",
    author: "Chan",
    publishedAt: "2025-08-18",
    readTime: 5,
    body: [
      {
        _type: "paragraph",
        text: "Most yoga practices are yang in nature — dynamic, heating, effort-based. Yin yoga inverts this entirely. You sink into a pose, you find your edge, and then you stay — three, four, sometimes five minutes — while gravity and time do the work that muscles cannot.",
      },
      { _type: "heading", level: 2, text: "Targeting the Fascia" },
      {
        _type: "paragraph",
        text: "Yin works on connective tissue — fascia, ligaments, and tendons — rather than muscle. These structures respond to slow, sustained loading, not repetitive movement. It's why a few minutes in dragon pose can create more opening in the hips than many months of vinyasa.",
      },
      {
        _type: "paragraph",
        text: "But the deeper work of yin is not physical. It is the practice of staying with what is uncomfortable without trying to change it. This is a skill — perhaps the most important skill a human being can develop.",
      },
      {
        _type: "blockquote",
        text: "\"Yin is not passive. It is one of the most active things you can do: choose to stay present with difficulty.\"",
      },
      { _type: "heading", level: 2, text: "The Emotional Release" },
      {
        _type: "paragraph",
        text: "It is common in yin practice to experience sudden waves of emotion — sadness, grief, frustration, or sometimes unexpected joy. The fascia stores more than structural tension. It holds history. When you release the tissue, you sometimes release what was held there with it.",
      },
      {
        _type: "paragraph",
        text: "This is not something to fear or analyze. Simply notice it, breathe through it, and let it pass. The mat is a safe place to feel things you haven't had time to feel.",
      },
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug)
}

export function getAllPosts(): Post[] {
  return [...POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}
