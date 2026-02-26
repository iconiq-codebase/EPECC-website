'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiOutlineArrowUpRight, HiOutlineGlobeAlt } from 'react-icons/hi2';

const UniversitiesOffering = ({ universities }) => {
    return (
        <section className="relative w-full bg-[#020617] text-white py-24 px-6 md:px-20 overflow-hidden">
            {/* 1. Subtle Background Grid (The 'Architectural' touch) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#9A0044 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="text-cyan-400 font-bold tracking-[0.5em] text-[10px] uppercase underline underline-offset-8 decoration-[#9A0044]">Partner Institutions</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-light tracking-tight text-white leading-tight"
                        >
                            Global <span className="font-semibold text-[#9A0044]">Academic</span> <br />
                            <span className="italic font-serif">Network</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="hidden md:block pb-4"
                    >
                        <div className="flex items-center gap-4 text-slate-500 text-xs tracking-widest uppercase">
                            <span>Scroll to explore</span>
                            <div className="w-12 h-[1px] bg-slate-800" />
                        </div>
                    </motion.div>
                </div>

                {/* Universities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {universities.map((uni, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="group relative flex flex-col p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#9A0044]/40 backdrop-blur-sm transition-all duration-500"
                        >
                            {/* Logo Container with Sophisticated Filter */}
                            <div className="relative w-full h-32 mb-10 overflow-hidden">
                                <Image
                                    src={uni.logoUrl.url}
                                    alt={uni.name}
                                    fill
                                    className="object-cover filter grayscale brightness-[2] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-in-out scale-90 group-hover:scale-100"
                                />
                            </div>

                            {/* Info Section */}
                            <div className="mt-auto relative">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-lg font-medium text-white tracking-tight leading-snug group-hover:text-cyan-400 transition-colors">
                                        {uni.name}
                                    </h3>
                                    <motion.div className="opacity-0 group-hover:opacity-100 text-[#9A0044] transition-opacity">
                                        <HiOutlineArrowUpRight size={20} />
                                    </motion.div>
                                </div>

                                {uni.location && (
                                    <div className="flex items-center gap-2 text-slate-500 group-hover:text-slate-300 transition-colors">
                                        <HiOutlineGlobeAlt className="text-cyan-500/50" />
                                        <p className="text-[10px] font-bold uppercase tracking-widest leading-none">
                                            {uni.location}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Animated Background Reveal */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
                        </motion.div>
                    ))}

                    
                </div>

                {/* Footer Insight */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 flex justify-center border-t border-slate-900 pt-10"
                >
                    <p className="text-slate-500 text-xs tracking-wide">
                        * All partner institutions are fully accredited and globally recognized.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default UniversitiesOffering;