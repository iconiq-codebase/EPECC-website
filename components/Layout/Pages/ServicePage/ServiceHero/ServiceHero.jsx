"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ServiceHeroEducation() {
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#000B1D] overflow-hidden py-20 lg:py-0">
      
      {/* --- Premium Background Elements --- */}
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" 
           style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg'), linear-gradient(to right, #2ECED5 1px, transparent 1px), linear-gradient(to bottom, #2ECED5 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      
      {/* Dynamic Glows */}
      <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-[#2ECED5]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-[#B20055]/15 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* --- Left Content --- */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="w-full lg:w-3/5 text-center lg:text-left"
          >
            {/* Top Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ECED5] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2ECED5]"></span>
              </span>
              <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">Trusted by 5,000+ Students</span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl text-white font-extrabold leading-[1.1] mb-6 tracking-tight"
            >
              Your Global Future <br />
              <span className="bg-gradient-to-r from-[#2ECED5] to-[#B20055] bg-clip-text text-transparent">
                Starts with EPECC
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
            >
              Navigate the complexities of international education with bespoke 
              mentorship, visa precision, and direct university pipelines.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              <Link
                href="/apply"
                className="group relative px-8 py-4 bg-[#B20055] overflow-hidden rounded-xl font-bold text-white transition-all hover:shadow-[0_0_20px_rgba(178,0,85,0.4)] active:scale-95"
              >
                <span className="relative z-10">Apply Now</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              </Link>
              
              <Link
                href="/study-abroad"
                className="px-8 py-4 border border-white/20 rounded-xl font-bold text-white hover:bg-white/5 transition-all backdrop-blur-sm active:scale-95"
              >
                Explore Programs
              </Link>
            </motion.div>

            {/* Quick Stats/Trust Bar */}
            <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
                <div className="text-center lg:text-left">
                    <p className="text-2xl font-bold text-white">99%</p>
                    <p className="text-xs uppercase tracking-widest">Visa Success</p>
                </div>
                <div className="text-center lg:text-left">
                    <p className="text-2xl font-bold text-white">150+</p>
                    <p className="text-xs uppercase tracking-widest">Partner Unis</p>
                </div>
            </motion.div>
          </motion.div>

          {/* --- Right Visual Section --- */}
          <div className="w-full lg:w-2/5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#000B1D] via-transparent to-transparent opacity-40 z-10" />
                <Image
                  src="/images/servicepage/herosection/education-hero.jpeg"
                  alt="Students planning study abroad"
                  width={600}
                  height={700}
                  priority
                  className="rounded-3xl object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating Glass Card 1 */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hidden sm:block"
              >
                <p className="text-[#2ECED5] font-bold text-2xl">A+</p>
                <p className="text-[10px] text-gray-300 uppercase font-semibold">Counselling Excellence</p>
              </motion.div>

              {/* Floating Glass Card 2 */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-10 -left-10 p-5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-[#2ECED5] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#001334]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Official Partner</p>
                  <p className="text-[10px] text-gray-400">Top Global Universities</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}