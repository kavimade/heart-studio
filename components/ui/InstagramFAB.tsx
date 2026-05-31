"use client"

import { useState, useEffect } from "react"

export function InstagramFAB({ hidden = false }: { hidden?: boolean }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById("home")
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href="https://www.instagram.com/heartstudio.dn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Heart Studio on Instagram"
      className="md:hidden fixed bottom-6 right-6 z-50 h-12 rounded-full flex items-center gap-2.5 px-4 shadow-lg transition-all duration-500"
      style={{
        background: "var(--color-hs-terracotta, #C4714A)",
        opacity: visible && !hidden ? 1 : 0,
        transform: visible && !hidden ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible && !hidden ? "auto" : "none",
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FAFAF7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="#FAFAF7" stroke="none" />
      </svg>
      <span className="text-xs font-medium tracking-wide" style={{ color: "#FAFAF7" }}>
        heartstudio.dn
      </span>
    </a>
  )
}
