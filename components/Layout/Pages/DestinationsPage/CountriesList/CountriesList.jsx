"use client";

import { useMyContext } from "@/components/utils/Context";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    HiArrowUpRight,
    HiOutlineAcademicCap,
    HiOutlineGlobeAlt,
    HiMagnifyingGlass,
    HiOutlineMap,
} from "react-icons/hi2";

export default function CountriesList() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const { country } = useMyContext()

    const filters = ["All", "North America", "Europe", "Asia", "Oceania"];

    const filteredCountries = country.filter((c) => {
        const matchesRegion =
            activeFilter === "All" || c.tag === activeFilter;

        const matchesSearch = c.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        return matchesRegion && matchesSearch;
    });

    return (
        <section
            id="countries-list"
            className="bg-[#020617] py-32 px-6 lg:px-20 text-slate-100 relative overflow-hidden"
            aria-label="Study Abroad Countries"
        >
            {/* Top Border Accent */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* SEO Heading & Meta Info */}
                <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <HiOutlineMap className="text-cyan-400" />
                            <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.5em]">Global Index</p>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.85] text-white">
                            Study Abroad <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 italic font-light">Destinations.</span>
                        </h2>
                    </div>
                    <div className="max-w-xs border-l-2 border-cyan-500/20 pl-8 pb-2">
                        <p className="text-slate-400 text-sm font-light leading-relaxed tracking-wide italic">
                            Comprehensive roadmaps for international scholars across five continents.
                        </p>
                    </div>
                </header>

                {/* Search + Navigation Filters */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16 border-b border-slate-800 pb-12">
                    {/* Search Field */}
                    <div className="relative w-full lg:max-w-md group">
                        <HiMagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                        <input
                            id="country-search"
                            type="text"
                            placeholder="Enter destination name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl text-[13px] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all shadow-inner"
                        />
                    </div>

                    {/* Regional Filters */}
                    <nav className="flex flex-wrap gap-3" aria-label="Filter countries by region">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-500 border ${activeFilter === filter
                                    ? "bg-white text-slate-950 border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                    : "border-slate-800 text-slate-400 hover:border-cyan-500/50 hover:text-white"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Countries Grid */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="popLayout">
                        {filteredCountries.length > 0 ? (
                            <motion.div
                                layout
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                itemScope
                                itemType="https://schema.org/ItemList"
                            >
                                {filteredCountries.map((country, index) => (
                                    <CountryCard
                                        key={country.name}
                                        country={country}
                                        index={index}
                                    />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-40 border-2 border-dashed border-slate-800 rounded-[3rem]"
                            >
                                <p className="text-slate-500 text-xs uppercase tracking-[0.4em] font-bold italic">
                                    No matching destinations available.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

function CountryCard({ country, index }) {
    return (
        <motion.article
            layout
            itemScope
            itemType="https://schema.org/Country"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="photo-card group relative h-[620px] w-full overflow-hidden rounded-[2.5rem] bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all duration-700 shadow-2xl"
        >
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={country.image.url}
                    alt={`Study in ${country.name}`}
                    fill
                    className="object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 h-full p-10 flex flex-col">
                <div className="flex justify-between items-start">
                    <span className="bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-800 text-[10px] font-bold uppercase tracking-widest text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-500">
                        {country.tag}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-950 transition-all duration-500">
                        <Link href={`/destinations/${country.slug}`} className="flex items-center justify-center w-full h-full">
                            <HiArrowUpRight className="text-xl" />
                        </Link>
                    </div>
                </div>

                <div className="mt-auto">
                    <h3
                        className="text-4xl font-semibold mb-5 tracking-tighter text-white"
                        itemProp="name"
                    >
                        {country.name}
                    </h3>

                    <p
                        className="text-slate-400 text-[15px] leading-relaxed mb-8 line-clamp-2 font-light tracking-wide group-hover:text-slate-200 transition-colors"
                        itemProp="description"
                    >
                        {country.description}
                    </p>

                    {/* Meta Highlights */}
                    <div className="grid grid-cols-1 gap-4 mb-10 pb-10 border-b border-slate-800/60">
                        <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                                <HiOutlineAcademicCap className="text-cyan-400 text-lg" />
                            </div>
                            <span className="text-[11px] uppercase tracking-[0.15em] text-slate-400 font-bold group-hover:text-slate-100">
                                {country.universities} <span className="text-slate-600 font-medium">Universities</span>
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                                <HiOutlineGlobeAlt className="text-cyan-400 text-lg" />
                            </div>
                            <span className="text-[11px] uppercase tracking-[0.15em] text-slate-400 font-bold group-hover:text-slate-100">
                                Visa Route: <span className="text-slate-100 italic">{country.visa}</span>
                            </span>
                        </div>
                    </div>

                    <Link
                        href={`/destinations/${country.slug}`}
                        className="group/btn relative inline-flex items-center justify-center w-full py-5 bg-white text-slate-950 text-[11px] font-black uppercase tracking-[0.3em] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:bg-cyan-400 hover:scale-[1.02]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Explore Destination <HiArrowUpRight className="text-base" />
                        </span>
                    </Link>
                </div>
            </div>

            {/* Subsurface Light Bar */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
        </motion.article>
    );
}