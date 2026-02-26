'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiOutlineCheckBadge } from 'react-icons/hi2';

const EligibilityRequirements = ({ eligibility, requirements }) => {
    // Animation orchestration
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="relative w-full bg-[#020617] text-slate-200 py-24 px-6 md:px-20 overflow-hidden">
            {/* Background Aesthetic */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9A0044]/5 rounded-full blur-[150px] -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <span className="text-cyan-500 font-bold tracking-[0.5em] text-[10px] uppercase">Admissions</span>
                        <div className="h-[1px] w-12 bg-gradient-to-r from-cyan-500 to-transparent" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-light tracking-tight text-white"
                    >
                        Eligibility <span className="italic font-serif text-[#9A0044]">&</span> Requirements
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
                    {/* Vertical Divider for Desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-slate-800 to-transparent" />

                    {/* Eligibility Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                                <span className="text-cyan-400 text-xs font-bold">01</span>
                            </div>
                            <h3 className="text-2xl font-semibold tracking-tight text-white">Entry Criteria</h3>
                        </div>

                        <ul className="space-y-6">
                            {eligibility.map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="group flex items-start gap-5 p-4 rounded-xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5"
                                >
                                    <div className="mt-1">
                                        <HiOutlineCheckBadge className="text-[#9A0044] text-2xl group-hover:text-cyan-400 transition-colors" />
                                    </div>
                                    <span className="text-slate-400 group-hover:text-slate-200 leading-relaxed tracking-wide">
                                        {item}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Requirements Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-10 h-10 rounded-full bg-[#9A0044]/10 flex items-center justify-center border border-[#9A0044]/20">
                                <span className="text-[#9A0044] text-xs font-bold">02</span>
                            </div>
                            <h3 className="text-2xl font-semibold tracking-tight text-white">Document Checklist</h3>
                        </div>

                        <ul className="space-y-6">
                            {requirements.map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="group flex items-start gap-5 p-4 rounded-xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5"
                                >
                                    <div className="mt-1">
                                        <div className="w-5 h-5 rounded-sm border border-cyan-500/40 flex items-center justify-center group-hover:border-[#9A0044] transition-colors">
                                            <div className="w-2 h-2 bg-cyan-500 group-hover:bg-[#9A0044] transition-colors" />
                                        </div>
                                    </div>
                                    <span className="text-slate-400 group-hover:text-slate-200 leading-relaxed tracking-wide">
                                        {item}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Callout */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-[#020617] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <p className="text-slate-400 text-sm">Have questions regarding your specific background?</p>
                    <button className="px-8 py-3 bg-[#9A0044] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all duration-500">
                        <Link href={'/contact'}>
                            Consult Admissions
                        </Link>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default EligibilityRequirements;