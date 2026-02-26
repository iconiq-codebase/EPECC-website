"use client";

import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineGlobeAlt, HiOutlineBriefcase, HiOutlineBuildingLibrary, HiOutlineLightBulb } from "react-icons/hi2";

export default function CountryOverview({ country }) {
    return (
        <section className="bg-[#020617] text-slate-100 py-32 px-6 lg:px-20 relative overflow-hidden">
            {/* Background Texture & Ambient Glow */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#22d3ee 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />
            <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-cyan-600/10 blur-[140px] rounded-full -z-10 animate-pulse" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-end mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <HiOutlineLightBulb className="text-cyan-400" />
                            <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.5em]">Executive Summary</p>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-800 italic font-light">
                            At a Glance.
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 text-slate-400 text-lg font-light leading-relaxed border-l-2 border-slate-800 pl-10 italic"
                    >
                        Strategizing your academic journey in <span className="text-white font-semibold">{country.name}</span> requires a precise understanding of the local ecosystem and global leverage.
                    </motion.p>
                </div>

                {/* Refined Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[260px]">

                    {/* Elite Institutions - Large Bento */}
                    <OverviewCard
                        className="md:col-span-2 lg:col-span-2 row-span-1"
                        icon={<HiOutlineBuildingLibrary className="text-cyan-400" />}
                        title="Elite Institutions"
                        value={country.universities}
                        label="Academic Hubs"
                    />

                    {/* Specializations - Standard Bento */}
                    <OverviewCard
                        className="md:col-span-1 lg:col-span-1"
                        icon={<HiOutlineBriefcase className="text-indigo-400" />}
                        title="Specializations"
                        value={country.courses}
                        label="Market Demand"
                    />

                    {/* Residency & Work - Tall Bento */}
                    <OverviewCard
                        className="md:col-span-1 lg:col-span-1 lg:row-span-2 h-full"
                        icon={<HiOutlineGlobeAlt className="text-emerald-400" />}
                        title="Legal Status"
                        value={country.visa + (country.workStudy ? ` · ${country.workStudy}` : "")}
                        label="Residency Route"
                        isTall
                    />

                    {/* Lifestyle - Wide Bento */}
                    <OverviewCard
                        className="md:col-span-2 lg:col-span-3"
                        icon={<HiOutlineAcademicCap className="text-blue-400" />}
                        title="Student Experience"
                        value={country.lifestyle || "A convergence of historic heritage and forward-leaning innovation."}
                        label="Lifestyle"
                    />
                </div>
            </div>
        </section>
    );
}

function OverviewCard({ icon, title, value, label, className = "", isTall = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`group relative bg-slate-900/40 backdrop-blur-xl border border-slate-800/60 rounded-[2.5rem] p-10 overflow-hidden hover:bg-slate-900/60 hover:border-cyan-500/30 transition-all duration-700 shadow-2xl ${className}`}
        >
            {/* Animated Hover Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

            <div className="h-full flex flex-col justify-between relative z-10">
                <div>
                    <div className="flex justify-between items-start mb-10">
                        <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl group-hover:border-cyan-500/50 transition-all duration-500 text-3xl">
                            {icon}
                        </div>
                        <span className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-black italic">{label}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white tracking-tight">{title}</h3>
                </div>

                <p className={`text-slate-400 leading-relaxed font-light ${isTall ? 'text-sm' : 'text-base'} group-hover:text-slate-100 transition-colors duration-500`}>
                    {value}
                </p>
            </div>

            {/* Corner Spotlight Effect */}
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-cyan-500/5 blur-[50px] rounded-full group-hover:bg-cyan-500/15 transition-all duration-700" />
        </motion.div>
    );
}