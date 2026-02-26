'use client';
import { motion } from 'framer-motion';

const Scholarships = ({ scholarships }) => {
    return (
        <section className="relative w-full bg-[#000a1a] text-white py-24 px-6 md:px-20 overflow-hidden">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800/50 to-transparent" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#9A0044]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 -left-24 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="max-w-4xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <span className="text-cyan-400 font-bold tracking-[0.5em] text-[10px] uppercase">Financial Architecture</span>
                        <div className="h-[1px] w-12 bg-[#9A0044]" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-light tracking-tight leading-[0.9]"
                    >
                        Scholarships <span className="font-serif italic text-white/20">&</span> <br />
                        <span className="font-bold">Fiscal <span className="text-[#9A0044]">Support</span></span>
                    </motion.h2>
                </div>

                {/* Scholarship Asymmetric Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-slate-800/20 rounded-3xl overflow-hidden border border-slate-800/50">
                    {scholarships.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className={`relative group bg-[#000a1a] hover:bg-[#001334] transition-all duration-700 p-8 md:p-12
                                ${index === 0 ? 'md:col-span-7' : 'md:col-span-5'}`}
                        >
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex items-start justify-between mb-20">
                                    {/* ID Marker */}
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black tracking-[0.3em] text-[#9A0044] uppercase mb-1">Grant Reference</span>
                                        <span className="text-2xl font-serif italic text-white/40 group-hover:text-cyan-400 transition-colors duration-500">
                                            {index < 9 ? `0${index + 1}` : index + 1}
                                        </span>
                                    </div>

                                    {/* Visual Accent: Geometric Diamond */}
                                    <div className="w-10 h-10 border border-slate-800 rotate-45 flex items-center justify-center group-hover:border-[#9A0044]/50 transition-all duration-700">
                                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform duration-500" />
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tighter max-w-[12ch]">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light group-hover:text-slate-200 transition-colors mb-8">
                                        {item.description}
                                    </p>

                                    
                                </div>
                            </div>

                            {/* Hover Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#9A0044]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </motion.div>
                    ))}
                </div>

                {/* Technical Footnote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 border-t border-slate-800/50 pt-12"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                        <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold max-w-md">
                            * All fiscal allocations are subject to rigorous academic vetting and departmental availability for the 2026/27 cycle.
                        </p>
                        <div className="flex gap-12">
                            <div>
                                <p className="text-white text-xs font-bold mb-1">Direct Assistance</p>
                                <p className="text-slate-500 text-xs font-light">aid-office@global-edu.com</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Scholarships;