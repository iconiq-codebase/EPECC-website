"use client";

import Image from 'next/image';
import { useRef } from 'react';
import { HiOutlineMapPin, HiOutlineClock, HiOutlineArrowUpRight } from 'react-icons/hi2';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProgramHero = ({ programName, university, location, duration, imageUrl }) => {
    const containerRef = useRef(null);

    // Parallax Scroll Logic
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen bg-[#020617] overflow-hidden flex items-center"
        >
            {/* 1. Parallax Background Layer */}
            <motion.div
                style={{ y: yBg, opacity: opacityBg }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src={imageUrl.url}
                    alt={programName}
                    fill
                    className="object-cover opacity-40 grayscale-[0.2]"
                    priority
                />
                {/* Advanced Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/40 to-transparent z-10" />
            </motion.div>

            {/* 2. Floating Ambient Glows (Parallaxed) */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
                className="absolute top-1/4 -right-20 w-96 h-96 bg-[#9A0044]/20 rounded-full blur-[120px] z-10"
            />
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
                className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] z-10"
            />

            {/* 3. Main Content Layer */}
            <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-20 w-full">
                <motion.div style={{ y: textY }}>

                    {/* Category Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <span className="w-12 h-[2px] bg-[#9A0044]" />
                        <p className="text-[#9A0044] text-[10px] font-bold uppercase tracking-[0.6em]">
                            Global Excellence <span className="text-cyan-400">2026</span>
                        </p>
                    </motion.div>

                    {/* Headline */}
                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-tight mb-8 md:mb-12"
                    >
                        <span className="block truncate">{programName}</span>
                    </motion.h1>

                    {/* Meta Stats Row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4 md:gap-12 mb-4 md:mb-16 border-t border-white/10 pt-10"
                    >
                        <div className="flex flex-col gap-3">
                            <span className="text-cyan-400 text-[9px] uppercase tracking-widest font-bold">Institution</span>
                            <span className="text-white text-xl font-light">{university}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="text-cyan-400 text-[9px] uppercase tracking-widest font-bold">Location</span>
                            <div className="flex items-center gap-2 text-white text-xl font-light">
                                <HiOutlineMapPin className="text-[#9A0044]" /> {location}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="text-cyan-400 text-[9px] uppercase tracking-widest font-bold">Duration</span>
                            <div className="flex items-center gap-2 text-white text-xl font-light">
                                <HiOutlineClock className="text-[#9A0044]" /> {duration}
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Group */}
                    <div className="flex flex-col sm:flex-row gap-8 items-center">
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="/apply"
                            className="group relative px-12 py-5 bg-[#9A0044] text-white font-bold uppercase text-[11px] tracking-[0.3em] rounded-full overflow-hidden transition-all duration-500 shadow-[0_15px_30px_rgba(154,0,68,0.3)]"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Enquire Now <HiOutlineArrowUpRight className="text-lg" />
                            </span>
                            <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </motion.a>

                        <button className="text-white/50 hover:text-cyan-400 text-[10px] font-bold uppercase tracking-[0.4em] transition-colors flex items-center gap-4">
                            <span className="w-6 h-[1px] bg-white/20" />
                            Syllabus PDF
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* 4. Bottom Decorative Element */}
            <div className="absolute bottom-0 left-0 w-full p-10 z-40 flex justify-between items-end pointer-events-none">
                <div className="text-[150px] font-black text-white/[0.02] leading-none select-none">
                    01
                </div>
                <div className="flex flex-col gap-2 items-end">
                    <div className="w-1 h-20 bg-gradient-to-t from-[#9A0044] to-transparent" />
                    <span className="text-[9px] text-white/20 uppercase tracking-[0.5em] [writing-mode:vertical-lr]">Scroll</span>
                </div>
            </div>
        </section>
    );
};

export default ProgramHero;