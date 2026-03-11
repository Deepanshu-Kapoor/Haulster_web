"use client"

import Image from "next/image"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const leaders = [
  {
    name: "Michael Torres",
    role: "Founder & CEO",
    bio: "20+ years in freight and logistics.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "VP of Operations",
    bio: "Leads Haulster's 24/7 dispatch and fleet operations.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "David Okafor",
    role: "Director of Safety",
    bio: "Oversees driver training and regulatory compliance.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
  },
]

export function AboutLeadership() {
  return (
    <section className="bg-white py-28 relative">

      <div className="absolute inset-0 bg-slate-50/50 -skew-y-2 transform origin-top-left z-0"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">

        <AnimateOnScroll>

          <div className="text-center mb-20 flex flex-col items-center">

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-red-600" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                Leadership
              </p>
              <div className="h-[2px] w-12 bg-red-600" />
            </div>

            <h2 className="mt-2 text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              The Team Behind Haulster
            </h2>

          </div>

        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-12">

          {leaders.map((person, i) => (

            <AnimateOnScroll key={person.name} delay={`animation-delay-${i * 150}`}>

              <div className="group text-center bg-white p-8 rounded-2xl shadow-xl border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200">

                <div className="mx-auto h-32 w-32 rounded-full bg-slate-200 mb-6 transition group-hover:scale-105" />

                <h3 className="text-2xl font-black text-slate-900">
                  {person.name}
                </h3>

                <p className="text-sm uppercase tracking-widest text-red-600 font-bold mt-2">
                  {person.role}
                </p>

                <p className="text-base text-slate-600 mt-4 leading-relaxed font-medium">
                  {person.bio}
                </p>

              </div>

            </AnimateOnScroll>

          ))}

        </div>

      </div>

    </section>
  )
}