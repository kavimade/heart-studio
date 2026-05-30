"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const CLASSES = [
  {
    name: "Hatha",
    body: "To honor the tradition. A slower, more deliberate practice focused on alignment, awareness, and the deeper meaning within each posture. A space to connect with why you practice, not just how.",
    image: "/images/props-01.webp",
    alt:  "Hatha yoga props and mats at Heart Studio",
  },
  {
    name: "Vinyasa",
    body: "To move with energy. Strength, resilience, focus, and flow — linked together through breath. Playful and challenging in equal measure.",
    image: "/images/studio-02.webp",
    alt:  "Vinyasa yoga practice at Heart Studio",
  },
  {
    name: "Yin",
    body: "To slow down and recover. Long-held postures that release deep tension, calm the nervous system, and return you to stillness. For an increasingly restless world.",
    image: "/images/props-03.webp",
    alt:  "Yin yoga bolsters and props at Heart Studio",
  },
  {
    name: "Breath, Core & Posture",
    body: "To bridge the gaps. Functional movement designed for modern bodies. If you sit at a desk, carry tension in your spine, or want to move better in everyday life — this is for you.",
    image: "/images/studio-03.webp",
    alt:  "Breath and core practice at Heart Studio",
  },
]

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}

export function ClassesSection() {
  return (
    <section id="classes" className="bg-hs-surface py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-hs-text mb-4">Four pillars. One practice.</h2>
          <p className="text-hs-text-muted text-base md:text-lg leading-relaxed">
            At Heart, every class exists for a reason. Together they form a complete practice — rooted in the spirit of yoga while meeting the demands of modern life.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {CLASSES.map((cls) => (
            <motion.article
              key={cls.name}
              variants={card}
              className="bg-hs-bg rounded-2xl overflow-hidden border border-hs-border/60"
            >
              <div className="relative h-52">
                <Image
                  src={cls.image}
                  alt={cls.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(247, 244, 239, 0.25)" }}
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-hs-text mb-3">{cls.name}</h3>
                <p className="text-hs-text-muted leading-relaxed text-sm md:text-base">
                  {cls.body}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Closing note */}
        <motion.p
          className="mt-10 text-hs-text-muted text-sm md:text-base text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          All levels welcome. Not sure where to start?{" "}
          <span className="text-hs-text font-medium">Hatha or Yin</span> is a gentle entry point.
        </motion.p>
      </div>
    </section>
  )
}
