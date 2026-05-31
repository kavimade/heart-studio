import { FadeIn } from "@/components/ui/FadeIn"

const CLASSES = [
  {
    label:       "Foundation Practice",
    name:        "Hatha",
    description: "A slower, deliberate practice focused on alignment, awareness, and the deeper meaning within each posture. Connect with why you practice, not just how.",
    bg:          "#E5E6D8",
    text:        "#3D3830",
    muted:       "#6B6358",
    wm:          "rgba(61,56,48,0.055)",
    initial:     "H",
  },
  {
    label:       "Dynamic Practice",
    name:        "Vinyasa",
    description: "Strength, resilience, focus, and flow — linked together through breath. Playful and challenging in equal measure.",
    bg:          "#6B7A50",
    text:        "#FAFAF7",
    muted:       "rgba(250,250,247,0.65)",
    wm:          "rgba(250,250,247,0.06)",
    initial:     "V",
  },
  {
    label:       "Restorative Practice",
    name:        "Yin",
    description: "Long-held postures that release deep tension, calm the nervous system, and return you to stillness. For an increasingly restless world.",
    bg:          "#C9BFB0",
    text:        "#3D3830",
    muted:       "#6B6358",
    wm:          "rgba(61,56,48,0.055)",
    initial:     "Y",
  },
  {
    label:       "Functional Movement",
    name:        "Breath, Core & Posture",
    description: "Designed for modern bodies. If you sit at a desk, carry tension in your spine, or want to move better in everyday life — this class is for you.",
    bg:          "#3D3830",
    text:        "#FAFAF7",
    muted:       "rgba(250,250,247,0.55)",
    wm:          "rgba(250,250,247,0.045)",
    initial:     "B",
  },
]

export function ClassesV2Section() {
  return (
    <section id="classes" className="bg-hs-bg py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* 2-col header */}
        <FadeIn>
        <div className="grid md:grid-cols-[5fr_7fr] gap-8 md:gap-16 mb-14 items-start">
          <div>
            <h2 className="text-hs-text mb-3">Our Classes</h2>
            <p
              className="text-hs-olive font-light"
              style={{ fontFamily: "var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif", fontSize: "1.2rem" }}
            >
              Come in. Breathe deep. Go further.
            </p>
          </div>
          <div className="md:pt-2">
            <p className="text-hs-text-muted leading-relaxed">
              Four pillars of practice, each designed to complement the others — rooted in the spirit of yoga while meeting the demands of modern life. All levels welcome.
            </p>
          </div>
        </div>
        </FadeIn>

        {/* 4 tall cards — generous gap, large rounded corners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 md:mt-20">
          {CLASSES.map((cls, i) => (
            <FadeIn key={cls.name} delay={i * 0.08}>
            <div
              className="rounded-3xl relative overflow-hidden flex flex-col h-full"
              style={{ background: cls.bg }}
            >
              {/* Giant watermark initial — background illustration */}
              <span
                className="absolute -bottom-6 -right-3 select-none pointer-events-none leading-none"
                style={{
                  fontFamily:  "var(--font-cormorant-garamond), Georgia, serif",
                  fontSize:    "clamp(8rem, 14vw, 13rem)",
                  fontWeight:  600,
                  color:       cls.wm,
                  lineHeight:  0.85,
                }}
                aria-hidden="true"
              >
                {cls.initial}
              </span>

              {/* Card content */}
              <div className="relative z-10 flex flex-col h-full p-8 md:p-9">
                {/* Label */}
                <p
                  className="text-xs uppercase tracking-widest mb-6"
                  style={{ color: cls.muted }}
                >
                  {cls.label}
                </p>

                {/* Class name — large, flowing */}
                <div>
                  <h3
                    className="mb-5 leading-tight"
                    style={{ color: cls.text }}
                  >
                    {cls.name}
                  </h3>

                  {/* Divider */}
                  <div
                    className="w-8 h-px mb-5"
                    style={{ background: cls.muted, opacity: 0.5 }}
                  />

                  {/* Description */}
                  <p
                    className="leading-relaxed text-sm"
                    style={{ color: cls.muted }}
                  >
                    {cls.description}
                  </p>
                </div>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>

        <p className="text-hs-text-muted text-base text-center mt-10">
          All levels welcome. Not sure where to start?{" "}
          <span className="text-hs-text font-medium">Hatha or Yin</span> is a gentle entry point.
        </p>
        <div className="flex justify-center mt-8">
          <a
            href="#schedule"
            className="bg-hs-terracotta hover:bg-hs-terracotta-dark text-hs-white px-8 py-3 rounded-full font-medium text-sm transition-colors"
          >
            Book a Class →
          </a>
        </div>
      </div>
    </section>
  )
}
