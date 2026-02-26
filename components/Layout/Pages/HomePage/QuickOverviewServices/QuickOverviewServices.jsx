"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    FaUniversity,
    FaFileAlt,
    FaPlaneDeparture,
    FaPassport,
    FaGraduationCap,
    FaHandsHelping,
    FaArrowRight,
} from "react-icons/fa";

const services = [
    {
        title: "Study Abroad Counselling",
        description: "Personalized guidance to help students choose the right country, university, and career path abroad.",
        icon: FaGraduationCap,
        link: "/services",
    },
    {
        title: "University & Course Selection",
        description: "Expert support in selecting globally recognized universities and career-focused programs.",
        icon: FaUniversity,
        link: "/services",
    },
    {
        title: "Admission & Documentation",
        description: "Complete assistance with applications, SOPs, LORs, and document preparation.",
        icon: FaFileAlt,
        link: "/services",
    },
    {
        title: "Visa Guidance & Interview Prep",
        description: "End-to-end student visa assistance with mock interviews and embassy documentation.",
        icon: FaPassport,
        link: "/services",
    },
    {
        title: "Scholarship & Financial Advice",
        description: "Guidance on scholarships, tuition planning, and financial documentation for study abroad.",
        icon: FaHandsHelping,
        link: "/services",
    },
    {
        title: "Pre-Departure & Post-Arrival",
        description: "Travel, accommodation, and settlement support to ensure a smooth international journey.",
        icon: FaPlaneDeparture,
        link: "/services",
    },
];

export default function QuickOverviewServices() {
    return (
        <section
            id="services-overview"
            aria-labelledby="services-overview-heading"
            className="relative bg-[#020617] text-white py-24 px-6 lg:px-20 overflow-hidden"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2ECED5] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <header className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-md text-gray-300 text-xs font-semibold tracking-widest uppercase mb-4"
                    >
                        Our Expertise
                    </motion.div>
                    
                    <motion.h2
                        id="services-overview-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
                        Your Journey, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECED5] to-blue-400">Fully Managed</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        Comprehensive study abroad services designed to eliminate stress 
                        and maximize your chances of success at every stage.
                    </motion.p>
                </header>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="group relative flex flex-col justify-between bg-gradient-to-b from-white/[0.07] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#2ECED5]/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(46,206,213,0.15)]"
                        >
                            <div>
                                {/* Icon Container - Inverts color on hover */}
                                <div className="w-14 h-14 rounded-xl bg-[#0a1b3a] border border-white/5 flex items-center justify-center mb-6 group-hover:bg-[#2ECED5] group-hover:scale-110 transition-all duration-300 ease-out">
                                    <service.icon className="text-[#2ECED5] text-2xl group-hover:text-[#001334] transition-colors duration-300" />
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-[#2ECED5] transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                </p>
                            </div>

                            {/* Interactive Link */}
                            <div className="mt-auto">
                                <Link
                                    href={service.link}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-[#2ECED5] transition-colors"
                                    aria-label={`Learn more about ${service.title}`}
                                >
                                    Learn More 
                                    <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                
                                {/* Decorative progress line */}
                                <div className="w-full h-[1px] bg-white/10 mt-4 overflow-hidden rounded-full">
                                    <div className="w-0 h-full bg-[#2ECED5] group-hover:w-full transition-all duration-700 ease-in-out" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}