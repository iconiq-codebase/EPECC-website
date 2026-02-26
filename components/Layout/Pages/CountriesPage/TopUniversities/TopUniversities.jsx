"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineAcademicCap, HiArrowUpRight, HiOutlineMapPin, HiOutlineSparkles } from "react-icons/hi2";

export default function TopUniversities({ country }) {
    return (
        <section className="bg-[#020617] text-slate-100 py-32 px-6 lg:px-20 relative overflow-hidden">
            {/* Architectural Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#22d3ee 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <HiOutlineSparkles className="text-cyan-400 animate-pulse" />
                            <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.5em]">Global Ranking Leaders</p>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.85] text-white">
                            Elite <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 italic font-light">Institutions.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-sm"
                    >
                        <p className="text-slate-400 text-lg font-light leading-relaxed border-l-2 border-cyan-500/30 pl-8 italic">
                            A curated selection of {country.name}&apos;s most prestigious academic centers, defined by research impact and historical legacy.
                        </p>
                    </motion.div>
                </div>

                {/* Universities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {country.universitiesList?.map((uni, index) => (
                        <UniversityCard key={uni.name} university={uni} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function UniversityCard({ university, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-slate-900/30 backdrop-blur-xl border border-slate-800/50 rounded-[2.5rem] p-10 flex flex-col min-h-[480px] hover:bg-slate-900/60 hover:border-cyan-500/30 transition-all duration-700 overflow-hidden shadow-2xl"
        >
            {/* Large Decorative Index */}
            <span className="absolute -top-4 -right-2 text-[10rem] font-bold text-white/[0.02] group-hover:text-cyan-500/[0.05] transition-colors duration-700 select-none pointer-events-none">
                0{index + 1}
            </span>

            {/* Icon & Location Badge */}
            <div className="flex flex-col gap-8 mb-10 relative z-10">
                <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-500">
                    <HiOutlineAcademicCap className="text-4xl text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[9px] uppercase tracking-[0.2em] font-bold mb-4 ring-1 ring-cyan-500/20">
                        <HiOutlineMapPin />
                        {university.location || "Presidency Campus"}
                    </div>
                    <h3 className="text-3xl font-semibold tracking-tight text-white leading-tight group-hover:translate-x-1 transition-transform duration-500">
                        {university.name}
                    </h3>
                </div>
            </div>

            {/* Body */}
            <p className="text-slate-400 text-[15px] leading-relaxed font-light mb-12 group-hover:text-slate-200 transition-colors relative z-10">
                {university.description}
            </p>

            {/* Action Footer */}
            <div className="mt-auto pt-8 border-t border-slate-800/60 relative z-10">
                <Link
                    href={'/study-abroad'}
                    className="flex items-center justify-between group/link"
                >
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">Admissions Open</span>
                        <span className="text-sm font-semibold tracking-wide group-hover/link:text-cyan-300 transition-colors">
                            Explore Programs
                        </span>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white text-slate-950 flex items-center justify-center transition-all duration-500 group-hover/link:bg-cyan-400 group-hover/link:scale-110 shadow-lg">
                        <HiArrowUpRight className="text-xl transition-transform duration-500 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </div>
                </Link>
            </div>

            {/* Subtle Gradient Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 to-cyan-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>
    );
}