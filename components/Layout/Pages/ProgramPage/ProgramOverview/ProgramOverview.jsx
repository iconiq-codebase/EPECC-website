'use client';
import { motion } from 'framer-motion';

const ProgramOverview = ({ highlights }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
        }
    };

    return (
        <section className="relative w-full bg-[#000a1a] text-slate-200 py-24 px-6 md:px-20 overflow-hidden">
            {/* Ambient Premium Glows */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#9A0044]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row gap-12 mb-24 items-start">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="h-[1px] w-12 bg-gradient-to-r from-cyan-400 to-[#9A0044]" />
                            <span className="text-cyan-400 uppercase tracking-[0.4em] text-xs font-bold">
                                Executive Insights
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-light tracking-tight text-white leading-tight"
                        >
                            Program <br />
                            <span className="font-serif italic text-cyan-500/90">Overview</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 border-l border-slate-800/50 pl-8 md:pl-12 py-2"
                    >
                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
                            Equip yourself with essential skills and global insights to excel in your field.
                            Learn through hands-on projects and expert mentorship, and gain the confidence to lead and innovate.
                        </p>
                    </motion.div>
                </div>

                {/* Highlights Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800/20 rounded-3xl overflow-hidden border border-slate-800/50"
                >
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group relative p-10 bg-[#000a1a] transition-all duration-500 hover:bg-[#001334]"
                        >
                            <div className="relative z-10 h-full flex flex-col">
                                {/* Numerical Marker instead of Icon */}
                                <div className="flex items-end justify-between mb-8">
                                    <span className="text-4xl font-serif italic text-slate-800 group-hover:text-cyan-500/30 transition-colors duration-500">
                                        0{index + 1}
                                    </span>
                                    <div className="h-px w-0 bg-cyan-500/50 group-hover:w-12 transition-all duration-700 ease-in-out" />
                                </div>

                                <h3 className="text-xl font-bold mb-4 text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300">
                                    {item.description}
                                </p>
                            </div>

                            {/* Hover Bottom Accent Line */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-[#9A0044] group-hover:w-full transition-all duration-700 ease-in-out" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProgramOverview;