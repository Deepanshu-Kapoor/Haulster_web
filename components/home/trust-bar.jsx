"use client"

import { motion } from "framer-motion"

const features = [
  {
    kpi: "LIVE",
    title: "GPS Tracking",
    description: "Absolute visibility. Know where your freight is at every moment with telematics integrated on every load.",
  },
  {
    kpi: "C-TPAT",
    title: "Cross-Border",
    description: "Seamless Canada–U.S. freight operations with full customs clearance support and bonded carriers.",
  },
  {
    kpi: "ASSET",
    title: "Dedicated Fleet",
    description: "Late-model, well-maintained equipment dedicated solely to your highest-volume freight corridors.",
  },
  {
    kpi: "ELD+",
    title: "Compliance",
    description: "Full regulatory adherence, ELD monitoring, and industry-leading safety records across all networks.",
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 20 }
  },
}

export function TrustBar() {
  return (
    <section className="relative bg-white py-32 border-b border-slate-200">
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: 'linear-gradient(45deg, #1d4ed8 25%, transparent 25%, transparent 75%, #1d4ed8 75%, #1d4ed8), linear-gradient(45deg, #1d4ed8 25%, transparent 25%, transparent 75%, #1d4ed8 75%, #1d4ed8)', backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px' }}
      ></div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            A commitment to <span className="text-blue-700">Reliability.</span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 font-medium">
            Every shipment is backed by technology, redundancy systems, and operational expertise that keep freight moving efficiently and safely.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group relative bg-slate-50 border border-slate-200 rounded-xl h-full p-8 hover:shadow-xl hover:border-blue-200"
            >
              <div className="text-sm font-black text-red-600 tracking-widest mb-6">
                {item.kpi}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-500">
                {item.title}
              </h3>
              
              <p className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-800 transition-colors duration-500">
                {item.description}
              </p>

              {/* Animated corner accent on hover */}
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-transparent" />
              <svg className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none transform rotate-180" viewBox="0 0 32 32">
                <path d="M0 0 H32 V32 Z" fill="#1d4ed8" />
              </svg>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}