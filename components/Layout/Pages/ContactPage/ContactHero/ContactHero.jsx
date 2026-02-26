"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ContactHero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    };

    return (
        <section className="relative min-h-[90vh] flex items-center bg-[#000814] text-white py-24 px-6 lg:px-20 overflow-hidden">
            {/* --- Premium Background Elements --- */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#2ECED5]/10 blur-[140px] rounded-full mix-blend-screen animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#B20055]/10 blur-[140px] rounded-full mix-blend-screen" />

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

                {/* --- Content Column --- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-10"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-6 h-6 rounded-full border-2 border-[#000814] bg-gray-800 overflow-hidden">
                                    <Image
                                        src={`/images/contactpage/hero-section/student-${i}.jpg`}
                                        width={20}
                                        height={20}
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#2ECED5]">
                            Trusted by 5k+ Students
                        </span>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-4">
                        <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[0.95] font-sans">
                            Elevate Your <br />
                            <span className="italic font-light">Perspective.</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed font-light border-l border-white/10 pl-6">
                            Experience a concierge approach to international education. <span className="text-white/90">Your ambition deserves a dedicated architect.</span>
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-6 items-center">
                        <Link
                            href="/contact"
                            className="group relative px-10 py-5 bg-white text-black rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            <span className="relative z-10">Initiate Inquiry</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2ECED5] to-[#B20055] opacity-0 group-hover:opacity-10 transition-opacity" />
                        </Link>

                        <button className="group flex items-center gap-3 text-sm font-semibold tracking-widest uppercase hover:text-[#2ECED5] transition-colors">
                            <span>Explore Services</span>
                            <div className="w-12 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-[#2ECED5] transition-all" />
                        </button>
                    </motion.div>
                </motion.div>

                {/* --- Image Column --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    {/* Decorative Ring */}
                    <div className="absolute -inset-10 border border-white/5 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />

                    <div className="relative aspect-[4/5] lg:aspect-square w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src="/images/contactpage/hero-section/hero.jpg"
                            alt="EPECC Contact Support"
                            fill
                            className="object-cover scale-105 hover:scale-100 transition-transform duration-[3s] ease-out"
                        />

                        {/* High-End Glass Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#000814]/80 via-transparent to-transparent" />

                        {/* Floating Status Card */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="absolute bottom-10 left-10 right-10 p-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl"
                        >
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-[#2ECED5] text-xs font-bold tracking-[0.2em] mb-2 uppercase">Response Time</p>
                                    <p className="text-2xl font-light underline decoration-[#B20055] decoration-2 underline-offset-8">Under 2 Hours</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-gray-400 text-[10px] uppercase tracking-tighter">Global Offices</p>
                                    <p className="text-white font-medium">Kathmandu • Nepal</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}