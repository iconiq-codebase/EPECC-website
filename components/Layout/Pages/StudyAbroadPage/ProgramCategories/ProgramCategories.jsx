"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight, HiMagnifyingGlass, HiAdjustmentsHorizontal, HiOutlineClock, HiOutlineCurrencyDollar } from "react-icons/hi2";
import { useMyContext } from "@/components/utils/Context";

export default function FilterablePrograms() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCountry, setActiveCountry] = useState("All");
    const [activeDuration, setActiveDuration] = useState("All");

    const { fetchCourses, courses } = useMyContext();

    // Fetch courses on mount
    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    // Dynamically generate countries and durations from courses
    const countries = useMemo(() => {
        const uniqueCountries = Array.from(new Set(courses?.map((c) => c.country).filter(Boolean)));
        return ["All", ...uniqueCountries];
    }, [courses]);

    const durations = useMemo(() => {
        const uniqueDurations = Array.from(new Set(courses?.map((c) => c.duration).filter(Boolean)));
        return ["All", ...uniqueDurations];
    }, [courses]);

    // Filter courses based on search, country, duration
    const filteredPrograms = useMemo(() => {
        if (!courses || !Array.isArray(courses)) return [];

        return courses.filter((item) => {
            const matchesSearch =
                item.programName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesCountry = activeCountry === "All" || item.country === activeCountry;
            const matchesDuration = activeDuration === "All" || item.duration === activeDuration;

            return matchesSearch && matchesCountry && matchesDuration;
        });
    }, [searchQuery, activeCountry, activeDuration, courses]);

    return (
        <section className="bg-[#020617] text-slate-100 py-32 px-6 lg:px-20 relative min-h-screen overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <header className="mb-20 space-y-12">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="max-w-2xl"
                        >
                            <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.5em] mb-4">
                                Academic Portfolio
                            </p>
                            <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.85] text-white">
                                Academic <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 italic font-light">
                                    Pathways.
                                </span>
                            </h2>
                        </motion.div>

                        {/* Glassmorphism Search Bar */}
                        <div className="relative group w-full lg:max-w-sm">
                            <HiMagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search by degree or field..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl py-5 pl-14 pr-6 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all text-[13px] text-white placeholder-slate-500"
                            />
                        </div>
                    </div>

                    {/* Filter Controls */}
                    <div className="border-y border-slate-800/60 py-8 space-y-6">
                        <div className="flex items-center gap-3 text-slate-500 text-[10px] uppercase tracking-[0.3em] font-black italic">
                            <HiAdjustmentsHorizontal className="text-lg text-cyan-500" />
                            Refine Results:
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
                            {/* Country Filter */}
                            <div className="flex flex-wrap gap-2">
                                {countries.map((c) => (
                                    <button
                                        key={c}
                                        onClick={() => setActiveCountry(c)}
                                        className={`px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-500 border ${activeCountry === c
                                            ? "bg-white text-slate-950 border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                                            : "text-slate-500 border-slate-800 hover:border-slate-600 hover:text-slate-200"
                                            }`}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>

                            <div className="h-6 w-px bg-slate-800 hidden lg:block" />

                            {/* Duration Filter */}
                            <div className="flex flex-wrap gap-2">
                                {durations.map((d) => (
                                    <button
                                        key={d}
                                        onClick={() => setActiveDuration(d)}
                                        className={`px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-500 border ${activeDuration === d
                                            ? "bg-cyan-500 text-slate-950 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                                            : "text-slate-500 border-slate-800 hover:border-slate-600 hover:text-slate-200"
                                            }`}
                                    >
                                        {d}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Results Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredPrograms.map((program) => (
                            <motion.div
                                key={program._id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="group relative bg-slate-900/30 backdrop-blur-xl border border-slate-800/60 rounded-[2.5rem] p-10 min-h-[520px] flex flex-col justify-between overflow-hidden hover:bg-slate-900/60 hover:border-cyan-500/30 transition-all duration-700 shadow-2xl"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.15] transition-opacity duration-1000 ease-in-out pointer-events-none">
                                    {program.imageUrl?.url && (
                                        <Image
                                            src={program.imageUrl.url}
                                            alt={program.programName}
                                            fill
                                            className="object-cover grayscale scale-110 group-hover:scale-100 transition-transform duration-1000"
                                        />
                                    )}
                                </div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-14">
                                        <span className="px-4 py-1.5 rounded-full bg-slate-950/80 border border-slate-800 text-[9px] uppercase tracking-[0.2em] text-cyan-400 font-bold italic">
                                            {program.tag}
                                        </span>
                                        <Link href={`/study-abroad/${program.slug}`}>
                                            <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:bg-white group-hover:text-slate-950 group-hover:border-white transition-all duration-500 group-hover:shadow-lg">
                                                <HiArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                            </div>
                                        </Link>
                                    </div>

                                    <h3 className="text-4xl font-semibold text-white tracking-tighter mb-5 group-hover:translate-x-2 transition-transform duration-500 leading-tight">
                                        {program.programName}
                                    </h3>
                                    <p className="text-slate-400 text-[15px] font-light leading-relaxed max-w-[260px] group-hover:text-slate-200">
                                        {program.shortdescription}
                                    </p>
                                </div>

                                {/* Footer Overlay */}
                                <div className="relative z-10 mt-auto pt-8 border-t border-slate-800/60">
                                    <div className="flex flex-col gap-5 transform translate-y-4 opacity-60 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.15em] font-bold">
                                            <span className="flex items-center gap-2 text-slate-500">
                                                <HiOutlineClock className="text-cyan-500 text-sm" /> Duration
                                            </span>
                                            <span className="text-white italic">{program.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.15em] font-bold">
                                            <span className="flex items-center gap-2 text-slate-500">
                                                <HiOutlineCurrencyDollar className="text-cyan-500 text-sm" /> Investment
                                            </span>
                                            <span className="text-white italic">{program.fees.split(" ")[0]} / yr</span>
                                        </div>

                                        <Link
                                            href={`/study-abroad/${program.slug}`}
                                            className="mt-6 py-5 bg-white text-slate-950 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] text-center shadow-lg transition-all duration-500 hover:bg-cyan-400 hover:scale-[1.02]"
                                        >
                                            View Curriculum
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredPrograms.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-32 text-center border-2 border-dashed border-slate-800 rounded-[3rem]"
                    >
                        <p className="text-slate-500 text-xs uppercase tracking-[0.4em] font-bold italic mb-6">
                            No matching pathways identified.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setActiveCountry("All");
                                setActiveDuration("All");
                            }}
                            className="px-8 py-3 bg-slate-900 border border-slate-700 text-[10px] font-bold uppercase tracking-widest text-white rounded-full hover:border-cyan-500 transition-all"
                        >
                            Reset Parameter Selection
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}