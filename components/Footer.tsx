import Image from "next/image"
import { KaviBadge } from "@/components/ui/KaviBadge"

export function Footer() {
  return (
    <footer style={{ background: "#64644B" }} className="py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

          {/* Studio info with logo */}
          <div className="flex flex-col items-center md:items-start gap-3">
            {/* Logo */}
            <div className="relative overflow-hidden rounded-full shrink-0" style={{ width: 56, height: 56 }}>
              <Image
                src="/images/heart-studio-logo.webp"
                alt="Heart Studio logo"
                fill
                className="object-cover"
                style={{ objectPosition: "50% 28%" }}
                sizes="56px"
              />
            </div>

            <p className="text-hs-white font-display text-xl font-medium">
              Heart Studio by Chan
            </p>
            <p className="text-hs-white/50 text-sm -mt-2">
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

          {/* Kavi badge */}
          <div className="opacity-70 hover:opacity-100 transition-opacity">
            <KaviBadge static />
          </div>

        </div>
      </div>
    </footer>
  )
}
