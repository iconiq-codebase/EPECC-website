"use client";

import { motion } from "framer-motion";
import { FiSearch, FiLayers, FiCompass, FiFileText, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const steps = [
    {
        title: "Understand Your Goals",
        description: "We evaluate your academic background and career aspirations to map out a bespoke international path.",
        icon: FiCompass,
        color: "from-[#2ECED5]/20",
    },
    {
        title: "Shortlist Universities",
        description: "A curated selection of elite institutions and programs specifically filtered for your profile.",
        icon: FiSearch,
        color: "from-[#B20055]/20",
    },
    {
        title: "Compare & Decide",
        description: "Deep-dive analysis of ROI, curriculum, and scholarship potential to ensure the perfect fit.",
        icon: FiLayers,
        color: "from-[#2ECED5]/20",
    },
    {
        title: "Application Support",
        description: "Precision-guided document preparation and SOP mentoring to maximize acceptance rates.",
        icon: FiFileText,
        color: "from-[#B20055]/20",
    },
];

export default function UniversitySelection() {
    return (
        <section className="bg-[#000B1D] text-white py-24 px-6 lg:px-20 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2ECED5]/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* --- Left Column: Content & CTA --- */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full border border-[#2ECED5]/30 bg-[#2ECED5]/10 text-[#2ECED5] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                                The Roadmap
                            </span>
                            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                                Selection <br />
                                <span className="bg-gradient-to-r from-[#2ECED5] to-[#B20055] bg-clip-text text-transparent">
                                    Made Simple.
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
                                We’ve engineered a data-driven approach to help you navigate the world's most prestigious institutions with total clarity.
                            </p>

                            <Link
                                href="/apply"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#B20055] hover:bg-[#9a0044] text-white font-bold rounded-2xl transition-all shadow-[0_10px_30px_rgba(178,0,85,0.3)] hover:shadow-[0_15px_40px_rgba(178,0,85,0.4)] active:scale-95 group"
                            >
                                Get Expert Guidance
                                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* --- Right Column: Step Cards --- */}
                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/10 backdrop-blur-sm z-0 transition-colors group-hover:border-[#2ECED5]/40" />

                                <div className="relative z-10 p-8 h-full flex flex-col items-start">
                                    {/* Icon & Number Row */}
                                    <div className="w-full flex justify-between items-center mb-6">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} border border-white/10 text-white`}>
                                            <step.icon size={24} className="text-[#2ECED5]" />
                                        </div>
                                        <span className="text-4xl font-black text-white/5 group-hover:text-[#2ECED5]/10 transition-colors">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#2ECED5] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Decorative Side Element (Subtle Image Integration) */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 opacity-20 pointer-events-none">
                <div className="relative w-full h-full animate-spin-slow">
                    {/* You can replace this with a subtle geometric SVG or a blurred brand element */}
                    <div className="absolute inset-0 border-[2px] border-dashed border-[#2ECED5] rounded-full" />
                </div>
            </div>
        </section>
    );
}