import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { ClassesSection } from "@/components/ClassesSection"
import { ScheduleSection } from "@/components/ScheduleSection"
import { FAQSection } from "@/components/FAQSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ClassesSection />
        <ScheduleSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
