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
  /** Affiliate ref code — appends ?ref=CODE for referral attribution */
  refCode?: string
}

function KaviIcon({ color = "#1C4332", size = 20, controls }: { color?: string; size?: number; controls: ReturnType<typeof useAnimation> }) {
  return (
    <motion.div
      animate={controls}
      style={{ display: "flex", flexShrink: 0 }}
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 143.0936 139.871"
      width={size}
      height={size}
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <path
        fill={color}
        d="M143.0613,69.9355c.0102-.4994.0323-.9959.0323-1.4979h-.0649c-.1315-3.1987-.4699-6.3435-1.0109-9.42l-43.1603,7.4843-3.7164.6446c-.897.1556-1.765-.397-2.0038-1.2755l-.0009-.0034c-.2463-.9067.2615-1.8474,1.1546-2.139l3.5562-1.1613,41.6467-13.6026c-2.1969-6.6509-5.343-12.8695-9.2806-18.4945l-35.9525,25.0216-3.1793,2.2128c-.7496.5217-1.7733.3849-2.3598-.3153-.6014-.718-.5368-1.7808.1474-2.4206l2.8099-2.6284,31.9862-29.9215c-4.7389-5.0397-10.203-9.3937-16.2239-12.888l-22.0098,37.8779-1.9793,3.4062c-.4615.7941-1.455,1.1011-2.2841.706l-.0087-.0043c-.8408-.4007-1.2249-1.3862-.8772-2.2503l1.4652-3.643L98.0981,4.9764c-6.3347-2.5343-13.1148-4.1878-20.1905-4.8128l-3.9397,43.6296-.3575,3.9526c-.0828.9167-.8566,1.6156-1.7769,1.6049l-.0212-.0002c-.9293-.0108-1.6905-.7407-1.7407-1.6687l-.2125-3.9413L67.4988,0c-7.1178.3956-13.9559,1.8329-20.3671,4.1615l14.8687,41.2113,1.3414,3.718c.3126.8667-.0942,1.8281-.9343,2.2067l-.0341.0155c-.8465.3815-1.8439.0415-2.2811-.7776l-1.8448-3.4564L37.6221,8.4285c-6.1605,3.3202-11.7805,7.5212-16.688,12.4344l30.8866,31.0607,2.7393,2.7546c.6504.6541.6872,1.6988.084,2.3968l-.0368.0425c-.6062.7017-1.6526.8141-2.3938.2571l-3.072-2.3074L14.117,28.7586c-4.1298,5.5459-7.4738,11.7143-9.8685,18.3337l41.1323,15.1032,3.5571,1.3059c.8638.3171,1.3387,1.2452,1.0907,2.1313l-.0203.0717c-.2505.8951-1.1528,1.4421-2.0624,1.2503l-3.6465-.7691L1.4269,57.1399c-.7442,3.6699-1.1935,7.4464-1.3519,11.2977h-.075c0,.5024.0272.9981.0377,1.498-.0105.4999-.0377.9956-.0377,1.4979h.075c.1584,3.8513.6076,7.6278,1.3519,11.2977l42.8725-9.0456,3.6465-.769c.9095-.1919,1.8119.3551,2.0624,1.2502l.0203.0717c.2481.8861-.2269,1.8142-1.0907,2.1314l-3.5571,1.3059-41.1323,15.1032c2.3947,6.6193,5.7387,12.7876,9.8685,18.3336l35.0245-26.3085,3.072-2.3074c.7413-.557,1.7877-.4446,2.3938.2572l.0368.0425c.6032.698.5664,1.7428-.084,2.3968l-2.7393,2.7545-30.8866,31.0607c4.9075,4.9131,10.5276,9.1141,16.688,12.4344l20.6253-38.6506,1.8448-3.4564c.4373-.819,1.4347-1.159,2.2811-.7775l.0341.0155c.8402.3785,1.247,1.3399.9343,2.2066l-1.3414,3.7181-14.8687,41.2113c6.4112,2.3286,13.2493,3.7659,20.3671,4.1615l2.3603-43.7403.2125-3.9414c.0502-.928.8115-1.658,1.7407-1.6687l.0212-.0002c.9203-.0107,1.6941.6882,1.7769,1.6049l.3575,3.9526,3.9397,43.6296c7.0757-.6251,13.8557-2.2785,20.1905-4.8129l-16.3506-40.6469-1.4652-3.6429c-.3476-.8642.0365-1.8495.8772-2.2504l.0087-.0042c.8291-.3952,1.8226-.0881,2.2841.706l1.9793,3.4061,22.0098,37.8779c6.0209-3.4943,11.4849-7.8483,16.2239-12.888l-31.9862-29.9215-2.8099-2.6284c-.6842-.6398-.7487-1.7025-.1474-2.4205.5864-.7002,1.6101-.837,2.3598-.3153l3.1793,2.2128,35.9525,25.0215c3.9376-5.6251,7.0837-11.8435,9.2806-18.4945l-41.6467-13.6026-3.5562-1.1613c-.8931-.2916-1.4009-1.2323-1.1546-2.139l.0009-.0034c.2388-.8784,1.1068-1.431,2.0038-1.2754l3.7164.6446,43.1603,7.4843c.541-3.0765.8793-6.2214,1.0109-9.42h.0649c0-.502-.0221-.9985-.0323-1.498Z"
      />
    </svg>
    </motion.div>
  )
}

