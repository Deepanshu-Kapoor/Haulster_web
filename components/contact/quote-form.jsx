"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", pickup: "", drop: "", equipment: "", weight: "", pickupDate: "", notes: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Quote request submitted! Our team will respond shortly.")
  }

  const inputClasses = "rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-sm"

  return (
    <AnimateOnScroll>
      <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-8 bg-red-600" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
            Request a Quote
          </p>
        </div>
        <h2 className="text-3xl font-black text-slate-900 md:text-4xl text-balance tracking-tight">
          Tell Us About Your Shipment
        </h2>
        <p className="mt-4 text-slate-600 font-medium leading-relaxed max-w-xl">
          Fill in the details below and our dispatch team will get back to you with a competitive rate.
        </p>

        <form onSubmit={handleSubmit} className="mt-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="quote-name" className="text-sm font-bold text-slate-700 uppercase tracking-widest pl-1">Full Name *</label>
              <input id="quote-name" name="name" type="text" required value={formData.name} onChange={handleChange} className={inputClasses} placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="quote-company" className="text-sm font-bold text-slate-700 uppercase tracking-widest pl-1">Company</label>
              <input id="quote-company" name="company" type="text" value={formData.company} onChange={handleChange} className={inputClasses} placeholder="Company name" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="quote-email" className="text-sm font-bold text-slate-700 uppercase tracking-widest pl-1">Email *</label>
              <input id="quote-email" name="email" type="email" required value={formData.email} onChange={handleChange} className={inputClasses} placeholder="you@company.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="quote-phone" className="text-sm font-bold text-slate-700 uppercase tracking-widest pl-1">Phone *</label>
              <input id="quote-phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="(555) 000-0000" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="quote-pickup" className="text-sm font-bold text-slate-700 uppercase tracking-widest pl-1">Pickup *</label>
              <input id="quote-pickup" name="pickup" type="text" required value={formData.pickup} onChange={handleChange} className={inputClasses} placeholder="City, Province/State" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="quote-drop" className="text-sm font-bold text-slate-700 uppercase tracking-widest pl-1">Drop *</label>
              <input id="quote-drop" name="drop" type="text" required value={formData.drop} onChange={handleChange} className={inputClasses} placeholder="City, Province/State" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="quote-equipment" className="text-sm font-bold text-slate-700 uppercase tracking-widest pl-1">Equipment *</label>
              <select id="quote-equipment" name="equipment" required value={formData.equipment} onChange={handleChange} className={inputClasses}>
                <option value="">Select equipment</option>
                <option value="dry-van">Dry Van (53ft)</option>
                <option value="reefer">Reefer / Temperature Controlled</option>
                <option value="flatbed">Flatbed</option>
                <option value="step-deck">Step Deck</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="quote-weight" className="text-sm font-bold text-slate-700 uppercase tracking-widest pl-1">Weight (lbs)</label>
              <input id="quote-weight" name="weight" type="text" value={formData.weight} onChange={handleChange} className={inputClasses} placeholder="e.g., 42,000 lbs" />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="quote-date" className="text-sm font-bold text-slate-700 uppercase tracking-widest pl-1">Pickup Date *</label>
              <input id="quote-date" name="pickupDate" type="date" required value={formData.pickupDate} onChange={handleChange} className={inputClasses} />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <label htmlFor="quote-notes" className="text-sm font-bold text-slate-700 uppercase tracking-widest pl-1">Additional Notes</label>
            <textarea id="quote-notes" name="notes" rows={4} value={formData.notes} onChange={handleChange} className={`${inputClasses} resize-none`} placeholder="Special requirements, access restrictions, loading/unloading details..." />
          </div>

          <button type="submit" className="group mt-10 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-red-600 px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-red-700 hover:-translate-y-1 hover:shadow-xl sm:w-auto">
            <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            Request Quote
          </button>
        </form>
      </div>
    </AnimateOnScroll>
  )
}
