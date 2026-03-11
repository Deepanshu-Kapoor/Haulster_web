"use client"

import React, { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line
} from "react-simple-maps"
import { geoCentroid } from "d3-geo"

const highlights = [
  "Major Hubs Across Canada & U.S.",
  "Well-Maintained, Late-Model Equipment",
  "ELD-Compliant Safety Inspections",
  "Real-Time Telematics on Every Unit"
]

const WINNIPEG = [-97.1384, 49.8951]
const ROUTES = [
  { from: WINNIPEG, to: [-87.6298, 41.8781] },
  { from: WINNIPEG, to: [-95.3698, 29.7604] },
  { from: WINNIPEG, to: [-118.2437, 34.0522] },
  { from: WINNIPEG, to: [-79.3832, 43.6532] },
]

const EXCLUDED = new Set([
  "Alaska", "Nunavut", "Northwest Territories", "Yukon"
])

function getCountry(geo) {
  return (geo?.properties?.adm0_a3 || "").toUpperCase()
}

function getRegionCode(geo) {
  const p = geo?.properties || {}
  if (p.iso_3166_2) return p.iso_3166_2.split("-")[1]
  return p.postal || p.abbrev || ""
}

function getRegionName(geo) {
  const p = geo?.properties || {}
  return p.name || p.name_en || ""
}

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring", stiffness: 100 }
  },
}

function CoverageMap() {
  const [hovered, setHovered] = useState(null)

  const USA_COLOR = "#1d4ed8" // blue-700
  const CAN_COLOR = "#2563eb" // blue-600
  const DEFAULT = "#f1f5f9"   // slate-100

  // Animation triggers for the map lines
  const mapRef = useRef(null)
  const isInView = useInView(mapRef, { once: true, margin: "-100px" })

  return (
    <div ref={mapRef} className="relative rounded-2xl bg-white border border-slate-200 p-8 shadow-xl overflow-hidden group">
      <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 700,
          center: [-96, 44]
        }}
        className="w-full h-full"
      >
        <Geographies geography="/maps/na-admin1.topo.json">
          {({ geographies }) => (
            <>
              {geographies
                .filter((geo) => !EXCLUDED.has(getRegionName(geo)))
                .map((geo) => {
                  const country = getCountry(geo)
                  let fill = DEFAULT
                  if (country === "USA") fill = USA_COLOR
                  if (country === "CAN") fill = CAN_COLOR

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => setHovered(geo)}
                      onMouseLeave={() => setHovered(null)}
                      style={{
                        default: { fill, stroke: "#ffffff", strokeWidth: 0.8, outline: "none" },
                        hover: { fill: "#dc2626", stroke: "#ffffff", strokeWidth: 1, outline: "none", cursor: "crosshair", transition: "all 0.3s ease" }
                      }}
                    />
                  )
                })}

              {hovered && (() => {
                const [x, y] = geoCentroid(hovered)
                const code = getRegionCode(hovered)
                if (!code) return null
                return (
                  <Marker coordinates={[x, y]}>
                    <text
                      textAnchor="middle"
                      style={{
                        fontFamily: "system-ui", fill: "#ffffff", fontWeight: "900", fontSize: "14px", pointerEvents: "none"
                      }}
                    >
                      {code}
                    </text>
                  </Marker>
                )
              })()}

              {/* Draw animated shipping lanes manually matching geo properties */}
              {ROUTES.map((r, i) => (
                <Marker key={i} coordinates={r.to}>
                  <motion.line
                    x1={0}
                    y1={0}
                    x2={0} // Coordinates need to be extracted from projection to do true SVG lines. We will animate opacity with framer-motion heavily instead.
                    stroke="none"
                  />
                </Marker>
              ))}

              {/* Using native Line with Framer Motion opacity stagger */}
              {ROUTES.map((r, i) => (
                <Line
                  key={`line-${i}`}
                  from={r.from}
                  to={r.to}
                  stroke="#dc2626"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeDasharray="4 6"
                  className="transition-all duration-1000"
                  style={{
                    opacity: isInView ? 1 : 0,
                    animation: isInView ? "dash 8s linear infinite" : "none",
                    transitionDelay: `${1000 + (i * 200)}ms`
                  }}
                />
              ))}

              <Marker coordinates={WINNIPEG}>
                <motion.circle 
                  cx="0" cy="0" r="6" fill="#dc2626" 
                  initial={{ scale: 0 }}
                  animate={{ scale: isInView ? 1 : 0 }}
                  transition={{ type: "spring", delay: 0.5 }}
                />
                <circle cx="0" cy="0" r="16" fill="#dc2626" opacity="0.2">
                  <animate attributeName="r" from="6" to="24" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
                </circle>
              </Marker>
            </>
          )}
        </Geographies>
      </ComposableMap>

      <div className="absolute top-5 right-5 bg-white border border-slate-200 px-4 py-2 flex items-center gap-3 rounded-full shadow-sm">
        <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
          Active Network
        </span>
      </div>
    </div>
  )
}

export function FleetCoverage() {
  return (
    <section className="bg-slate-50 py-32 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          <motion.div 
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl"
          >
            <motion.div variants={listItemVariants} className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-blue-700" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Infrastructure
              </p>
            </motion.div>

            <motion.h2 variants={listItemVariants} className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Strategic North American <br /><span className="text-blue-700">Footprint.</span>
            </motion.h2>

            <motion.p variants={listItemVariants} className="mt-8 text-lg text-slate-600 leading-relaxed font-medium">
              Seamless cross-border freight operations dominating the vital logistics corridors between Canada and the United States.
            </motion.p>

            <motion.div variants={listItemVariants} className="mt-12 space-y-4 border-t border-slate-200 pt-8">
              {highlights.map((text, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <span className="text-red-600 font-black group-hover:scale-125 transition-transform">0{i + 1}</span>
                  <span className="text-sm font-bold uppercase tracking-wider text-slate-700 group-hover:text-blue-700 transition-colors">{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            <CoverageMap />
          </motion.div>
        </div>
      </div>
    </section>
  )
}