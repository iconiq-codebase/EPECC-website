"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi2";

const CountryFAQs = ({ country }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    if (!country || !country.faqs) return null;

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-[#020617] py-32 px-6 lg:px-20 relative overflow-hidden">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-[10px] uppercase tracking-[0.4em] font-bold mb-8"
                    >
                        Inquiry Portal
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white leading-none">
                        Essential <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Insights.</span>
                    </h2>
                    <p className="text-slate-400 mt-6 text-lg font-light tracking-wide italic">
                        Navigating the complexities of studying in {country.name}.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {country.faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div
                                key={index}
                                className={`group transition-all duration-500 rounded-[2rem] border ${isOpen
                                        ? "bg-slate-900/60 border-cyan-500/30 shadow-2xl shadow-cyan-500/5"
                                        : "bg-slate-900/20 border-slate-800 hover:border-slate-700"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center p-8 md:p-10 text-left outline-none"
                                >
                                    <span className={`text-lg md:text-xl font-medium tracking-tight transition-colors duration-300 ${isOpen ? "text-cyan-400" : "text-slate-200"
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <div className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-500 ${isOpen
                                            ? "bg-cyan-500 border-cyan-500 text-slate-950 rotate-0"
                                            : "bg-transparent border-slate-700 text-slate-500 rotate-90"
                                        }`}>
                                        {isOpen ? <HiMinus size={18} /> : <HiPlus size={18} />}
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div className="px-8 md:px-10 pb-10 text-slate-400 leading-relaxed font-light text-[15px] md:text-base border-t border-slate-800/50 pt-8">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CountryFAQs;