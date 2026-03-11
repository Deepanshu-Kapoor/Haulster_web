import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { CareersRoles } from "@/components/careers/careers-roles"
import { CareersBenefits } from "@/components/careers/careers-benefits"
import { CareersForm } from "@/components/careers/careers-form"

export const metadata = {
  title: "Careers | Haulster Transport Ltd",
  description: "Join Haulster. We are hiring experienced drivers, dispatchers, and operations professionals across Canada and the U.S.",
}

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Drive Your Career Forward"
          subtitle="Join a team that values safety, professionalism, and your success on the road."
          imageSrc="/images/careers-hero.jpg"
        />
        <CareersRoles />
        <CareersBenefits />
        <CareersForm />
      </main>
      <Footer />
    </>
  )
}
