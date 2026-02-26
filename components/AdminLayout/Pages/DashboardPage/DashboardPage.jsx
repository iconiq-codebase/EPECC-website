"use client";

import { motion } from "framer-motion";
import AdminLayout from "../../AdminLayout";

const DashboardPage = () => {
    const stats = [
        { label: "Academic Courses", value: 32, trend: "Stable", color: "from-cyan-600 to-blue-500" },
        { label: "Global Destinations", value: 15, trend: "+2", color: "from-purple-600 to-indigo-500" },
        { label: "Published Insights", value: 8, trend: "Weekly", color: "from-orange-500 to-yellow-500" },
    ];

    return (
        <AdminLayout>
            <div className="space-y-10">
                {/* 1. Overview Cards with Staggered Animation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#9A0044]/5 transition-all duration-500 overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-[0.03] rounded-bl-full group-hover:opacity-10 transition-opacity`} />

                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">{stat.label}</h3>
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-50 text-gray-500 border border-gray-100 italic">
                                    {stat.trend}
                                </span>
                            </div>
                            <p className="text-3xl font-black text-gray-900 tracking-tighter">{stat.value}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
};

export default DashboardPage;