"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const NAV_LINKS = [
  { href: "#home",     label: "Home" },
  { href: "#classes",  label: "Classes" },
  { href: "#about",    label: "About" },
  { href: "#schedule", label: "Schedule" },
  { href: "#faq",      label: "FAQ" },
  { href: "#contact",  label: "Contact" },
]

const ease    = [0.25, 0.1, 0.25, 1] as [number, number, number, number]
const curtain = [0.76, 0, 0.24, 1]   as [number, number, number, number]

const fromTop = (delay: number) => ({
  initial:    { opacity: 0, y: -14 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
})

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled,   setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const close = () => setMobileOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-hs-bg/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Wordmark */}
          <motion.a
            {...fromTop(0.2)}
            href="#home"
            className="flex items-center gap-2.5"
          >
            <div className="relative overflow-hidden rounded-full shrink-0" style={{ width: 42, height: 42 }}>
              <Image
                src="/images/heart-studio-logo.webp"
                alt="Heart Studio logo"
                fill
                className="object-cover"
                style={{ objectPosition: "50% 28%" }}
                sizes="42px"
              />
            </div>
            <span className={`font-display text-xl font-medium tracking-tight transition-colors ${
              scrolled ? "text-hs-text" : "text-hs-white"
            }`}>
              Heart Studio
            </span>
          </motion.a>

          {/* Desktop links */}
          <motion.div {...fromTop(0.3)} className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`text-sm tracking-wide transition-colors ${
                  scrolled
                    ? "text-hs-text hover:text-hs-olive"
                    : "text-hs-white/90 hover:text-hs-white"
                }`}
              >
                {label}
              </a>
            ))}
            <motion.a
              {...fromTop(0.45)}
              href="#schedule"
              className="bg-hs-terracotta hover:bg-hs-terracotta-dark text-hs-white text-sm px-5 py-2.5 rounded-full transition-colors font-medium"
            >
              Book a Class
            </motion.a>
          </motion.div>

          {/* Mobile hamburger */}
          <motion.button
            {...fromTop(0.3)}
            className="md:hidden p-1 -mr-1 z-[60] relative"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{    rotate:  90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} className="text-hs-white" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate:  90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{    rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} className={scrolled ? "text-hs-text" : "text-hs-white"} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

        </div>
      </nav>

      {/* ── Full-screen mobile overlay ─────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{    clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: curtain }}
            className="md:hidden fixed inset-0 z-40 flex flex-col"
            style={{ background: "#64644B" }}
          >
            {/* Top bar — mirrors nav height */}
            <div className="flex items-center justify-between px-6 py-4">
              <a href="#home" onClick={close} className="flex items-center gap-2.5">
                <div className="relative overflow-hidden rounded-full shrink-0" style={{ width: 42, height: 42 }}>
                  <Image
                    src="/images/heart-studio-logo.webp"
                    alt="Heart Studio logo"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 28%" }}
                    sizes="42px"
                  />
                </div>
                <span className="font-display text-xl font-medium text-hs-white tracking-tight">
                  Heart Studio
                </span>
              </a>
            </div>

            {/* Nav links — large serif, vertically centered */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-12">
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={close}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 + i * 0.07, duration: 0.65, ease }}
                  className="text-hs-white/90 hover:text-hs-white border-b border-hs-white/10 py-4 transition-colors"
                  style={{
                    fontFamily:  "var(--font-cormorant-garamond), Georgia, serif",
                    fontSize:    "clamp(2.2rem, 9vw, 3rem)",
                    fontWeight:  500,
                    lineHeight:  1.1,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {label}
                </motion.a>
              ))}
            </div>

            {/* Bottom — CTA + Instagram */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5, ease }}
              className="px-8 pb-12 flex items-center justify-between"
            >
              <a
                href="#schedule"
                onClick={close}
                className="bg-hs-terracotta hover:bg-hs-terracotta-dark text-hs-white px-7 py-3.5 rounded-full text-sm font-medium transition-colors"
              >
                Book a Class →
              </a>

              <a
                href="https://www.instagram.com/heartstudio.dn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hs-white/50 hover:text-hs-white transition-colors"
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
