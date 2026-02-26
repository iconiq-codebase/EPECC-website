"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { HiOutlineAcademicCap, HiOutlineGlobeAlt, HiArrowRight } from "react-icons/hi";
import Link from "next/link";

export default function CountriesHero({ country }) {
    const containerRef = useRef(null);

    // 1. Track scroll progress specifically for this section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // 2. Create parallax offsets
    // Move image down by 30% of its height as we scroll
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    // Slight zoom effect for depth
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    // Content fades out and moves up slightly as you leave
    const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section
            ref={containerRef}
            className="relative h-[90vh] min-h-[700px] w-full overflow-hidden bg-[#050505] text-white"
        >
            {/* Parallax Background Layer */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src={country.image}
                    alt={country.name}
                    fill
                    priority
                    className="object-cover object-center opacity-70"
                />
                {/* Gradients stay fixed relative to container to maintain readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
            </motion.div>

            {/* Main Content Container - with subtle counter-scroll */}
            <motion.div
                style={{ y: contentY, opacity }}
                className="relative z-20 max-w-7xl mx-auto h-full px-6 lg:px-20 flex items-center"
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl"
                >
                    <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8 md:mt-8">
                        <span className="w-8 h-[1px] bg-cyan-500"></span>
                        <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
                            {country.tag}
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] mb-8"
                    >
                        {country.name.split(' ')[0]} <br />
                        <span className="text-transparent border-text italic font-light">
                            {country.name.split(' ').slice(1).join(' ')}
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10 border-l-2 border-zinc-800 pl-6"
                    >
                        {country.description}
                    </motion.p>

                    <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                        <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
                                <HiOutlineAcademicCap size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-wider text-zinc-500">Institution Hub</p>
                                <p className="text-sm font-medium">{country.universities}</p>
                            </div>
                        </div>

                        <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                            <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                                <HiOutlineGlobeAlt size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-wider text-zinc-500">Visa Pathway</p>
                                <p className="text-sm font-medium">{country.visa}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Link
                            href={'/apply'}
                            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all hover:pr-12"
                        >
                            <span className="relative z-10">Start Your Journey</span>
                            <HiArrowRight className="relative z-10 transition-transform group-hover:translate-x-2" />
                            <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
            </motion.div>

            <style jsx>{`
                .border-text {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.3);
                }
            `}</style>
        </section>
    );
}