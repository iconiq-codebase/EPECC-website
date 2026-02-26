"use client";

import { useState } from "react";
import { FiMessageCircle, FiX, FiSend, FiCheck } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingChatBox() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const isFormValid = Object.values(formData).every(val => val.trim() !== "");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) return;

        const whatsappNumber = process.env.NEXT_PUBLIC_NUMBER;
        const text = `*New Inquiry via EPECC Concierge*%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

        setIsSent(true);
        setTimeout(() => {
            window.open(whatsappUrl, "_blank");
            setIsSent(false);
            setIsOpen(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-4 md:bottom-8 right-8 z-[100] flex flex-col">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="mb-2 md:mb-6 w-80 md:w-[400px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    >
                        {/* Header */}
                        <div className="p-6 bg-gradient-to-br from-blue-600/20 to-transparent border-b border-white/5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-light tracking-tight text-white">Admissions <span className="text-blue-400 italic font-serif">Concierge</span></h3>
                                    <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1">Direct support via WhatsApp</p>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/5 rounded-full transition-colors text-zinc-400"
                                >
                                    <FiX size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6">
                            {!isSent ? (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 gap-4">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            onChange={handleChange}
                                            className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-zinc-600"
                                            required
                                        />
                                        <div className="grid grid-cols-2 gap-4">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                onChange={handleChange}
                                                className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-zinc-600"
                                                required
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone"
                                                onChange={handleChange}
                                                className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-zinc-600"
                                                required
                                            />
                                        </div>
                                        <textarea
                                            name="message"
                                            placeholder="Tell us about your study goals..."
                                            onChange={handleChange}
                                            className="w-full bg-zinc-800/50 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-zinc-600 h-24 resize-none"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={!isFormValid}
                                        className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-[0.2em] transition-all duration-500 ${isFormValid
                                                ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20"
                                                : "bg-zinc-800 text-zinc-600 cursor-not-allowed"
                                            }`}
                                    >
                                        Initiate Chat <FiSend className={isFormValid ? "animate-pulse" : ""} />
                                    </button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 flex flex-col items-center text-center space-y-4"
                                >
                                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                                        <FiCheck size={32} />
                                    </div>
                                    <h4 className="text-white text-lg font-light">Redirecting to WhatsApp...</h4>
                                    <p className="text-zinc-500 text-xs px-8 leading-relaxed">Our team usually responds within 15 minutes during office hours.</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-fit self-end group flex items-center gap-3 bg-white text-black pl-6 pr-4 py-4 rounded-full shadow-[0_10px_40px_rgba(255,255,255,0.15)] transition-all overflow-hidden"
            >
                <span className="text-xs font-bold uppercase tracking-widest group-hover:opacity-0 transition-opacity duration-300">
                    {isOpen ? "Close" : "Inquire"}
                </span>
                <div className="bg-black text-white p-2 rounded-full group-hover:translate-x-[-70px] transition-transform duration-500">
                    {isOpen ? <FiX size={18} /> : <FiMessageCircle size={18} />}
                </div>
            </motion.button>
        </div>
    );
}