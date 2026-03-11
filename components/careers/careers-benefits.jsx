"use client"

import { DollarSign, Heart, Calendar, TrendingUp, Fuel, Home } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const benefits = [
  { icon: DollarSign, title: "Competitive Pay", description: "Market-rate compensation with performance bonuses and consistent miles." },
  { icon: Heart, title: "Health Benefits", description: "Extended health, dental, and vision coverage for you and your family." },
  { icon: Calendar, title: "Paid Time Off", description: "Vacation time that respects your need to rest and recharge." },
  { icon: TrendingUp, title: "Growth Opportunities", description: "Clear career paths from driver to trainer, dispatcher, or management." },
  { icon: Fuel, title: "Fuel Programs", description: "Discounted fuel programs and fuel card access for owner-operators." },
  { icon: Home, title: "Home Time", description: "Scheduled home time with route planning that gets you back to your family." },
]

export function CareersBenefits() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="font-heading text-sm font-bold uppercase tracking-widest text-accent">
              Why Haulster
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase text-foreground md:text-4xl">
              Benefits That Matter
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={`animation-delay-${(i + 1) * 100}`}>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:shadow-md hover:-translate-y-0.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold uppercase text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
