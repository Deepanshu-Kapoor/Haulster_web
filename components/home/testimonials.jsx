"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const testimonials = [
  {
    quote: "We moved three lanes over to Haulster last year. On-time rates are consistently above 97%, and their dispatch team is easy to work with. Absolute precision.",
    name: "Sarah M.",
    role: "Logistics Manager",
    company: "National Retail Group",
  },
  {
    quote: "Cross-border freight can be a headache. Haulster handles our Canada-U.S. lanes cleanly every time. Customs paperwork, tracking updates, the whole thing is smooth.",
    name: "David K.",
    role: "Supply Chain Director",
    company: "FreshWay Foods Inc.",
  },
  {
    quote: "Good communication, reliable equipment, and they actually answer the phone on weekends. That alone sets them apart from most carriers we have worked with.",
    name: "James T.",
    role: "Transportation Coordinator",
    company: "Apex Manufacturing",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const item = testimonials[current]

  return (
    <section className="bg-slate-50 py-32 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Trusted by <span className="text-blue-700">Industry</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="mx-auto max-w-4xl relative">
          <div className="border border-slate-200 bg-white shadow-xl rounded-2xl p-12 md:p-16 min-h-[360px] flex flex-col justify-between">
            
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-slate-800">
              "{item.quote}"
            </p>

            <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-slate-200 pt-8">
              <div>
                <p className="font-bold text-lg text-slate-900 tracking-wider">
                  {item.name}
                </p>
                <div className="text-sm font-bold uppercase tracking-widest text-slate-500 mt-1">
                  {item.role} <span className="text-red-600 mx-2">|</span> {item.company}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex gap-4">
                <button
                  onClick={prev}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-start gap-2 mt-8 px-4">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  i === current ? "w-16 bg-red-600" : "w-8 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
