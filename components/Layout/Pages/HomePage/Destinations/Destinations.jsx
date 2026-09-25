"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useMyContext } from "@/components/utils/Context";

// Arrow Icon Component for cleaner code
const ArrowIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={className}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
);

export default function Destinations() {

    const {country} = useMyContext()

    return (
        <section
            aria-label="Top Study Abroad Destinations"
            className="home-destinations relative bg-[#020617] text-white py-24 px-6 lg:px-20 overflow-hidden"
        >
            {/* Decorative Background Blur */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#2ECED5] opacity-5 blur-[120px] rounded-full pointer-events-none" />

            {/* Section Header */}
            <header className="relative z-10 text-center mb-16 space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-block px-4 py-1.5 rounded-full border border-[#2ECED5]/30 bg-[#2ECED5]/10 text-[#2ECED5] text-sm font-medium tracking-wide mb-2"
                >
                    GLOBAL OPPORTUNITIES
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                >
                    Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Destination</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
                >
                    Explore the world's most prestigious education hubs. We guide you to the perfect campus for your career aspirations.
                </motion.p>
            </header>

            {/* Premium Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {country.map((country, index) => (
                    <motion.div
                        key={country.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        // Span the first item on larger screens for visual variety
                        className={`group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer ${index === 0 ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                            }`}
                    >
                        <Link href={`/destinations/${country.slug}`} className="block w-full h-full">
                            {/* Background Image with Zoom Effect */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={country.image.url}
                                    alt={`Study in ${country.name}`}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out scale-102 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            {/* Gradient Overlay (Cinematic Fade) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#001334] via-[#001334]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Content Layout */}
                            <div className="photo-caption absolute inset-0 p-6 flex flex-col justify-end">
                                {/* Top Badge (Hidden initially, shown on hover/focus) */}
                                <div className="absolute top-6 right-6 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                        <ArrowIcon className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </div>

                                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#2ECED5] transition-colors">
                                        {country.name}
                                    </h3>

                                    {/* Animated Line */}
                                    <div className="w-12 h-1 bg-[#2ECED5] mb-3 group-hover:w-20 transition-all duration-300" />

                                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 opacity-90 group-hover:opacity-100">
                                        {country.description}
                                    </p>
                                </div>
                            </div>

                            {/* Glass border effect */}
                            <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none group-hover:border-[#2ECED5]/30 transition-colors duration-300" />
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Bottom CTA (Optional) */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
            >
                <Link
                    href="/destinations"
                    className="inline-flex items-center gap-2 text-[#2ECED5] font-semibold hover:text-white transition-colors"
                >
                    View All Destinations <span aria-hidden="true">&rarr;</span>
                </Link>
            </motion.div>
        </section>
    );
}