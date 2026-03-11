"use client"

import Link from "next/link"
import { ShoppingCart, UtensilsCrossed, Factory, Car, Pill, Building2, ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const industries = [
  { icon: ShoppingCart, label: "Retail & E-Commerce" },
  { icon: UtensilsCrossed, label: "Food & Beverage" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Car, label: "Automotive" },
  { icon: Pill, label: "Pharmaceuticals" },
  { icon: Building2, label: "Construction" },
]

export function IndustriesServed() {
  return (
    <section className="bg-slate-50 py-32 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-red-600" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                Industries We Serve
              </p>
              <div className="h-[2px] w-12 bg-red-600" />
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Freight Solutions for <span className="text-blue-700">Every System</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => (
            <AnimateOnScroll key={item.label} delay={`animation-delay-${i * 150}`}>
              <div className="group flex items-center gap-6 rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-600 transition-colors duration-500">
                  <item.icon className="h-8 w-8 text-blue-700 group-hover:text-white transition-colors duration-500" />
                </div>
                <span className="font-bold text-lg text-slate-900 group-hover:text-blue-700 transition-colors duration-500">
                  {item.label}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="mt-20 text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-red-600 text-white px-10 py-5 font-black uppercase text-sm tracking-widest transition-all hover:bg-red-700 hover:scale-105 hover:-translate-y-1 shadow-[0_10px_30px_rgba(220,38,38,0.4)] rounded-md"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
