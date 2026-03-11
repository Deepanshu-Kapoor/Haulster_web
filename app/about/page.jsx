import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutValues } from "@/components/about/about-values"
import { AboutLeadership } from "@/components/about/about-leadership"

export const metadata = {
  title: "About | Haulster Transport Ltd",
  description:
    "Learn about Haulster Transport - a modern carrier built on reliability, transparency, and safety-first operations across Canada and the U.S.",
}

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>

        <PageHero
          title="Built for the Road Ahead"
          subtitle="Haulster is a modern carrier with a simple mission: move freight safely, on time, and with full transparency."
          imageSrc="/images/about-hero.jpg"
        />

        {/* Story */}

        <AboutStory />

        {/* Divider */}

        <div className="mx-auto max-w-7xl px-6">
          <div className="border-t border-slate-200" />
        </div>

        {/* Values */}

        <AboutValues />

        {/* Divider */}

        <div className="mx-auto max-w-7xl px-6">
          <div className="border-t border-slate-200" />
        </div>

        {/* Leadership */}

        <AboutLeadership />

      </main>

      <Footer />
    </>
  )
}