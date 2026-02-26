"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";

const countriesPrograms = [
    "Australia - Student Visa",
    "Canada - Express Entry",
    "UK - Skilled Worker Visa",
    "Germany - Job Seeker Visa",
    "New Zealand - Work Visa",
    "USA - H1B Visa",
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", countryProgram: "", message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const isFormValid = Object.values(formData).every(val => val !== "");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) return;
        setIsSubmitting(true);
        const whatsappMessage = `Hello, 
        my name is ${formData.name}. 
        I am interested in ${formData.countryProgram}. 
        Message: ${formData.message}`;

        const whatsappURL = `https://wa.me/${process.env.NEXT_PUBLIC_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
        setTimeout(() => {
            window.open(whatsappURL, "_blank");
            setIsSubmitting(false);
        }, 800);
    };

    return (
        <section className="relative bg-[#000814] text-white py-32 px-6 lg:px-20 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#2ECED5]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* --- Left: Contact Info (4 Columns) --- */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-5xl md:text-6xl font-light tracking-tight">
                                Let's start a <br />
                                <span className="text-[#2ECED5] italic font-serif">conversation.</span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
                                Whether you have a specific question or just need a starting point, our global experts are here to guide you.
                            </p>
                        </motion.div>

                        <div className="grid gap-6">
                            {[
                                { icon: FiMapPin, label: "Visit Us", val: process.env.NEXT_PUBLIC_ADDRESS },
                                { icon: FiMail, label: "Email", val: process.env.NEXT_PUBLIC_SUPPORT_MAIL },
                                { icon: FiPhone, label: "Call/WhatsApp", val: process.env.NEXT_PUBLIC_NUMBER },
                                { icon: FiClock, label: "Availability", val: "Mon - Fri, 9am - 6pm" },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group flex items-center gap-5 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#2ECED5]/20 to-transparent border border-[#2ECED5]/20 text-[#2ECED5]">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">{item.label}</p>
                                        <p className="text-gray-200 font-medium tracking-wide">{item.val}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* --- Right: The Form (7 Columns) --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 relative group"
                    >
                        {/* Form Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#2ECED5]/20 to-transparent rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />

                        <div className="relative bg-[#001220] border border-white/10 p-10 md:p-14 rounded-[2rem] shadow-2xl backdrop-blur-3xl">
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                {/* Custom Input Component style */}
                                <div className="md:col-span-1 space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                                    <input
                                        type="text" name="name" value={formData.name} onChange={handleChange} required
                                        className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#2ECED5] outline-none transition-colors placeholder:text-gray-700"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="md:col-span-1 space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Email</label>
                                    <input
                                        type="email" name="email" value={formData.email} onChange={handleChange} required
                                        className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#2ECED5] outline-none transition-colors placeholder:text-gray-700"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="md:col-span-1 space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Phone</label>
                                    <input
                                        type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                                        className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#2ECED5] outline-none transition-colors placeholder:text-gray-700"
                                        placeholder="+977"
                                    />
                                </div>

                                <div className="md:col-span-1 space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Destination</label>
                                    <select
                                        name="countryProgram" value={formData.countryProgram} onChange={handleChange} required
                                        className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#2ECED5] outline-none transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-[#001220]">Select Country</option>
                                        {countriesPrograms.map((item) => (
                                            <option key={item} value={item} className="bg-[#001220]">{item}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="md:col-span-2 space-y-2 pt-4">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Your Message</label>
                                    <textarea
                                        name="message" value={formData.message} onChange={handleChange} required rows={3}
                                        className="w-full bg-white/[0.03] border border-white/5 rounded-xl p-4 focus:border-[#2ECED5] outline-none transition-colors"
                                        placeholder="How can we help you reach your goals?"
                                    />
                                </div>

                                <div className="md:col-span-2 pt-6">
                                    <button
                                        type="submit"
                                        disabled={!isFormValid || isSubmitting}
                                        className="group relative w-full overflow-hidden rounded-full bg-white py-6 text-black font-bold transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center gap-3">
                                            {isSubmitting ? (
                                                <span className="animate-pulse">Processing...</span>
                                            ) : (
                                                <>
                                                    <IoLogoWhatsapp className="text-xl text-green-600" />
                                                    <span>SEND VIA WHATSAPP</span>
                                                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
                <div className="mt-8 w-full h-72 rounded-2xl overflow-hidden border border-white/10">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47759.198270410016!2d85.28493285276977!3d27.709030242055263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e1!3m2!1sen!2snp!4v1770885620470!5m2!1sen!2snp"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="EPECC Office Location"
                    ></iframe>
                </div>

            </div>
        </section>
    );
}