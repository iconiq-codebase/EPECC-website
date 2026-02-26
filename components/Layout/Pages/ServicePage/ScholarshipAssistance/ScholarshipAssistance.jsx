"use client";

import { motion } from "framer-motion";
import { FiAward, FiFileText, FiCheckCircle, FiArrowRight, FiShield } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const scholarshipSteps = [
    {
        title: "Identify Opportunities",
        description: "We scan global databases to find niche scholarships tailored to your specific academic profile.",
        icon: FiAward,
        tag: "Research"
    },
    {
        title: "Strategic Storytelling",
        description: "Our editors help you craft compelling SOPs and essays that resonate with scholarship boards.",
        icon: FiFileText,
        tag: "Strategy"
    },
    {
        title: "Document Precision",
        description: "Every transcript and recommendation is vetted to ensure it meets elite institutional standards.",
        icon: FiShield,
        tag: "Verification"
    },
    {
        title: "Award Tracking",
        description: "Direct liaison with university financial offices to ensure your funding is secured and applied.",
        icon: FiCheckCircle,
        tag: "Success"
    },
];

export default function ScholarshipAssistance() {
    return (
        <section className="relative bg-[#000B1D] text-white py-24 px-6 lg:px-20 overflow-hidden">
            {/* Background Texture & Glows */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(#2ECED5 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />
            
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B20055]/10 blur-[120px] rounded-full" />
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#2ECED5]/10 blur-[100px] rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* --- Left Content --- */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2ECED5]/20 to-transparent border-l-2 border-[#2ECED5] text-[#2ECED5] text-xs font-bold uppercase tracking-widest">
                                Financial Freedom
                            </span>
                            
                            <h2 className="text-4xl md:text-6xl font-black leading-tight">
                                Unlock Your <br />
                                <span className="text-white/40 italic font-light">Global</span> Funding
                            </h2>
                            
                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                Don't let finances limit your ambition. Our scholarship specialists have 
                                helped students secure over <span className="text-white font-semibold underline decoration-[#2ECED5] underline-offset-4">$2M+ in total funding</span>.
                            </p>

                            {/* Mobile/Tablet Image (visible only when steps stack) */}
                            <div className="block lg:hidden w-full h-64 relative rounded-2xl overflow-hidden my-8">
                                <Image
                                    src="/images/servicepage/scholarship/mobile.png"
                                    alt="Scholarship"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Steps Container */}
                            <div className="space-y-4 mt-10">
                                {scholarshipSteps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group relative p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex items-center gap-5 backdrop-blur-sm"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a2b4b] to-[#001334] border border-white/10 flex items-center justify-center text-[#2ECED5] group-hover:scale-110 transition-transform shadow-lg">
                                            <step.icon size={22} />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <h3 className="font-bold text-lg">{step.title}</h3>
                                                <span className="text-[10px] text-white/30 uppercase tracking-tighter border border-white/10 px-2 py-0.5 rounded">
                                                    {step.tag}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="pt-8">
                                <Link
                                    href="/apply"
                                    className="inline-flex items-center gap-3 px-10 py-4 bg-[#B20055] text-white font-bold rounded-xl shadow-2xl shadow-[#B20055]/20 hover:shadow-[#B20055]/40 hover:-translate-y-1 transition-all"
                                >
                                    Secure My Scholarship <FiArrowRight />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- Right Visual (Desktop Only) --- */}
                    <div className="hidden lg:block w-1/2 relative">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative"
                        >
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 border border-white/10 rounded-[2.5rem] pointer-events-none" />
                            <div className="absolute -inset-8 border border-white/5 rounded-[3rem] pointer-events-none" />
                            
                            {/* Main Image */}
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl">
                                <Image
                                    src="/images/servicepage/scholarship/desktop.png"
                                    alt="Elite Scholarship Guidance"
                                    fill
                                    className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                                />
                                {/* Image Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#000B1D] via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#2ECED5] rounded-full flex items-center justify-center text-[#001334] font-bold">
                                            98%
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">Approval Rate</p>
                                            <p className="text-xs text-gray-300">For merit-based grants</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating "Badge" Element */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity }}
                                className="absolute -top-10 -left-10 w-32 h-32 bg-[#B20055] rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-[#000B1D] z-20"
                            >
                                <span className="text-xs uppercase font-bold tracking-tighter text-white/80">Est. Funding</span>
                                <span className="text-xl font-black">$2M+</span>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}