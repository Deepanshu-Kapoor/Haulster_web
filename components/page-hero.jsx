"use client"

import Image from "next/image"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function PageHero({ title, subtitle, imageSrc }) {
  return (
    <section className="relative overflow-hidden bg-blue-900">

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          className="object-cover"
        />

        {/* Corporate Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-blue-900/10" />

        {/* subtle highlight glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      {/* Decorative Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      {/* hero text */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-48 w-full">
        <div className="max-w-2xl">
          <AnimateOnScroll animation="animate-slide-in-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1.5 w-12 bg-red-600" />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight drop-shadow-lg">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-8 text-lg md:text-xl text-blue-50 font-medium leading-relaxed max-w-xl drop-shadow-md">
                {subtitle}
              </p>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}