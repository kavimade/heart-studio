import { Navbar } from "@/components/Navbar"
import { HeroSectionV2 } from "@/components/HeroSectionV2"
import { SpaceV2Section } from "@/components/v2/SpaceV2Section"
import { PhilosophyV2Section } from "@/components/v2/PhilosophyV2Section"
import { SpaceSliderMobile } from "@/components/v2/SpaceSliderMobile"
import { ClassesV2Section } from "@/components/v2/ClassesV2Section"
import { ScheduleSection } from "@/components/ScheduleSection"
import { PackagesSection } from "@/components/PackagesSection"
import { FAQSection } from "@/components/FAQSection"
import { ContactV2Section } from "@/components/v2/ContactV2Section"
import { InstagramV2Section } from "@/components/v2/InstagramV2Section"
import { ReviewsSection } from "@/components/ReviewsSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSectionV2 />
        <SpaceV2Section />
        <PhilosophyV2Section />
        <SpaceSliderMobile />
        <ClassesV2Section />
        <ScheduleSection />
        <PackagesSection />
        <FAQSection />
        <ContactV2Section />
        <InstagramV2Section />
        <ReviewsSection />
      </main>
      <Footer />
    </>
  )
}
