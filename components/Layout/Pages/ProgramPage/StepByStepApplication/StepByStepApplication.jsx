'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { HiOutlineDocumentText, HiOutlineAcademicCap, HiOutlineCheckCircle } from 'react-icons/hi2';
import { FiUpload } from 'react-icons/fi';


const StepByStepApplication = () => {
    const containerRef = useRef(null);

    // Scroll-linked line animation
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const steps = [
        {
            icon: <HiOutlineDocumentText />,
            title: "Choose Your Program",
            description: "Select your desired program and university based on your career goals and eligibility."
        },
        {
            icon: <FiUpload />,
            title: "Prepare & Submit Documents",
            description: "Upload academic transcripts, SOP, LORs, passport copy, and language proficiency scores."
        },
        {
            icon: <HiOutlineAcademicCap />,
            title: "Receive Offer Letter",
            description: "After evaluation, receive your conditional or unconditional offer letter."
        },
        {
            icon: <HiOutlineCheckCircle />,
            title: "Confirm & Apply for Visa",
            description: "Pay tuition deposit, confirm enrollment, and begin your student visa process."
        }
    ];

    return (
        <section ref={containerRef} className="relative w-full bg-[#020617] text-white py-24 px-6 md:px-20 overflow-hidden">
            {/* Background Aesthetic */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-[#9A0044]/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="max-w-3xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <span className="text-cyan-400 font-bold tracking-[0.5em] text-[10px] uppercase underline underline-offset-8 decoration-[#9A0044]">Process</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-light tracking-tight leading-none"
                    >
                        Application <span className="text-[#9A0044] font-semibold">Pathway</span> <br />
                        <span className="italic font-serif text-white/40">Step-by-Step</span>
                    </motion.h2>
                </div>

                {/* Timeline Container */}
                <div className="relative ml-4 md:ml-12">

                    {/* The Animated "Drawing" Line */}
                    <div className="absolute left-0 top-0 w-[2px] h-full bg-slate-800" />
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-cyan-400 via-[#9A0044] to-cyan-400 z-10"
                    />

                    {/* Steps Wrapper */}
                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative pl-12 md:pl-24"
                            >
                                {/* The Glass Node */}
                                <div className="absolute -left-[19px] top-0 z-20">
                                    <div className="w-10 h-10 rounded-full bg-slate-950 border-2 border-slate-800 flex items-center justify-center group">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            className="w-4 h-4 rounded-full bg-[#9A0044] shadow-[0_0_15px_#9A0044]"
                                        />
                                    </div>
                                    <span className="absolute -left-12 top-2 text-[10px] font-black text-slate-600 tracking-tighter italic">
                                        PHASE 0{index + 1}
                                    </span>
                                </div>

                                {/* Content Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="text-cyan-400 text-3xl">
                                                {step.icon}
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Optional: 'Requirement' Mini-Box */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm lg:mt-2"
                                    >
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#9A0044] mb-3">Key Requirement</h4>
                                        <p className="text-xs text-slate-500 font-light">Ensure all documents are notarized and submitted in high-resolution PDF format.</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final CTA Action */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-slate-900 to-transparent border border-white/5 text-center"
                >
                    <h3 className="text-2xl font-light mb-8">Ready to begin your <span className="text-cyan-400">journey?</span></h3>
                    <Link href={'/apply'}>
                        <button className="px-12 py-5 bg-[#9A0044] rounded-full text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500 shadow-2xl shadow-[#9A0044]/20">
                            Launch Application Portal
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default StepByStepApplication;