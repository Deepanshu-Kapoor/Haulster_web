"use client"

import { ShieldCheck, Wrench, UserCheck, BookOpen, FileCheck, Lock } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const programs = [
  {
    icon: ShieldCheck,
    title: "Safety Program Overview",
    description: "Our safety program covers every aspect of operations. From pre-trip inspections to post-delivery debriefs, safety is embedded in every step of the freight lifecycle.",
  },
  {
    icon: Wrench,
    title: "Equipment Maintenance",
    description: "Preventive maintenance schedules, regular DOT inspections, and a zero-tolerance policy for deferred repairs. Every unit on the road meets or exceeds federal standards.",
  },
  {
    icon: UserCheck,
    title: "Driver Hiring Standards",
    description: "Multi-step screening process including background checks, driving record reviews, drug testing, and road evaluations. We hire experience and professionalism.",
  },
  {
    icon: FileCheck,
    title: "ELD Compliance",
    description: "Full Electronic Logging Device compliance across the fleet. Hours of service are monitored in real time to prevent fatigue-related incidents.",
  },
  {
    icon: BookOpen,
    title: "Training & Development",
    description: "Ongoing safety training programs for all drivers. Defensive driving, cargo securement, and hazard awareness are part of our regular curriculum.",
  },
  {
    icon: Lock,
    title: "Insurance & Coverage",
    description: "Comprehensive cargo and liability insurance. Full coverage documentation available on request for broker and shipper verification.",
  },
]

export function SafetyProgram() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="mb-16 max-w-2xl">
            <p className="font-heading text-sm font-bold uppercase tracking-widest text-accent">
              Our Commitment
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase text-foreground md:text-4xl text-balance">
              Comprehensive Safety at Every Level
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Safety is not a department at Haulster. It is a culture that touches every person, process, and piece of equipment in our operation.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={`animation-delay-${(i + 1) * 100}`}>
              <div className="group flex flex-col rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30">
                <div className="relative">
                  <div className="absolute top-0 left-0 right-0 h-1 -mt-8 -mx-8 rounded-t-xl bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-6 font-heading text-base font-bold uppercase text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
