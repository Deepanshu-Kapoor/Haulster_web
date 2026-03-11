"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { motion } from "framer-motion"

const services = [
  {
    image: "/images/expedited-service.png",
    title: "Expedited / Team Service",
    description:
      "Time-critical freight with team drivers and priority dispatch. When downtime is not an option, our expedited service keeps your supply chain moving.",
    howItWorks:
      "We assign dual-driver teams to your load immediately. By switching off driving shifts, the truck rarely stops, cutting transit times dramatically. Our dispatch monitors progress 24/7.",
    features: [
      "Team drivers for non-stop transit",
      "Priority dispatch and routing",
      "Proactive ETA monitoring",
      "24/7 dedicated support line",
    ],
  },
  {
    image: "/images/dry-van.png",
    title: "Dry Van Freight",
    description:
      "Our core service. Standard 53-foot enclosed trailers for palletized, boxed, and general freight. Available for FTL and volume LTL across all major lanes in Canada and the U.S.",
    howItWorks:
      "Your pallets are loaded into securely sealed standard trailers. We use route optimization software to find the fastest lanes to deliver standard dry goods efficiently and safely.",
    features: [
      "53-foot dry van trailers",
      "Full truckload (FTL) capacity",
      "Air-ride suspension for sensitive freight",
      "Swing and roll-up door options",
    ],
  },
  {
    image: "/images/refer.png",
    title: "Reefer / Temperature Controlled",
    description:
      "Climate-controlled trailers for food, pharmaceuticals, and any temperature-sensitive cargo. Continuous monitoring ensures your product arrives in spec.",
    howItWorks:
      "Trailers are pre-cooled to your exact specifications before loading. Smart reefers actively report temperature back to dispatch, auto-alerting if variance occurs inflight.",
    features: [
      "Multi-temperature zones available",
      "Real-time temperature monitoring",
      "HACCP and food safety compliance",
      "Frozen, chilled, and ambient options",
    ],
  },
  {
    image: "/images/flatbed.png",
    title: "Flatbed Services",
    description:
      "Open-deck capacity for oversized, heavy, or irregularly shaped freight. Our flatbed fleet handles construction materials, machinery, and industrial equipment.",
    howItWorks:
      "We match the appropriate step-deck or flatbed trailer to your dimensions, secure the load with chains, straps, and tarps, and route around clearance restrictions.",
    features: [
      "Standard and step-deck options",
      "Tarping and securement included",
      "Heavy haul capabilities",
      "Permit and escort coordination",
    ],
  },
  {
    image: "/images/cross-border.png",
    title: "Cross-Border Freight (Canada-US)",
    description:
      "Seamless cross-border operations with full customs brokerage support. C-TPAT and PIP certified for expedited border processing on both sides.",
    howItWorks:
      "Our compliance team handles the paperwork directly with customs bureaus preemptively. Drivers use dedicated FAST lanes at the border, avoiding standard commercial queues.",
    features: [
      "Customs documentation support",
      "Bonded carrier status",
      "In-transit visibility across borders",
      "FAST-approved drivers",
    ],
  },
  {
    image: "/images/dedicated-lanes.png",
    title: "Dedicated Lanes / Contract Freight",
    description:
      "Consistent capacity on your highest-volume routes. Dedicated equipment and drivers who know your product, your docks, and your schedule.",
    howItWorks:
      "We allocate a fixed portion of our fleet—trucks and drivers—exclusively to your operations, establishing predictable recurring schedules that act like an in-house fleet.",
    features: [
      "Guaranteed capacity allocation",
      "Familiar driver teams",
      "Fixed pricing options",
      "Custom KPI reporting",
    ],
  },
]

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
}

const textItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const imageVariant = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function ServicesList() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* animated freight route */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-10">
        <path
          d="M0 200 C400 100 800 300 1400 200"
          stroke="#2563EB"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 12"
          className="route-line"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-32">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title}>
              <div className="grid items-center gap-14 lg:grid-cols-2">
                {/* IMAGE */}
                <motion.div
                  variants={imageVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className={i % 2 !== 0 ? "lg:order-2" : ""}
                >
                  <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                  </div>
                </motion.div>

                {/* TEXT */}
                <motion.div
                  variants={textContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  className={i % 2 !== 0 ? "lg:order-1" : ""}
                >
                  <motion.h3
                    variants={textItem}
                    className="mb-6 text-3xl font-black tracking-tight text-slate-900 md:text-5xl"
                  >
                    {service.title}
                  </motion.h3>

                  <div className="space-y-6 text-lg font-medium leading-relaxed text-slate-600">
                    <motion.p variants={textItem}>{service.description}</motion.p>

                    <motion.div
                      variants={textItem}
                      className="rounded-r-xl border-l-4 border-blue-700 bg-slate-50 p-6"
                    >
                      <h4 className="mb-2 text-sm font-black uppercase tracking-widest text-blue-700">
                        How it works
                      </h4>
                      <p className="text-base text-slate-700">
                        {service.howItWorks}
                      </p>
                    </motion.div>
                  </div>

                  {/* FEATURES */}
                  <motion.div variants={textItem} className="mt-8">
                    <h4 className="mb-4 flex items-center gap-3 text-sm font-black uppercase tracking-widest text-slate-900">
                      <div className="h-1.5 w-8 bg-blue-700" />
                      Features
                    </h4>

                    <ul className="grid gap-4 sm:grid-cols-2">
                      {service.features.map((feature, index) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, y: 18 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.55,
                            delay: 0.18 + index * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="flex items-start gap-3 text-base font-semibold text-slate-700"
                        >
                          <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-600" />
                          <span className="leading-snug">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={textItem}>
                    <Link
                      href="/contact"
                      className="group mt-12 inline-flex items-center gap-3 rounded-lg bg-blue-700 px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:bg-blue-800 hover:shadow-lg"
                    >
                      Request this service
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <style jsx>{`
        .route-line {
          animation: routeMove 14s linear infinite;
        }

        @keyframes routeMove {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -400;
          }
        }
      `}</style>
    </section>
  )
}