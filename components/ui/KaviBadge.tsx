"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"

interface KaviBadgeProps {
  /** Render inline (non-floating) with popover expanding upward */
  static?: boolean
  /** Fill color for the Kavi icon. Defaults to #1C4332 */
  iconColor?: string
  /** Fill color for the Kavi wordmark. Defaults to #1C4332 */
  wordmarkColor?: string
  /** If true, clicking links directly to kavimade.com instead of expanding the info card */
  direct?: boolean
  /** Background color of the pill. Defaults to #ffffff */
  pillBg?: string
  /** Border color of the pill. Defaults to rgba(0,0,0,0.10) */
  pillBorderColor?: string
}

function KaviIcon({ color = "#1C4332", size = 20, controls }: { color?: string; size?: number; controls: ReturnType<typeof useAnimation> }) {
  return (
    <motion.div
      animate={controls}
      style={{ display: "flex", flexShrink: 0 }}
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 336.12 330.43"
      width={size}
      height={size}
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <path
        fill={color}
        d="M158.81,1.49c.43,1,.86,5.99,1,11.13.14,5.14,1.57,30.1,3,55.49,2.85,46.36,3.71,51.35,7.99,46.79,1.43-1.43,4.42-25.82,6.99-58.77,1.57-18.26,5.28-55.63,5.56-56.06.29-.14,6.13.71,13.12,1.85,16.12,2.85,35.23,8.99,34.38,11.27-2.57,6.56-36.23,90.29-38.94,96.85-3.71,8.7-3.57,10.98.71,10.98,2.57,0,4.42-2.85,42.36-68.75,9.27-16.26,17.54-29.53,18.12-29.67,3.71-.14,38.09,26.82,38.09,29.95,0,.71-18.54,18.69-41.37,39.94-22.68,21.25-41.37,39.65-41.37,40.8s.86,2.42,2,2.85c1.85.71,11.13-5.42,75.46-50.35,10.41-7.27,19.54-13.27,20.4-13.27,3.14,0,21.97,35.66,21.97,41.65,0,1.28-17.69,7.7-53.63,19.4-33.95,11.13-53.78,18.4-54.35,19.68-1.57,4.14,1.57,5.14,10.41,3.57,4.71-.86,10.41-1.85,12.7-2.14,4.99-.86,54.92-9.41,75.89-13.12,7.99-1.43,15.12-2.14,15.69-1.43,1.43,1.43,1.57,48.78.14,50.21-1,.86-12.41-1-72.46-11.55-38.66-6.85-39.94-6.99-41.65-5.28-.86.86-1.14,2.42-.86,3.42.43,1,24.96,9.84,54.49,19.4,39.37,12.98,53.63,18.26,53.63,19.83,0,4.99-19.11,41.79-21.68,41.79-.57,0-6.85-3.99-13.98-8.99-6.99-4.85-27.96-19.4-46.36-32.09-31.81-22.11-37.8-25.25-37.8-19.83,0,1.14,17.83,18.69,39.8,38.94,21.82,20.4,40.51,38.09,41.37,39.65,1.57,2.28.86,3.57-6.99,10.7-10.56,9.41-28.24,21.82-29.95,20.83-.57-.43-2.71-3.42-4.56-6.85-35.66-62.33-53.06-90.86-55.34-90.86-1.57,0-3,.57-3.42,1.28-.43.57,8.84,24.96,20.54,54.06,11.84,29.24,21.4,53.35,21.4,53.63,0,2-46.64,13.41-47.93,11.84-.29-.29-4.42-42.79-5.42-55.92-3.14-37.66-5.56-57.2-7.42-59.2-4.71-4.71-4.56-5.99-10.98,106.13-.29,4.71-1.28,8.84-2,8.99-2.57.86-27.82-3.57-37.8-6.7l-9.56-2.85,6.28-17.54c3.42-9.56,12.12-33.95,19.4-54.2,9.7-26.96,12.84-37.09,11.55-38.37-.86-.86-2.42-1.14-3.42-.71-1.14.29-13.69,22.68-28.1,49.64-14.41,26.96-26.53,49.64-27.1,50.21-1.43,1.43-24.11-13.69-33.66-22.39l-7.13-6.42,40.37-40.37c22.11-22.25,40.22-41.37,40.22-42.65s-.86-2.71-2-3.14c-1.28-.57-20.4,12.98-47.5,33.24-24.96,18.83-45.79,34.23-46.22,34.23-2.85,0-22.68-36.52-22.68-41.79,0-2,21.68-10.56,81.31-32.09,23.25-8.27,25.68-9.41,25.68-12.41,0-4.42,2.14-4.85-78.17,12.12-19.83,4.14-36.23,7.27-36.52,6.99-3.28-3.28-3.28-54.63-.14-59.91.43-.57,54.35,10.27,104.7,21.25,7.42,1.71,10.13,1,10.13-2.57,0-2.85,2.85-1.71-63.48-25.96-23.54-8.56-43.22-15.98-43.79-16.55-2.14-2.14,19.68-43.08,22.97-43.08.57,0,21.25,15.12,45.93,33.52,24.53,18.54,45.65,33.38,46.79,33.24,1.28-.29,2.28-1.43,2.28-2.71s-17.83-20.54-39.8-42.79l-39.65-40.51,7.27-6.7c9.84-8.99,31.38-23.25,32.95-21.68.57.71,11.55,20.83,24.39,44.79,12.7,23.96,24.68,46.22,26.53,49.5,3.42,6.13,6.99,7.85,8.42,4.14.43-1.14-7.56-25.39-17.83-53.92s-18.69-52.63-18.97-53.78c-.43-2.28,11.13-6.28,27.39-9.27,13.84-2.57,19.54-2.71,20.26-.57Z"
      />
    </svg>
    </motion.div>
  )
}

