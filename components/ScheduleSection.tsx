export function ScheduleSection() {
  return (
    <section id="schedule" className="bg-hs-olive py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-hs-white mb-3">Book a Yoga Class.</h2>
        <p className="text-hs-white/75 text-base md:text-lg mb-10">
          Book directly through the schedule below.
        </p>

        <div className="mb-10 rounded-2xl overflow-hidden">
          <iframe
            src="https://bookings.vibefam.com/heartstudiodn/classes#widget"
            width="100%"
            height="700"
            frameBorder="0"
            title="Book a Yoga Class"
          />
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
