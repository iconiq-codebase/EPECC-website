"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoMdQuote } from "react-icons/io";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
    {
        id: 1,
        name: "Aarav Sharma",
        country: "Australia",
        program: "MBA",
        university: "University of Melbourne",
        image: "/images/storiespage/testimonials/aarav.jpg",
        quote: "EPECC made my study abroad journey seamless! From university selection to visa guidance, everything was professional.",
    },
    {
        id: 2,
        name: "Meera Koirala",
        country: "United Kingdom",
        program: "BSc Computer Science",
        university: "University of Manchester",
        image: "/images/storiespage/testimonials/meera.jpg",
        quote: "Thanks to EPECC, I got into my dream university in the UK. The guidance and support were truly outstanding.",
    },
    {
        id: 3,
        name: "Rohan Thapa",
        country: "Canada",
        program: "IT & Software",
        university: "University of Toronto",
        image: "/images/storiespage/testimonials/rohan.jpg",
        quote: "The team helped me every step of the way, from document preparation to pre-departure support. Highly recommended!",
    },
];

export default function PremiumStoriesSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0,
            scale: 0.9,
        }),
    };

    const nextStep = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevStep = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="relative bg-[#000d21] py-32 px-6 overflow-hidden">
            {/* Decorative Background numbers */}
            <div className="absolute top-20 left-20 text-[20rem] font-black text-white/[0.02] select-none leading-none">
                0{currentIndex + 1}
            </div>

            <div className="max-w-6xl mx-auto relative">
                <div className="relative h-[600px] md:h-[500px] flex items-center">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 },
                            }}
                            className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                        >
                            {/* Image Side */}
                            <div className="lg:col-span-5 relative group">
                                <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                                    <Image
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#000d21]/60 to-transparent" />
                                </div>
                                {/* Floating Badge */}
                                <div className="absolute -bottom-6 -right-6 bg-[#2ECED5] text-[#000d21] p-6 rounded-3xl shadow-xl rotate-3 group-hover:rotate-0 transition-transform">
                                    <p className="text-xs font-black uppercase tracking-tighter">Admitted to</p>
                                    <p className="font-bold text-lg">{testimonials[currentIndex].university}</p>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="lg:col-span-7 space-y-6">
                                <IoMdQuote className="text-[#2ECED5] w-16 h-16 opacity-50" strokeWidth={1} />
                                <h3 className="text-3xl md:text-5xl font-light italic leading-snug text-gray-100">
                                    {testimonials[currentIndex].quote}
                                </h3>
                                <div>
                                    <h4 className="text-2xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                                    <p className="text-[#2ECED5] tracking-widest uppercase text-sm font-semibold">
                                        {testimonials[currentIndex].program} — {testimonials[currentIndex].country}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-8 mt-12">
                    <div className="flex gap-4">
                        <button
                            onClick={prevStep}
                            className="p-4 rounded-full border border-white/10 hover:bg-[#2ECED5] hover:text-[#000d21] transition-all"
                        >
                            <FiChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextStep}
                            className="p-4 rounded-full border border-white/10 hover:bg-[#2ECED5] hover:text-[#000d21] transition-all"
                        >
                            <FiChevronRight size={24} />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex-1 h-[2px] bg-white/10 relative overflow-hidden">
                        <motion.div
                            initial={false}
                            animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                            className="absolute top-0 left-0 h-full bg-[#2ECED5]"
                        />
                    </div>

                    <div className="text-white/40 font-mono text-sm">
                        0{currentIndex + 1} / 0{testimonials.length}
                    </div>
                </div>
            </div>
        </section>
    );
}