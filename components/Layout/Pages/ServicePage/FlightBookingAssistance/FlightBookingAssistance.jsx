"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiAirplay, FiClock, FiDollarSign, FiCheckCircle, FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const flightServices = [
    {
        title: "Exclusive Student Tiers",
        description: "Access to private airline inventories and negotiated fares reserved for global scholars.",
        icon: FiDollarSign,
    },
    {
        title: "Intake Synchronization",
        description: "Strategic departure planning synchronized with your university's academic induction.",
        icon: FiClock,
    },
    {
        title: "Extended Logistics",
        description: "Priority baggage allowances and bespoke student transit benefits pre-arranged.",
        icon: FiAirplay,
    },
    {
        title: "Verified Itineraries",
        description: "Real-time auditing of booking status and direct integration with embassy requirements.",
        icon: FiCheckCircle,
    },
];

export default function FlightBookingAssistance() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Subtle parallax for the main image
    const yTransform = useTransform(scrollYProgress, [0, 1], [0, -80]);

    return (
        <section ref={sectionRef} className="relative bg-[#01060E] text-white py-32 px-6 lg:px-24 overflow-hidden">

            {/* Cinematic Background Elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#2eced50a,transparent_60%)] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#B20055]/5 blur-[120px] rounded-full opacity-40 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

                    {/* LEFT SIDE: The Visual Anchor */}
                    <div className="lg:col-span-5 order-2 lg:order-1 relative">
                        <motion.div
                            style={{ y: yTransform }}
                            className="relative"
                        >
                            {/* The "Outer Frame" */}
                            <div className="absolute -inset-6 border border-white/5 rounded-[4rem] pointer-events-none" />

                            <div className="relative aspect-[3/4] rounded-[3.5rem] overflow-hidden group">
                                <Image
                                    src="/images/servicepage/flight/flight-booking.png"
                                    alt="First Class Student Travel"
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2.5s] ease-out scale-105 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#01060E] via-transparent to-transparent opacity-80" />

                                {/* Floating Flight Tag */}
                                <div className="absolute top-10 right-10 bg-black/30 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl">
                                    <p className="text-[10px] font-black tracking-[0.3em] text-[#2ECED5] uppercase">Status</p>
                                    <p className="text-xl font-light italic">Priority Confirmed</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE: The Briefing */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="h-px w-10 bg-[#B20055]"></span>
                                <span className="text-[#B20055] uppercase tracking-[0.5em] text-[10px] font-black">
                                    Global Transitions
                                </span>
                            </div>

                            <h2 className="text-5xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-10">
                                Global <br />
                                <span className="italic font-serif text-white/30">Logistics</span> Assistance.
                            </h2>

                            <p className="text-gray-500 text-xl font-light leading-relaxed mb-16 max-w-2xl">
                                Your journey begins long before the wheels leave the tarmac.
                                We orchestrate <span className="text-white">high-tier travel arrangements</span> that
                                prioritize flexibility, comfort, and institutional alignment.
                            </p>
                        </motion.div>

                        {/* Feature Grid: Clean & Spaced */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {flightServices.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#2ECED5] group-hover:bg-[#2ECED5] group-hover:text-black transition-all duration-500">
                                            <service.icon size={18} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-sm font-black uppercase tracking-widest">{service.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-500 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {service.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Ultra-Premium CTA */}
                        <div className="mt-20">
                            <Link
                                href="/apply"
                                className="group relative inline-flex items-center gap-10 px-2 py-2 pr-10 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 rounded-full transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black">
                                    <FiArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Initialize Travel Plan</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-20 left-10 opacity-[0.02] pointer-events-none hidden lg:block">
                <span className="text-[20vw] font-black leading-none">FLIGHT</span>
            </div>
        </section>
    );
}