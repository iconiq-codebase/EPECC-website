"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiCheckCircle, FiXCircle, FiX } from "react-icons/fi";

export default function Notification({ type = "success", message = "", duration = 4000, onClose }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => handleClose(), duration);
            return () => clearTimeout(timer);
        }
    }, [duration]);

    const handleClose = () => {
        setVisible(false);
        if (onClose) onClose();
    };

    const colors = {
        success: {
            bg: "bg-green-50",
            border: "border-green-400",
            text: "text-green-800",
            icon: <FiCheckCircle className="w-6 h-6" />,
        },
        error: {
            bg: "bg-red-50",
            border: "border-red-400",
            text: "text-red-800",
            icon: <FiXCircle className="w-6 h-6" />,
        },
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`fixed top-5 right-5 z-50 max-w-sm w-full ${colors[type].bg} border-l-4 ${colors[type].border} shadow-lg rounded-xl overflow-hidden`}
                >
                    <div className="flex items-start p-4">
                        <div className={`flex-shrink-0 ${colors[type].text} mr-3`}>{colors[type].icon}</div>
                        <div className="flex-1">
                            <p className={`text-sm font-medium ${colors[type].text}`}>{message}</p>
                        </div>
                        <button
                            onClick={handleClose}
                            className={`ml-3 text-gray-400 hover:text-gray-600 transition cursor-pointer`}
                        >
                            <FiX className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
