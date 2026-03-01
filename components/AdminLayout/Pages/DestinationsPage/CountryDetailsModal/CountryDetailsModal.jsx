"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMapPin, FiBookOpen, FiClock, FiCreditCard, FiMessageCircle, FiAward, FiExternalLink } from "react-icons/fi";

const CountryDetailsModal = ({ selectedCountry, setSelectedCountry }) => {
    useEffect(() => {
        const esc = (e) => e.key === "Escape" && setSelectedCountry(null);
        window.addEventListener("keydown", esc);
        return () => window.removeEventListener("keydown", esc);
    }, [setSelectedCountry]);

    if (!selectedCountry) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedCountry(null)}
                    className="fixed inset-0 bg-slate-900/80 backdrop-blur-md"
                />

                {/* Modal Canvas */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="bg-white w-full max-w-6xl h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden relative border border-white/20 flex flex-col"
                >
                    {/* Floating Header */}
                    <div className="absolute top-6 right-6 z-20">
                        <button
                            onClick={() => setSelectedCountry(null)}
                            className="p-3 bg-white/90 backdrop-blur shadow-xl text-slate-900 hover:text-red-500 rounded-full transition-all active:scale-90"
                        >
                            <FiX size={24} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {/* Hero Section */}
                        <div className="relative h-[40vh] min-h-[300px] w-full">
                            {selectedCountry.image && (
                                <img
                                    src={selectedCountry.image.url}
                                    alt={selectedCountry.name}
                                    className="w-full h-full object-cover"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                            <div className="absolute bottom-10 left-10">
                                <span className="px-3 py-1 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 inline-block">
                                    {selectedCountry.tag || "Destination"}
                                </span>
                                <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                                    {selectedCountry.name}
                                </h2>
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            {/* Quick Stats Bento Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10 mb-12">
                                <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                                    <div className="flex items-center gap-3 mb-4 text-indigo-600">
                                        <FiBookOpen size={20} />
                                        <span className="font-bold text-xs uppercase tracking-wider text-slate-400">Education</span>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-2xl font-bold text-slate-800">{selectedCountry.universities}</p>
                                        <p className="text-sm text-slate-500">Partner Universities</p>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                                    <div className="flex items-center gap-3 mb-4 text-emerald-500">
                                        <FiMapPin size={20} />
                                        <span className="font-bold text-xs uppercase tracking-wider text-slate-400">Opportunities</span>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-2xl font-bold text-slate-800">{selectedCountry.courses}</p>
                                        <p className="text-sm text-slate-500">Available Courses</p>
                                    </div>
                                </div>
                                <div className="bg-indigo-600 p-6 rounded-2xl shadow-xl text-white">
                                    <p className="text-sm font-medium opacity-80 leading-relaxed">
                                        {selectedCountry.description}
                                    </p>
                                </div>
                            </div>

                            {/* Two Column Details */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                                <section>
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="h-8 w-1 bg-indigo-600 rounded-full" />
                                        <h3 className="text-2xl font-bold text-slate-900">Visa & Regulations</h3>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                            <div className="flex items-center gap-3 mb-2 font-bold text-slate-800">
                                                <FiCreditCard className="text-indigo-600" /> {selectedCountry.visa}
                                            </div>
                                            <p className="text-slate-600 text-sm leading-relaxed">{selectedCountry.visaDescription}</p>
                                        </div>
                                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                            <div className="flex items-center gap-3 mb-2 font-bold text-slate-800">
                                                <FiClock className="text-indigo-600" /> Work Policy
                                            </div>
                                            <p className="text-slate-700 font-medium mb-1">{selectedCountry.workStudy}</p>
                                            <p className="text-slate-600 text-sm leading-relaxed">{selectedCountry.workStudyDescription}</p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="h-8 w-1 bg-indigo-600 rounded-full" />
                                        <h3 className="text-2xl font-bold text-slate-900">Top Universities</h3>
                                    </div>
                                    <div className="grid gap-3">
                                        {selectedCountry.universitiesList?.map((u, i) => (
                                            <div key={i} className="group p-4 bg-white border border-slate-100 rounded-xl hover:border-indigo-200 hover:shadow-md transition-all">
                                                <p className="font-bold text-slate-800 group-hover:text-indigo-600">{u.name}</p>
                                                <p className="text-sm text-slate-500">{u.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            {/* Scholarships - Horizontal Scroll or Grid */}
                            {selectedCountry.scholarships?.length > 0 && (
                                <section className="mb-16">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Available Scholarships</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {selectedCountry.scholarships.map((s, i) => (
                                            <div key={i} className="relative p-6 bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-3xl overflow-hidden">
                                                <FiAward className="absolute -right-4 -top-4 text-indigo-100" size={120} />
                                                <div className="relative z-10">
                                                    <h4 className="text-lg font-bold text-slate-900 mb-1">{s.name}</h4>
                                                    <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">{s.eligibility}</p>
                                                    <p className="text-slate-600 text-sm mb-4">{s.description}</p>
                                                    <a href={s.link} target="_blank" className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm hover:underline">
                                                        Apply Now <FiExternalLink />
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Testimonials - Large & Bold */}
                            {selectedCountry.testimonials?.length > 0 && (
                                <section className="mb-16">
                                     <h3 className="text-2xl font-bold text-slate-900 mb-8">Student Success Stories</h3>
                                     <div className="grid grid-cols-1 gap-8">
                                        {selectedCountry.testimonials.map((t, i) => (
                                            <div key={i} className="flex flex-col md:flex-row gap-8 items-center bg-slate-900 text-white p-8 rounded-[2rem]">
                                                {t.image && (
                                                    <img src={t.image.url} alt={t.name} className="w-32 h-32 rounded-2xl object-cover ring-4 ring-slate-800" />
                                                )}
                                                <div className="flex-1">
                                                    <FiMessageCircle className="text-indigo-400 mb-4" size={32} />
                                                    <p className="text-xl md:text-2xl italic font-medium leading-relaxed mb-6">"{t.quote}"</p>
                                                    <div>
                                                        <p className="font-bold text-lg">{t.name}</p>
                                                        <p className="text-indigo-400 text-sm uppercase tracking-widest">{t.university} • {t.program}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                     </div>
                                </section>
                            )}

                            {/* FAQs - Minimalist Accordion Style */}
                            {selectedCountry.faqs?.length > 0 && (
                                <section className="max-w-3xl mx-auto">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h3>
                                    <div className="space-y-4">
                                        {selectedCountry.faqs.map((f, i) => (
                                            <div key={i} className="p-6 bg-slate-50 rounded-2xl transition-all hover:bg-slate-100">
                                                <p className="font-bold text-slate-900 mb-2">Q: {f.question}</p>
                                                <p className="text-slate-600 text-sm leading-relaxed">A: {f.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>
                    </div>

                    {/* Footer Utility */}
                    <div className="p-6 bg-white border-t border-slate-100 flex justify-center">
                        <button 
                            onClick={() => setSelectedCountry(null)}
                            className="px-10 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-indigo-600 transition-all active:scale-95"
                        >
                            Return to Explore
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default CountryDetailsModal;