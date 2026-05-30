import { Navbar } from "@/components/Navbar"
import { HeroSectionV2 } from "@/components/HeroSectionV2"
import { ClassesV2Section } from "@/components/v2/ClassesV2Section"
import { SpaceV2Section } from "@/components/v2/SpaceV2Section"
import { PhilosophyV2Section } from "@/components/v2/PhilosophyV2Section"
import { ScheduleV2Section } from "@/components/v2/ScheduleV2Section"
import { FAQSection } from "@/components/FAQSection"
import { ContactV2Section } from "@/components/v2/ContactV2Section"
import { InstagramV2Section } from "@/components/v2/InstagramV2Section"
import { Footer } from "@/components/Footer"

export default function HomeV2() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSectionV2 />
        <ClassesV2Section />
        <SpaceV2Section />
        <PhilosophyV2Section />
        <ScheduleV2Section />
        <FAQSection />
        <ContactV2Section />
        <InstagramV2Section />
      </main>
      <Footer />
    </>
  )
}
