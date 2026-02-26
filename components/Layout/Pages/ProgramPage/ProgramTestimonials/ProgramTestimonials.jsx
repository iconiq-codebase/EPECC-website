'use client';

import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

const ProgramTestimonials = ({ testimonials }) => {
    const duplicated = [...testimonials, ...testimonials, ...testimonials];

    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    // Start animation
    useEffect(() => {
        if (!isHovered) {
            controls.start({
                x: ["0%", "-33.33%"],
                transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                },
            });
        } else {
            controls.stop(); // TRUE pause
        }
    }, [isHovered, controls]);

    return (
        <section className="relative w-full bg-[#020617] py-28 overflow-hidden">

            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#9A0044]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Heading Section */}
            <div className="text-center mb-20 px-6 relative z-10">
                <div className="flex justify-center items-center gap-3 mb-6">
                    <span className="h-[1px] w-8 bg-[#9A0044]" />
                    <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.5em]">
                        Social Proof
                    </span>
                    <span className="h-[1px] w-8 bg-[#9A0044]" />
                </div>

                <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-tight">
                    Voices of <span className="font-serif italic text-white/50">Success</span>
                </h2>
            </div>

            {/* Infinite Marquee Container */}
            <div
                className="relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    className="flex gap-6 w-max px-4"
                    animate={controls}
                >
                    {duplicated.map((item, index) => (
                        <div
                            key={index}
                            className="w-[350px] md:w-[450px] relative p-[1px] rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent transition-all duration-700 hover:from-[#9A0044]/40"
                        >
                            <div className="h-full bg-[#020617]/80 backdrop-blur-2xl rounded-[2.4rem] p-10 flex flex-col justify-between">

                                <div className="mb-8">
                                    <HiOutlineChatBubbleLeftRight className="text-[#9A0044] text-3xl mb-6 opacity-60" />
                                    <p className="text-slate-300 text-lg font-light leading-relaxed italic tracking-wide">
                                        “{item.quote}”
                                    </p>
                                </div>

                                <div className="flex items-center gap-5 border-t border-white/5 pt-8">
                                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-cyan-500/50 transition-all duration-500">
                                        <Image
                                            src={item.photoUrl.url}
                                            alt={item.name}
                                            fill
                                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium tracking-tight">{item.name}</h4>
                                        <p className="text-cyan-500/60 text-[10px] font-bold uppercase tracking-widest mt-1">
                                            {item.batch}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Fade Edges */}
                <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-[#020617] via-[#020617]/80 to-transparent z-20 pointer-events-none" />
            </div>

            {/* Bottom Insight */}
            <div className="mt-16 text-center">
                <p className="text-slate-600 text-[9px] uppercase tracking-[0.4em] font-medium">
                    Trusted by 5,000+ Alumni Worldwide
                </p>
            </div>
        </section>
    );
};

export default ProgramTestimonials;
