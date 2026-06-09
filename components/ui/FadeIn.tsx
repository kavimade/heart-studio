"use client"

import { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

interface FadeInProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

export function FadeIn({ children, delay = 0, y = 22, className }: FadeInProps) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
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
