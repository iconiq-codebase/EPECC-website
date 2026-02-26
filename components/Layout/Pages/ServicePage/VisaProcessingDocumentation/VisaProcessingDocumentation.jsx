"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiFileText, FiCheckCircle, FiShield, FiUsers, FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const visaSteps = [
    {
        title: "Strategic Profile Assessment",
        description: "A comprehensive audit of your academic and fiscal standing to engineer a high-probability entry strategy.",
        icon: FiUsers,
    },
    {
        title: "Bespoke Documentation",
        description: "Articulating your intent through precision-crafted SOPs and rigorous financial dossier preparation.",
        icon: FiFileText,
    },
    {
        title: "Institutional Compliance",
        description: "Multi-tier verification ensuring every document aligns with the most stringent embassy mandates.",
        icon: FiShield,
    },
    {
        title: "Embassy Orchestration",
        description: "Executive-level prep for biometric logistics and mock interviews to ensure absolute composure.",
        icon: FiCheckCircle,
    },
];

export default function VisaProcessingDocumentation() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const yValues = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} className="relative bg-[#020812] text-white py-32 px-6 lg:px-24 overflow-hidden selection:bg-[#2ECED5] selection:text-[#020812]">

            {/* Architectural Background */}
            <div className="absolute top-0 right-0 w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_80%_20%,#2eced508,transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* Asymmetric Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <span className="w-12 h-[1px] bg-[#2ECED5]" />
                            <span className="text-[#2ECED5] uppercase tracking-[0.5em] text-[10px] font-black">
                                Sovereign Support
                            </span>
                        </motion.div>

                        <h2 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.85]">
                            Visa <span className="italic font-serif opacity-40">Engineering</span> & <br />
                            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Documentation.</span>
                        </h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-500 max-w-sm text-lg font-light leading-relaxed border-l border-white/10 pl-8"
                    >
                        We provide white-glove concierge services for scholars who demand nothing short of perfection in their global transition.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    {/* STEPS: Using "The Grid" Layout */}
                    <div className="lg:col-span-7 grid md:grid-cols-2 gap-4">
                        {visaSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#2ECED5]/20 transition-all duration-700"
                            >
                                <div className="mb-8 flex justify-between items-start">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#1A2436] to-[#020812] border border-white/10 text-[#2ECED5]">
                                        <step.icon size={20} strokeWidth={1} />
                                    </div>
                                    <span className="text-[10px] font-black opacity-20 group-hover:opacity-100 group-hover:text-[#2ECED5] transition-all">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* RIGHT SIDE: Cinematic Frame */}
                    <motion.div
                        style={{ y: yValues }}
                        className="lg:col-span-5 relative lg:mt-20"
                    >
                        <div className="relative rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                            <div className="aspect-[3/4] relative group">
                                <Image
                                    src="/images/servicepage/visa/visa-processing.png"
                                    alt="Executive Visa Concierge"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-[2s] scale-110 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020812] via-transparent to-transparent opacity-90" />
                            </div>

                            {/* Ultra-Minimal Badge */}
                            <div className="absolute bottom-12 left-12 right-12">
                                <div className="p-8 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10">
                                    <div className="flex items-end justify-between mb-4">
                                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-black">Efficiency Index</p>
                                        <p className="text-3xl font-light tracking-tighter">97<span className="text-[#2ECED5]">%</span></p>
                                    </div>
                                    <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                                        <motion.div
                                            initial={{ x: "-100%" }}
                                            whileInView={{ x: "0%" }}
                                            transition={{ duration: 1.5, ease: "circOut" }}
                                            className="absolute inset-0 bg-[#2ECED5]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA: Minimalist Execution */}
                <div className="mt-32 border-t border-white/5 pt-20 flex flex-col items-center">
                    <Link href="/apply" className="group flex flex-col items-center gap-6">
                        <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#B20055] transition-all duration-700">
                            <FiArrowUpRight size={32} className="group-hover:text-[#B20055] transition-colors" />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.8em] font-black text-white/40 group-hover:text-white transition-colors">
                            Initiate Inquiry
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}