"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiBookOpen, FiArrowUpRight, FiGlobe } from "react-icons/fi";

export default function StudyAbroadHero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax effects for that "Deep" luxury feel
    const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative bg-[#01060E] text-white min-h-[90vh] flex items-center overflow-hidden py-32 px-6 lg:px-24"
        >
            {/* Background Architecture */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#2ECED5]/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#B20055]/5 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]" />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* LEFT CONTENT: The Manifesto */}
                    <motion.div
                        style={{ y: textY, opacity }}
                        className="w-full lg:w-3/5 space-y-10"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-4"
                        >
                            <span className="w-12 h-px bg-[#2ECED5]" />
                            <span className="text-[#2ECED5] uppercase tracking-[0.5em] text-[10px] font-black">
                                Excellence in Education
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-6xl md:text-[7.5rem] font-medium leading-[0.85] tracking-tighter"
                        >
                            Navigate <br />
                            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/10">
                                Your Legacy
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-gray-500 text-xl font-light leading-relaxed max-w-xl border-l border-white/10 pl-8"
                        >
                            Access curated undergraduate and postgraduate pathways at the world&apos;s
                            <span className="text-white font-normal"> most prestigious institutions</span>.
                            Your global trajectory begins with a single, strategic choice.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap items-center gap-8 pt-6"
                        >
                            <Link
                                href="/apply"
                                className="group relative px-12 py-5 bg-white text-black overflow-hidden rounded-full"
                            >
                                <span className="relative z-10 text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                                    Inquire Now <FiArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#2ECED5] to-[#B20055] opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>

                            <Link
                                href="/contact"
                                className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                            >
                                <FiGlobe className="text-[#2ECED5]" />
                                Talk to an Advisor
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT IMAGE: The Frame */}
                    <motion.div
                        style={{ y: imageY }}
                        className="w-full lg:w-2/5 relative"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className="relative aspect-[4/5] rounded-[4rem] overflow-hidden p-[1px] bg-gradient-to-br from-white/20 via-transparent to-transparent shadow-2xl"
                        >
                            <div className="relative w-full h-full rounded-[4rem] overflow-hidden">
                                <Image
                                    src="/images/study-abroad/hero-section/hero.jpg"
                                    alt="Luxury Student Living"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-[3s] scale-110"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#01060E] via-transparent to-transparent opacity-60" />
                            </div>
                        </motion.div>

                        {/* Ultra-Slim Data Floating Card */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 p-8 rounded-[2.5rem] bg-black/40 backdrop-blur-3xl border border-white/10 shadow-2xl"
                        >
                            <p className="text-4xl font-light tracking-tighter text-[#2ECED5]">250<span className="text-white text-lg font-serif italic">+</span></p>
                            <p className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold">Consulate-Verified <br /> Partners</p>
                        </motion.div>

                        {/* Aesthetic Geometric Element */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 border border-white/5 rounded-full flex items-center justify-center animate-spin-slow">
                            <FiBookOpen className="text-white/10" size={40} />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Vertical Page Indicator Decoration */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 items-center">
                <span className="text-[10px] font-black uppercase tracking-widest vertical-rl rotate-180 opacity-20">Scroll to Explore</span>
                <div className="w-px h-24 bg-gradient-to-b from-white/20 to-transparent" />
            </div>
        </section>
    );
}