"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'About Us',
            href: '/about'
        },
        {
            label: 'Destinations',
            href: '/destinations'
        },
        {
            label: 'Services',
            href: '/services'
        },
        {
            label: 'Study Abroad',
            href: '/study-abroad'
        },
        {
            label: 'Stories',
            href: '/stories'
        },
        {
            label: 'Blogs',
            href: '/blogs'
        },
        {
            label: 'Contact Us',
            href: '/contact'
        }
    ]

    return (
        <footer className="relative bg-[#001334] text-gray-300 pt-20 pb-10 overflow-hidden font-sans">
            {/* Decorative Background Elements (Glow Effects) */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#B20055]/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">

                    {/* 1. Brand & About (Span 4 cols) */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="inline-block">
                            <h2 className="text-3xl font-bold text-white tracking-tight">
                                EPECC<span className="text-[#B20055]">.</span>
                            </h2>
                        </Link>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Expert study abroad consultancy helping students achieve global education goals.
                            We provide premium guidance on universities, visas, and strategic career planning.
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-3 pt-2">
                            {[
                                { icon: FaFacebookF, href: "#", label: "Facebook" },
                                { icon: FaInstagram, href: "#", label: "Instagram" },
                                { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                                { icon: FaTwitter, href: "#", label: "Twitter" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#B20055] hover:border-[#B20055] hover:text-white transition-all duration-300 group"
                                >
                                    <social.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Quick Links (Span 2 cols) */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-[#B20055] hover:translate-x-2 transition-all duration-300 inline-block"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Contact Info (Span 3 cols) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-lg font-semibold text-white mb-6">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-400">
                                <FaMapMarkerAlt className="w-5 h-5 text-[#B20055] mt-1 shrink-0" />
                                <span>123 Main Street,<br />Kathmandu, Nepal</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <FaPhoneAlt className="w-4 h-4 text-[#B20055] shrink-0" />
                                <a href={`tel:${process.env.NEXT_PUBLIC_NUMBER}`} className="hover:text-white transition">{process.env.NEXT_PUBLIC_NUMBER}</a>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <FaEnvelope className="w-4 h-4 text-[#B20055] shrink-0" />
                                <a href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_MAIL}`} className="hover:text-white transition">{process.env.NEXT_PUBLIC_SUPPORT_MAIL}</a>
                            </li>
                        </ul>
                    </div>

                    {/* 4. Newsletter (Span 3 cols) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-lg font-semibold text-white mb-6">Stay Updated</h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Subscribe to receive exclusive updates on global study programs.
                        </p>
                        <form className="relative group">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-5 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B20055]/50 focus:border-[#B20055] transition-all"
                            />
                            <button
                                type="submit"
                                className="absolute right-1.5 top-1.5 bg-[#B20055] hover:bg-[#9a0044] text-white p-2 rounded-full transition-colors shadow-lg shadow-[#B20055]/30"
                                aria-label="Subscribe"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {currentYear} EPECC. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}