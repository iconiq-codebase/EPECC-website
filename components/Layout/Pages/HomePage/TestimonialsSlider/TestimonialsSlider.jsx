"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const testimonials = [
    {
        name: "Aarav Sharma",
        country: "Australia",
        program: "Master of Business Administration (MBA)",
        image: "/images/homepage/testimonials/aarav.jpg",
        feedback: "EPECC made my study abroad journey seamless! From university selection to visa guidance, everything was smooth and professional.",
    },
    {
        name: "Meera Koirala",
        country: "United Kingdom",
        program: "Bachelor of Science (BSc)",
        image: "/images/homepage/testimonials/meera.jpg",
        feedback: "Thanks to EPECC, I got into my dream university in the UK. The guidance and support were outstanding.",
    },
    {
        name: "Rohan Thapa",
        country: "Canada",
        program: "Computer Science & IT",
        image: "/images/homepage/testimonials/rohan.jpg",
        feedback: "The team helped me every step of the way, from document preparation to pre-departure support. Highly recommended!",
    },
];

export default function TestimonialsSlider() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95,
        }),
    };

    const next = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section
            id="testimonials"
            className="home-testimonials relative bg-[#020617] text-white py-24 px-6 lg:px-20 overflow-hidden"
        >
            {/* Background Decor */}
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#2ECED5] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#2ECED5] text-sm font-bold tracking-widest uppercase"
                    >
                        Student Voices
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mt-2 mb-4"
                    >
                        Success Stories
                    </motion.h2>
                </div>

                {/* Main Slider Area */}
                <div className="relative w-full max-w-5xl mx-auto min-h-[500px] md:min-h-[400px]">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                        >
                            {/* Image Section (40%) */}
                            <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden group">
                                <Image
                                    src={testimonials[current].image}
                                    alt={testimonials[current].name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#001334]/20 group-hover:bg-transparent transition-colors" />
                            </div>

                            {/* Content Section (60%) */}
                            <div className="relative w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                                {/* Giant Watermark Icon */}
                                <FaQuoteRight className="absolute top-8 right-8 text-white/5 text-8xl pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-[#2ECED5] text-lg">★</span>
                                        ))}
                                    </div>

                                    <blockquote className="text-xl md:text-2xl leading-relaxed font-light text-gray-100 mb-8">
                                        "{testimonials[current].feedback}"
                                    </blockquote>

                                    <div className="border-t border-white/10 pt-6">
                                        <h3 className="text-2xl font-bold text-white">
                                            {testimonials[current].name}
                                        </h3>
                                        <p className="text-[#2ECED5] text-sm font-medium mt-1">
                                            {testimonials[current].program}
                                        </p>
                                        <div className="flex items-center gap-2 mt-2 text-gray-400 text-xs uppercase tracking-wider">
                                            <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                                            Accepted in {testimonials[current].country}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls (Floating Bottom Right on Desktop, Bottom Center on Mobile) */}
                    <div className="absolute -bottom-20 md:bottom-0 md:-right-4 w-full md:w-auto flex flex-row items-center justify-center md:justify-end gap-6 z-20">
                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > current ? 1 : -1);
                                        setCurrent(idx);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 ${idx === current ? "w-8 bg-[#2ECED5]" : "w-2 bg-white/20 hover:bg-white/40"
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Arrows */}
                        <div className="flex gap-3">
                            <button
                                aria-label="Previous testimonial"
                                onClick={prev}
                                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#2ECED5] hover:border-[#2ECED5] hover:text-[#001334] transition-all duration-300"
                            >
                                <FaChevronLeft size={14} />
                            </button>
                            <button
                                aria-label="Next testimonial"
                                onClick={next}
                                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#2ECED5] hover:border-[#2ECED5] hover:text-[#001334] transition-all duration-300"
                            >
                                <FaChevronRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}