"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaGlobe, FaGraduationCap } from "react-icons/fa";

export default function HeroSection() {
  // Animation Variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#020617]">
      {/* Dynamic Background Design */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#2ECED5]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-[#B20055]/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Content Column */}
          <motion.div 
            className="w-full lg:w-3/5 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#2ECED5] text-sm font-medium mb-6"
            >
              <FaGlobe size={16} />
              <span className="tracking-wider uppercase">Global Education Excellence</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-white"
            >
              Your Gateway to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECED5] to-[#B20055]">
                Global Success
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              EPECC bridges the gap between your ambitions and world-class education. 
              Expert counseling for a seamless journey to your dream university.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/apply"
                className="group px-8 py-4 bg-[#B20055] text-white rounded-full font-bold flex items-center gap-2 transition-all hover:bg-[#d10064] hover:shadow-[0_0_25px_rgba(178,0,85,0.4)]"
              >
                Start Your Application
                <FaArrowRight size={20} className="group-hover:rotate-45 transition-transform" />
              </Link>

              <Link
                href="/study-abroad"
                className="px-8 py-4 border border-white/20 text-white rounded-full font-bold transition-all hover:bg-white/10 backdrop-blur-sm"
              >
                Explore Programs
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Column with Floating Elements */}
          <div className="w-full lg:w-2/5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative z-10"
            >
              {/* Main Image with a stylized border/shadow */}
              <div className="relative p-3 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src="/images/homepage/hero-section/hero.jpg"
                  alt="EPECC Study Abroad Guidance"
                  width={550}
                  height={650}
                  priority
                  className="rounded-2xl object-cover shadow-inner"
                />
              </div>

              {/* Floating "Success Badge" */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-10 md:-left-12 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
              >
                <div className="bg-[#2ECED5]/20 p-3 rounded-xl">
                  <FaGraduationCap className="text-[#001334]" size={28} />
                </div>
                <div>
                  <p className="text-[#001334] font-bold text-xl leading-none">98%</p>
                  <p className="text-[#001334]/60 text-xs font-medium uppercase tracking-tighter">Visa Success Rate</p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Background decorative circles */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2ECED5]/20 to-transparent rounded-full blur-3xl -z-10 animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
}