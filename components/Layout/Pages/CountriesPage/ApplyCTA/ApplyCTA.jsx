"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function ApplyCTA({ countryName }) {
    return (
        <section className="bg-[#020617] py-32 px-6 lg:px-20 relative overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-600/10 blur-[120px] rounded-[100%] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden shadow-2xl"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-8 left-8 opacity-20">
                        <HiOutlineSparkles className="text-cyan-400 text-4xl animate-pulse" />
                    </div>

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] uppercase tracking-[0.4em] font-bold"
                        >
                            <HiCursorClick className="animate-bounce" /> Final Step
                        </motion.div>

                        <h2 className="text-5xl md:text-7xl font-semibold text-white mb-8 tracking-tighter leading-[0.9]">
                            Your Future in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic font-light">
                                {countryName} Starts Here.
                            </span>
                        </h2>

                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            Join a global network of scholars. Our streamlined application process connects you directly to {countryName}&apos;s leading institutions.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href={'/apply'}
                                className="group relative inline-flex items-center justify-center gap-3 bg-white text-slate-950 font-bold uppercase text-[11px] tracking-[0.2em] py-5 px-10 rounded-2xl transition-all duration-500 hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:scale-105 active:scale-95"
                            >
                                Begin Application
                                <FaArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href={'/contact'}
                                className="text-slate-300 hover:text-white text-[11px] font-bold uppercase tracking-[0.2em] transition-colors border-b border-slate-700 hover:border-cyan-500 pb-1"
                            >
                                Speak with an Advisor
                            </Link>
                        </div>
                    </div>

                    {/* Background Pattern for Card */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: `radial-gradient(#fff 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />
                </motion.div>

                {/* Trust Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
                >
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                        <span>ISO 9001 Certified</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                        <span>98% Visa Success Rate</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                        <span>Official Partner Institutions</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}