function KaviWordmark({ color = "#1C4332", height = 11 }: { color?: string; height?: number }) {
  const width = Math.round(height * (609.55 / 233.83))
  return (
    <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 609.55 233.83"
      width={width}
      height={height}
      aria-label="Kavi"
      style={{ display: "block", transform: "translateY(-1px)" }}
    >
      <path fill={color} d="M0,229.51V25.91h44.11v91c10.69-4.32,20.62-9.82,29.77-16.5,9.15-6.68,17.38-14.14,24.68-22.36,7.3-8.22,13.42-16.76,18.35-25.6,4.94-8.84,8.64-17.68,11.11-26.53h50.9c-2.88,10.08-7.2,20.05-12.96,29.92-5.76,9.87-12.7,19.28-20.82,28.23-8.13,8.95-16.66,16.81-25.6,23.6-8.95,6.79-18.05,12.34-27.3,16.66v4.01c9.66,0,18.25,1.13,25.76,3.39,7.5,2.27,14.24,5.66,20.21,10.18,5.96,4.53,11.15,10.23,15.58,17.12,4.42,6.89,8.28,15.17,11.57,24.83l16.66,45.66h-50.28l-10.8-37.02c-3.08-10.07-6.89-18.15-11.41-24.22-4.53-6.06-10.54-10.49-18.05-13.26-7.51-2.78-17.23-4.16-29.15-4.16h-18.2v78.66H0Z" />
      <path fill={color} d="M246.17,233.83c-9.25,0-17.38-1.8-24.37-5.4-6.99-3.6-12.45-8.79-16.35-15.58-3.91-6.79-5.86-15.12-5.86-24.99,0-8.84,1.7-16.3,5.09-22.37,3.39-6.06,8.43-10.95,15.12-14.65,6.68-3.7,14.75-6.79,24.21-9.25,9.46-2.47,20.56-4.63,33.32-6.48,6.37-1.03,11.67-2,15.89-2.93,4.21-.93,7.35-2.47,9.41-4.63,2.05-2.16,3.08-5.29,3.08-9.41,0-5.75-2.06-10.69-6.17-14.81-4.12-4.11-10.7-6.17-19.74-6.17-5.76,0-11.16.98-16.2,2.93-5.04,1.96-9.36,5.04-12.96,9.25-3.6,4.22-6.22,9.51-7.87,15.89l-39.18-12.03c2.47-8.43,5.96-15.73,10.49-21.9,4.52-6.17,10.07-11.36,16.66-15.58,6.58-4.21,14.19-7.35,22.83-9.41,8.64-2.05,17.79-3.08,27.45-3.08,15.63,0,28.43,2.52,38.41,7.56,9.97,5.04,17.43,12.85,22.36,23.44,4.94,10.59,7.4,24.22,7.4,40.87v27.46c0,7.2.15,14.55.46,22.06.31,7.51.77,15.01,1.39,22.52.62,7.51,1.33,14.96,2.16,22.36h-39.79c-.62-5.14-1.29-11.11-2-17.89-.72-6.79-1.29-13.47-1.7-20.05h-5.24c-3.08,7.61-7.3,14.65-12.65,21.13-5.35,6.48-11.88,11.62-19.59,15.42-7.71,3.8-16.4,5.71-26.07,5.71ZM264.98,201.75c3.7,0,7.61-.72,11.72-2.16,4.11-1.44,8.02-3.44,11.72-6.01,3.7-2.57,7.2-5.81,10.49-9.72,3.29-3.9,5.75-8.33,7.4-13.26v-25.6l6.79,1.23c-3.5,2.67-7.76,4.78-12.8,6.32-5.04,1.54-10.18,2.73-15.42,3.55-5.24.82-10.44,1.75-15.58,2.78-5.14,1.03-9.77,2.31-13.88,3.86-4.12,1.54-7.3,3.75-9.56,6.63-2.27,2.88-3.39,6.79-3.39,11.72,0,6.38,2.05,11.41,6.17,15.12,4.11,3.7,9.56,5.55,16.35,5.55Z" />
      <path fill={color} d="M421.07,229.51l-54.29-161.64h49.05l33.93,126.78h4.94l34.55-126.78h47.2l-54.29,161.64h-61.08Z" />
      <path fill={color} d="M582.4,43.19c-8.64,0-15.27-1.85-19.9-5.55-4.63-3.7-6.94-8.95-6.94-15.73,0-7.2,2.26-12.65,6.79-16.35,4.52-3.7,11.21-5.55,20.05-5.55s15.32,1.85,20.05,5.55c4.73,3.7,7.09,9.15,7.09,16.35s-2.31,12.29-6.94,15.89c-4.63,3.6-11.37,5.4-20.21,5.4ZM560.19,229.51V67.56h44.42v161.95h-44.42Z" />
    </svg>
    <span style={{ fontSize: Math.round(height * 0.8), color, fontWeight: 400, lineHeight: 1, alignSelf: "flex-start", marginTop: 1, marginLeft: -2 }}>™</span>
    </>
  )
}

