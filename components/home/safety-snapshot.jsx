"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { AnimateOnScroll } from "@/components/animate-on-scroll"

const safetyItems = [
  "Rigorous driver screening and background checks",
  "Preventive maintenance programs on all equipment",
  "Full regulatory compliance and ELD monitoring",
  "Ongoing driver safety training and certification"
]

export function SafetySnapshot() {
  return (
    <section className="relative bg-white py-32 border-b border-slate-200 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* IMAGE SIDE */}
          <AnimateOnScroll animation="animate-slide-in-left">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-2xl">
                <Image
                  src="/images/safety.png"
                  alt="Fleet safety"
                  width={900}
                  height={600}
                  className="object-cover w-full h-[520px] transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="inline-flex items-center gap-3 bg-red-600 px-4 py-2 mb-4 shadow-lg">
                    <span className="text-xs font-black uppercase tracking-widest text-white">
                      Rating: Industry Leading
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white leading-tight">
                    Safety isn't just a policy.<br/>It's our operational standard.
                  </h3>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* CONTENT SIDE */}
          <AnimateOnScroll animation="animate-slide-in-right">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-blue-700" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                  Safety & Compliance
                </p>
              </div>

              <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Built into every <span className="text-blue-700">mile.</span>
              </h2>

              <p className="mt-6 text-lg text-slate-600 font-medium max-w-lg leading-relaxed">
                At Haulster, we protect your freight and our team through strict protocols, advanced technology, and a culture of absolute accountability.
              </p>

              {/* SAFETY LIST */}
              <div className="mt-12 space-y-0 border-l-2 border-slate-200 pl-8">
                {safetyItems.map((item, idx) => (
                  <div key={idx} className="relative py-4 group">
                    <div className="absolute -left-[35px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300 group-hover:bg-red-600 transition-colors" />
                    <p className="text-base font-bold text-slate-800 transition-colors group-hover:text-blue-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/safety"
                className="group mt-12 inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-slate-900 hover:text-red-600 transition-colors"
              >
                View full program
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  )
}