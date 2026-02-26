"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiGlobe, FiBookOpen, FiUsers, FiShield, FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const briefingPoints = [
    {
        title: "Cultural Intelligence",
        description: "Sophisticated orientation on local etiquette, social nuances, and lifestyle integration.",
        icon: FiGlobe,
    },
    {
        title: "Academic Excellence",
        description: "Mastering international grading rubrics and elite scholarly expectations.",
        icon: FiBookOpen,
    },
    {
        title: "Arrival Logistics",
        description: "Precision-timed airport transitions and white-glove check-in protocols.",
        icon: FiUsers,
    },
    {
        title: "Sovereign Compliance",
        description: "Essential briefing on legal residency, work rights, and fiscal safety.",
        icon: FiShield,
    },
];

export default function PreDepartureBriefing() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={containerRef} className="relative bg-[#020812] text-white py-32 px-6 lg:px-24 overflow-hidden">

            {/* Minimalist Backdrop */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#2ECED5]/5 blur-[180px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">

                    {/* LEFT CONTENT: The Narrative */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center gap-4 mb-10">
                                <span className="text-[#2ECED5] text-[10px] font-black uppercase tracking-[0.6em]">
                                    The Final Induction
                                </span>
                            </div>

                            <h2 className="text-6xl md:text-8xl font-light tracking-tighter leading-none mb-10">
                                Pre-Departure <br />
                                <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Briefing</span>
                            </h2>

                            <p className="text-gray-500 text-xl font-light leading-relaxed mb-16 max-w-md">
                                The bridge between your current world and your future. We ensure you step off the plane not as a stranger, but as a <span className="text-white">global citizen</span>.
                            </p>
                        </motion.div>
                    </div>

                    {/* RIGHT CONTENT: The Visual Centerpiece */}
                    <div className="lg:col-span-7 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 border border-white/5 rounded-[4rem] pointer-events-none" />

                            <div className="relative aspect-[3/4] md:aspect-[16/11] rounded-[3.5rem] overflow-hidden group">
                                <motion.div style={{ y: imgY }} className="relative h-[120%] w-full">
                                    <Image
                                        src="/images/servicepage/pre-departure/pre-departure-briefing.png"
                                        alt="Global Orientation"
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-[3s]"
                                    />
                                </motion.div>

                                <div className="absolute inset-0 bg-gradient-to-tr from-[#020812] via-transparent to-transparent opacity-60" />

                                {/* Subtle Overlay CTA */}
                                <div className="absolute bottom-12 left-12">
                                    <Link
                                        href="/apply"
                                        className="group relative flex items-center gap-6 px-10 py-5 bg-white text-black rounded-full transition-transform hover:scale-105"
                                    >
                                        <span className="text-[10px] font-black uppercase tracking-widest">Secure Seat</span>
                                        <FiArrowUpRight size={20} />
                                    </Link>
                                </div>
                            </div>

                            {/* Floating "Stamp" of Excellence */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-12 -right-12 w-32 h-32 hidden md:flex items-center justify-center opacity-20 pointer-events-none"
                            >
                                <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                                    <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                                    <text className="text-[10px] font-black uppercase tracking-[0.2em]">
                                        <textPath xlinkHref="#circlePath">CONFIDENCE • EXCELLENCE • READINESS •</textPath>
                                    </text>
                                </svg>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
                <div className="space-y-0 md:grid md:grid-cols-2 gap-4">
                    {briefingPoints.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group flex items-center gap-8 py-8 border-b border-white/5 hover:bg-white/[0.01] transition-all"
                        >
                            <div className="text-[#2ECED5] opacity-40 group-hover:opacity-100 transition-opacity">
                                <item.icon size={24} strokeWidth={1} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-black uppercase tracking-widest mb-1 group-hover:text-[#2ECED5] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 font-light group-hover:text-gray-300 transition-colors">
                                    {item.description}
                                </p>
                            </div>
                            <span className="text-[10px] font-serif italic text-white/10 group-hover:text-white/40 transition-colors">
                                0{index + 1}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}