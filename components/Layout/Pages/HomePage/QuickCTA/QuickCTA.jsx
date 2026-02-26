"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaHandSparkles } from "react-icons/fa";

export default function QuickCTA() {
    return (
        <section className="relative py-20 px-6 overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 bg-[#020617] -z-20" />
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-[#2ECED5]/20 blur-[120px] rounded-full -z-10 animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-[#2ECED5]/10 blur-[120px] rounded-full -z-10" />

            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative border border-white/10 bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 text-center overflow-hidden"
                >
                    {/* Subtle Grid Pattern Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2ECED5]/10 border border-[#2ECED5]/20 text-[#2ECED5] text-sm font-medium mb-6"
                        >
                            <FaHandSparkles size={14} />
                            <span>Expert Guidance Awaits</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Ready to Start Your <br />
                            <span className="text-[#2ECED5]">Study Abroad</span> Journey?
                        </h2>

                        <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
                            Unlock global opportunities with free guidance on top-tier universities,
                            scholarships, and seamless visa processing.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href="/apply"
                                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#2ECED5] text-[#001334] font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(46,206,213,0.4)]"
                            >
                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

                                Get Free Consultation
                                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
        </section>
    );
}