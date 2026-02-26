"use client";

import { motion } from "framer-motion";
import { FiHome, FiMapPin, FiShield, FiCheckCircle, FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const accommodationFeatures = [
    {
        title: "Curated Portfolio",
        description: "Direct access to elite university residencies and high-specification private suites.",
        icon: FiHome,
        tag: "Bespoke",
    },
    {
        title: "Prime Logistics",
        description: "Strategic placement in safe, high-tier districts with immediate transit connectivity.",
        icon: FiMapPin,
        tag: "Strategic",
    },
    {
        title: "Legal Concierge",
        description: "Rigorous contract auditing and deposit protection for absolute fiscal security.",
        icon: FiShield,
        tag: "Protected",
    },
    {
        title: "Seamless Induction",
        description: "White-glove booking management from initial viewing to key handover.",
        icon: FiCheckCircle,
        tag: "Turnkey",
    },
];

export default function AccommodationSupport() {
    return (
        <section className="relative bg-[#00050D] text-white py-32 px-6 lg:px-24 overflow-hidden">

            {/* Ultra-Refined Background: "The Aurora Effect" */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2ECED5]/5 blur-[160px] rounded-full mix-blend-screen" />
            <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-[#B20055]/5 blur-[140px] rounded-full mix-blend-screen" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-start gap-24">

                    {/* Left Content: Editorial Style */}
                    <div className="w-full lg:w-[45%] sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="h-[1px] w-12 bg-[#2ECED5]"></span>
                                <span className="text-[#2ECED5] text-[10px] font-black uppercase tracking-[0.4em]">
                                    Executive Housing
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-10">
                                Global <br />
                                <span className="font-serif italic text-white/30 border-b border-white/10 pb-2">
                                    Residencies
                                </span>
                            </h2>

                            <p className="text-gray-500 text-xl font-light leading-relaxed max-w-lg mb-12">
                                We transcend standard housing. Our relocation specialists secure
                                <span className="text-white"> premier living environments </span>
                                tailored to high-achieving scholars.
                            </p>

                            {/* Luxury Feature List */}
                            <div className="grid grid-cols-1 gap-3">
                                {accommodationFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group flex items-center justify-between p-4 rounded-xl border border-white/[0.03] bg-white/[0.01] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500"
                                    >
                                        <div className="flex items-center gap-5">
                                            <div className="text-[#2ECED5] opacity-60 group-hover:opacity-100 transition-opacity">
                                                <feature.icon size={20} strokeWidth={1.5} />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold tracking-wide uppercase">{feature.title}</h3>
                                                <p className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">{feature.description}</p>
                                            </div>
                                        </div>
                                        <span className="hidden md:block text-[9px] text-white/20 uppercase tracking-widest font-black group-hover:text-[#2ECED5] transition-colors">
                                            {feature.tag}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: The "Gallery" Feel */}
                    <div className="w-full lg:w-[55%]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2}}
                            viewport={{ once: true }}
                            className="relative grid grid-cols-12 gap-4"
                        >
                            {/* Main Hero Image */}
                            <div className="col-span-12 relative aspect-[16/10] rounded-[4rem] overflow-hidden border border-white/10 group">
                                <Image
                                    src="/images/servicepage/accommodation/accommodation-support.png"
                                    alt="Luxury Student Living"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#00050D] via-transparent to-transparent opacity-80" />

                                {/* Inner Floating Label */}
                                <div className="absolute bottom-10 left-10">
                                    <p className="text-[10px] font-black tracking-[.3em] text-[#2ECED5] uppercase mb-2">Exclusively for EPECC</p>
                                    <h4 className="text-2xl font-light tracking-tight">Vetted Urban Sanctuaries</h4>
                                </div>
                            </div>

                            {/* Floating Stats Bento Box */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="col-span-7 mt-4 p-8 rounded-[3rem] bg-gradient-to-br from-[#1a2b4b]/40 to-transparent border border-white/5 backdrop-blur-3xl"
                            >
                                <p className="text-4xl font-light tracking-tighter mb-2">500<span className="text-[#B20055] font-serif">+</span></p>
                                <p className="text-[10px] uppercase tracking-[.2em] text-gray-400 font-bold leading-tight">
                                    Properties Secured <br /> Across 12 Countries
                                </p>
                            </motion.div>

                            {/* CTA Box */}
                            <Link
                                href="/apply"
                                className="col-span-5 mt-4 rounded-[3rem] bg-[#B20055] hover:bg-[#d10064] transition-colors flex flex-col items-center justify-center group"
                            >
                                <FiArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                <span className="text-[10px] font-black uppercase tracking-widest mt-2">Inquire</span>
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Subtle Decorative Text Background */}
            <div className="absolute bottom-10 right-10 pointer-events-none select-none overflow-hidden">
                <span className="text-[15vw] font-black text-white/[0.02] leading-none whitespace-nowrap">PREMIUM LIVING</span>
            </div>
        </section>
    );
}