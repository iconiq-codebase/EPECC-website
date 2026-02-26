"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function CompanyStory() {
    return (
        <section
            aria-labelledby="company-story-heading"
            className="relative bg-[#020617] py-32 px-6 lg:px-20 text-slate-900 overflow-hidden"
        >
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 -skew-x-12 translate-x-1/2 -z-0" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

                {/* --- TEXT CONTENT --- */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-1 rounded-lg bg-[#2ECED5]/10 text-[#2ECED5] uppercase tracking-widest text-xs font-bold mb-4">
                            Our Journey
                        </span>
                        <h2
                            id="company-story-heading"
                            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]"
                        >
                            How EPECC <br />
                            <span className="text-[#2ECED5]">Began.</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed font-light">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            EPECC was founded with a simple belief—every student deserves
                            <span className="font-semibold text-slate-900"> honest guidance </span>
                            and equal access to global education opportunities. We saw too many students misled by unclear processes and hidden costs.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            What started as a small counselling initiative has grown into a
                            trusted consultancy. We focus on choosing the
                            <span className="italic"> right </span> country and career path—not just what looks good on paper.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="border-l-4 border-[#2ECED5] pl-6 py-2 bg-white/50 text-gray-900 rounded"
                        >
                            Today, we proudly support students from application to visa and
                            beyond, building success stories that last a lifetime.
                        </motion.p>
                    </div>
                </div>

                {/* --- VISUAL IMPACT CARD --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    {/* Decorative Glow behind the card */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-[#2ECED5] to-blue-600 opacity-20 blur-2xl rounded-[2rem]" />

                    <div className="relative bg-[#020617] text-white rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden group">
                        {/* Grain Overlay */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

                        <h3 className="text-3xl font-bold mb-8 relative z-10">
                            The EPECC <span className="text-[#2ECED5]">Edge</span>
                        </h3>

                        <ul className="space-y-6 relative z-10">
                            {[
                                "Transparent counselling & ethical advice",
                                "Student-first, not commission-driven",
                                "End-to-end guidance from day one",
                                "Long-term career focus over admissions"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (index * 0.1) }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#2ECED5]/20 flex items-center justify-center text-[#2ECED5]">
                                        <FiCheckCircle size={18} />
                                    </div>
                                    <span className="text-slate-300 text-lg leading-snug group-hover:text-white transition-colors">
                                        {item}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Subtle branding watermark */}
                        <div className="mt-12 pt-8 border-t border-white/10 opacity-40 text-sm tracking-[0.3em] uppercase">
                            Est. 2024 • Excellence in Education
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}