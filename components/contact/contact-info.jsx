"use client"

import { Phone, Mail, Clock, MapPin } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const contactDetails = [
  { icon: Phone, label: "Dispatch Phone", value: " +1(204) 995-7117", subtext: "Available 24/7" },
  { icon: Mail, label: "Email", value: "dispatch@haulster.ca", subtext: "Response within 2 hours" },
  { icon: Clock, label: "Office Hours", value: "Mon - Fri, 8AM - 6PM EST", subtext: "Dispatch available 24/7" },
  { icon: MapPin, label: "Head Office", value: "185 Goldenrod Dr, Centreport, MB R4B 0A2", subtext: "With operations across NA" },
]

export function ContactInfo() {
  return (
    <AnimateOnScroll animation="animate-slide-in-right">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10 shadow-xl lg:sticky lg:top-24">
        <h3 className="font-black text-xl uppercase text-slate-900 tracking-tight mb-8">
          Contact Information
        </h3>
        <div className="flex flex-col gap-8">
          {contactDetails.map((item) => (
            <div key={item.label} className="group flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300">
                <item.icon className="h-6 w-6 text-blue-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1 text-base font-bold text-slate-900">
                  {item.value}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  {item.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-blue-700 p-8 shadow-inner shadow-blue-900/50">
          <h4 className="flex items-center gap-3 text-sm font-black uppercase text-white mb-3 tracking-widest">
            <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
            Need urgent capacity?
          </h4>
          <p className="text-sm font-medium text-blue-100 leading-relaxed">
            Call our dispatch line directly for same-day or next-day freight needs. We staff experienced dispatchers around the clock.
          </p>
          <a
            href="tel:+1 (204) 995-7117"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-black uppercase tracking-widest text-blue-700 transition-all hover:bg-slate-100 hover:scale-105 shadow-md"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </div>
    </AnimateOnScroll>
  )
}
