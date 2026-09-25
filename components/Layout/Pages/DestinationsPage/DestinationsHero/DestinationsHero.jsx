"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

// Animation Variants for staggered entrance
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 30, opacity: 0, filter: "blur(10px)" },
    visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 50, damping: 20 },
    },
};

export default function DestinationsHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Smooth out the scroll value for a luxurious feel
    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const backgroundY = useTransform(smoothScroll, [0, 1], ["0%", "25%"]);
    const textY = useTransform(smoothScroll, [0, 1], ["0%", "60%"]);
    const opacityFade = useTransform(smoothScroll, [0, 0.8], [1, 0]);

    return (
        <section
            ref={ref}
            className="photo-hero relative w-full h-[90vh] lg:h-screen flex items-center justify-center bg-[#000d21] overflow-hidden"
        >
            {/* --- BACKGROUND LAYERS --- */}

            {/* 1. Parallax Image */}
            <motion.div
                style={{
                    y: backgroundY,
                    scale: 1.1, // Start slightly scaled up for parallax room
                    backgroundImage:
                        "url('/images/destinationspage/hero-section/hero.jpg')", // High-end "Global/Tech" vibe
                }}
                className="absolute inset-0 bg-cover bg-center z-0 will-change-transform"
            />

            {/* 2. Premium Overlays */}
            {/* Dark gradient from bottom for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-[#000d21]/50 to-transparent z-10" />
            {/* Blue tint for brand consistency */}
            <div className="absolute inset-0 bg-[#000d21]/30 mix-blend-multiply z-10" />

            {/* 3. Noise Texture (The "Premium" Secret Sauce) */}
            <div className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none bg-[url('/noise.svg')] brightness-100 contrast-150" />

            {/* 4. Ambient Glows */}
            <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#2ECED5]/20 rounded-full blur-[150px] z-10 animate-pulse-slow" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#B20055]/15 rounded-full blur-[120px] z-10" />

            {/* --- CONTENT --- */}
            <motion.div
                style={{ y: textY, opacity: opacityFade }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-20 text-center px-4 sm:px-6 w-full max-w-7xl mx-auto flex flex-col items-center"
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#2ECED5]/30 bg-[#2ECED5]/5 backdrop-blur-xl shadow-[0_0_15px_rgba(46,206,213,0.15)]">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ECED5] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2ECED5]"></span>
                        </span>
                        <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#2ECED5] uppercase">
                            World-Class Education
                        </span>
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    variants={itemVariants}
                    className="text-white font-black tracking-tighter leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8
                     text-[clamp(2.5rem,8vw,6rem)]" // Responsive Clamp
                >
                    Explore
                    <br className="hidden md:block" />{" "}
                    <span className="relative inline-block">
                        {/* Text Gradient */}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECED5] to-[#B20055]">
                            Global Destinations
                        </span>
                        {/* Subtle reflection/glow under text */}
                        <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-[#2ECED5]/20 to-[#B20055]/20 -z-10" />
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-slate-300 mb-10 sm:mb-12 font-light leading-relaxed max-w-2xl mx-auto
                     text-[clamp(1rem,1.2vw,1.25rem)]"
                >
                    Your journey to excellence starts with the right environment. Discover
                    universities and programs across the world’s most prestigious academic
                    hubs.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
                >
                    <a
                        href="#countries-list"
                        className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-[#2ECED5] px-8 py-4 sm:px-10 sm:py-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(46,206,213,0.4)]"
                    >
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out skew-x-12" />
                        <span className="relative flex items-center justify-center gap-3 text-[#000d21] font-bold text-lg">
                            View Countries
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </span>
                    </a>

                    <Link href="/contact" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto group relative px-8 py-4 rounded-full border border-white/10 hover:border-[#2ECED5]/50 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                            <span className="text-white font-medium group-hover:text-[#2ECED5] transition-colors">
                                Contact an Advisor
                            </span>
                        </button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-slate-500">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#2ECED5] to-transparent" />
            </motion.div>
        </section>
    );
}
