const CLASS_LIST = [
  {
    number: "01",
    name:   "Hatha",
    desc:   "Slower, deliberate practice. Alignment, awareness, and the deeper meaning within each posture.",
  },
  {
    number: "02",
    name:   "Vinyasa",
    desc:   "Strength, resilience, and flow linked together through breath. Playful and challenging.",
  },
  {
    number: "03",
    name:   "Yin",
    desc:   "Long-held postures that release deep tension and return you to stillness.",
  },
  {
    number: "04",
    name:   "Breath, Core & Posture",
    desc:   "Functional movement for modern bodies. For anyone who sits at a desk or carries tension.",
  },
]

export function ScheduleV2Section() {
  return (
    <section id="schedule" className="bg-hs-surface py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header row */}
        <div className="grid md:grid-cols-[5fr_7fr] gap-8 md:gap-16 items-start mb-12 md:mb-16">
          <div>
            <h2 className="text-hs-text mb-5">Book a Class.</h2>
            <a
              href="https://www.instagram.com/heartstudio.dn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-hs-text/70 text-hs-text px-4 py-2 rounded-full text-xs hover:bg-hs-text hover:text-hs-white transition-colors"
            >
              Message to book →
            </a>
          </div>
          <p className="text-hs-text-muted text-sm leading-relaxed md:pt-1.5 max-w-md">
            Walk-ins welcome. Booking ahead recommended — spots fill quickly. Book through the schedule below, the Vibefam app, or message us on Instagram.
          </p>
        </div>

        {/* Class rows */}
        <div className="border-t border-hs-border mb-14">
          {CLASS_LIST.map((cls) => (
            <div
              key={cls.number}
              className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[2.5rem_1fr_2fr] items-center gap-4 py-5 border-b border-hs-border"
            >
              <span className="text-hs-text-muted text-xs tabular-nums">{cls.number}</span>
              <span className="text-hs-text font-medium">{cls.name}</span>
              <span className="hidden md:block text-hs-text-muted text-sm">{cls.desc}</span>
            </div>
          ))}
        </div>

        {/* Vibefam embed */}
        {/* VIBEFAM_EMBED */}
        <div className="bg-hs-bg rounded-xl border border-hs-border p-10 md:p-14 text-center">
          <p className="text-hs-text-muted/60 text-xs uppercase tracking-widest mb-2">Live Schedule</p>
          <p className="text-hs-text text-base font-medium mb-1">Vibefam booking embed</p>
          <p className="text-hs-text-muted/50 text-sm">Replace this block with the Vibefam iframe embed code.</p>
        </div>

      </div>
    </section>
  )
}
