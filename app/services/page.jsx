import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { ServicesList } from "@/components/services/services-list"
import { IndustriesServed } from "@/components/services/industries-served"

export const metadata = {
  title: "Services | Haulster Transport Ltd",
  description: "Haulster provides dry van freight, cross-border transport, dedicated lanes, and expedited delivery services across Canada and the U.S.",
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Freight Services Built for Reliability"
          subtitle="From dry van to expedited, Haulster delivers the capacity and service your supply chain needs."
          imageSrc="/images/services-hero.jpg"
        />
        <ServicesList />
        <IndustriesServed />
      </main>
      <Footer />
    </>
  )
}
