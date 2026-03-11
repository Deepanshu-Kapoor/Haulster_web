"use client"

import { useState } from "react"
import { Send, Upload } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function CareersForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    message: "",
    resume: null,
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)

    alert("Application submitted! We will be in touch.")
  }

  const inputClasses =
    "rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"

  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-3xl px-6">

        <AnimateOnScroll>
          <div className="text-center mb-12">

            <p className="font-heading text-sm font-bold uppercase tracking-widest text-accent">
              Apply Now
            </p>

            <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase text-foreground md:text-4xl">
              Ready to Join the Team?
            </h2>

            <p className="mt-4 text-muted-foreground">
              Fill out the form below and our recruiting team will be in touch.
            </p>

          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-border bg-card p-8 shadow-lg"
          >

            <div className="grid gap-6 sm:grid-cols-2">

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground">
                  Full Name *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Your full name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="you@email.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground">
                  Phone *
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="(555) 000-0000"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground">
                  Position *
                </label>

                <select
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className={inputClasses}
                >

                  <option value="">Select a position</option>

                  <option value="company-driver">
                    Company Driver
                  </option>

                  <option value="fleet-technician">
                    Fleet Technician
                  </option>

                </select>

              </div>

            </div>

            <div className="mt-6 flex flex-col gap-2">

              <label className="text-sm font-semibold text-foreground">
                Years of Experience
              </label>

              <input
                name="experience"
                type="text"
                value={formData.experience}
                onChange={handleChange}
                className={inputClasses}
                placeholder="e.g., 5 years OTR"
              />

            </div>

            {/* Resume Upload */}

            <div className="mt-6 flex flex-col gap-2">

              <label className="text-sm font-semibold text-foreground">
                Upload Resume (PDF or Word)
              </label>

              <div className="relative">

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-muted-foreground file:mr-4 file:rounded-md file:border-0 file:bg-accent file:px-4 file:py-2 file:text-accent-foreground hover:file:bg-accent/90"
                />

              </div>

            </div>

            <div className="mt-6 flex flex-col gap-2">

              <label className="text-sm font-semibold text-foreground">
                Additional Information
              </label>

              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
                placeholder="Tell us about yourself, your equipment, or anything else relevant"
              />

            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-accent-foreground transition-all hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-lg"
            >

              <Upload className="h-4 w-4" />

              Submit Application

            </button>

          </form>

        </AnimateOnScroll>

      </div>
    </section>
  )
}