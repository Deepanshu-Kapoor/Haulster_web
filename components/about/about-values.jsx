"use client"

import Image from "next/image"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const values = [
  {
    title: "Reliability",
    description: "We deliver on our commitments. Every pickup, every delivery, every time. Our reputation is built on consistency.",
  },
  {
    title: "Transparency",
    description: "No black boxes. Real-time updates, honest communication, and full visibility from quote to proof of delivery.",
  },
  {
    title: "Safety",
    description: "Safety is non-negotiable. Our drivers, equipment, and processes all meet the highest standards in the industry.",
  },
  {
    title: "Accountability",
    description: "We own every load. If something goes wrong, we communicate early and work to make it right. No finger-pointing.",
  },
]

export function AboutValues() {
  return (
    <section className="bg-slate-50 py-32 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <AnimateOnScroll>
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[2px] w-12 bg-red-600" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                    Our Values
                  </p>
                </div>
                <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  What Drives <span className="text-blue-700">Everything</span> We Do
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((item, i) => (
                <AnimateOnScroll key={item.title} delay={`animation-delay-${i * 150}`}>
                  <div className="group rounded-xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 h-full">
                    <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-500 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-red-600 inline-block"></span>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-800 transition-colors duration-500">
                      {item.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          <AnimateOnScroll animation="animate-slide-in-right">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/about-values.png"
                alt="Haulster Core Values"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-white font-black text-2xl leading-snug">
                  "Excellence isn't a one-time act, it's a habit embedded in every mile we drive."
                </p>
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  )
}
