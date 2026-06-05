export function ContactV2Section() {
  return (
    <section id="contact" className="bg-hs-bg pt-0 md:pt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-20">
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 md:gap-20 items-start">

          {/* Left — heading + tagline */}
          <div>
            <h2 className="text-hs-text mb-5">Come as you are.</h2>
            <p className="text-hs-olive leading-snug font-light" style={{ fontSize: "1.2rem" }}>
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
                <address className="not-italic text-hs-text text-sm leading-relaxed">
                  36 Nai Nam 8<br />
                  Hai Chau, Da Nang<br />
                  Vietnam
                </address>
                <a
                  href="https://maps.app.goo.gl/262E4hjNeNseDdKGA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hs-olive text-xs underline underline-offset-4 hover:opacity-70 transition-opacity mt-2 inline-block"
                >
                  Get Directions →
                </a>
              </div>
              <div>
                <p className="text-hs-text text-sm">Instagram</p>
                <a
                  href="https://www.instagram.com/heartstudio.dn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hs-olive text-xs mt-1 hover:opacity-70 transition-opacity inline-block"
                >
                  @heartstudio.dn
                </a>
              </div>
              <div>
                <p className="text-hs-text text-sm">All levels welcome.</p>
                <p className="text-hs-text-muted text-xs mt-1">English &amp; Vietnamese</p>
              </div>
            </div>

            {/* CTA — replaces the form */}
            <p className="text-hs-text-muted text-sm leading-relaxed mb-6 max-w-sm">
              Questions about your first visit, packages, or private sessions? Send us a message and we&rsquo;ll get back to you.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/841687824415"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-hs-text text-hs-text px-6 py-3 rounded-full text-sm hover:bg-hs-text hover:text-hs-white transition-colors"
              >
                Message us →
              </a>
              <a
                href="mailto:movebychan@gmail.com"
                className="inline-flex items-center gap-2 border border-hs-text text-hs-text px-6 py-3 rounded-full text-sm hover:bg-hs-text hover:text-hs-white transition-colors"
              >
                Email us →
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Map — matched to content margins */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.5778264056826!2d108.22917071110075!3d16.03547768457507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142196b999bf977%3A0x85d97493b8cb9916!2sHeart%20Studio%20by%20Chan!5e0!3m2!1sen!2s!4v1780648274328!5m2!1sen!2s"
          width="100%"
          className="h-[360px] md:h-[480px] w-full"
          height="480"
          style={{ border: 0, display: "block", borderRadius: "1.5rem" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Heart Studio — 36 Nai Nam 8, Hai Chau, Da Nang"
        />
      </div>

    </section>
  )
}
