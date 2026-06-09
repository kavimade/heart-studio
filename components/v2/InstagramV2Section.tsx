import { BeholdWidget } from "@/components/ui/BeholdWidget"

export function InstagramV2Section() {
  return (
    <section className="bg-hs-bg py-20 md:py-28">
      <div className="max-w-7xl mx-auto">

        {/* Header — unchanged */}
        <div className="px-6 md:px-12 mb-10">
          <a
            href="https://www.instagram.com/heartstudio.dn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hs-olive text-xs uppercase tracking-widest mb-3 hover:opacity-70 transition-opacity inline-block"
          >
            @heartstudio.dn
          </a>
          <h2 className="text-hs-text">Connect with us</h2>
        </div>

        {/* Behold embed */}
        <div className="px-6 md:px-12">
          <BeholdWidget />
        </div>

      </div>
    </section>
  )
}