function KaviWordmark({ color = "#1C4332", height = 11 }: { color?: string; height?: number }) {
  const width = Math.round(height * (421.45 / 131.57))
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 421.45 131.57"
      width={width}
      height={height}
      aria-label="Kavi"
      style={{ display: "block", transform: "translateY(-1px)" }}
    >
      <path fill={color} d="M375.12,15.11c0-2.75-.07-5.99-.21-8.53l-7.34.07V2.06h20.88v4.58l-7.34-.07c-.21,2.68-.21,5.78-.21,8.53,0,4.09.07,8.46.28,12.7h-6.35c.21-4.23.28-8.61.28-12.7ZM390.63,14.9l-.07-12.84h8.89l6.28,20.03h.35l6.28-20.03h8.89l-.14,12.84c0,4.3.07,8.53.35,12.91h-6.06l.14-11.78c0-3.03-.07-5.71-.21-8.89h-.28l-6.56,20.66h-5.15l-6.56-20.66h-.35c-.14,3.1-.14,5.85-.14,8.89,0,4.09.07,8.18.21,11.78h-6.06c.21-4.3.21-8.61.21-12.91Z" />
      <path fill={color} d="M.74,73.41c0-17.32-.3-37.44-.74-56.53h35.81l-1.04,46.62h4.44l26.2-46.62h38.92l-25.01,39.96c-5.62,10.06-10.66,14.06-27.23,14.36v2.07c16.87.44,21.46,4.74,27.38,14.8l27.38,41.73h-40.4l-27.38-49.43h-4.29c.15,16.13.74,39.22,1.04,49.43H0c.44-18.94.74-39.07.74-56.39Z" />
      <path fill={color} d="M106.56,106.7c0-15.84,10.06-26.49,35.37-26.49,10.21,0,19.09.74,28.27,1.78v-5.33c0-13.32-4.74-21.31-18.06-21.31-3.4,0-6.51.59-9.62,2.07-.59,6.22-.89,11.99-.89,18.35l-33.59-4.44c2.07-27.97,19.98-40.99,49.28-40.99,33.89,0,47.65,14.06,47.65,42.47l-.15,31.38c0,10.21,0,17.91.44,25.6h-35.81l3.55-25.46h-1.92c-3.7,14.21-15.39,27.23-36.26,27.23-17.32,0-28.27-9.18-28.27-24.86ZM170.2,96.94v-6.81c-5.77-.15-9.92-.3-15.98-.3-9.03,0-13.32,3.55-13.32,8.88s4,8.14,10.06,8.14c7.25,0,13.62-2.96,19.24-9.92Z" />
      <path fill={color} d="M207.5,32.56h36.55c6.07,30.78,11.1,57.27,13.76,82.73h2.37c2.66-25.75,7.84-52.09,13.76-82.73h36.55c-8.73,35.67-14.8,64.82-21.31,97.23h-60.23c-6.51-32.41-12.73-61.57-21.46-97.23Z" />
      <path fill={color} d="M313.91,13.02c0-8.88,5.33-13.02,20.42-13.02s20.57,4.14,20.57,13.02c0,9.47-5.48,13.47-20.57,13.47s-20.42-4-20.42-13.47ZM317.02,84.36c0-15.09-.15-30.34-.59-52.83,4.74.59,10.51,1.18,17.91,1.18s13.02-.59,17.91-1.18c-.44,22.5-.59,37.74-.59,52.83s.15,30.34.59,45.43h-35.81c.44-15.1.59-30.34.59-45.43Z" />
    </svg>
  )
}

