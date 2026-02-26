"use client";

import { motion } from "framer-motion";
import { HiOutlineGlobeAlt, HiOutlineBriefcase, HiOutlineCheckBadge, HiOutlineClock, HiOutlineShieldCheck } from "react-icons/hi2";

export default function VisaWorkInfo({ country }) {
    return (
        <section className="bg-[#020617] text-slate-100 py-28 px-6 lg:px-20 relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full -translate-y-1/2 -z-10" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-[10px] uppercase tracking-[0.4em] font-bold mb-8 shadow-xl"
                    >
                        <HiOutlineShieldCheck className="text-sm" /> Legal Framework
                    </motion.div>

                    <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 text-white leading-[0.9]">
                        Pathways & <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-500 italic font-light">Privileges.</span>
                    </h2>
                    <p className="max-w-xl text-slate-400 text-lg font-light leading-relaxed tracking-wide">
                        Expertly curated legal insights for {country.name}, ensuring your transition from student to professional is seamless.
                    </p>
                </div>

                {/* Info Split Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Visa Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative p-10 md:p-14 rounded-[3rem] bg-slate-900/40 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-700 shadow-2xl overflow-hidden"
                    >
                        <div className="flex items-start justify-between mb-12">
                            <div className="flex items-center gap-5">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all">
                                    <HiOutlineGlobeAlt size={32} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold tracking-tight text-white">Residency</h3>
                                    <p className="text-[10px] text-cyan-500/80 uppercase tracking-[0.2em] font-bold mt-1">
                                        {country.visa || "Tier 4 Student Visa"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <p className="text-slate-300 text-lg leading-relaxed font-light italic opacity-80 group-hover:opacity-100 transition-opacity">
                                &ldquo;{country.visaDescription}&rdquo;
                            </p>

                            <div className="grid grid-cols-1 gap-4 pt-8 border-t border-slate-800/60">
                                <InfoBullet text="Institutional Full-time Certification" />
                                <InfoBullet text="Sovereign Financial Solvency Proof" />
                                <InfoBullet text="Global Health Surcharge Compliance" />
                            </div>
                        </div>

                        {/* Interactive Accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full transition-opacity opacity-0 group-hover:opacity-100" />
                    </motion.div>

                    {/* Work Rights Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative p-10 md:p-14 rounded-[3rem] bg-slate-900/40 backdrop-blur-xl border border-slate-800 hover:border-indigo-500/40 transition-all duration-700 shadow-2xl overflow-hidden"
                    >
                        <div className="flex items-start justify-between mb-12">
                            <div className="flex items-center gap-5">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700 flex items-center justify-center text-indigo-400 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all">
                                    <HiOutlineBriefcase size={32} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold tracking-tight text-white">Career Rights</h3>
                                    <p className="text-[10px] text-indigo-400 uppercase tracking-[0.2em] font-bold mt-1">
                                        {country.workStudy || "Post-Study Access"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <p className="text-slate-400 text-lg leading-relaxed font-light group-hover:text-slate-200 transition-colors">
                                {country.workStudyDescription}
                            </p>

                            <div className="flex flex-wrap gap-3 pt-8 border-t border-slate-800/60">
                                <HighlightBadge icon={<HiOutlineClock />} text="20 Hrs / Term Week" />
                                <HighlightBadge icon={<HiOutlineCheckBadge />} text="Unlimited Vacation Hours" />
                                <HighlightBadge icon={<HiOutlineGlobeAlt />} text="2-Year Post-Study Route" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

function InfoBullet({ text }) {
    return (
        <li className="flex items-center gap-4 text-sm text-slate-400 group-hover:text-slate-200 transition-colors list-none">
            <div className="relative flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <div className="absolute w-4 h-4 rounded-full border border-cyan-500/20 scale-150 animate-pulse" />
            </div>
            <span className="font-light tracking-wide italic">{text}</span>
        </li>
    );
}

function HighlightBadge({ icon, text }) {
    return (
        <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-slate-950/60 border border-slate-800 text-[10px] font-bold uppercase tracking-widest text-slate-300 group-hover:border-indigo-500/30 transition-all hover:bg-slate-900 shadow-lg">
            <span className="text-indigo-400 text-base">{icon}</span>
            {text}
        </div>
    );
}