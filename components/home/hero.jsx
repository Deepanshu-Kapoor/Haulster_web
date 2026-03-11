"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

const textContainerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.6,
    },
  },
}

const textItemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 15 },
  },
}

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export function Hero() {

  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 50])

  return (
    <section
      ref={containerRef}
      className="relative bg-slate-50 py-24 lg:py-32 overflow-hidden"
    >

      {/* FULL WIDTH FREIGHT LANES */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        preserveAspectRatio="none"
      >

        <motion.path
          d="M-200,200 C200,350 700,-50 1300,250 C1700,400 2000,200 2300,350"
          fill="none"
          stroke="#2563eb"
          strokeWidth="3"
          strokeDasharray="6 14"
          animate={{ strokeDashoffset: [0, -200] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        <motion.path
          d="M-200,300 C200,450 700,0 1400,260 C1700,350 2100,200 2400,320"
          fill="none"
          stroke="#dc2626"
          strokeWidth="3"
          strokeDasharray="6 14"
          animate={{ strokeDashoffset: [0, -200] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <motion.path
          d="M-200,420 C300,600 800,150 1500,360 C1900,450 2200,300 2600,420"
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="2"
          strokeDasharray="6 12"
          animate={{ strokeDashoffset: [0, -200] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

      </svg>


      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* TEXT AREA */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          variants={textContainerVariants}
          initial="initial"
          animate="animate"
          className="relative z-20"
        >

          {/* TEXT MASK */}
          <div className="absolute inset-0 bg-slate-50 rounded-3xl -z-10 blur-[2px]" />

          <motion.div
            variants={textItemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
              North American Logistics
            </span>
          </motion.div>

          <motion.h1
            variants={textItemVariants}
            className="text-5xl md:text-6xl font-extrabold leading-[1.15] text-slate-800 tracking-tight"
          >
            Engineered for <br />
            <span className="text-blue-600">High-Stakes</span> Freight
          </motion.h1>

          <motion.p
            variants={textItemVariants}
            className="mt-6 text-lg lg:text-xl text-slate-600 max-w-xl font-medium leading-relaxed"
          >
            Dedicated capacity, precision execution, and absolute visibility.
            We move the freight that powers industry across the U.S. and Canada.
          </motion.p>

          <motion.div
            variants={textItemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >

            <Link
              href="/contact"
              className="group inline-flex justify-center items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition duration-300 shadow-lg hover:shadow-red-600/30 hover:-translate-y-1"
            >
              Initiate Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex justify-center items-center gap-2 bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-slate-50 transition duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 mr-2 text-blue-600" />
              Contact Dispatch
            </Link>

          </motion.div>

        </motion.div>


        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="relative h-[320px] sm:h-[420px] md:h-[500px] lg:h-[620px]"
        >

          <motion.div
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white"
          >

            <Image
              src="/images/hero-truck.png"
              alt="Haulster Fleet"
              fill
              className="object-cover"
              priority
            />

            {/* stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-slate-100 rounded-xl p-6 shadow-xl flex justify-between items-center"
            >

              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">
                  On-Time Delivery
                </p>
                <p className="text-3xl font-black text-slate-800">
                  99.8%
                </p>
              </div>

              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-red-600 transform -rotate-45" />
              </div>

            </motion.div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  )
}