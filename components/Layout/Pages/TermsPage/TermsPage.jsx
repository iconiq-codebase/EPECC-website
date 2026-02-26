'use client'
import { useState, useEffect } from 'react';

export default function TermsPage() {
    const sections = [
        { id: 'acceptance', title: '1. Acceptance of Terms' },
        { id: 'services', title: '2. Services Provided' },
        { id: 'responsibilities', title: '3. User Responsibilities' },
        { id: 'guarantee', title: '4. No Guarantee Policy' },
        { id: 'fees', title: '5. Fees & Payments' },
        { id: 'communication', title: '6. Communication Consent' },
        { id: 'liability', title: '7. Limitation of Liability' },
        { id: 'ip', title: '8. Intellectual Property' },
        { id: 'modifications', title: '9. Modifications' },
        { id: 'contact', title: '10. Contact' },
    ];

    const [activeSection, setActiveSection] = useState('acceptance');

    // Scroll event to update active section
    useEffect(() => {
        const handleScroll = () => {
            let current = 'acceptance';
            sections.forEach(section => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) current = section.id;
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

                    {/* LEFT: Sticky Navigation (Desktop) */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-32 space-y-4">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
                                On this page
                            </p>
                            <nav className="flex flex-col gap-3 border-l border-white/10">
                                {sections.map(section => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className={`pl-4 text-sm border-l transition-all duration-200 text-left ${
                                            activeSection === section.id
                                                ? 'text-[#2ECED5] border-[#2ECED5]'
                                                : 'text-white/60 border-transparent hover:text-[#2ECED5] hover:border-[#2ECED5]'
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
                                Terms of <span className="text-[#2ECED5]">Service.</span>
                            </h1>
                            <p className="text-lg text-slate-500 font-medium">
                                Last Updated: <span className="text-slate-300">February 12, 2026</span>
                            </p>
                        </header>

                        {/* Sections */}
                        {sections.map(section => (
                            <section
                                key={section.id}
                                id={section.id}
                                className="scroll-mt-32"
                            >
                                <h2 className="text-2xl font-bold text-white mb-6">
                                    {section.title}
                                </h2>

                                {/* Section content */}
                                {section.id === 'acceptance' && (
                                    <p>
                                        By accessing or using the services of <span className="text-white font-semibold">EPECC Global Education</span>
                                        ("Company", "we", "our", "us"), you agree to be bound by these
                                        Terms of Service. If you do not agree with any part of these
                                        terms, you must not use our services.
                                    </p>
                                )}

                                {section.id === 'services' && (
                                    <>
                                        <p className="mb-6">We provide premium educational consultancy services including:</p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                "University selection guidance",
                                                "Application assistance",
                                                "Visa documentation support",
                                                "Interview preparation",
                                                "Pre-departure counseling"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#2ECED5]/50 transition-colors">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-[#2ECED5]" />
                                                    <span className="text-sm text-slate-300">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="mt-8 text-sm italic border-l-2 border-[#2ECED5] pl-4 py-1">
                                            We do not guarantee admission, scholarships, or visa approval.
                                        </p>
                                    </>
                                )}

                                {section.id === 'responsibilities' && (
                                    <div className="space-y-4">
                                        <p>By using our services, you formally agree to:</p>
                                        <div className="space-y-3">
                                            {[
                                                "Provide accurate and truthful information",
                                                "Submit authentic academic and legal documents",
                                                "Respond promptly to communication requests",
                                                "Comply with university and immigration regulations"
                                            ].map((text, i) => (
                                                <div key={i} className="flex gap-4 items-start">
                                                    <span className="text-[#2ECED5] font-mono text-sm">0{i + 1}.</span>
                                                    <p className="text-slate-300">{text}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="pt-4 text-red-400/80 text-sm font-medium">
                                            * Providing false information may result in immediate termination of services.
                                        </p>
                                    </div>
                                )}

                                {section.id === 'guarantee' && (
                                    <p>
                                        EPECC Global Education does not guarantee admission, scholarships, visa approvals,
                                        or specific outcomes. Decisions are made independently by universities and government authorities.
                                    </p>
                                )}

                                {section.id === 'fees' && (
                                    <div className="p-8 rounded-3xl bg-gradient-to-br from-[#2ECED5]/10 to-transparent border border-[#2ECED5]/20">
                                        <p className="text-slate-300 mb-4">
                                            Some services may require consultation or processing fees.
                                            All fees are communicated in advance.
                                        </p>
                                        <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                                            <p className="text-sm font-semibold uppercase tracking-widest text-[#2ECED5]">Refund Policy</p>
                                            <p className="text-sm text-slate-400 mt-1">
                                                Unless otherwise stated, fees paid for consultancy services are non-refundable.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {section.id === 'communication' && (
                                    <p>
                                        By submitting an inquiry or application form, you consent to communication via email, phone, or WhatsApp
                                        for consultation purposes.
                                    </p>
                                )}

                                {section.id === 'liability' && (
                                    <ul className="list-disc pl-6 space-y-2">
                                        {[
                                            "Visa refusal",
                                            "Admission rejection",
                                            "Delay in processing by third parties",
                                            "Changes in immigration laws"
                                        ].map((li, i) => (
                                            <li key={i} className="text-slate-300">{li}</li>
                                        ))}
                                    </ul>
                                )}

                                {section.id === 'ip' && (
                                    <p>
                                        All content on this website, including branding, design, and materials,
                                        is the property of EPECC Global Education and may not be reproduced without permission.
                                    </p>
                                )}

                                {section.id === 'modifications' && (
                                    <p>
                                        We reserve the right to update these Terms at any time. Continued use of our services
                                        after changes implies acceptance of the revised Terms.
                                    </p>
                                )}

                                {section.id === 'contact' && (
                                    <a
                                        href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_MAIL}`}
                                        className="group relative inline-flex items-center gap-6 p-1 pr-10 rounded-full bg-white/5 border border-white/10 hover:border-[#2ECED5] transition-all"
                                    >
                                        <div className="h-14 w-14 rounded-full bg-[#2ECED5] flex items-center justify-center text-[#000d21] transition-transform group-hover:scale-95">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Email Support</p>
                                            <p className="text-xl font-bold text-white group-hover:text-[#2ECED5] transition-colors">{process.env.NEXT_PUBLIC_SUPPORT_MAIL}</p>
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
