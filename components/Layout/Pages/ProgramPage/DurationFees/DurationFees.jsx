'use client';
import { motion } from 'framer-motion';
import { HiOutlineClock, HiOutlineCurrencyDollar, HiOutlineCreditCard } from 'react-icons/hi2';

const DurationFees = ({ duration, fees, paymentPlan }) => {
    const cardData = [
        {
            title: "Investment Period",
            value: duration,
            icon: <HiOutlineClock />,
            accent: "from-cyan-500/20",
        },
        {
            title: "Program Tuition",
            value: fees,
            icon: <HiOutlineCurrencyDollar />,
            accent: "from-[#9A0044]/20",
        },
        {
            title: "Financial Flexibility",
            value: paymentPlan || "Custom Plans Available",
            icon: <HiOutlineCreditCard />,
            accent: "from-blue-500/20",
        }
    ];

    return (
        <section className="relative w-full bg-[#020617] text-white py-24 px-6 md:px-20 overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-900/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <span className="text-cyan-400 font-bold tracking-[0.4em] text-[10px] uppercase">Financials</span>
                            <div className="h-[1px] w-12 bg-[#9A0044]" />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-light tracking-tight"
                        >
                            Investment <span className="font-serif italic text-white/60">&</span> <span className="text-[#9A0044] font-semibold">Duration</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-400 max-w-xs text-sm border-l border-slate-800 pl-6"
                    >
                        Transparent academic pricing designed for global excellence.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cardData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm p-8"
                        >
                            {/* Gradient Accent Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[#9A0044] text-2xl group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">0{index + 1}</span>
                                </div>

                                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
                                    {item.title}
                                </h3>

                                <div className="flex items-baseline gap-1">
                                    <p className="text-2xl md:text-3xl font-medium text-white tracking-tight group-hover:text-cyan-500 transition-colors">
                                        {item.value}
                                    </p>
                                </div>

                                {/* Subtle Interactive Line */}
                                <div className="mt-6 h-[1px] w-full bg-slate-800 overflow-hidden">
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        whileInView={{ x: "0%" }}
                                        transition={{ delay: 0.5, duration: 1 }}
                                        className="h-full w-full bg-gradient-to-r from-[#9A0044] to-cyan-500"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Assistance Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 flex justify-center"
                >
                    <button className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">
                        <span>View Detailed Fee Structure</span>
                        <div className="w-1 h-1 rounded-full bg-[#9A0044]" />
                        <span>Scholarship Info</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default DurationFees;