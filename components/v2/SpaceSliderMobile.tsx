"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useReducedMotion } from "framer-motion"

const SPACE_SLIDES = [
  { src: "/images/heart-studio-yoga-danang-welcome-1.webp", alt: "Heart Studio — yoga classes in Da Nang, Vietnam" },
  { src: "/images/heart-studio-yoga-danang-welcome-2.webp", alt: "Heart Studio yoga class space — Da Nang, Vietnam" },
  { src: "/images/heart-studio-yoga-danang-welcome-3.webp", alt: "Heart Studio yoga studio atmosphere — Da Nang" },
  { src: "/images/heart-studio-yoga-danang-welcome-4.webp", alt: "Heart Studio yoga studio — Da Nang, Vietnam" },
]

export function SpaceSliderMobile() {
  const [slide, setSlide] = useState(0)
  const reducedMotion = useReducedMotion()

  const prev = useCallback(() => setSlide(s => (s - 1 + SPACE_SLIDES.length) % SPACE_SLIDES.length), [])
  const next = useCallback(() => setSlide(s => (s + 1) % SPACE_SLIDES.length), [])

  useEffect(() => {
    if (reducedMotion) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next, reducedMotion])

  return (
    <div className="md:hidden bg-hs-bg px-6 pb-16">
      <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden group shadow-sm">
        {SPACE_SLIDES.map((s, i) => (
          <div
            key={s.src}
            className="hero-slide absolute inset-0"
            style={{ opacity: i === slide ? 1 : 0 }}
            aria-hidden={i !== slide}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-hs-white/70 hover:bg-hs-white backdrop-blur-sm rounded-full w-9 h-9 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft size={16} className="text-hs-text" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-hs-white/70 hover:bg-hs-white backdrop-blur-sm rounded-full w-9 h-9 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight size={16} className="text-hs-text" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
          {SPACE_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === slide ? "w-4 h-1.5 bg-hs-white" : "w-1.5 h-1.5 bg-hs-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
