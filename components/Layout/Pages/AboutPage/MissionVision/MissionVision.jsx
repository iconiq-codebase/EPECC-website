"use client";

import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision() {
    return (
        <section className="relative bg-[#020617] text-white py-32 px-6 lg:px-20 overflow-hidden">

            {/* --- BACKGROUND ELEMENTS (Consistent with Hero) --- */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 -z-10 mix-blend-overlay"></div>

            {/* Subtle Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#2ECED5]/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">

                {/* --- SECTION HEADER --- */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center mb-6"
                    >
                        <span className="px-4 py-1.5 rounded-full border border-[#2ECED5]/30 bg-[#2ECED5]/5 text-[#2ECED5] uppercase tracking-[0.2em] text-xs font-bold backdrop-blur-sm">
                            Our Core Values
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                    >
                        Driven by Purpose, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
                            Guided by Vision.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-400 font-light"
                    >
                        We don't just process applications; we engineer futures. Our foundation is built on two pillars that ensure your success.
                    </motion.p>
                </div>

                {/* --- CARDS CONTAINER --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* 1. MISSION CARD */}
                    <Card
                        title="Our Mission"
                        icon={<FaBullseye />}
                        delay={0.2}
                        accentColor="text-[#2ECED5]"
                        bgAccent="bg-[#2ECED5]"
                        description="To empower students with accurate guidance, transparent processes, and personalized support, helping them access quality international education and build successful global careers."
                    />

                    {/* 2. VISION CARD */}
                    <Card
                        title="Our Vision"
                        icon={<FaEye />}
                        delay={0.4}
                        accentColor="text-blue-400"
                        bgAccent="bg-blue-400"
                        description="To become the globally trusted education consultancy, recognized for ethical counselling, student success, and shaping future leaders through international opportunities."
                    />

                </div>
            </div>
        </section>
    );
}

// Extracted Card Component for cleaner code & reusability
function Card({ title, icon, description, delay, accentColor, bgAccent }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
            className="group relative h-full bg-[#0F172A]/40 border border-white/5 rounded-3xl p-10 overflow-hidden hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50"
        >
            {/* Hover Gradient Overlay */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-br from-transparent via-transparent to-${bgAccent && bgAccent.replace('bg-', '')}`} />

            {/* Giant Watermark Icon (Background) */}
            <div className={`absolute -bottom-6 -right-6 text-9xl opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 ${accentColor}`}>
                {icon}
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 flex flex-col h-full">
                {/* Icon Box */}
                <div className="mb-8 inline-flex">
                    <div className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-3xl ${accentColor} group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500`}>
                        {icon}
                        {/* Inner Glow */}
                        <div className={`absolute inset-0 ${bgAccent} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                    </div>
                </div>

                <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-blue-100 transition-colors">
                    {title}
                </h3>

                <p className="text-slate-400 text-lg leading-relaxed mb-8 flex-grow">
                    {description}
                </p>

                {/* Decorative Line */}
                <div className={`w-12 h-1 ${bgAccent} rounded-full opacity-50 group-hover:w-full transition-all duration-700 ease-out`} />
            </div>
        </motion.div>
    );
}