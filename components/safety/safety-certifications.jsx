"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.16,
            delayChildren: 0.08,
        },
    },
}

const textVariants = {
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
            duration: 0.95,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

export function SafetyCertificationsSection() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-28">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-[-120px] top-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
                <div className="absolute right-[-120px] bottom-0 h-80 w-80 rounded-full bg-red-100/50 blur-3xl" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2"
            >
                <div className="max-w-xl">
                    <motion.div
                        variants={textVariants}
                        className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-700">
                            Compliance & Certifications
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={textVariants}
                        className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl"
                    >
                        Safety and border compliance you can trust.
                    </motion.h2>

                    <motion.p
                        variants={textVariants}
                        className="mt-7 text-lg font-medium leading-relaxed text-slate-600"
                    >
                        Haulster maintains recognized cross-border and transportation
                        compliance credentials that support secure, efficient, and reliable
                        freight movement throughout Canada and the United States.
                    </motion.p>

                    <motion.p
                        variants={textVariants}
                        className="mt-5 text-base leading-relaxed text-slate-500"
                    >
                        Our certifications and customs program readiness reflect our focus
                        on operational discipline, shipment visibility, and trusted carrier
                        performance.
                    </motion.p>
                </div>

                <motion.div
                    variants={imageVariants}
                    className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl"
                >
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
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

                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-blue-100/10 pointer-events-none" />
                </motion.div>
            </motion.div>
        </section>
    )
}