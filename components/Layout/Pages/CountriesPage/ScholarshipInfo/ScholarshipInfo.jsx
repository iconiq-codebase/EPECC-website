"use client";

import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { HiOutlineCurrencyDollar, HiOutlineAcademicCap, HiOutlineShieldCheck } from "react-icons/hi2";

export default function ScholarshipInfo({ country }) {
    return (
        <section className="bg-[#020617] text-slate-100 py-28 px-6 lg:px-20 relative overflow-hidden">
            {/* Layered Background Gradients */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-6 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.3em]">Institutional Grants</span>
                    </motion.div>

                    <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-8 text-white leading-[0.9]">
                        Academic <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-500 italic font-light">Endowments.</span>
                    </h2>

                    <p className="max-w-xl text-slate-400 text-lg font-light leading-relaxed tracking-wide">
                        Unlocking global education through specialized funding frameworks and merit-based grants for {country.name}.
                    </p>
                </div>

                {/* Scholarships Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {country.scholarships.map((scholarship, idx) => (
                        <ScholarshipCard key={scholarship.name} scholarship={scholarship} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ScholarshipCard({ scholarship, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-10 flex flex-col hover:bg-slate-900/60 hover:border-cyan-500/40 transition-all duration-700 shadow-2xl overflow-hidden"
        >
            {/* Subtle Top-Right Accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Value Header */}
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-800/60">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700 group-hover:border-cyan-500/50 transition-colors duration-500">
                    <HiOutlineCurrencyDollar size={28} className="text-cyan-400" />
                </div>
                <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-1">Grant Value</p>
                    <p className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors italic">
                        {scholarship.amount || "Full Fund"}
                    </p>
                </div>
            </div>

            {/* Content Body */}
            <div className="flex-grow mb-10">
                <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight leading-snug">
                    {scholarship.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-500">
                    {scholarship.description}
                </p>
            </div>

            {/* Bottom Meta & Action */}
            <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-950/50 border border-slate-800 rounded-lg">
                        <HiOutlineAcademicCap className="text-cyan-500 text-sm" />
                        <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold italic">
                            {scholarship.eligibility}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-950/50 border border-slate-800 rounded-lg">
                        <HiOutlineShieldCheck className="text-cyan-500 text-sm" />
                        <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold italic">Verified</span>
                    </div>
                </div>

                {scholarship.link && (
                    <a
                        href={scholarship.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full p-5 bg-white text-slate-950 text-[11px] font-bold uppercase tracking-[0.2em] rounded-2xl transition-all duration-500 hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                    >
                        <span>Apply For Scholarship</span>
                        <FaArrowUpRightFromSquare className="text-sm" />
                    </a>
                )}
            </div>

            {/* Animated Bottom Border Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
        </motion.div>
    );
}