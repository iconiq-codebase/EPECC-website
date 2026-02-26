"use client";

import { motion } from "framer-motion";
import { HiOutlineCheckBadge, HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { RiDoubleQuotesR } from "react-icons/ri";

export default function StudentTestimonials({ country }) {
    return (
        <section className="bg-[#020617] py-24 px-6 lg:px-20 text-slate-100 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-[1px] w-12 bg-cyan-500/50"></span>
                            <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.5em]">Global Impact</p>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-semibold tracking-tight leading-[0.9] text-white">
                            Alumni <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 italic font-light">
                                Perspectives.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 text-slate-400 bg-slate-900/40 backdrop-blur-md px-8 py-4 rounded-full border border-slate-800 shadow-2xl"
                    >
                        <div className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                        </div>
                        <span className="text-sm font-medium tracking-wide uppercase">Join 5,000+ Achievers</span>
                    </motion.div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {country.testimonials.map((student, idx) => (
                        <TestimonialCard key={student.name} student={student} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ student, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-slate-900/30 border border-slate-800 rounded-[2.5rem] p-10 hover:bg-slate-900/60 hover:border-cyan-500/40 transition-all duration-500 flex flex-col justify-between backdrop-blur-sm"
        >
            {/* Quote Icon - Subtle and Premium */}
            <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-30 group-hover:text-cyan-400 transition-all duration-500">
                <RiDoubleQuotesR size={40} />
            </div>

            <div className="relative z-10">
                {/* Content */}
                <div className="mb-10">
                    <p className="text-slate-300 text-lg leading-relaxed font-light tracking-wide group-hover:text-white transition-colors duration-300">
                        &ldquo;{student.quote}&rdquo;
                    </p>
                </div>

                {/* Student Info Footer */}
                <div className="flex items-center gap-5">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
                        <img
                            src={student.image.url}
                            alt={student.name}
                            className="relative w-14 h-14 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ring-1 ring-slate-700"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-cyan-500 rounded-full p-1 text-slate-900">
                            <HiOutlineCheckBadge size={14} />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-base font-semibold text-white tracking-tight">{student.name}</h3>
                        <div className="flex flex-col gap-0.5 mt-1">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-400/80 font-bold">
                                {student.program}
                            </span>
                            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                                {student.university} • {student.country}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Gradient Line on Hover */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent group-hover:w-1/2 transition-all duration-700" />
        </motion.div>
    );
}