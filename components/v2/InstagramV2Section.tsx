import Image from "next/image"

// Static feed — swap with Instagram Graph API data when ready.
// API approach: GET https://graph.instagram.com/me/media?fields=id,media_type,thumbnail_url,media_url,permalink&access_token=TOKEN
// Requires: Meta Business account + Instagram Graph API app + long-lived access token (refresh every 60 days).
const FEED = [
  { src: "/images/space-01.webp",    alt: "Heart Studio interior" },
  { src: "/images/opening-02.webp",  alt: "Heart Studio opening" },
  { src: "/images/retreat-01.webp",  alt: "Retreat practice" },
  { src: "/images/gathering-02.webp",alt: "Heart community" },
  { src: "/images/space-02.webp",    alt: "Studio space" },
  { src: "/images/opening-04.webp",  alt: "Opening day" },
  { src: "/images/retreat-03.webp",  alt: "Yoga retreat" },
  { src: "/images/props-04.webp",    alt: "Studio props" },
  { src: "/images/space-04.webp",    alt: "Studio detail" },
]

export function InstagramV2Section() {
  return (
    <section className="bg-hs-bg py-20 md:py-28">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="px-6 md:px-12 mb-10">
          <p className="text-hs-text-muted text-xs uppercase tracking-widest mb-3">
            @heartstudio.dn
          </p>
          <h2 className="text-hs-text">Connect with us</h2>
        </div>

        {/* Horizontal scrollable tile strip */}
        <div
          className="flex gap-3 overflow-x-auto scrollbar-hide px-6 md:px-12 pb-2"
        >
          {FEED.map((post, i) => (
            <a
              key={i}
              href="https://www.instagram.com/heartstudio.dn"
              target="_blank"
              rel="noopener noreferrer"
              className="relative shrink-0 overflow-hidden rounded-2xl group"
              style={{ width: "clamp(130px, 15vw, 185px)", height: "clamp(130px, 15vw, 185px)" }}
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="185px"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-hs-text/0 group-hover:bg-hs-text/15 transition-colors duration-300" />
            </a>
          ))}

          {/* "See more" end tile */}
          <a
            href="https://www.instagram.com/heartstudio.dn"
            target="_blank"
            rel="noopener noreferrer"
            className="relative shrink-0 rounded-2xl bg-hs-surface border border-hs-border flex flex-col items-center justify-center gap-2 hover:bg-hs-border/60 transition-colors"
            style={{ width: "clamp(130px, 15vw, 185px)", height: "clamp(130px, 15vw, 185px)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-hs-text-muted">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
            <span className="text-hs-text-muted text-xs text-center leading-snug px-2">
              See all posts
            </span>
          </a>
        </div>

      </div>
    </section>
  )
}
