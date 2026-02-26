"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMaximize2, FiX, FiCamera } from "react-icons/fi";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";

const categories = ["All", "Events", "Students", "Success", "Universities"];

const galleryImages = [
    { src: "/images/storiespage/gallery/photo1.jpg", title: "Global Summit 2025", category: "Events" },
    { src: "/images/storiespage/gallery/photo2.jpg", title: "Orientation Day", category: "Students" },
    { src: "/images/storiespage/gallery/photo3.jpg", title: "Visa Success Celebration", category: "Success" },
    { src: "/images/storiespage/gallery/photo4.jpg", title: "Campus Tour", category: "Universities" },
    { src: "/images/storiespage/gallery/photo5.jpg", title: "Alumni Meetup", category: "Students" },
    { src: "/images/storiespage/gallery/photo6.jpg", title: "Education Fair", category: "Events" },
];

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [filter, setFilter] = useState("All");

    const filteredImages = galleryImages.filter(
        (img) => filter === "All" || img.category === filter
    );

    const handleNext = () => {
        setSelectedIndex((prev) =>
            prev === null
                ? null
                : prev === filteredImages.length - 1
                    ? 0
                    : prev + 1
        );
    };

    const handlePrev = () => {
        setSelectedIndex((prev) =>
            prev === null
                ? null
                : prev === 0
                    ? filteredImages.length - 1
                    : prev - 1
        );
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (selectedIndex === null) return;

            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "Escape") setSelectedIndex(null);
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedIndex, filteredImages]);

    return (
        <section className="bg-[#000d21] text-white py-20 md:py-32 px-6 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-10">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-[#2ECED5]">
                            <FiCamera className="text-xl" />
                            <span className="uppercase tracking-[0.4em] text-xs font-black">
                                Archive
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none">
                            Life at <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECED5] to-blue-500">
                                EPECC.
                            </span>
                        </h2>
                    </div>

                    {/* Filter */}
                    <div className="flex flex-wrap gap-2 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-md">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 ${filter === cat
                                        ? "text-[#000d21]"
                                        : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {filter === cat && (
                                    <motion.div
                                        layoutId="activePill"
                                        className="absolute inset-0 bg-[#2ECED5] rounded-xl"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{cat}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gallery Grid */}
                <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((item, index) => (
                            <motion.div
                                key={item.src}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setSelectedIndex(index)}
                                className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    width={800}
                                    height={1000}
                                    className="object-cover w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-[#000d21]/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-between p-6 md:p-8">
                                    <div className="flex justify-end">
                                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                                            <FiMaximize2 className="text-[#2ECED5]" size={20} />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <span className="px-3 py-1 bg-[#2ECED5]/20 text-[#2ECED5] text-[10px] font-bold rounded-full border border-[#2ECED5]/30">
                                            {item.category}
                                        </span>
                                        <h3 className="text-lg md:text-2xl font-bold flex items-center gap-2">
                                            {item.title}
                                            <HiOutlineArrowNarrowRight className="text-[#2ECED5]" />
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        className="fixed inset-0 bg-[#000d21]/98 backdrop-blur-2xl flex items-center justify-center z-[100] p-4 md:p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedIndex(null)}
                    >
                        {/* Close */}
                        <button
                            onClick={() => setSelectedIndex(null)}
                            className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] p-3 md:p-4 bg-white/5 hover:bg-[#2ECED5] hover:text-[#000d21] rounded-full transition"
                        >
                            <FiX size={24} />
                        </button>

                        {/* Prev */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrev();
                            }}
                            className="absolute left-4 md:left-10 z-[110] bg-white/5 hover:bg-[#2ECED5] hover:text-[#000d21] p-3 md:p-4 rounded-full transition"
                        >
                            <HiOutlineArrowNarrowLeft size={26} />
                        </button>

                        {/* Next */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                            }}
                            className="absolute right-4 md:right-10 z-[110] bg-white/5 hover:bg-[#2ECED5] hover:text-[#000d21] p-3 md:p-4 rounded-full transition"
                        >
                            <HiOutlineArrowNarrowRight size={26} />
                        </button>

                        {/* Image */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-6xl h-[70vh] md:h-[80vh] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(46,206,213,0.15)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={filteredImages[selectedIndex].src}
                                alt={filteredImages[selectedIndex].title}
                                fill
                                className="object-contain md:object-cover"
                            />

                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 bg-gradient-to-t from-[#000d21] via-[#000d21]/40 to-transparent">
                                <p className="text-[#2ECED5] font-black tracking-[0.3em] text-xs uppercase mb-2">
                                    {filteredImages[selectedIndex].category}
                                </p>
                                <h4 className="text-lg md:text-4xl font-black">
                                    {filteredImages[selectedIndex].title}
                                </h4>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
