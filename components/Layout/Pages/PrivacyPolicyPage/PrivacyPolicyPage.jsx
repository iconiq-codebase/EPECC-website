"use client";

import { useState, useEffect } from "react";

export default function PrivacyPolicyPage() {
    const sections = [
        { id: "intro", title: "1. Introduction" },
        { id: "collection", title: "2. Information We Collect" },
        { id: "usage", title: "3. How We Use Data" },
        { id: "whatsapp", title: "4. WhatsApp Communication" },
        { id: "security", title: "5. Data Security" },
        { id: "rights", title: "6. Your Rights" },
        { id: "contact", title: "7. Contact" },
    ];

    const [activeSection, setActiveSection] = useState("intro");

    useEffect(() => {
        const handleScroll = () => {
            let current = "intro";
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) current = section.id;
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <main className="relative min-h-screen bg-[#000d21] text-slate-400 selection:bg-[#2ECED5]/30 selection:text-[#2ECED5]">
            {/* Background Ambient Glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#2ECED5]/5 blur-[120px]" />
                <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-blue-500/5 blur-[120px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-20 py-24">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* LEFT: Sticky Navigation */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-32 space-y-4">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
                                On this page
                            </p>
                            <nav className="flex flex-col gap-3 border-l border-white/10">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className={`pl-4 text-sm border-l transition-all duration-200 text-left ${
                                            activeSection === section.id
                                                ? "text-[#2ECED5] border-[#2ECED5]"
                                                : "text-white/60 border-transparent hover:text-[#2ECED5] hover:border-[#2ECED5]"
                                        }`}
                                    >
                                        {section.title}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* RIGHT: Content */}
                    <div className="flex-1 max-w-3xl space-y-24 leading-relaxed text-lg">

                        {/* Header */}
                        <header className="mb-20 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#2ECED5] tracking-wide">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ECED5] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ECED5]"></span>
                                </span>
                                Legal Documentation
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight italic">
                                Privacy <span className="text-[#2ECED5]">Policy.</span>
                            </h1>

                            <p className="text-lg text-slate-500 font-medium">
                                Last Updated: <span className="text-slate-300">February 12, 2026</span>
                            </p>
                        </header>

                        {/* Sections */}
                        {sections.map((section) => (
                            <section key={section.id} id={section.id} className="scroll-mt-32">
                                <h2 className="text-2xl font-bold text-white mb-6">
                                    {section.title}
                                </h2>

                                {section.id === "intro" && (
                                    <p>
                                        EPECC Global Education ("we", "our", "us") is committed to
                                        protecting your personal information. This Privacy Policy
                                        explains how we collect, use, disclose, and safeguard your
                                        data when you use our educational consultancy services.
                                    </p>
                                )}

                                {section.id === "collection" && (
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            "Full name and identification details",
                                            "Email address and phone number",
                                            "Academic transcripts and qualifications",
                                            "Program and country preferences",
                                            "Visa-related documentation",
                                            "Website usage data (cookies)"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#2ECED5]/50 transition-colors">
                                                <div className="h-1.5 w-1.5 rounded-full bg-[#2ECED5]" />
                                                <span className="text-sm text-slate-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {section.id === "usage" && (
                                    <>
                                        <p className="mb-6">
                                            Your information is used strictly for consultation and processing purposes:
                                        </p>
                                        <ul className="space-y-3">
                                            {[
                                                "University and program recommendations",
                                                "Application processing assistance",
                                                "Visa documentation support",
                                                "Direct communication via email or WhatsApp",
                                                "Compliance with legal and immigration requirements"
                                            ].map((text, i) => (
                                                <div key={i} className="flex gap-4 items-start">
                                                    <span className="text-[#2ECED5] font-mono text-sm">0{i + 1}.</span>
                                                    <p className="text-slate-300">{text}</p>
                                                </div>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                {section.id === "whatsapp" && (
                                    <p>
                                        We may communicate through WhatsApp Business for faster updates.
                                        By submitting your details, you consent to receiving consultation
                                        messages through secure communication channels.
                                    </p>
                                )}

                                {section.id === "security" && (
                                    <div className="p-8 rounded-3xl bg-gradient-to-br from-[#2ECED5]/10 to-transparent border border-[#2ECED5]/20">
                                        <p className="text-slate-300">
                                            We implement SSL encryption, secure servers, restricted access controls,
                                            and regular monitoring to protect your data. However, no online system
                                            can guarantee 100% absolute security.
                                        </p>
                                    </div>
                                )}

                                {section.id === "rights" && (
                                    <p>
                                        You may request access, correction, or deletion of your personal data.
                                        We respect your privacy rights in accordance with applicable laws.
                                    </p>
                                )}

                                {section.id === "contact" && (
                                    <a
                                        href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_MAIL}`}
                                        className="group relative inline-flex items-center gap-6 p-1 pr-10 rounded-full bg-white/5 border border-white/10 hover:border-[#2ECED5] transition-all"
                                    >
                                        <div className="h-14 w-14 rounded-full bg-[#2ECED5] flex items-center justify-center text-[#000d21] transition-transform group-hover:scale-95">
                                            ✉
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
                                                Email Support
                                            </p>
                                            <p className="text-xl font-bold text-white group-hover:text-[#2ECED5] transition-colors">
                                                {process.env.NEXT_PUBLIC_SUPPORT_MAIL}
                                            </p>
                                        </div>
                                    </a>
                                )}
                            </section>
                        ))}
                    </div>
                </div>
            </div>

            <footer className="border-t border-white/5 py-12 text-center">
                <p className="text-xs text-slate-600 tracking-widest uppercase">
                    © 2026 EPECC Global Education • Excellence in Education
                </p>
            </footer>
        </main>
    );
}