"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { href: "#home",     label: "Home" },
  { href: "#classes",  label: "Classes" },
  { href: "#about",    label: "About" },
  { href: "#schedule", label: "Schedule" },
  { href: "#faq",      label: "FAQ" },
  { href: "#contact",  label: "Contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled,   setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const close = () => setMobileOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-hs-bg/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#home"
          className={`font-display text-xl font-medium tracking-tight transition-colors ${
            scrolled ? "text-hs-text" : "text-hs-white"
          }`}
        >
          Heart Studio
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
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
          <a
            href="#schedule"
            className="bg-hs-terracotta hover:bg-hs-terracotta-dark text-hs-white text-sm px-5 py-2.5 rounded-full transition-colors font-medium"
          >
            Book a Class
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1 -mr-1"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen
            ? <X size={22} className={scrolled ? "text-hs-text" : "text-hs-white"} />
            : <Menu size={22} className={scrolled ? "text-hs-text" : "text-hs-white"} />
          }
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-hs-bg-warm px-6 pt-2 pb-6 flex flex-col gap-1 border-t border-hs-border/40">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="text-hs-text text-base py-3 border-b border-hs-border/30 last:border-0"
            >
              {label}
            </a>
          ))}
          <a
            href="#schedule"
            onClick={close}
            className="mt-3 bg-hs-terracotta hover:bg-hs-terracotta-dark text-hs-white text-sm px-5 py-3.5 rounded-full text-center font-medium transition-colors"
          >
            Book a Class →
          </a>
        </div>
      )}
    </nav>
  )
}
