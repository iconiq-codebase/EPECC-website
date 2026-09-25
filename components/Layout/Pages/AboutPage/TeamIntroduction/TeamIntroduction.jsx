"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
    {
        name: "Dr. Rajesh Adhikari",
        role: "Founder & Lead Counselor",
        image: "/images/aboutpage/team/rajesh.png", // Replace with high-res portrait
        bio: "15+ years of experience guiding students toward global education pathways with absolute integrity.",
    },
    {
        name: "Anita Sharma",
        role: "Senior Admission Advisor",
        image: "/images/aboutpage/team/anita.png",
        bio: "Expert in university admissions and scholarship strategy across the UK and Australia.",
    },
    {
        name: "Suman Koirala",
        role: "Visa & Compliance Officer",
        image: "/images/aboutpage/team/suman.png",
        bio: "Specialist in visa documentation and smooth approval processes for international students.",
    },
    {
        name: "Pratik Shah",
        role: "Career Guidance Specialist",
        image: "/images/aboutpage/team/pratik.png",
        bio: "Helps students align education choices with long-term career goals and global job trends.",
    },
];

export default function TeamIntroduction() {
    return (
        <section className="relative bg-[#020617] py-32 px-6 lg:px-20 overflow-hidden">
            {/* --- Background Texture (Consistent with Hero) --- */}
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* --- Section Header --- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#2ECED5] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
                                The Experts
                            </span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none">
                                Meet the Minds <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                                    Shaping Futures.
                                </span>
                            </h2>
                        </motion.div>
                    </div>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-400 text-lg md:text-xl max-w-sm font-light border-l border-white/10 pl-8"
                    >
                        Our team blends decades of academic insight with a modern approach to global mobility.
                    </motion.p>
                </div>

                {/* --- Team Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card Wrapper */}
                            <div className="relative overflow-hidden rounded-3xl bg-slate-900 aspect-[3/4]">
                                {/* Image Treatment */}
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                                />
                                
                                {/* Inner Gradient Shadow */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />

                                {/* Social Floating Button */}
                                <div className="absolute top-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <Link 
                                        href="#" 
                                        className="w-10 h-10 rounded-full bg-[#2ECED5] flex items-center justify-center text-[#020617] shadow-xl hover:scale-110 active:scale-95 transition-transform"
                                    >
                                        <FaLinkedinIn />
                                    </Link>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 inset-x-0 p-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                                    <p className="text-[#2ECED5] text-xs font-bold uppercase tracking-widest mb-1">
                                        {member.role}
                                    </p>
                                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                                        {member.name}
                                    </h3>
                                    
                                    {/* Reveal Bio on Hover */}
                                    <div className="h-0 opacity-0 group-hover:h-[70px] group-hover:opacity-100 transition-all duration-500">
                                        <p className="text-slate-300 text-sm font-light leading-relaxed border-t border-white/10 pt-4">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
