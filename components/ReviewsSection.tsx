"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

function GoogleG() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Google" role="img">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

const REVIEWS = [
  {
    name: "Thanh",
    text: "One of the most aesthetic and cozy yoga studios in Da Nang. Clean space, great ventilation, calming music, and a very mindful teaching style. You can really feel the intention behind everything here. ❤️",
  },
  {
    name: "Cierra",
    text: "What an incredible space! The instructor is obviously incredibly knowledgeable and sweet. Simply gorgeous — they have everything you could need for your session. This is the best spot in Da Nang. A must if you're into yoga.",
  },
  {
    name: "Thien",
    text: "I've tried a few yoga studios in Da Nang and Heart honestly feels the most welcoming. The space is peaceful, airy and beautifully designed. The teachers pay attention to details and create a very grounding experience. Highly recommend if you're looking for yoga and wellness in Da Nang.",
  },
  {
    name: "Thao",
    text: "A hidden gem in Da Nang for anyone looking for mindful movement and healing practices. The yoga classes are accessible but still very deep. I felt comfortable from the moment I walked in. If you're looking for a yoga and wellness studio in Da Nang, Heart is worth visiting.",
  },
  {
    name: "Phan",
    text: "The studio is beautiful, clean, the equipment is high-quality, the instructors are gentle and lovely, and they teach bilingually in Vietnamese and English. It was very comfortable and relaxing. Amazing experience. Highly recommend!",
  },
  {
    name: "Phương",
    text: "Among the countless yoga studios out there, this one truly impressed me. From the meticulous attention to detail, the scent, the practice methods, to the thoughtful use of each exercise tool — it provided a complete experience, truly embodying the spirit of yoga.",
  },
  {
    name: "Viktorie",
    text: "The instructor is truly outstanding — experienced, professional, and very welcoming. Chan offers a variety of yoga styles, so whether you are a beginner or more advanced, you can always find a class that suits your needs and mood.",
  },
  {
    name: "Chi-Yuan",
    text: "Took Vinyasa class here — a slow flow that helps you really engage your core muscles. Chan is very knowledgeable and grounded, and speaks perfect English. Highly recommend this studio!",
  },
]

export function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: number) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector("[data-card]") as HTMLElement
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + 20), behavior: "smooth" })
  }

  return (
    <section id="reviews" className="bg-hs-bg pt-10 md:pt-14 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="px-6 md:px-12 mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-hs-olive text-xs uppercase tracking-widest mb-3">
              In their words
            </p>
            <h2 className="text-hs-text">From the community</h2>
          </div>
          <div className="hidden md:flex gap-2 shrink-0 mb-1">
            <button
              onClick={() => scroll(-1)}
              className="w-9 h-9 rounded-full border border-hs-border flex items-center justify-center text-hs-text-muted hover:border-hs-text hover:text-hs-text transition-colors cursor-pointer"
              aria-label="Previous reviews"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-9 h-9 rounded-full border border-hs-border flex items-center justify-center text-hs-text-muted hover:border-hs-text hover:text-hs-text transition-colors cursor-pointer"
              aria-label="Next reviews"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* Card strip */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-2 w-16 md:w-24 z-10 bg-gradient-to-r from-hs-bg to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-2 w-16 md:w-24 z-10 bg-gradient-to-l from-hs-bg to-transparent" />
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide px-6 md:px-12 pb-2"
        >
          {REVIEWS.map((review, i) => (
            <article
              key={i}
              data-card=""
              className="shrink-0 bg-hs-white rounded-2xl p-6 md:p-7 flex flex-col gap-5 border border-hs-border/60"
              style={{ width: "clamp(270px, 38vw, 340px)" }}
            >
              <div className="flex items-center justify-between">
                <GoogleG />
                <Stars />
              </div>
              <p className="text-hs-text-muted text-sm leading-relaxed flex-1">
                {review.text}
              </p>
              <p className="text-hs-text text-xs uppercase tracking-widest font-medium">
                {review.name}
              </p>
            </article>
          ))}

          {/* See more card */}
          <a
            data-card=""
            href="https://maps.app.goo.gl/262E4hjNeNseDdKGA"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-hs-white rounded-2xl p-6 md:p-7 flex flex-col items-center justify-center gap-4 border border-hs-border/60 hover:bg-hs-surface transition-colors"
            style={{ width: "clamp(270px, 38vw, 340px)" }}
          >
            <GoogleG />
            <Stars />
            <p className="text-hs-text text-sm font-medium tracking-wide text-center flex items-center gap-1.5">
              See more reviews <span aria-hidden="true">→</span>
            </p>
          </a>
        </div>
        </div>

      </div>
    </section>
  )
}
