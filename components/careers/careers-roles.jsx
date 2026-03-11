"use client"

import Image from "next/image"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const roles = [
  {
    image: "/images/company-driver.png",
    title: "Company Driver",
    type: "Full-Time",
    description: "Drive for Haulster with our equipment, our support, and steady miles. Long-haul and regional routes available across Canada and the U.S.",
    requirements: ["Valid Class A CDL (AZ License in Canada)", "Minimum 2 years verifiable OTR experience", "Clean driving record and criminal background check"],
  },
  {
    image: "/images/mechanic.png",
    title: "Diesel Mechanic / Fleet Technician",
    type: "Full-Time",
    description:
      "Join our maintenance team and keep our fleet operating at peak performance. You will be responsible for inspecting, diagnosing, and repairing tractors and trailers to ensure safety, reliability, and compliance with industry standards.",
    requirements: [
      "Experience working with diesel engines, tractors, and trailers",
      "Ability to perform preventive maintenance and mechanical diagnostics",
      "Familiarity with DOT inspection standards and safety regulations",
      "Strong problem-solving skills and ability to work in a fast-paced shop environment"
    ]
  
  },
]

export function CareersRoles() {
  return (
    <section className="bg-slate-50 py-32 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-red-600" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                Open Positions
              </p>
              <div className="h-[2px] w-12 bg-red-600" />
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Join the <span className="text-blue-700">Best Fleet</span> on the Road
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 font-medium">
              Whether you are behind the wheel or behind the desk, there is a place for you at Haulster.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col gap-16">
          {roles.map((role, i) => (
            <AnimateOnScroll key={role.title} delay={`animation-delay-${i * 150}`}>
              <div className="group rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-blue-200">
                <div className="flex flex-col lg:flex-row">
                  
                  <div className="lg:w-1/3 relative aspect-video lg:aspect-auto overflow-hidden">
                    <Image 
                      src={role.image} 
                      alt={role.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  <div className="flex-1 p-8 md:p-12">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                      
                      <div className="flex-1 lg:max-w-xl">
                        <div className="mb-4">
                          <h3 className="font-black text-3xl text-slate-900 mb-2">
                            {role.title}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-black uppercase tracking-widest rounded-full">
                            {role.type}
                          </span>
                        </div>
                        <p className="leading-relaxed text-slate-600 font-medium text-lg">
                          {role.description}
                        </p>
                      </div>

                      <div className="lg:w-80 shrink-0 bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <h4 className="flex items-center gap-2 font-black text-sm uppercase tracking-widest text-slate-900 mb-4">
                          <div className="h-1.5 w-6 bg-blue-700"></div>
                          Requirements
                        </h4>
                        <ul className="flex flex-col gap-3">
                          {role.requirements.map((req) => (
                            <li key={req} className="flex items-start gap-3 text-sm text-slate-600 font-semibold">
                              <div className="h-2 w-2 shrink-0 rounded-full bg-red-600 mt-1" />
                              <span className="leading-snug">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                    </div>
                  </div>

                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
