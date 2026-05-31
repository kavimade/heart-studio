"use client"

import { useEffect, useState, ReactNode } from "react"
import { motion } from "framer-motion"

interface FadeInProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

export function FadeIn({ children, delay = 0, y = 22, className }: FadeInProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  // Render children without animation wrapper until client is ready —
  // prevents IntersectionObserver from firing during hydration
  if (!mounted) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
