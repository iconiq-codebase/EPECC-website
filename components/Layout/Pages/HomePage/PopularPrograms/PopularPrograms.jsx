"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useMyContext } from "@/components/utils/Context";

export default function PopularPrograms() {

    const { courses } = useMyContext()

    if(!courses || courses.length === 0) {
        return null; // or a loading spinner, or a message saying "No programs available"
    }

    const programs = courses.slice(0, 6).map(course => ({
        name: course.programName,
        description: course.shortdescription || "Explore this exciting study abroad program designed to enhance your global education experience.", // Fallback description if none provided
        img: course.imageUrl.url || "/placeholder.jpg", // Fallback image if none provided
        link: `/study-abroad/${course.slug}`, // Assuming each course has a unique ID for linking
        tag: course.tag || "General" // Fallback tag if none provided
    }));

    return (
        <section
            id="popular-programs"
            aria-labelledby="popular-programs-heading"
            className="bg-[#020617] text-white py-24 px-6 lg:px-20 relative overflow-hidden"
        >
            {/* Soft Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2ECED5]/10 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-20">
                    <motion.span className="text-[#2ECED5] uppercase tracking-widest text-sm font-bold mb-4 block">
                        Study Abroad Programs
                    </motion.span>

                    <motion.h2
                        id="popular-programs-heading"
                        className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
                    >
                        Popular International Programs
                    </motion.h2>

                    <motion.p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Explore the most in-demand study abroad programs offered by top universities
                        worldwide, designed to boost global careers and academic excellence.
                    </motion.p>
                </header>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <Link href={program.link} className="block relative h-full">
                                <article className="h-full flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 group-hover:border-[#2ECED5]/50 group-hover:bg-white/[0.08]">

                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden">
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="bg-[#2ECED5] text-[#001334] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                {program.tag}
                                            </span>
                                        </div>
                                        <Image
                                            src={program.img}
                                            alt={`${program.name} study abroad program in top international universities`}
                                            fill
                                            loading={index < 3 ? "eager" : "lazy"}
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#000d21] via-transparent to-transparent opacity-80" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-[#2ECED5] transition-colors">
                                            {program.name} Abroad
                                        </h3>

                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                            {program.description}
                                        </p>

                                        <div className="flex items-center text-[#2ECED5] font-semibold text-sm">
                                            Explore {program.name} Abroad
                                            <FaArrowAltCircleUp className="ml-2 w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                        </div>

                                    </div>
                                </article>
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
                        href="/study-abroad"
                        className="inline-flex items-center gap-2 text-[#2ECED5] font-semibold hover:text-white transition-colors"
                    >
                        View All Programs <span aria-hidden="true">&rarr;</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}