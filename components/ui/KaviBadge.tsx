"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface KaviBadgeProps {
  /** Render inline (non-floating) with popover expanding upward */
  static?: boolean
}

export function KaviBadge({ static: isStatic = false }: KaviBadgeProps) {
  return isStatic ? <KaviBadgeInline /> : <KaviBadgeFloating />
}

// ── Inline (footer) variant — plain pill link, no expand ────────────────────

function KaviBadgeInline() {
  return (
    <a
      href="https://kavimade.com?utm_source=kavi-badge"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display:        "inline-flex",
        alignItems:     "center",
        gap:            12,
        background:     "#ffffff",
        border:         "1px solid rgba(0,0,0,0.10)",
        borderRadius:   999,
        padding:        "5px 13px 5px 8px",
        boxShadow:      "0 2px 12px rgba(0,0,0,0.12)",
        textDecoration: "none",
        transition:     "opacity 0.15s ease",
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
    >
      <div style={{
        width:          22,
        height:         22,
        borderRadius:   "50%",
        background:     "#1C4332",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        flexShrink:     0,
      }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: "#fff", lineHeight: 1 }}>K</span>
      </div>
      <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0f1729", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
        Made by Kavi
      </span>
    </a>
  )
}

// ── Floating variant ─────────────────────────────────────────────────────────

function KaviBadgeFloating() {
  const [expanded,  setExpanded]  = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const ref      = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const close = useCallback(() => {
    setIsClosing(true)
    timerRef.current = setTimeout(() => {
      setExpanded(false)
      requestAnimationFrame(() => requestAnimationFrame(() => setIsClosing(false)))
    }, 200)
  }, [])

  useEffect(() => () => { clearTimeout(timerRef.current) }, [])

  useEffect(() => {
    if (!expanded || isClosing) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close()
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [expanded, isClosing, close])

  const ease   = { duration: 0.38, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }
  const isOpen = expanded && !isClosing

  return (
    <motion.div
      ref={ref}
      layout={!isClosing}
      animate={{
        borderRadius: expanded ? 16 : 999,
        opacity:      isClosing ? 0 : 1,
      }}
      transition={{
        layout:       ease,
        borderRadius: ease,
        opacity:      isClosing ? { duration: 0.2, ease: "easeOut" } : { duration: 0 },
      }}
      style={{
        position:   "fixed",
        bottom:     24,
        left:       24,
        zIndex:     50,
        background: "#ffffff",
        border:     "1px solid rgba(0,0,0,0.10)",
        boxShadow:  "0 2px 12px rgba(0,0,0,0.12)",
        overflow:   "hidden",
        cursor:     isOpen ? "default" : "pointer",
        width:      expanded ? 272 : undefined,
      }}
      onClick={() => { if (!expanded && !isClosing) setExpanded(true) }}
      whileHover={expanded ? {} : { opacity: 0.85 }}
    >
      <motion.div
        layout="position"
        style={{
          display:    "flex",
          alignItems: "center",
          gap:        12,
          padding:    expanded ? "12px 14px 10px" : "5px 13px 5px 8px",
          transition: "padding 0.38s cubic-bezier(0.25,0.1,0.25,1)",
        }}
      >
        <div style={{
          width:          22,
          height:         22,
          borderRadius:   "50%",
          background:     "#1C4332",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          flexShrink:     0,
        }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: "#fff", lineHeight: 1 }}>K</span>
        </div>

        <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0f1729", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
          Made by Kavi
        </span>

        <AnimatePresence>
          {isOpen && (
            <motion.button
              key="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              transition={{ duration: 0.15 }}
              onClick={(e) => { e.stopPropagation(); close() }}
              style={{
                marginLeft: "auto",
                background: "none",
                border:     "none",
                cursor:     "pointer",
                color:      "rgba(0,0,0,0.3)",
                padding:    0,
                fontSize:   13,
                lineHeight: 1,
                display:    "flex",
                alignItems: "center",
              }}
              aria-label="Close"
            >
              ✕
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      {expanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isClosing ? 0 : 1 }}
          transition={isClosing ? { duration: 0 } : { delay: 0.2, duration: 0.2 }}
          style={{
            padding:   "0 14px 14px",
            borderTop: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <p style={{
            fontSize:   "0.9rem",
            color:      "#4b5563",
            lineHeight: 1.6,
            margin:     "10px 0 12px",
          }}>
            Beautiful websites for wellness practitioners. $0 upfront, $49/month, we handle everything.
          </p>
          <a
            href="https://kavimade.com?utm_source=kavi-badge"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontSize:       "0.9rem",
              fontWeight:     600,
              color:          "#1C4332",
              textDecoration: "none",
              display:        "inline-flex",
              alignItems:     "center",
              gap:            4,
            }}
          >
            kavimade.com →
          </a>
        </motion.div>
      )}
    </motion.div>
  )
}
