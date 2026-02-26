"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const BlogViewModal = ({ open, onClose, data }) => {
    if (!data) return null;

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                    />

                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed bottom-0 left-0 right-0 md:left-1/2 md:-translate-x-1/2 md:w-[800px] h-[90vh] bg-white z-50 rounded-t-2xl overflow-y-auto shadow-2xl"
                    >
                        <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
                            <h2 className="text-xl font-bold">{data.title}</h2>
                            <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-700">
                                <FiX size={24} />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            {data.image?.url && (
                                <img src={data.image.url} alt={data.title} className="w-full rounded-xl object-cover" />
                            )}
                            <div>
                                <p className="text-sm text-gray-500 mb-2">
                                    <strong>Date:</strong>{" "}
                                    {data?.createdAt
                                        ? new Date(data.createdAt).toLocaleDateString(undefined, {
                                            weekday: "short",
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })
                                        : "N/A"}
                                </p>
                                <p className="text-sm text-gray-500 mb-2"><strong>Slug:</strong> {data.slug}</p>
                                <p className="text-sm text-gray-500 mb-2"><strong>Category:</strong> {data.category}</p>
                                <p className="text-sm text-gray-500 mb-2"><strong>Author:</strong> {data.author}</p>
                                <p className="text-sm text-gray-500 mb-2">
                                    <strong>Status:</strong>{" "}
                                    {data.isPublished ? "Published" : "Draft"}
                                </p>
                                <p className="text-sm text-gray-500 mb-2"><strong>Introduction:</strong> {data.introduction}</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg">Sections</h3>
                                {data.sections?.length === 0 && <p className="text-gray-400">No sections added.</p>}
                                {data.sections?.map((s, i) => (
                                    <div key={i} className="p-4 border rounded-xl bg-gray-50">
                                        <p className="font-bold mb-1">{s.title}</p>
                                        <p>{s.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BlogViewModal;