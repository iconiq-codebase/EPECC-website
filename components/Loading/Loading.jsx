import { motion } from "framer-motion";

const Loading = () => {
  // Container variants for staggered child animations
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const barVariants = {
    initial: { scaleY: 0.5, opacity: 0.3 },
    animate: {
      scaleY: [1, 2, 1],
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-screen bg-[#050505] overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* The Audio-Visualizer Style Bars */}
        <motion.div 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex items-center gap-3 h-20 mb-10"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              variants={barVariants}
              className="w-1.5 h-10 bg-gradient-to-t from-cyan-600 via-cyan-400 to-white rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"
            />
          ))}
        </motion.div>

        {/* Minimalist Text with Letter Spacing */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium tracking-[0.3em] text-cyan-100/70 uppercase">
            Initializing
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;