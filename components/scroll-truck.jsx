"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Truck } from "lucide-react"

export function ScrollTruck() {

  const { scrollYProgress } = useScroll()

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25
  })

  const truckY = useTransform(smoothProgress, [0, 1], ["0%", "92vh"])
  const fillHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="hidden md:block">

      {/* ROAD */}
      <div className="fixed top-0 right-4 lg:right-8 w-6 h-screen bg-slate-800 rounded-full overflow-hidden z-[90]">

        {/* animated road center */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-[2px] h-[200%]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, white 0px, white 12px, transparent 12px, transparent 26px)"
          }}
          animate={{ y: [-40, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* progress fill */}
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-red-600/70"
          style={{ height: fillHeight }}
        />

      </div>


      {/* TRUCK */}
      <motion.div
        className="fixed right-2 lg:right-6 z-[100]"
        style={{ y: truckY }}
      >

        {/* toy bounce */}
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative flex items-center justify-center"
        >

          {/* truck container */}
          <div className="relative bg-white border border-red-200 shadow-xl rounded-xl px-3 py-2">

            {/* truck icon */}
            <Truck
              className="w-6 h-6 text-red-600 rotate-90"
              strokeWidth={2.5}
            />

            {/* wheels */}
            <motion.div
              className="absolute -bottom-1 left-2 w-2 h-2 bg-slate-800 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <motion.div
              className="absolute -bottom-1 right-2 w-2 h-2 bg-slate-800 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear"
              }}
            />

          </div>

        </motion.div>

      </motion.div>

    </div>
  )
}