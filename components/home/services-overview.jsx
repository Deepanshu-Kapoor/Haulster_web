"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    key: "expedited",
    number: "01",
    title: "Expedited Service",
    description: "Time-critical freight with team drivers and priority dispatch for urgent shipments across North America.",
    tags: ["Team Drivers", "Priority Dispatch", "Time-Critical"]
  },
  {
    key: "dryvan",
    number: "02",
    title: "Dry Van Freight",
    description: "Secure enclosed trailer capacity for palletized and general freight across major, high-volume lanes.",
    tags: ["53' Trailers", "General Freight", "Secure"]
  },
  {
    key: "crossborder",
    number: "03",
    title: "Cross-Border Cargo",
    description: "Seamless Canada–U.S. operations with proven customs support and compliant carrier networks.",
    tags: ["C-TPAT", "FAST Approved", "Customs Clearance"]
  },
  {
    key: "dedicated",
    number: "04",
    title: "Dedicated Lanes",
    description: "Consistent capacity on your highest-volume corridors with dedicated equipment and committed drivers.",
    tags: ["Guaranteed Capacity", "Fixed Rates", "Asset-Backed"]
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 20 }
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
}

export function ServicesOverview() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-32 border-b border-slate-200">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative mx-auto max-w-7xl px-6"
      >
        
        {/* Header Block */}
        <motion.div variants={headerVariants} className="max-w-3xl mb-20 text-center mx-auto relative z-10">
          <div className="inline-flex justify-center items-center gap-4 mb-6">
            <div className="h-[2px] w-8 bg-blue-700" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Core Capabilities
            </p>
            <div className="h-[2px] w-8 bg-blue-700" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 tracking-tight">
            Supply chain solutions to <br className="hidden md:block"/>
            <span className="text-blue-700">fuel your business.</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.key}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden p-8 hover:shadow-[0_20px_40px_-15px_rgba(29,78,216,0.15)] flex flex-col"
            >
              {/* Number Indicator */}
              <div className="text-7xl font-black text-slate-50 group-hover:text-blue-50 transition-colors duration-500 absolute top-4 right-4 pointer-events-none select-none">
                {service.number}
              </div>

              <div className="relative z-10 h-full flex flex-col pt-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-3 mb-10">
                  {service.tags.map(tag => (
                    <div key={tag} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-600 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      {tag}
                    </div>
                  ))}
                </div>

                <Link 
                  href="/services" 
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-red-600 mt-auto transform group-hover:translate-x-1 transition-transform"
                >
                  Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Bottom Highlight Bar */}
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-blue-700 to-blue-500 group-hover:w-full transition-all duration-700 ease-in-out" />
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}