'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMyContext } from '@/components/utils/Context';

const BlogDetailsPage = ({ slug }) => {

    const { blogs } = useMyContext()

    const blog = blogs.find((b) => b.slug === slug)

    if (!blog) {
        return (
            <div className="text-center py-20 text-white h-screen flex items-center justify-center" >
                Blog not found.
            </div >
        )
    }

    return (
        <div className="bg-[#001334] text-white min-h-screen">

            {/* ================= HERO ================= */}
            <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src={blog.image.url}
                    alt={blog.title}
                    fill
                    className="object-cover brightness-75"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-[#001334] z-10" />

                <div className="relative z-20 max-w-4xl px-6 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="uppercase text-sm tracking-widest text-[#9A0044] mb-4 font-semibold"
                    >
                        {blog.category}
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
                    >
                        {blog.title}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-6 text-white/70 text-sm md:text-base"
                    >
                        By <span className="text-cyan-400 font-semibold">{blog.author}</span> • {blog.date}
                    </motion.div>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="max-w-4xl mx-auto px-6 md:px-0 py-16">

                {/* Article Content */}
                <div className="space-y-8 text-white/80 leading-relaxed text-lg">

                    <p>{blog.introduction}</p>

                    {
                        blog.sections.map((item, i) => (
                            <div key={i}>
                                <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12">
                                    {item.title}
                                </h2>
                                <p>{item.content}</p>
                            </div>
                        ))
                    }

                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-white/50">
                    © {new Date().getFullYear()} All Rights Reserved
                </div>
            </section>
        </div>
    );
};

export default BlogDetailsPage;
