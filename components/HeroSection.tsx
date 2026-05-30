"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const SLIDES = [
  { src: "/images/space-01.webp", alt: "Heart Studio yoga space interior" },
  { src: "/images/space-02.webp", alt: "Heart Studio practice room" },
  { src: "/images/space-03.webp", alt: "Heart Studio atmosphere" },
  { src: "/images/space-04.webp", alt: "Heart Studio detail" },
  { src: "/images/space-05.webp", alt: "Heart Studio light and space" },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="hero-slide absolute inset-0"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            loading={i === 0 ? "eager" : undefined}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Directional overlay — heavier on left behind text, lighter on right */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: "linear-gradient(to right, rgba(61,56,48,0.72) 0%, rgba(61,56,48,0.48) 50%, rgba(61,56,48,0.28) 100%)" }}
      />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-4xl">
        <h1
          className="text-hs-white mb-5"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
        >
          Your practice deserves<br className="hidden sm:block" /> a real home.
        </h1>
        <p className="text-hs-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-lg font-light" style={{ textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}>
          Heart Studio is a small, intentional yoga studio in Da Nang — built for people who want to go deeper. Into the body. Into the practice. Into stillness.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#schedule"
            className="bg-hs-terracotta hover:bg-hs-terracotta-dark text-hs-white px-7 py-3.5 rounded-full font-medium text-base transition-colors text-center"
          >
            Book a Class →
          </a>
          <a
            href="#schedule"
            className="border border-hs-white/70 hover:border-hs-white text-hs-white px-7 py-3.5 rounded-full font-medium text-base transition-colors text-center backdrop-blur-sm"
          >
            See Schedule →
          </a>
        </div>
        <p className="text-hs-white/75 text-sm mt-8">
          📍 36 Nai Nam 8, Hai Chau, Da Nang
        </p>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-5 h-2 bg-hs-white"
                : "w-2 h-2 bg-hs-white/45 hover:bg-hs-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
