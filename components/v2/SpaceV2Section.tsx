"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { useReducedMotion } from "framer-motion"
import { FadeIn } from "@/components/ui/FadeIn"

const SPACE_SLIDES = [
  { src: "/images/heart-studio-yoga-danang-welcome-1.webp", alt: "Heart Studio — yoga classes in Da Nang, Vietnam" },
  { src: "/images/heart-studio-yoga-danang-welcome-2.webp", alt: "Heart Studio yoga class space — Da Nang, Vietnam" },
  { src: "/images/heart-studio-yoga-danang-welcome-3.webp", alt: "Heart Studio yoga studio atmosphere — Da Nang" },
  { src: "/images/heart-studio-yoga-danang-welcome-4.webp", alt: "Heart Studio yoga studio — Da Nang, Vietnam" },
]

const ACCORDION = [
  {
    title: "Yoga Classes and Workshops",
    body: "We offer well-rounded daily yoga classes rooted in the spirit of yoga. Join us for a class, an event, or a workshop — all levels welcome.",
    link: { label: "Yoga classes →", href: "#classes" },
  },
  {
    title: "What to bring",
    body: "Comfortable clothing that lets you move freely. Mats, blocks, and bolsters are all provided — you're welcome to bring your own mat if you prefer.",
  },
  {
    title: "Location",
    body: "36 Nai Nam 8, Hai Chau, Da Nang.",
    link: { label: "Get Directions →", href: "https://maps.app.goo.gl/262E4hjNeNseDdKGA" },
  },
]

export function SpaceV2Section() {
  const [slide, setSlide] = useState(0)
  const [open,  setOpen]  = useState<number | null>(null)
  const reducedMotion = useReducedMotion()

  const prev = useCallback(() => setSlide(s => (s - 1 + SPACE_SLIDES.length) % SPACE_SLIDES.length), [])
  const next = useCallback(() => setSlide(s => (s + 1) % SPACE_SLIDES.length), [])

  useEffect(() => {
    if (reducedMotion) return
    const id = setInterval(next, 3000)
    return () => clearInterval(id)
  }, [next, reducedMotion])

  return (
    <section id="about" className="bg-hs-bg overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[480px] md:min-h-[600px]">

        {/* Left — text, vertically centered */}
        <FadeIn className="md:order-1 flex flex-col justify-center px-8 md:px-14 lg:px-20 pt-12 pb-10 md:py-28 bg-hs-bg">
          <p className="text-hs-olive text-xs uppercase tracking-widest mb-4">Our Space</p>
          <h2 className="text-hs-text mb-6">
            Welcome to{" "}
            <em style={{ fontStyle: "italic", fontFamily: "var(--font-cormorant-garamond), Georgia, serif" }}>
              Heart Studio.
            </em>
          </h2>
          <p className="text-hs-text-muted leading-relaxed mb-10 max-w-md">
            A space built to inspire. Warm without being heavy. Beautiful without being precious. A place where the practice feels like it belongs.
          </p>

          <div className="border-t border-hs-border max-w-md">
            {ACCORDION.map((item, i) => (
              <div key={i} className="border-b border-hs-border">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left cursor-pointer"
                  aria-expanded={open === i}
                >
                  <span className="text-hs-text text-sm">{item.title}</span>
                  <ChevronDown
                    size={15}
                    className={`text-hs-text-muted shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? "max-h-40 pb-4" : "max-h-0"}`}>
                  <p className="text-hs-text-muted text-sm leading-relaxed">
                    {item.body}
                    {item.link && (
                      <>
                        <br />
                        <a
                          href={item.link.href}
                          {...(item.link.href.startsWith("#") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                          className="text-hs-olive underline underline-offset-4 hover:text-hs-olive-dark transition-colors mt-1 inline-block"
                        >
                          {item.link.label}
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Right — contained image slider with rounded corners (desktop only) */}
        <div className="hidden md:flex md:order-2 bg-hs-bg items-center justify-center px-6 md:px-10 py-10 md:py-16">
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
                  sizes="(max-width: 768px) 100vw, 50vw"
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

      </div>
    </section>
  )
}
