"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCalendar, FiTag, FiUser, FiGlobe, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const BlogViewModal = ({ open, onClose, data }) => {
    if (!data) return null;

    const stats = [
        { label: "Author", value: data.author, icon: FiUser },
        { label: "Category", value: data.category, icon: FiTag },
        { label: "Slug", value: data.slug, icon: FiGlobe },
        { 
            label: "Published", 
            value: data.isPublished ? "Live" : "Draft", 
            icon: data.isPublished ? FiCheckCircle : FiAlertCircle,
            color: data.isPublished ? "text-emerald-600" : "text-amber-600"
        },
    ];

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[60]"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-4 md:inset-10 lg:inset-y-12 lg:inset-x-1/4 bg-white z-[70] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                    >
                        {/* Header Area */}
                        <div className="flex justify-between items-center px-8 py-5 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
                            <div>
                                <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-600 uppercase italic">Preview Mode</span>
                                <h2 className="text-xl font-extrabold text-slate-900 truncate max-w-md">{data.title}</h2>
                            </div>
                            <button 
                                onClick={onClose} 
                                className="p-2 bg-slate-100 hover:bg-red-50 hover:text-red-500 rounded-full transition-all duration-200"
                            >
                                <FiX size={20} />
                            </button>
                        </div>

                        {/* Content Scroll Area */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar bg-slate-50/30">
                            <div className="max-w-3xl mx-auto p-6 md:p-10">
                                
                                {/* Hero Image */}
                                {data.image?.url && (
                                    <div className="relative group mb-10">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                                        <img 
                                            src={data.image.url} 
                                            alt={data.title} 
                                            className="relative w-full aspect-video rounded-2xl object-cover shadow-xl" 
                                        />
                                    </div>
                                )}

                                {/* Metadata Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                                    {stats.map((item, idx) => (
                                        <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                                            <div className="flex items-center gap-2 mb-1">
                                                <item.icon className="text-slate-400" size={14} />
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.label}</span>
                                            </div>
                                            <p className={`text-sm font-semibold truncate ${item.color || "text-slate-700"}`}>
                                                {item.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Article Body */}
                                <article className="prose prose-slate max-w-none">
                                    <div className="flex items-center gap-2 mb-4 text-slate-400 text-sm font-medium">
                                        <FiCalendar />
                                        {data?.createdAt ? new Date(data.createdAt).toLocaleDateString(undefined, {
                                            year: "numeric", month: "long", day: "numeric"
                                        }) : "Draft Date"}
                                    </div>

                                    <div className="mb-10">
                                        <h3 className="text-sm font-bold text-indigo-600 mb-2 uppercase tracking-tight">Introduction</h3>
                                        <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-indigo-100 pl-6">
                                            {data.introduction}
                                        </p>
                                    </div>

                                    <div className="space-y-12">
                                        {data.sections?.map((s, i) => (
                                            <div key={i} className="group">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <span className="flex-none w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                                                        {i + 1}
                                                    </span>
                                                    <h4 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                                                        {s.title}
                                                    </h4>
                                                    <div className="h-px flex-1 bg-slate-100" />
                                                </div>
                                                <p className="text-slate-600 leading-7 whitespace-pre-wrap">
                                                    {s.content}
                                                </p>
                                            </div>
                                        ))}
                                        {data.sections?.length === 0 && (
                                            <div className="text-center py-10 bg-white rounded-2xl border-2 border-dashed border-slate-100 text-slate-400 italic">
                                                No detailed sections have been drafted for this article.
                                            </div>
                                        )}
                                    </div>
                                </article>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="p-6 border-t border-slate-100 bg-white flex justify-end gap-3">
                            <button 
                                onClick={onClose}
                                className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-all active:scale-95"
                            >
                                Close Preview
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BlogViewModal;