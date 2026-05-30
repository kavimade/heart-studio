"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    q: "Where are you located?",
    a: (
      <>
        36 Nai Nam 8, Hai Chau, Da Nang.{" "}
        <a
          href="https://maps.google.com/?q=36+Nai+Nam+8+Hai+Chau+Da+Nang"
          target="_blank"
          rel="noopener noreferrer"
          className="text-hs-olive hover:text-hs-olive-dark underline underline-offset-4 transition-colors"
        >
          Get Directions →
        </a>
      </>
    ),
  },
  {
    q: "I'm new to yoga. Is this the right place for me?",
    a: "Yes. All classes at Heart are open to beginners. Chan teaches with precision and care — you'll never feel lost or left behind. Hatha or Yin is a good place to start.",
  },
  {
    q: "What should I bring?",
    a: "Comfortable movement clothing. Mats and props are provided. You're welcome to bring your own mat if you prefer.",
  },
  {
    q: "How do I book?",
    a: "Through the schedule above or the Vibefam app. First-time visitors are also welcome to just message us on Instagram.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Free cancellation up to 3 hours before class. Late cancellations or no-shows may be counted against your package.",
  },
  {
    q: "Do you offer private sessions or workshops?",
    a: "Yes. Chan offers workshops periodically and is available for private sessions. Send us a message on Instagram to arrange.",
  },
  {
    q: "Do you teach in English and Vietnamese?",
    a: "Both. Chan teaches comfortably in either language. All communications are bilingual.",
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-hs-bg py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-hs-text mb-12">Questions?</h2>

        <div className="divide-y divide-hs-border">
          {FAQS.map((faq, i) => (
            <div key={i}>
              {/* Full-row tap target */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left flex items-center justify-between gap-4 py-5 cursor-pointer"
                aria-expanded={open === i}
              >
                <span className="text-hs-text font-medium text-base md:text-lg leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-hs-text-muted shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-hs-text-muted text-sm md:text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
