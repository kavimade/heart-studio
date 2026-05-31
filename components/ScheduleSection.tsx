export function ScheduleSection() {
  return (
    <section id="schedule" className="bg-hs-olive py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-hs-white mb-3">Book a Class.</h2>
        <p className="text-hs-white/75 text-base md:text-lg mb-10">
          Book directly through the schedule below.
        </p>

        {/* Vibefam embed — replace with actual embed code when provided */}
        {/* VIBEFAM_EMBED */}
        <div className="bg-hs-white/10 border border-hs-white/20 rounded-2xl p-10 md:p-14 text-center mb-10">
          <p className="text-hs-white/60 text-sm uppercase tracking-widest mb-2">Schedule</p>
          <p className="text-hs-white text-lg font-medium mb-1">Vibefam booking embed</p>
          <p className="text-hs-white/50 text-sm">
            Replace this block with the Vibefam iframe embed code.
          </p>
        </div>

        {/* Supporting copy */}
        <div className="text-hs-white/80 text-sm md:text-base space-y-3">
          <p>Walk-ins welcome. Booking ahead is recommended — spots fill quickly.</p>
          <p>Free cancellation up to 3 hours before class.</p>
          <p className="pt-2">
            Questions about packages or your first visit?{" "}
            <a
              href="https://www.instagram.com/heartstudio.dn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hs-white underline underline-offset-4 hover:text-hs-white/75 transition-colors"
            >
              Send us a message →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
