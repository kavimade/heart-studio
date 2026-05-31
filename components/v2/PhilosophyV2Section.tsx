import Image from "next/image"
import { FadeIn } from "@/components/ui/FadeIn"

export function PhilosophyV2Section() {
  return (
    <section id="aboutchan" className="bg-hs-bg overflow-hidden pb-16 md:pb-24">
      <div className="grid md:grid-cols-2 min-h-[600px] md:min-h-[750px]">

        {/* Image — first in DOM: left on desktop, above text on mobile */}
        {/* Replace src with an actual photo of Chan when available */}
        <div className="bg-hs-bg flex items-center justify-center px-6 md:px-10 py-10 md:py-16">
          <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-sm">
            <Image
              src="/images/chan-studio-owner.webp"
              alt="Chan — yoga teacher and founder of Heart Studio, Da Nang"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Text — second in DOM: right on desktop, below image on mobile */}
        <FadeIn className="flex flex-col justify-center px-8 md:px-14 lg:px-20 pt-4 pb-16 md:py-28 bg-hs-bg">
          <h2 className="text-hs-text mb-6">
            A space of{" "}
            <em style={{ fontStyle: "italic" }}>Intention.</em>
          </h2>
          <p className="text-hs-text-muted leading-relaxed mb-5 max-w-md">
            Every class is taught by Chan — a teacher with 8 years of experience and over a thousand hours of training in yoga, anatomy, and therapeutic movement.
          </p>
          <p className="text-hs-text-muted leading-relaxed mb-5 max-w-md">
            She has led anatomy trainings and mentorship programs for teachers across Vietnam. She has lived and studied in Hoi An, Thailand, and Bali.
          </p>
          <p className="text-hs-text-muted leading-relaxed max-w-md">
            She brings all of it into the room. With precision. With warmth. Without ego. This is her life&rsquo;s work. You&rsquo;ll feel it.
          </p>
        </FadeIn>

      </div>
    </section>
  )
}
