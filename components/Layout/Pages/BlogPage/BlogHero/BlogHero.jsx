'use client';

import { motion } from 'framer-motion';

const BlogHero = () => {
    return (
        <section className="relative w-full h-[70vh] lg:h-[85vh] overflow-hidden bg-[#000a1a] flex items-center justify-center px-6 md:px-20">

            {/* 1. Background Grid & Orbs */}
            <div className="absolute inset-0 z-0">
                {/* Modern Grid Pattern */}
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #9A0044 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

                {/* Animated Mesh Gradients */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#9A0044] rounded-full blur-[140px] opacity-30"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-cyan-600 rounded-full blur-[140px] opacity-20"
                />
            </div>

            {/* 2. Hero Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-8 text-left"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#9A0044]/30 bg-[#9A0044]/10 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9A0044] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9A0044]"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-tighter text-[#ff3385]">
                            The Knowledge Hub
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8">
                        Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A0044] to-cyan-400">Ambitions</span>,<br />
                        Local Insights.
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="max-w-xl text-white/60 text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#9A0044] pl-6"
                    >
                        Master the art of studying abroad with curated guides, real student stories,
                        and tactical strategies to conquer your international education journey.
                    </motion.p>
                </motion.div>

                {/* 3. Decorative "Stats" or "Quick Link" Glass Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="hidden lg:flex lg:col-span-4 flex-col gap-4"
                >
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                        <h3 className="text-white font-semibold mb-2">Popular Right Now</h3>
                        <ul className="space-y-4">
                            {['Visa Interview Tips', 'Best UK Scholarships', 'Housing in Munich'].map((item, i) => (
                                <li key={i} className="flex items-center text-white/50 hover:text-white transition-colors cursor-pointer group">
                                    <span className="text-[#9A0044] mr-2">→</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            </motion.div>
        </section>
    );
};

export default BlogHero;