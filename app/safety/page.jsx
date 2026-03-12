import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SafetyProgram } from "@/components/safety/safety-program"
import { SafetyCertificationsSection } from "@/components/safety/safety-certifications"


export const metadata = {
  title: "Safety & Compliance | Haulster Transport Ltd",
  description: "Haulster maintains the highest safety standards in the industry. Learn about our safety programs, compliance, and commitment to zero incidents.",
}

export default function SafetyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Safety Is How We Operate"
          subtitle="Every Haulster driver, dispatcher, and piece of equipment meets the highest safety standards in the industry."
          imageSrc="/images/safety-hero.jpg"
        />
        <SafetyCertificationsSection />
        <SafetyProgram />
      </main>
      <Footer />
    </>
  )
}
