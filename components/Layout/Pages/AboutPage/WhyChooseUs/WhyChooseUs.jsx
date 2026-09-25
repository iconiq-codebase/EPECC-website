"use client";

import { motion } from "framer-motion";
import { 
  FiGlobe, 
  FiAward, 
  FiCheckCircle, 
  FiZap, 
  FiLayers 
} from "react-icons/fi";

const strengths = [
    {
        icon: <FiGlobe />,
        title: "Global Expertise",
        description: "Navigating complex admissions for top-tier universities across 15+ countries with localized expertise.",
        span: "lg:col-span-6", // Large card
    },
    {
        icon: <FiAward />,
        title: "Certified Counselors",
        description: "Our advisors aren't just staff; they are certified experts in international education strategy.",
        span: "lg:col-span-6", // Large card
    },
    {
        icon: <FiLayers />,
        title: "End-to-End Support",
        description: "From the first consultation to pre-departure briefing, we handle every detail.",
        span: "lg:col-span-4",
    },
    {
        icon: <FiZap />,
        title: "Tailored Approach",
        description: "No two students are the same. We build unique roadmaps based on your specific potential.",
        span: "lg:col-span-4",
    },
    {
        icon: <FiCheckCircle />,
        title: "Proven Track Record",
        description: "A legacy of successful placements in Ivy League and Russell Group universities.",
        span: "lg:col-span-4",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="relative bg-[#020617] py-32 px-6 lg:px-20 text-white overflow-hidden">
            {/* Background Texture & Lighting (Consistent with previous sections) */}
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] pointer-events-none" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2ECED5]/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* --- HEADER --- */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2ECED5]/30 bg-[#2ECED5]/5 text-[#2ECED5] text-xs font-bold uppercase tracking-[0.2em] mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ECED5] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ECED5]"></span>
                        </span>
                        The EPECC Advantage
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter"
                    >
                        Why Students <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECED5] via-blue-100 to-[#2ECED5]">
                            Trust Our Journey.
                        </span>
                    </motion.h2>
                </div>

                {/* --- BENTO GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {strengths.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className={`group relative overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-10 hover:bg-white/[0.06] hover:border-[#2ECED5]/40 transition-all duration-500 ${item.span}`}
                        >
                            {/* Card Content */}
                            <div className="relative z-10">
                                {/* Icon Container */}
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 text-2xl text-[#2ECED5] mb-8 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(46,206,213,0.3)] transition-all duration-500">
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#2ECED5] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed font-light text-lg">
                                    {item.description}
                                </p>
                            </div>

                            {/* Decorative Index Number */}
                            <div className="absolute top-10 right-10 text-5xl font-black text-white/5 group-hover:text-[#2ECED5]/10 transition-colors select-none">
                                0{index + 1}
                            </div>

                            {/* Hover Spotlight Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2ECED5]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