export function KaviBadge({ static: isStatic = false, iconColor, wordmarkColor, direct = false, pillBg, pillBorderColor, refCode }: KaviBadgeProps) {
  const kaviUrl = refCode
    ? `https://kavimade.com?ref=${refCode}&utm_source=kavi-badge`
    : "https://kavimade.com?utm_source=kavi-badge"
  return isStatic
    ? <KaviBadgeInline iconColor={iconColor} wordmarkColor={wordmarkColor} direct={direct} pillBg={pillBg} pillBorderColor={pillBorderColor} kaviUrl={kaviUrl} />
    : <KaviBadgeFloating iconColor={iconColor} wordmarkColor={wordmarkColor} direct={direct} pillBg={pillBg} pillBorderColor={pillBorderColor} kaviUrl={kaviUrl} />
}

// ── Inline (footer) variant — plain pill link, no expand ────────────────────────────

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

function KaviBadgeInline({ iconColor, wordmarkColor, direct = false, pillBg = "#ffffff", pillBorderColor = "rgba(0,0,0,0.10)", kaviUrl }: { iconColor?: string; wordmarkColor?: string; direct?: boolean; pillBg?: string; pillBorderColor?: string; kaviUrl: string }) {
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
        href={kaviUrl}
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
                Beautiful websites for wellness practitioners. $0 to build, $39/month. We handle everything.
              </p>
              <a
                href={kaviUrl}
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

// ── Floating variant ──────────────────────────────────────────────────────────────

function KaviBadgeFloating({ iconColor, wordmarkColor, direct = false, pillBg = "#ffffff", pillBorderColor = "rgba(0,0,0,0.10)", kaviUrl }: { iconColor?: string; wordmarkColor?: string; direct?: boolean; pillBg?: string; pillBorderColor?: string; kaviUrl: string }) {
  const [mounted,   setMounted]   = useState(false)
  const [expanded,  setExpanded]  = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const ref         = useRef<HTMLDivElement>(null)
  const timerRef    = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const iconControls = useAnimation()

  useEffect(() => { setMounted(true) }, [])

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

  if (!mounted) return null

  const ease   = { duration: 0.38, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }
  const isOpen = expanded && !isClosing

  return (
    <motion.div
      ref={ref}
      layout={!isClosing}
      initial={{ opacity: 0, y: 10, borderRadius: 999 }}
      animate={{
        borderRadius: expanded ? 16 : 999,
        opacity:      isClosing ? 0 : 1,
        y:            0,
      }}
      transition={{
        layout:       ease,
        borderRadius: ease,
        opacity:      isClosing ? { duration: 0.2, ease: "easeOut" } : { duration: 0.4, ease: "easeOut" },
        y:            { duration: 0.4, ease: "easeOut" },
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
        if (direct) window.open(kaviUrl, "_blank", "noopener,noreferrer")
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
            Beautiful websites for wellness practitioners. $0 to build, $39/month. We handle everything.
          </p>
          <a
            href={kaviUrl}
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
