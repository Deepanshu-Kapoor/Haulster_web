"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function CtaBanner() {
  return (
    <section className="relative py-32 bg-blue-700 overflow-hidden">

      {/* ambient gradient motion */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/40 via-blue-500/20 to-blue-800/40 blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* animated logistics lanes */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        preserveAspectRatio="none"
      >

        {/* lane 1 */}
        <motion.path
          d="M-200,120 C300,250 700,-50 1400,180 C1700,240 2000,150 2400,220"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="3"
          strokeDasharray="6 14"
          animate={{ strokeDashoffset: [0, -200] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />

        {/* lane 2 */}
        <motion.path
          d="M-200,220 C300,380 800,40 1500,260 C1800,320 2200,200 2600,300"
          fill="none"
          stroke="#bfdbfe"
          strokeWidth="2"
          strokeDasharray="6 14"
          animate={{ strokeDashoffset: [0, -200] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />

        {/* moving freight node */}
        <motion.circle
          r="5"
          fill="#ffffff"
          animate={{ offsetDistance: ["0%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{
            offsetPath:
              "path('M-200,120 C300,250 700,-50 1400,180 C1700,240 2000,150 2400,220')",
          }}
        />

      </svg>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <AnimateOnScroll>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white tracking-tighter drop-shadow-md">
            Execute Your Freight.
            <br />
            <span className="text-blue-100 opacity-90">
              Without Fail.
            </span>
          </h2>

          <p className="mt-8 text-xl text-blue-100 max-w-2xl mx-auto font-medium">
            Partner with Haulster for uncompromising cross-border transportation across North America.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-red-600 text-white px-10 py-5 font-black uppercase text-sm tracking-widest transition-all hover:bg-red-700 hover:scale-105 hover:-translate-y-1 shadow-[0_10px_30px_rgba(220,38,38,0.4)] w-full sm:w-auto rounded-md"
            >
              Initiate Quote

              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>

            </Link>

          </div>

        </AnimateOnScroll>

      </div>
    </section>
  )
}