"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const stats = [
  { value: 98, suffix: "%", label: "On-Time Delivery Rate" },
  { value: 24, suffix: "/7", label: "Dispatch Operations" },
  { value: "CA–US", suffix: "", label: "Cross-Border Coverage" },
  { value: 0, suffix: "", label: "Preventable Incidents Target" },
]

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (typeof value !== "number") return
    let start = 0
    const duration = 1200
    const step = value / (duration / 16)

    const interval = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(interval)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(interval)
  }, [value])

  if (typeof value !== "number") {
    return <span>{value}</span>
  }

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function AboutStory() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">

      {/* subtle freight route */}

      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">

        <path
          d="M0 200 C400 120 900 240 1400 180"
          stroke="#2563EB"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 10"
          className="route"
        />

      </svg>

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <AnimateOnScroll animation="animate-slide-in-left">

            <div className="relative">

              <Image
                src="/images/about-page.png"
                alt="Haulster fleet"
                width={700}
                height={500}
                className="rounded-2xl shadow-xl object-cover"
              />

            </div>

          </AnimateOnScroll>


          {/* TEXT */}

          <AnimateOnScroll animation="animate-slide-in-right">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
                Our Story
              </p>

              <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
                A Carrier Built for the Modern Supply Chain
              </h2>

              <div className="mt-8 space-y-5 text-slate-600 leading-relaxed">

                <p>
                  Haulster Transport was founded with a clear purpose:
                  bring reliability and transparency back to freight.
                </p>

                <p>
                  From day one we invested in technology-driven dispatch,
                  a well-maintained fleet, and experienced drivers.
                </p>

                <p>
                  Today Haulster serves shippers across major lanes
                  in Canada and the United States.
                </p>

              </div>

            </div>

          </AnimateOnScroll>

        </div>


        {/* STATS */}

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

          {stats.map((stat) => (

            <div key={stat.label}>

              <p className="text-4xl font-extrabold text-slate-900">

                <Counter value={stat.value} suffix={stat.suffix} />

              </p>

              <p className="mt-2 text-xs uppercase tracking-widest text-slate-500">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>

      <style jsx>{`

        .route {
          animation: routeMove 10s linear infinite;
        }

        @keyframes routeMove {
          from { stroke-dashoffset: 0 }
          to { stroke-dashoffset: -200 }
        }

      `}</style>

    </section>
  )
}