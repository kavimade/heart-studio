"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}

export function AboutSection() {
  return (
    <section id="about" className="bg-hs-bg py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image — top on mobile, right on desktop */}
          <motion.div
            className="md:order-last"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/studio-01.webp"
                alt="Chan teaching yoga at Heart Studio, Da Nang"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "rgba(247, 244, 239, 0.12)" }}
              />
            </div>
          </motion.div>

          {/* Text — below on mobile, left on desktop */}
          <motion.div
            className="md:order-first"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-hs-text mb-6">
              Heart was built from longing.
            </h2>
            <div className="space-y-4 text-hs-text-muted leading-relaxed text-base md:text-lg">
              <p>
                Not for another yoga class. For a space that actually felt right. Beautiful without being precious. Grounded without being heavy. A place where the practice means something.
              </p>
              <p>
                Every class is taught by Chan — a teacher with 8 years of experience and over a thousand hours of training in yoga, anatomy, and therapeutic movement. She has led anatomy trainings and mentorship programs for yoga teachers across Vietnam. She has lived and studied in Hoi An, Thailand, and Bali.
              </p>
              <p>
                She brings all of it into the room. With precision. With warmth. Without ego.
              </p>
              <p className="text-hs-text font-medium">
                This is her life&rsquo;s work. You&rsquo;ll feel it.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="#schedule"
                className="inline-flex items-center gap-2 bg-hs-olive hover:bg-hs-olive-dark text-hs-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
              >
                See Classes →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
