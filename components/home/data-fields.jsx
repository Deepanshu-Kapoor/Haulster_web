"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView, animate } from "framer-motion"

const stats = [
  { value: 99, suffix: ".8%", label: "On-Time Delivery" },
  { value: 50, suffix: "M+", label: "Miles Logged" },
  { value: 24, suffix: "/7", label: "Live Dispatch" },
  { value: 100, suffix: "%", label: "Asset Backed" },
]

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (inView) {
      const controls = animate(0, target, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (value) => setCount(Math.floor(value)),
      })
      return controls.stop
    }
  }, [inView, target])

  return (
    <div ref={ref} className="text-center group border-r last:border-0 border-slate-200">
      <motion.p 
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-4xl lg:text-5xl font-black text-blue-700 tracking-tighter mb-2 cursor-default"
      >
        {count.toLocaleString()}<span className="text-red-600">{suffix}</span>
      </motion.p>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mt-4">
        {stats.find(s => s.value === target)?.label}
      </p>
    </div>
  )
}

const truckImages = [
  { src: "/images/hero-truck.png", label: "Dry Van Fleet" },
  { src: "/images/warehouse.png", label: "Loading Dock" },
  { src: "/images/safety-hero.jpg", label: "Pre-Trip Inspection" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 20 }
  },
}

export function Datafields() {
  return (
    <section className="bg-slate-50 py-32 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Title */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Operational Scale
          </h2>
          <p className="mt-4 text-slate-600 font-medium max-w-2xl mx-auto">
            We own the equipment, employ the drivers, and manage the facilities.
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-3 mb-24"
        >
          {truckImages.map((img, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg border border-slate-200 bg-white"
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-bold uppercase tracking-widest text-white">
                  {img.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-xl border border-slate-200 p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} target={stat.value} suffix={stat.suffix} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
