"use client"

import { useEffect, useRef } from "react"

export function BeholdWidget() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || container.firstChild) return

    const widget = document.createElement("behold-widget")
    widget.setAttribute("feed-id", "i7IK1GGMpw8IjlpdpIT6")
    container.appendChild(widget)

    if (!document.querySelector('script[src="https://w.behold.so/widget.js"]')) {
      const s = document.createElement("script")
      s.type = "module"
      s.src = "https://w.behold.so/widget.js"
      document.head.append(s)
    }
  }, [])

  return <div ref={containerRef} />
}
