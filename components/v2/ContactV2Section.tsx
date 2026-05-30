export function ContactV2Section() {
  return (
    <section id="contact" className="bg-hs-bg py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 md:gap-20 items-start">

          {/* Left — heading + tagline */}
          <div>
            <h2 className="text-hs-olive mb-5">Come as you are.</h2>
            <p
              className="text-hs-text-muted text-xl md:text-2xl leading-snug font-light"
              style={{ fontFamily: "var(--font-cormorant-garamond), Georgia, serif" }}
            >
              Whether you&rsquo;re ready to begin, or simply{" "}
              <em style={{ fontStyle: "italic" }}>curious</em>{" "}
              — you&rsquo;re welcome here.
            </p>
          </div>

          {/* Right — info columns + CTA */}
          <div>

            {/* 3-column info block */}
            <div className="grid grid-cols-3 gap-6 pb-10 mb-10 border-b border-hs-border">
              <div>
                <p className="text-hs-text text-sm leading-relaxed">
                  36 Nai Nam 8<br />
                  Hai Chau, Da Nang<br />
                  Vietnam
                </p>
                <a
                  href="https://maps.app.goo.gl/262E4hjNeNseDdKGA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hs-text-muted text-xs underline underline-offset-4 hover:text-hs-olive transition-colors mt-2 inline-block"
                >
                  Get Directions →
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/heartstudio.dn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hs-text text-sm hover:text-hs-olive transition-colors"
                >
                  Instagram
                </a>
                <p className="text-hs-text-muted text-xs mt-1">@heartstudio.dn</p>
              </div>
              <div>
                <p className="text-hs-text text-sm">All levels welcome.</p>
                <p className="text-hs-text-muted text-xs mt-1">English &amp; Vietnamese</p>
              </div>
            </div>

            {/* CTA — replaces the form */}
            <p className="text-hs-text-muted text-sm leading-relaxed mb-6 max-w-sm">
              Questions about your first visit, packages, or private sessions? Send us a message on Instagram and we&rsquo;ll get back to you.
            </p>
            <a
              href="https://www.instagram.com/heartstudio.dn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-hs-text text-hs-text px-6 py-3 rounded-full text-sm hover:bg-hs-text hover:text-hs-white transition-colors"
            >
              Message us on Instagram →
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}
