"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { Datafields } from "@/components/home/data-fields"
import { TrustBar } from "@/components/home/trust-bar"
import { ServicesOverview } from "@/components/home/services-overview"
import { FleetCoverage } from "@/components/home/fleet-coverage"
import { SafetySnapshot } from "@/components/home/safety-snapshot"
import { Testimonials } from "@/components/home/testimonials"
import { CtaBanner } from "@/components/home/cta-banner"
import { ScrollTruck } from "@/components/scroll-truck"

export default function HomePage() {
  const mainRef = useRef(null)
  
  // High-level absolute parallax tied to the entire page scroll depth
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"]
  })

  // We want the background to shift slowly downwards as the user scrolls downwards
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <>
      <Header />
      
      {/* Global Scroll Parallax Background */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-slate-50">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 opacity-30"
        >
          {/* Subtle topological/grid lines that shift under all sections */}
          <div 
            className="w-full h-[200%] absolute inset-0"
            style={{ backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', backgroundSize: '100px 100px', transform: 'translateY(-25%)' }}
          />
        </motion.div>
      </div>

      <ScrollTruck />

      <main ref={mainRef} className="relative bg-transparent z-10">
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
