"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Destinations", href: "/destinations" },
  { name: "Services", href: "/services" },
  { name: "Study Abroad", href: "/study-abroad" },
  { name: "Stories", href: "/stories" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  // Framer Motion variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }),
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const applyButtonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, type: "spring", stiffness: 120 } },
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 
        ${open ? "bg-[#001334] py-3" : scrolled ? "bg-[#001334]/80 py-3 border-b backdrop-blur-md" : "bg-transparent py-5"} border-white/10`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <Link href="/" className="relative z-50 flex items-center gap-2 group">
              <span className="text-2xl font-bold text-white tracking-tight">
                EPECC<span className="text-[#B20055]">.</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  custom={idx}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`}
                    onMouseEnter={() => setHoveredPath(item.href)}
                    onMouseLeave={() => setHoveredPath(null)}
                  >
                    {hoveredPath === item.href && (
                      <motion.div
                        layoutId="navbar-pill"
                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {isActive && (
                      <motion.span
                        layoutId="active-dot"
                        className="absolute -bottom-1 left-1/2 w-1 h-1 bg-[#2ECED5] rounded-full -translate-x-1/2"
                      />
                    )}

                    {item.name}
                  </Link>
                </motion.div>
              );
            })}

            {/* Apply Now Button */}
            <motion.div variants={applyButtonVariants} initial="hidden" animate="visible" className="pl-6">
              <Link
                href="/apply"
                className="relative overflow-hidden group rounded-full px-6 py-2.5 text-sm font-semibold bg-[#B20055] text-white shadow-lg shadow-[#B20055]/30 hover:bg-[#9a0044] hover:shadow-[#B20055]/50 transition-all duration-300 flex items-center gap-2"
              >
                <span>Apply Now</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative z-50 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] max-h-screen overflow-scroll bg-[#001334]/95 z-40 lg:hidden flex flex-col pt-4 border-t border-white/10"
          >
            <div className="flex flex-col px-6 space-y-2 ">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block text-lg font-medium px-4 py-3 rounded-xl transition-all ${pathname === item.href
                        ? "bg-white/10 text-[#2ECED5] border border-white/5"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <Link
                  href="/apply"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center rounded-xl py-4 text-base font-bold bg-[#B20055] text-white shadow-lg shadow-[#B20055]/20 active:scale-95 transition-all"
                >
                  Start Application
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
