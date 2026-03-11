"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "@vnedyalk0v/react19-simple-maps"
import { geoCentroid } from "d3-geo"

const highlights = [
  "Major Hubs Across Canada & U.S.",
  "Well-Maintained, Late-Model Equipment",
  "ELD-Compliant Safety Inspections",
  "Real-Time Telematics on Every Unit",
]

const WINNIPEG = [-97.1384, 49.8951]

const ROUTES = [
  { from: WINNIPEG, to: [-87.6298, 41.8781] },   // Chicago
  { from: WINNIPEG, to: [-95.3698, 29.7604] },   // Houston
  { from: WINNIPEG, to: [-118.2437, 34.0522] },  // Los Angeles
  { from: WINNIPEG, to: [-79.3832, 43.6532] },   // Toronto
]

const EXCLUDED = new Set([
  "Alaska",
  "Nunavut",
  "Northwest Territories",
  "Yukon",
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
    transition: { type: "spring", stiffness: 100 },
  },
}

function CoverageMap() {
  const [hovered, setHovered] = useState(null)
  const [geoUrl, setGeoUrl] = useState(null)

  const USA_COLOR = "#1d4ed8"
  const CAN_COLOR = "#D80621"
  const DEFAULT = "#f1f5f9"

  const mapRef = useRef(null)
  const isInView = useInView(mapRef, { once: true, margin: "-100px" })

  useEffect(() => {
    setGeoUrl("/maps/na-admin1.topo.json")
  }, [])

  return (
    <div
      ref={mapRef}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-xl"
    >
      <div className="absolute inset-0 -z-10 bg-blue-50/50 opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />

      {!geoUrl ? (
        <div className="flex h-[420px] items-center justify-center text-sm font-semibold text-slate-500">
          Loading map...
        </div>
      ) : (
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 700,
            center: [-96, 44],
          }}
          className="h-full w-full"
        >
          <Geographies geography={geoUrl}>
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
                          default: {
                            fill,
                            stroke: "#ffffff",
                            strokeWidth: 0.8,
                            outline: "none",
                          },
                          hover: {
                            fill: "#dc2626",
                            stroke: "#ffffff",
                            strokeWidth: 1,
                            outline: "none",
                            cursor: "crosshair",
                            transition: "all 0.3s ease",
                          },
                          pressed: {
                            fill,
                            stroke: "#ffffff",
                            strokeWidth: 0.8,
                            outline: "none",
                          },
                        }}
                      />
                    )
                  })}

                {hovered &&
                  (() => {
                    const [x, y] = geoCentroid(hovered)
                    const code = getRegionCode(hovered)
                    if (!code) return null

                    return (
                      <Marker coordinates={[x, y]}>
                        <text
                          textAnchor="middle"
                          style={{
                            fontFamily: "system-ui",
                            fill: "#ffffff",
                            fontWeight: "900",
                            fontSize: "14px",
                            pointerEvents: "none",
                          }}
                        >
                          {code}
                        </text>
                      </Marker>
                    )
                  })()}

                {ROUTES.map((route, i) => (
                  <Line
                    key={`line-${i}`}
                    from={route.from}
                    to={route.to}
                    stroke="#dc2626"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeDasharray="4 6"
                    style={{
                      opacity: isInView ? 1 : 0,
                      animation: isInView ? "dash 8s linear infinite" : "none",
                      transition: "opacity 1s ease",
                      transitionDelay: `${1000 + i * 200}ms`,
                    }}
                  />
                ))}

                <Marker coordinates={WINNIPEG}>
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="6"
                    fill="#dc2626"
                    initial={{ scale: 0 }}
                    animate={{ scale: isInView ? 1 : 0 }}
                    transition={{ type: "spring", delay: 0.5 }}
                  />
                  <circle cx="0" cy="0" r="16" fill="#dc2626" opacity="0.2">
                    <animate
                      attributeName="r"
                      from="6"
                      to="24"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.5"
                      to="0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </Marker>
              </>
            )}
          </Geographies>
        </ComposableMap>
      )}

      <div className="absolute right-5 top-5 flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
        <div className="h-2 w-2 animate-pulse rounded-full bg-red-600" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
          Active Network
        </span>
      </div>

      <style jsx>{`
        @keyframes dash {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -40;
          }
        }
      `}</style>
    </div>
  )
}

export function FleetCoverage() {
  return (
    <section className="overflow-hidden border-b border-slate-200 bg-slate-50 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl"
          >
            <motion.div
              variants={listItemVariants}
              className="mb-6 flex items-center gap-4"
            >
              <div className="h-[2px] w-12 bg-blue-700" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Infrastructure
              </p>
            </motion.div>

            <motion.h2
              variants={listItemVariants}
              className="text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl"
            >
              Strategic North American <br />
              <span className="text-blue-700">Footprint.</span>
            </motion.h2>

            <motion.p
              variants={listItemVariants}
              className="mt-8 text-lg font-medium leading-relaxed text-slate-600"
            >
              Seamless cross-border freight operations dominating the vital
              logistics corridors between Canada and the United States.
            </motion.p>

            <motion.div
              variants={listItemVariants}
              className="mt-12 space-y-4 border-t border-slate-200 pt-8"
            >
              {highlights.map((text, i) => (
                <div key={i} className="group flex cursor-default items-center gap-4">
                  <span className="font-black text-red-600 transition-transform group-hover:scale-125">
                    0{i + 1}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider text-slate-700 transition-colors group-hover:text-blue-700">
                    {text}
                  </span>
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