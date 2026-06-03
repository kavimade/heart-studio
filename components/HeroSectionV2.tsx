"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"

const SLIDES = [
  { src: "/images/space-01.webp", alt: "Heart Studio — yoga classes in Da Nang, Vietnam" },
  { src: "/images/space-02.webp", alt: "Heart Studio yoga class space — Da Nang, Vietnam" },
  { src: "/images/space-03.webp", alt: "Heart Studio yoga studio atmosphere — Da Nang" },
  { src: "/images/space-04.webp", alt: "Heart Studio yoga studio — Da Nang, Vietnam" },
  { src: "/images/space-05.webp", alt: "Heart Studio light and space — yoga classes Da Nang" },
]

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

const fadeUp = (delay: number) => ({
  initial:  { opacity: 0, y: 20 },
  animate:  { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
})

const fadeIn = (delay: number) => ({
  initial:  { opacity: 0 },
  animate:  { opacity: 1 },
  transition: { duration: 0.9, delay, ease },
})

export function HeroSectionV2() {
  const [current, setCurrent] = useState(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
    const id = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(id)
  }, [reducedMotion])

  return (
    <section id="home" className="relative h-[95svh] md:h-screen overflow-hidden">
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

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease }}
        style={{
          background:
            "linear-gradient(to top, rgba(61,56,48,0.88) 0%, rgba(61,56,48,0.30) 38%, rgba(61,56,48,0.20) 55%, rgba(61,56,48,0.40) 100%)",
        }}
      />

      {/* HEART STUDIO — big centered wordmark */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <motion.h2
          {...fadeUp(0.35)}
          style={{
            fontFamily:  "var(--font-cormorant-garamond), Georgia, serif",
            fontSize:    "clamp(2rem, 5.5vw, 5.5rem)",
            fontWeight:  600,
            color:       "#FAFAF7",
            letterSpacing: "0.03em",
            lineHeight:  1,
            textAlign:   "center",
            textShadow:  "0 2px 40px rgba(0,0,0,0.25)",
          }}
        >
          Move Gently.<br className="md:hidden" /> Breathe Deeply.
        </motion.h2>
      </div>

      {/* Bottom left — tagline + CTAs */}
      <div className="absolute bottom-0 left-0 right-0 md:right-auto z-20 px-8 md:px-12 pb-10 md:pb-12">
        <motion.h1
          {...fadeUp(0.65)}
          className="hero-tagline text-hs-white mb-1"
          style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
        >
          Yoga in Da Nang.
        </motion.h1>
        <motion.p
          {...fadeUp(0.75)}
          className="text-hs-white/65 text-sm mb-6"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
        >
          A modern space embracing the traditional spirit of yoga.
        </motion.p>
        <motion.div {...fadeUp(0.9)} className="flex gap-3">
          <a
            href="#schedule"
            className="bg-hs-terracotta hover:bg-hs-terracotta-dark text-hs-white flex-1 sm:flex-none px-4 py-3.5 sm:px-6 sm:py-3 rounded-full font-medium text-sm transition-colors inline-flex items-center justify-center gap-2"
          >
            Book a Class<span className="hidden sm:inline"> →</span>
          </a>
          <a
            href="#classes"
            className="border border-hs-white/55 hover:border-hs-white text-hs-white flex-1 sm:flex-none px-4 py-3.5 sm:px-6 sm:py-3 rounded-full text-sm transition-colors backdrop-blur-sm text-center"
          >
            Our Classes<span className="hidden sm:inline"> →</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom right — Instagram (desktop only; mobile uses InstagramFAB) */}
      <div className="hidden md:block absolute bottom-0 right-0 z-20 px-8 md:px-12 pb-10 md:pb-12">
        <motion.a
          {...fadeIn(0.9)}
          href="https://www.instagram.com/heartstudio.dn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-hs-white/65 hover:text-hs-white transition-colors block"
          aria-label="Follow Heart Studio on Instagram"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
          </svg>
        </motion.a>
      </div>
    </section>
  )
}
