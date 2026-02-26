import { motion } from "framer-motion";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

const ProgramNotFound = () => {
    return (
        <div className="relative flex flex-col justify-center items-center h-screen bg-[#030712] px-6 overflow-hidden">

            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#9A0044] rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600 rounded-full blur-[150px]"
                />
            </div>

            {/* Main Content Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center max-w-2xl p-12 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-2xl"
            >
                {/* Floating Icon with Halo */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative mb-8"
                >
                    <div className="absolute inset-0 bg-[#9A0044] blur-3xl opacity-20 scale-150" />
                    <HiOutlineExclamationCircle className="relative text-[100px] text-[#9A0044] drop-shadow-[0_0_15px_rgba(154,0,68,0.3)]" />
                </motion.div>

                {/* Typography Stack */}
                <div className="space-y-4 text-center">
                    <motion.h1
                        className="text-white text-4xl md:text-6xl font-black tracking-tight italic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        LOST IN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A0044] to-rose-400">VOID</span>
                    </motion.h1>

                    <motion.p
                        className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        The program you're seeking has drifted out of reach or never existed in this dimension.
                    </motion.p>
                </div>

                <motion.a
                    href="/"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(154,0,68,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative overflow-hidden px-10 py-4 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs rounded-full transition-all mt-4"
                >
                    {/* Visible text */}
                    <span className="relative z-20">Return to Portal</span>

                    {/* Sliding gradient overlay */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#9A0044] to-rose-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    />

                    {/* Hover text */}
                    <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                        Return to Portal
                    </span>
                </motion.a>
            </motion.div>

            {/* Subtle Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-20 bg-[length:100%_4px,3px_100%]" />
        </div>
    );
};

export default ProgramNotFound;