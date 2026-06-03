export function PackagesSection() {
  return (
    <section id="packages" className="bg-hs-bg pt-20 pb-10 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-hs-text mb-3">Packages.</h2>
        <p className="text-hs-text-muted text-base md:text-lg mb-10">
          Save with a class pack or membership — browse options below.
        </p>

        <div className="rounded-2xl overflow-hidden mb-10">
          <iframe
            src="https://bookings.vibefam.com/heartstudiodn/packages#widget"
            width="100%"
            height="700"
            frameBorder="0"
            title="Heart Studio Packages"
            allow="clipboard-read; clipboard-write"
          />
        </div>
      </div>
    </section>
  )
}
