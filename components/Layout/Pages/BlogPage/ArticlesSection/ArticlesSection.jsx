'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useMyContext } from '@/components/utils/Context';

const ArticlesSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const { blogs } = useMyContext()

    const categories = ['All', 'Country Guides', 'University Rankings', 'Scholarships Updates', 'Study Tips & Lifestyle Guides'];

    const filteredArticles = useMemo(() => {
        return blogs.filter(article => {
            const matchesCategory =
                selectedCategory === 'All' || article.category === selectedCategory;

            const matchesSearch =
                article.title?.toLowerCase().includes(searchTerm.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [blogs, selectedCategory, searchTerm]);

    return (
        <section className="w-full bg-[#000a1a] py-32 px-6 md:px-20 text-white min-h-screen">
            <div className="max-w-7xl mx-auto">

                {/* 1. Header & Refined Search */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[#9A0044] font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
                        >
                            Curated Content
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-6xl font-black tracking-tight"
                        >
                            Expert <span className="text-white/40 italic font-light">Insights.</span>
                        </motion.h2>
                    </div>

                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Search perspectives..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full md:w-80 px-0 py-3 bg-transparent border-b border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#9A0044] transition-all duration-500"
                        />
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#9A0044] group-focus-within:w-full transition-all duration-500" />
                    </div>
                </div>

                {/* 2. Sleek Category Navigation */}
                <div className="flex flex-wrap gap-x-8 gap-y-4 mb-20 border-b border-white/5 pb-6">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${selectedCategory === cat ? 'text-white' : 'text-white/40 hover:text-white/70'
                                }`}
                        >
                            {cat}
                            {selectedCategory === cat && (
                                <motion.div
                                    layoutId="activeCategory"
                                    className="absolute -bottom-[26px] left-0 right-0 h-1 bg-[#9A0044]"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* 3. Article Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    <AnimatePresence mode='popLayout'>
                        {filteredArticles.map((article, index) => (
                            <motion.div
                                key={article.title}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                {/* Image Container with "Hover Zoom" */}
                                <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-6 bg-white/5">
                                    <Link href={`/blog/${article.slug}`}>
                                        <Image
                                            src={article.image?.url || "/placeholder.jpg"}
                                            alt={article.title}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                        />
                                    </Link>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#000a1a] via-transparent to-transparent opacity-60" />
                                </div>

                                {/* Content Hierarchy */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[#9A0044] text-[10px] font-black uppercase tracking-widest">
                                            {article.category}
                                        </span>
                                        <span className="text-white/30 text-[10px] uppercase tracking-widest font-medium">
                                            {new Date(article.createdAt).toLocaleDateString(undefined, {
                                                weekday: "short",
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold leading-tight group-hover:text-[#9A0044] transition-colors duration-300">
                                        <Link href={`/blog/${article.slug}`}>
                                            {article.title}
                                        </Link>
                                    </h3>

                                    <p className="text-white/50 text-sm leading-relaxed line-clamp-2 font-light">
                                        {article.introduction}
                                    </p>

                                    <div className="pt-2">
                                        <Link href={`/blog/${article.slug}`}>
                                            <span className="inline-flex items-center text-xs font-bold tracking-widest uppercase border-b border-[#9A0044]/0 group-hover:border-[#9A0044] transition-all duration-300 pb-1">
                                                View Analysis
                                                <svg className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredArticles.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-20 text-center border border-dashed border-white/10 rounded-2xl"
                    >
                        <p className="text-white/40 font-light italic">No articles match your current criteria.</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ArticlesSection;