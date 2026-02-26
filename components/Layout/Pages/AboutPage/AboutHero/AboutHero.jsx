"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section
            aria-labelledby="about-hero-heading"
            className="relative w-full min-h-[85vh] flex items-center justify-center bg-[#020617] text-white overflow-hidden px-6 py-20"
        >
            {/* --- BACKGROUND ELEMENTS --- */}

            {/* 1. Base Gradient (Deep Navy/Slate) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#001334] via-[#020817] to-[#020617] -z-20" />

            {/* 2. Modern Grid Pattern with Fade mask */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 -z-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

            {/* 3. Premium Glow/Spotlight Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#2ECED5]/20 blur-[100px] rounded-[100%] -z-10 pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full -z-10" />

            {/* --- CONTENT --- */}
            <div className="max-w-6xl mx-auto relative z-10 text-center">

                {/* Badge / Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex justify-center mb-8"
                >
                    <div className="px-4 py-1.5 rounded-full border border-[#2ECED5]/30 bg-[#2ECED5]/10 backdrop-blur-md shadow-[0_0_15px_rgba(46,206,213,0.3)]">
                        <span className="text-[#2ECED5] uppercase tracking-[0.2em] text-xs font-bold">
                            About EPECC
                        </span>
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    id="about-hero-heading"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
                >
                    <span className="block text-white/90 drop-shadow-sm">
                        Empowering Students
                    </span>
                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2ECED5] via-blue-200 to-[#2ECED5] drop-shadow-[0_0_25px_rgba(46,206,213,0.3)]">
                        To Succeed Globally.
                    </span>
                </motion.h1>

                {/* Description Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-blue-100/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-light"
                >
                    EPECC is your trusted partner in international education. We bridge the gap between ambition and achievement through expert counselling, premium admissions support, and seamless visa assistance.
                </motion.p>

                {/* Optional: Visual Divider / Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-[1px] h-24 bg-gradient-to-b from-[#2ECED5] to-transparent mx-auto opacity-50"
                />
            </div>
        </section>
    );
}