export function KaviBadge({ static: isStatic = false, iconColor, wordmarkColor, direct = false, pillBg, pillBorderColor }: KaviBadgeProps) {
  return isStatic
    ? <KaviBadgeInline iconColor={iconColor} wordmarkColor={wordmarkColor} direct={direct} pillBg={pillBg} pillBorderColor={pillBorderColor} />
    : <KaviBadgeFloating iconColor={iconColor} wordmarkColor={wordmarkColor} direct={direct} pillBg={pillBg} pillBorderColor={pillBorderColor} />
}

// ── Inline (footer) variant — plain pill link, no expand ────────────────────

const SPIN = { duration: 0.45, ease: "easeInOut" as const }

const PILL_STYLE = {
  display:     "inline-flex" as const,
  alignItems:  "center" as const,
  gap:         8,
  background:  "#ffffff",
  border:      "1px solid rgba(0,0,0,0.10)",
  borderRadius: 999,
  padding:     "4.75px 12px 4.75px 7.5px",
  boxShadow:   "0 2px 12px rgba(0,0,0,0.12)",
  transition:  "opacity 0.15s ease",
}

function KaviBadgeInline({ iconColor, wordmarkColor, direct = false, pillBg = "#ffffff", pillBorderColor = "rgba(0,0,0,0.10)" }: { iconColor?: string; wordmarkColor?: string; direct?: boolean; pillBg?: string; pillBorderColor?: string }) {
  const [expanded,  setExpanded]  = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const ref      = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const iconControls = useAnimation()

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

  const pillStyle = { ...PILL_STYLE, background: pillBg, border: `1px solid ${pillBorderColor}` }

  const pillInner = (
    <>
      <KaviIcon color={iconColor} controls={iconControls} size={21} />
      <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.76rem", fontWeight: 700, color: "#0f1729", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
        Made by <KaviWordmark color={wordmarkColor} height={12} />
      </span>
    </>
  )

  if (direct) {
    return (
      <a
        href="https://kavimade.com?utm_source=kavi-badge"
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...pillStyle, textDecoration: "none" }}
        onMouseEnter={e => { e.currentTarget.style.opacity = "0.8"; iconControls.start({ rotate: 180, transition: SPIN }) }}
        onMouseLeave={e => { e.currentTarget.style.opacity = "1";   iconControls.start({ rotate: 0,   transition: SPIN }) }}
      >
        {pillInner}
      </a>
    )
  }

  const isOpen = expanded && !isClosing

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <div
        style={{ ...pillStyle, cursor: "pointer" }}
        onClick={() => { if (!expanded && !isClosing) setExpanded(true) }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.8"; iconControls.start({ rotate: 180, transition: SPIN }) }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1";   iconControls.start({ rotate: 0,   transition: SPIN }) }}
      >
        {pillInner}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position:   "absolute",
              bottom:     "calc(100% + 8px)",
              left:       0,
              width:      250,
              background: "#ffffff",
              border:     "1px solid rgba(0,0,0,0.10)",
              borderRadius: 16,
              boxShadow:  "0 2px 12px rgba(0,0,0,0.12)",
              overflow:   "hidden",
              zIndex:     50,
              textAlign:  "left" as const,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "11px 13px 9px" }}>
              <KaviIcon color={iconColor} controls={iconControls} />
              <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: "0.72rem", fontWeight: 700, color: "#0f1729", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
                Made by <KaviWordmark color={wordmarkColor} />
              </span>
              <button
                onClick={close}
                style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "rgba(0,0,0,0.3)", padding: 0, fontSize: 12, lineHeight: 1, display: "flex", alignItems: "center" }}
                aria-label="Close"
              >✕</button>
            </div>
            <div style={{ padding: "0 13px 13px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize: "0.81rem", color: "#4b5563", lineHeight: 1.6, margin: "9px 0 11px" }}>
                Beautiful websites for wellness brands. $0 to build, $39/month. We handle everything.
              </p>
              <a
                href="https://kavimade.com?utm_source=kavi-badge"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "0.81rem", fontWeight: 600, color: "#1C4332", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}
              >
                kavimade.com →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Floating variant ─────────────────────────────────────────────────────────

function KaviBadgeFloating({ iconColor, wordmarkColor, direct = false, pillBg = "#ffffff", pillBorderColor = "rgba(0,0,0,0.10)" }: { iconColor?: string; wordmarkColor?: string; direct?: boolean; pillBg?: string; pillBorderColor?: string }) {
  const [expanded,  setExpanded]  = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const ref         = useRef<HTMLDivElement>(null)
  const timerRef    = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const iconControls = useAnimation()

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
        background: pillBg,
        border:     `1px solid ${pillBorderColor}`,
        boxShadow:  "0 2px 12px rgba(0,0,0,0.12)",
        overflow:   "hidden",
        textAlign:  "left" as const,
        cursor:     isOpen ? "default" : "pointer",
        width:      expanded ? 245 : undefined,
      }}
      onClick={() => {
        if (direct) window.open("https://kavimade.com?utm_source=kavi-badge", "_blank", "noopener,noreferrer")
        else if (!expanded && !isClosing) setExpanded(true)
      }}
      whileHover={expanded ? {} : { opacity: 0.85 }}
      onHoverStart={() => iconControls.start({ rotate: 180, transition: SPIN })}
      onHoverEnd={() =>   iconControls.start({ rotate: 0,   transition: SPIN })}
    >
      <motion.div
        layout="position"
        style={{
          display:    "flex",
          alignItems: "center",
          gap:        8,
          padding:    expanded ? "11px 13px 9px" : "4.5px 12px 4.5px 7px",
          transition: "padding 0.38s cubic-bezier(0.25,0.1,0.25,1)",
        }}
      >
        <KaviIcon color={iconColor} controls={iconControls} />

        <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: "0.72rem", fontWeight: 700, color: "#0f1729", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
          Made by <KaviWordmark color={wordmarkColor} />
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
                color:      "rgba(0,0,0,0.45)",
                padding:    0,
                fontSize:   12,
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

      {!direct && expanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isClosing ? 0 : 1 }}
          transition={isClosing ? { duration: 0 } : { delay: 0.2, duration: 0.2 }}
          style={{
            padding:   "0 13px 13px",
            borderTop: "1px solid rgba(0,0,0,0.06)",
            textAlign: "left" as const,
          }}
        >
          <p style={{
            fontSize:   "0.81rem",
            color:      "#4b5563",
            lineHeight: 1.6,
            margin:     "9px 0 11px",
          }}>
            Beautiful websites for wellness brands. $0 to build, $39/month. We handle everything.
          </p>
          <a
            href="https://kavimade.com?utm_source=kavi-badge"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontSize:       "0.81rem",
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
