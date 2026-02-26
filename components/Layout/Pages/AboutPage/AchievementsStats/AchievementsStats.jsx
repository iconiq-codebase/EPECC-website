"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform, animate } from "framer-motion";

const achievements = [
    { value: 2500, label: "Students Placed", suffix: "+", highlight: true },
    { value: 15, label: "Countries Served", suffix: "+" },
    { value: 350, label: "Partner Universities", suffix: "+" },
    { value: 98, label: "Visa Success Rate", suffix: "%" },
    { value: 10, label: "Years of Experience", suffix: "+" },
];

export default function AchievementsStats() {
    return (
        <section className="relative bg-[#020617] py-32 px-6 lg:px-20 text-white overflow-hidden">
            {/* Background Texture & Lighting */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-[#2ECED5]/5 blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* --- LEFT: HEADING --- */}
                    <div className="lg:col-span-4 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#2ECED5] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
                                Global Impact
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
                                Our Success <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                                    In Numbers.
                                </span>
                            </h2>
                            <p className="mt-6 text-slate-400 text-lg font-light leading-relaxed">
                                We measure our success by the dreams we help realize and the global careers we help launch.
                            </p>
                        </motion.div>
                    </div>

                    {/* --- RIGHT: STATS BENTO GRID --- */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                        {achievements.map((stat, index) => (
                            <StatCard 
                                key={stat.label} 
                                stat={stat} 
                                index={index}
                                className={stat.highlight ? "col-span-2 md:col-span-2" : "col-span-1"} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatCard({ stat, index, className }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    // Framer Motion spring for smooth "weighty" counting
    const count = useSpring(0, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    
    const displayCount = useTransform(count, (latest) => Math.floor(latest).toLocaleString());

    useEffect(() => {
        if (isInView) {
            count.set(stat.value);
        }
    }, [isInView, count, stat.value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`relative group overflow-hidden rounded-3xl bg-white/[0.03] border border-white/10 p-8 hover:bg-white/[0.06] hover:border-[#2ECED5]/30 transition-all duration-500 ${className}`}
        >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            </div>

            <div className="relative z-10">
                <div className="flex items-baseline gap-1">
                    <motion.span className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                        {displayCount}
                    </motion.span>
                    <span className="text-[#2ECED5] text-2xl md:text-4xl font-bold">{stat.suffix}</span>
                </div>
                <p className="mt-2 text-slate-400 text-sm md:text-base font-medium uppercase tracking-widest">
                    {stat.label}
                </p>
            </div>

            {/* Background Decorative Circle */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#2ECED5]/5 rounded-full blur-2xl group-hover:bg-[#2ECED5]/10 transition-colors" />
        </motion.div>
    );
}