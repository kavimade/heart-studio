import { KaviBadge } from "@/components/ui/KaviBadge"

export function Footer() {
  return (
    <>
      <footer className="bg-hs-olive-dark py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            {/* Studio info */}
            <div>
              <p className="text-hs-white font-display text-xl font-medium mb-1">
                Heart Studio by Chan
              </p>
              <p className="text-hs-white/50 text-sm">
                Da Nang, Vietnam
              </p>
              <a
                href="https://www.instagram.com/heartstudio.dn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hs-white/60 text-sm hover:text-hs-white/90 transition-colors"
              >
                @heartstudio.dn
              </a>
            </div>

            {/* Kavi badge (inline/footer variant) */}
            <div className="opacity-70 hover:opacity-100 transition-opacity">
              <KaviBadge static />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
