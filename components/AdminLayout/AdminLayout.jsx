"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import api from "@/components/utils/axios";
import { FaBookOpen, FaNewspaper, FaSignOutAlt } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Notification from "../Notification/Notification";
import { useMyContext } from "../utils/Context";

// Icons
const DashboardIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
    </svg>
);

export default function AdminLayout({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(true); // Collapsible state
    const {
        successMsg,
        setSuccessMsg,
        errorMsg,
        setErrorMsg
    } = useMyContext()

    const isLoginPage = pathname === "/admin/login";

    useEffect(() => {
        if (isLoginPage) {
            setLoading(false);
            return;
        }

        const checkAuth = async () => {
            try {
                const res = await api.get("/admin/me");
                setAdmin(res.data);
            } catch (error) {
                router.replace("/admin/login");
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [pathname, router, isLoginPage]);

    const logout = async () => {
        try {
            await api.post("/admin/logout");
            setSuccessMsg("Log out Successfull !")
            setTimeout(() => {
                router.push('/')
            }, 1000);
        } catch (error) {
            console.log(error)
            setErrorMsg('Something went wrong!')
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#000a1a]">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="h-10 w-10 border-2 border-[#9A0044] border-t-transparent rounded-full"
                />
            </div>
        );
    }

    if (isLoginPage) return <>{children}</>;
    if (!admin) return null;

    const navItems = [
        { label: "Dashboard", href: "/admin/dashboard", icon: <DashboardIcon /> },
        { label: "Manage Courses", href: "/admin/courses", icon: <FaBookOpen /> },
        { label: "Manage Destiantions", href: "/admin/destinations", icon: <FaMapLocation /> },
        { label: "Manage Blogs", href: "/admin/blogs", icon: <FaNewspaper /> },
    ];

    return (
        <div className="flex min-h-screen bg-[#f8fafc]">
            {/* Sidebar */}
            <aside
                className={`max-h-screen bg-[#000a1a] text-white flex flex-col relative z-20 transition-all duration-300 ${sidebarOpen ? "w-72" : "w-20"
                    }`}
            >
                {/* Sidebar Header */}
                <div className="p-4 flex items-center justify-between border-b border-white/10">
                    {sidebarOpen && (
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-[#9A0044] rounded-lg flex items-center justify-center shadow-lg shadow-[#9A0044]/30">
                                <span className="font-black text-sm">EPPEC</span>
                            </div>
                            <h2 className="text-lg font-black tracking-tighter uppercase italic">
                                Command<span className="text-[#9A0044]">Center</span>
                            </h2>
                        </div>
                    )}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-1 rounded-md hover:bg-white/10 transition-colors"
                    >
                        <svg
                            className={`w-5 h-5 transform transition-transform ${sidebarOpen ? "" : "rotate-180"
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>

                {/* Nav Items */}
                <nav className="flex-1 p-4 space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative flex items-center space-x-4 p-3 rounded-xl transition-all duration-300 group ${isActive ? "bg-white/10 text-white" : "text-white/40 hover:text-white/70"
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-glow"
                                        className="absolute left-0 w-1 h-6 bg-[#9A0044] rounded-full"
                                    />
                                )}
                                <span
                                    className={`transition-colors ${isActive ? "text-[#9A0044]" : "group-hover:text-[#9A0044]"
                                        }`}
                                >
                                    {item.icon}
                                </span>
                                {sidebarOpen && <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>}
                            </Link>
                        );
                    })}
                </nav>

                {/* Logout */}
                <div className="mt-auto p-4 border-t border-white/5 flex items-center justify-center">
                    <button
                        onClick={logout}
                        className="cursor-pointer flex items-center space-x-3 text-red-400/60 hover:text-red-400 transition-colors text-xs font-black uppercase tracking-[0.2em]"
                    >
                        <FaSignOutAlt size={18} />
                        {sidebarOpen && <span>Log out</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden h-screen">
                <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-6 md:px-10">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Security Clearance: Admin</p>
                        <h1 className="text-sm font-bold text-gray-800">
                            Welcome, <span className="text-[#9A0044]">{admin.name}</span>
                        </h1>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[#9A0044] font-bold">
                            {admin.name.charAt(0)}
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-[#f8fafc]">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                        {children}
                    </motion.div>
                </main>
            </div>

            {successMsg && (
                <Notification type="success" message={successMsg} onClose={() => setSuccessMsg("")} />
            )}
            {errorMsg && (
                <Notification type="error" message={errorMsg} onClose={() => setErrorMsg("")} />
            )}
        </div>
    );
}
