"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function StoriesHero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Background elements move at different speeds
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center bg-[#000d21] text-white py-20 px-6 lg:px-20 overflow-hidden"
        >
            {/* Parallax Background Blobs */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#2ECED5]/10 blur-[120px] rounded-full"
            />
            <motion.div
                style={{ y: y2, rotate }}
                className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full"
            />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-16 relative z-10">

                {/* Left Side: Staggered Text */}
                <div className="lg:col-span-7 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3"
                    >
                        <span className="h-[1px] w-12 bg-[#2ECED5]/50"></span>
                        <span className="text-[#2ECED5] uppercase tracking-[0.4em] text-[10px] font-black">
                            Elite Education Partners
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.95]"
                    >
                        Your Vision. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-[#2ECED5]/40">
                            Our Mission.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="text-gray-400 text-lg md:text-xl max-w-lg font-light leading-relaxed border-l-2 border-[#2ECED5]/20 pl-6"
                    >
                        We don’t just process applications; we curate futures. Join the ranks of students excelling in the Ivy League and beyond.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-6 pt-4"
                    >
                        <button className="group relative px-8 py-4 bg-white text-[#000d21] font-bold rounded-full overflow-hidden transition-all">
                            <span className="relative z-10">Get Started</span>
                            <div className="absolute inset-0 bg-[#2ECED5] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                        <button className="px-8 py-4 text-white font-medium hover:text-[#2ECED5] transition-colors flex items-center gap-2">
                            Learn More <span className="text-xl">→</span>
                        </button>
                    </motion.div>
                </div>

                {/* Right Side: Visual Stack */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-5 relative"
                >
                    {/* Main Hero Image with Glass Border */}
                    <div className="relative group p-4 bg-white/5 rounded-[3rem] backdrop-blur-sm border border-white/10 overflow-hidden">
                        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                            <Image
                                src="/images/storiespage/hero-section/hero.jpg"
                                alt="Success"
                                fill
                                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-transparent to-transparent opacity-60" />
                        </div>
                    </div>

                    {/* Floating Metric Card */}
                    <motion.div
                        style={{ y: y2 }} // Moves opposite to scroll for extra depth
                        className="absolute -right-8 top-1/4 bg-[#000d21]/80 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] hidden xl:block"
                    >
                        <p className="text-[#2ECED5] text-4xl font-black italic">98%</p>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400">Visa Success Rate</p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Elegant Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000d21] to-transparent z-20" />
        </section>
    );
}