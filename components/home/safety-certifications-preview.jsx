"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ShieldCheck, ArrowRight } from "lucide-react"
import Link from "next/link"

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.08,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

const imageVariants = {
    hidden: { opacity: 0, x: 40, scale: 0.97 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

export function SafetyCertificationsHome() {
    return (
        <section className="relative overflow-hidden bg-white py-24">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-[-100px] top-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
                <div className="absolute right-[-100px] bottom-0 h-72 w-72 rounded-full bg-red-100/50 blur-3xl" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.95fr_1.05fr]"
            >
                <div className="max-w-xl">
                    <motion.div
                        variants={itemVariants}
                        className="mb-5 inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50 px-4 py-2"
                    >
                        <ShieldCheck className="h-4 w-4 text-blue-700" />
                        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-700">
                            Safety & Compliance
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl"
                    >
                        Certified for secure,
                        <span className="block text-blue-700">
                            cross-border freight.
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="mt-6 max-w-lg text-lg font-medium leading-relaxed text-slate-600"
                    >
                        Haulster operates with recognized compliance programs and customs
                        readiness that support secure, efficient freight movement across
                        Canada and the United States.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="mt-8 flex flex-wrap gap-3"
                    >
                        {["CTPAT", "FAST", "PIP", "ACE", "ACI"].map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-slate-700"
                            >
                                {item}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-8">
                        <Link
                            href="/safety"
                            className="group inline-flex items-center gap-3 rounded-lg bg-blue-700 px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl"
                        >
                            View Safety Standards
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    variants={imageVariants}
                    className="relative mx-auto w-full max-w-3xl"
                >
                    <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl">
                        <motion.div
                            animate={{ y: [0, -5, 0], scale: [1, 1.01, 1] }}
                            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative"
                        >
                            <Image
                                src="/images/safety-certificates.png"
                                alt="Haulster safety certifications"
                                width={1600}
                                height={900}
                                className="h-auto w-full object-cover"
                            />
                        </motion.div>

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-blue-100/10" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 16, scale: 0.92 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.45 }}
                        className="absolute -bottom-5 left-6 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-lg"
                    >
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
                            Bonded Carrier
                        </p>
                        <p className="mt-1 text-sm font-bold text-slate-900">
                            Canada / U.S. Ready
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}