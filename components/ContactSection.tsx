import Image from "next/image"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/gathering-01.webp"
          alt="Heart Studio community"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(61, 56, 48, 0.62)" }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-hs-white mb-5">Come as you are.</h2>
        <p className="text-hs-white/80 text-base md:text-lg leading-relaxed mb-12 max-w-lg mx-auto">
          Whether you&rsquo;re returning to practice after a long time away, or simply curious what yoga can offer — you&rsquo;re welcome here.
        </p>

        {/* Contact details */}
        <div className="flex flex-col items-center gap-5">
          {/* Address */}
          <div className="text-hs-white/75 text-sm md:text-base">
            <p className="mb-2">📍 36 Nai Nam 8, Hai Chau, Da Nang</p>
            <a
              href="https://maps.google.com/?q=36+Nai+Nam+8+Hai+Chau+Da+Nang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hs-white/90 underline underline-offset-4 hover:text-hs-white transition-colors text-sm"
            >
              Get Directions →
            </a>
          </div>

          {/* Instagram CTA */}
          <a
            href="https://www.instagram.com/heartstudio.dn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-hs-terracotta hover:bg-hs-terracotta-dark text-hs-white px-8 py-4 rounded-full font-medium text-base transition-colors mt-2"
          >
            Message us on Instagram →
          </a>

          <p className="text-hs-white/50 text-sm">
            @heartstudio.dn
          </p>
        </div>
      </div>
    </section>
  )
}
