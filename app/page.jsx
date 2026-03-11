"use client"

import { useRef } from "react"
import dynamic from "next/dynamic"
import { motion, useScroll, useTransform } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { Datafields } from "@/components/home/data-fields"
import { TrustBar } from "@/components/home/trust-bar"
import { ServicesOverview } from "@/components/home/services-overview"
import { SafetySnapshot } from "@/components/home/safety-snapshot"
import { Testimonials } from "@/components/home/testimonials"
import { CtaBanner } from "@/components/home/cta-banner"
import { ScrollTruck } from "@/components/scroll-truck"

const FleetCoverage = dynamic(
  () => import("@/components/home/fleet-coverage").then((mod) => mod.FleetCoverage),
  { ssr: false }
)

export default function HomePage() {
  const mainRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <>
      <Header />

      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-slate-50">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 opacity-30"
        >
          <div
            className="absolute inset-0 h-[200%] w-full"
            style={{
              backgroundImage:
                "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)",
              backgroundSize: "100px 100px",
              transform: "translateY(-25%)",
            }}
          />
        </motion.div>
      </div>

      <ScrollTruck />

      <main ref={mainRef} className="relative z-10 bg-transparent">
        <Hero />
        <TrustBar />
        <Datafields />
        <FleetCoverage />
        <ServicesOverview />
        <SafetySnapshot />
        <Testimonials />
        <CtaBanner />
      </main>

      <Footer />
    </>
  )
}