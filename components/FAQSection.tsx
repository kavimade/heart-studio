import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    q: "Where are you located?",
    a: (
      <>
        36 Nai Nam 8, Hai Chau, Da Nang.{" "}
        <a
          href="https://maps.app.goo.gl/262E4hjNeNseDdKGA"
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
    a: (
      <>
        Through the schedule above or the Vibefam app. First-time visitors are also welcome to message us directly.
        <br />
        <a
          href="#schedule"
          className="mt-3 inline-flex items-center border border-hs-text text-hs-text px-5 py-2 rounded-full text-xs hover:bg-hs-text hover:text-hs-white transition-colors"
        >
          Book a yoga class
        </a>
      </>
    ),
  },
  {
    q: "What is your cancellation policy?",
    a: "Free cancellation up to 3 hours before class. Late cancellations or no-shows may be counted against your package.",
  },
  {
    q: "Do you offer private sessions or workshops?",
    a: "Yes. Chan offers workshops periodically and is available for private sessions. Send us a message to arrange.",
  },
  {
    q: "Do you teach in English and Vietnamese?",
    a: "Both. Chan teaches comfortably in either language. All communications are bilingual.",
  },
  {
    q: "Can I rent the studio space?",
    a: "Yes. The studio is available for workshops, events, and content creation. It's a beautiful, calm space — ideal for wellness teachers, photographers, and creators. Send us a message to check availability.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-hs-bg pb-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-hs-text mb-12">Questions?</h2>

        <div className="divide-y divide-hs-border">
          {FAQS.map((faq, i) => (
            <details key={i} className="group">
              <summary className="list-none [&::-webkit-details-marker]:hidden w-full text-left flex items-center justify-between gap-4 py-5 cursor-pointer">
                <span className="text-hs-text font-medium text-base md:text-lg leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className="text-hs-text-muted shrink-0 transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="text-hs-text-muted text-sm md:text-base leading-relaxed pb-5">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
