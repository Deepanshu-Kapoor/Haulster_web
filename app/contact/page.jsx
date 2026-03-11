import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { QuoteForm } from "@/components/contact/quote-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata = {
  title: "Contact & Get a Quote | Haulster Transport Ltd",
  description: "Request a freight quote or get in touch with Haulster dispatch. Available 24/7 for capacity needs across Canada and the U.S.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Let's Move Your Freight"
          subtitle="Request a quote, book capacity, or talk to our dispatch team. We respond fast."
          imageSrc="/images/contact-hero.jpg"
        />
        <section className="bg-slate-50 py-32 border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-6">
            
            <div className="grid gap-16 lg:grid-cols-3 mb-24 relative z-10">
              <div className="lg:col-span-2">
                <QuoteForm />
              </div>
              <div>
                <ContactInfo />
              </div>
            </div>

            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl shadow-2xl mt-12 bg-white">
              <Image 
                src="/images/hero-truck-m.png" 
                alt="Haulster Truck Fleet" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-[1.03]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-10 md:bottom-12 md:left-16">
                <p className="text-white font-black text-2xl md:text-5xl leading-tight">
                  Always moving forward.<br/>
                  <span className="text-blue-400">Always.</span>
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
