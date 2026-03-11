"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react"

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/safety", label: "Safety & Compliance" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services", label: "Dry Van Freight" },
    { href: "/services", label: "Cross-Border Freight" },
    { href: "/services", label: "Dedicated Lanes" },
    { href: "/services", label: "Expedited Service" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">

      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* brand */}

        <div className="flex flex-col items-center text-center mb-16">

          <Image
            src="/images/company-logo-transparent.png"
            alt="Haulster Transport"
            width={180}
            height={80}
          />

          <p className="mt-6 max-w-xl text-slate-600 text-sm leading-relaxed">
            Reliable freight transportation across Canada and the United States.
            Dedicated capacity, real-time shipment visibility, and safety-first
            operations for companies that rely on consistent logistics.
          </p>

          <div className="flex gap-4 mt-6">

            {[Facebook, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-100 transition"
              >
                <Icon className="h-4 w-4 text-slate-600" />
              </a>
            ))}

          </div>

        </div>


        {/* navigation */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-5">
              Company
            </h4>

            <ul className="space-y-3">

              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-900 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

            </ul>
          </div>


          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-5">
              Services
            </h4>

            <ul className="space-y-3">

              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-900 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

            </ul>
          </div>


          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-5">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-slate-600">

              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="h-4 w-4 text-red-600" />
                (204) 995-7117
              </li>

              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="h-4 w-4 text-red-600" />
                dispatch@haulster.ca
              </li>

              <li className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin className="h-4 w-4 text-red-600" />
                185 Goldenrod Dr, Centreport, MB R4B 0A2
              </li>

            </ul>
          </div>

        </div>


        {/* bottom */}

        <div className="mt-16 border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-slate-500">
            © 2026 Haulster Transport Ltd. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link
              href="#"
              className="text-xs text-slate-500 hover:text-slate-900"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-xs text-slate-500 hover:text-slate-900"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}