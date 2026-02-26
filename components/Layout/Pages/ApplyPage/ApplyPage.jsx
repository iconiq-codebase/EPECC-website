"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiInfo, FiHash, FiMail, FiUser, FiCalendar } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";

const countries = ["Australia", "United Kingdom", "United States", "Canada", "New Zealand", "Japan", "Ireland"];
const programs = ["Bachelor Programs", "Master Programs", "MBA Programs", "Nursing & Healthcare", "IT & Computer Science"];

export default function ApplyPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        program: "",
        qualification: "",
        intake: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Calculate completion percentage for the premium progress bar
    const totalFields = Object.keys(formData).length;
    const filledFields = Object.values(formData).filter(val => val !== "").length;
    const progress = (filledFields / totalFields) * 100;

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const text =
            `*New Application - EPECC*%0A%0A
*Name:* ${formData.fullName}%0A
*Email:* ${formData.email}%0A
*Phone:* ${formData.phone}%0A
*Qualification:* ${formData.qualification}%0A
*Destination:* ${formData.country}%0A
*Program:* ${formData.program}%0A
*Intake:* ${formData.intake}%0A
*Message:* ${formData.message}`;

        const whatsappURL = `https://wa.me/${process.env.NEXT_PUBLIC_NUMBER}?text=${text}`;

        setTimeout(() => {
            window.open(whatsappURL, "_blank");
            setIsSubmitting(false);
        }, 1200);
    };

    return (
        <main className="relative bg-[#000d21] min-h-screen text-white py-24 px-6 lg:px-20 overflow-hidden">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2ECED5]/5 blur-[120px] rounded-full -z-0" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-0" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">

                {/* Left Side: Information & Branding */}
                <div className="lg:col-span-5 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-[#2ECED5]/10 text-[#2ECED5] text-xs font-bold tracking-widest uppercase mb-6">
                            Admissions Open 2026
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
                            Apply for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECED5] to-blue-400">
                                Excellence.
                            </span>
                        </h1>
                        <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
                            Your global career starts with a single step. Complete this form to trigger your personalized admission strategy.
                        </p>
                        <p className="sr-only">
                            Study abroad from Nepal in Australia, United Kingdom, United States,
                            Canada, New Zealand, Japan and Ireland. Apply for Bachelor, Master,
                            MBA, Nursing and IT programs for 2026 intake with EPECC.
                        </p>

                    </motion.div>

                    {/* Premium Checklist Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl"
                    >
                        <h2 className="text-[#2ECED5] font-bold mb-6 flex items-center gap-2">
                            <FiInfo /> Document Readiness
                        </h2>
                        <ul className="space-y-4">
                            {["Academic Transcripts", "Passport Scan", "English Proficiency", "Statement of Purpose"].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                                    <FiCheckCircle className="text-[#2ECED5]" /> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Right Side: The Form */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="lg:col-span-7"
                >
                    <div className="bg-[#001829] rounded-[3rem] border border-white/10 p-8 md:p-12 shadow-3xl relative">
                        {/* Progress Bar Header */}
                        <div className="mb-10">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                                <span className="text-gray-500">Form Progress</span>
                                <span className="text-[#2ECED5]">{Math.round(progress)}%</span>
                            </div>
                            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    animate={{ width: `${progress}%` }}
                                    className="h-full bg-[#2ECED5]"
                                />
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            {/* Full Name */}
                            <div className="relative group">
                                <FiUser className="absolute left-0 top-3 text-gray-500 group-focus-within:text-[#2ECED5] transition-colors" />
                                <label htmlFor="fullName" className="sr-only">Full Name</label>
                                <input
                                    id="fullName"
                                    autoComplete="name"
                                    type="text"
                                    name="fullName"
                                    required
                                    placeholder="Full Name"
                                    className="w-full bg-transparent border-b border-white/10 pl-8 py-2 outline-none focus:border-[#2ECED5] transition-all placeholder:text-gray-600"
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Email */}
                            <div className="relative group">
                                <FiMail className="absolute left-0 top-3 text-gray-500 group-focus-within:text-[#2ECED5] transition-colors" />
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    id="email"
                                    autoComplete="email"
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Email Address"
                                    className="w-full bg-transparent border-b border-white/10 pl-8 py-2 outline-none focus:border-[#2ECED5] transition-all placeholder:text-gray-600"
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Phone */}
                            <div className="relative group">
                                <FiHash className="absolute left-3 top-4 text-gray-500" />
                                <label htmlFor="phone" className="sr-only">Phone</label>
                                <input
                                    id="phone"
                                    autoComplete="tel"
                                    type="tel"
                                    name="phone"
                                    required
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-[#2ECED5]"
                                />
                            </div>

                            {/* Qualification */}
                            <div className="relative group">
                                <input
                                    type="text"
                                    name="qualification"
                                    required
                                    placeholder="Highest Qualification (e.g. +2, Bachelor, Diploma)"
                                    value={formData.qualification}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2ECED5]"
                                />
                            </div>

                            {/* Program Selection - Styled Select */}
                            <div className="md:col-span-2 space-y-4">
                                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Select Your Desired Path</p>
                                <div className="flex flex-wrap gap-3">
                                    {programs.map((p) => (
                                        <button
                                            key={p}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, program: p })}
                                            className={`px-5 py-2 rounded-full text-xs transition-all border ${formData.program === p
                                                ? "bg-[#2ECED5] border-[#2ECED5] text-[#000d21] font-bold"
                                                : "bg-white/5 border-white/10 text-gray-400 hover:border-[#2ECED5]/50"
                                                }`}
                                        >
                                            {p}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Country & Intake */}
                            <div className="space-y-4">
                                <select
                                    name="country"
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-gray-300 outline-none focus:border-[#2ECED5]"
                                >
                                    <option value="" className="bg-[#000d21]">Select Country</option>
                                    {countries.map(c => <option key={c} value={c} className="bg-[#000d21]">{c}</option>)}
                                </select>
                            </div>

                            <div className="relative group">
                                <FiCalendar className="absolute left-3 top-4 text-gray-500" />
                                <input
                                    type="text"
                                    name="intake"
                                    placeholder="Intake (e.g. Jan 2026)"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-[#2ECED5]"
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Message */}
                            <div className="md:col-span-2">
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    placeholder="Tell us about your study goals..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm outline-none focus:border-[#2ECED5] resize-none"
                                />
                            </div>


                            {/* CTA */}
                            <div className="md:col-span-2 pt-4">
                                <button
                                    type="submit"
                                    disabled={progress < 100 || isSubmitting}
                                    className="w-full group relative overflow-hidden py-5 rounded-2xl bg-[#2ECED5] text-[#000d21] font-black uppercase tracking-widest text-sm flex items-center justify-center gap-4 transition-all hover:shadow-[0_0_30px_rgba(46,206,213,0.3)] disabled:grayscale disabled:opacity-30"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {isSubmitting ? "Initiating..." : "Launch Application"}
                                        {!isSubmitting && <IoLogoWhatsapp size={20} />}
                                    </span>
                                    <motion.div
                                        className="absolute inset-0 bg-white"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "0%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </button>
                                <p className="text-center text-[10px] text-gray-500 mt-4 italic">
                                    By submitting, you agree to our privacy policy and global admission terms.
                                </p>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}