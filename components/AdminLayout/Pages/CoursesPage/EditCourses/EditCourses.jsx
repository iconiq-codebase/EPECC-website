"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiPlus, FiTrash2, FiSave, FiLayers, FiLoader } from "react-icons/fi";
import api from '@/components/utils/axios'
import { useMyContext } from "@/components/utils/Context";

const EditCourses = ({ open, onClose, course }) => {
    const {
        setSuccessMsg,
        setErrorMsg,
        fetchCourses,
        loading,
        setLoading
    } = useMyContext()

    const initialFormState = {
        programName: "",
        shortdescription: "",
        fees: "",
        tag: "Undergraduate",
        university: "",
        location: "",
        duration: "",
        imageUrl: null,
        country: "",
        highlights: [{ title: "", description: "" }],
        eligibility: [""],
        requirements: [""],
        scholarships: [{ title: "", description: "" }],
        universities: [{ name: "", location: "", logoUrl: null }],
        testimonials: [{ photoUrl: null, name: "", batch: "", quote: "" }],
    };

    const [formData, setFormData] = useState(initialFormState);

    // Close on ESC
    useEffect(() => {
        const handleEsc = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    useEffect(() => {
        if (!open) {
            setFormData(initialFormState);
        }
    }, [open]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleArrayChange = (section, index, field, value, file = null) => {
        const updated = [...formData[section]];
        if (typeof updated[index] === "string") {
            updated[index] = value;
        } else if (file) {
            updated[index][field] = file;
        } else {
            updated[index][field] = value;
        }
        setFormData({ ...formData, [section]: updated });
    };

    const addItem = (section, template) => {
        setFormData({ ...formData, [section]: [...formData[section], template] });
    };

    const removeItem = (section, index) => {
        setFormData({
            ...formData,
            [section]: formData[section].filter((_, i) => i !== index),
        });
    };

    const inputStyle =
        "w-full bg-gray-50/50 border border-gray-200 p-3 rounded-lg text-sm transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-[#9A0044]/10 focus:border-[#9A0044] outline-none placeholder:!text-gray-400";
    const labelStyle =
        "text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 block";

    // =========================
    // Form Submission Handler
    // =========================
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const data = new FormData();

            // =========================
            // 1️⃣ Core Fields
            // =========================
            data.append("programName", formData.programName);
            data.append("shortdescription", formData.shortdescription);
            data.append("fees", formData.fees);
            data.append("tag", formData.tag);
            data.append("university", formData.university);
            data.append("location", formData.location);
            data.append("duration", formData.duration);
            data.append("country", formData.country);

            // =========================
            // 2️⃣ Program Image (IMPORTANT: use "program")
            // =========================
            if (formData.imageUrl) {
                data.append("program", formData.imageUrl);
            }

            // =========================
            // 3️⃣ Simple Arrays (JSON)
            // =========================
            data.append("highlights", JSON.stringify(formData.highlights));
            data.append("eligibility", JSON.stringify(formData.eligibility));
            data.append("requirements", JSON.stringify(formData.requirements));
            data.append("scholarships", JSON.stringify(formData.scholarships));

            // =========================
            // 4️⃣ Universities (FIXED)
            // =========================
            data.append("universities", JSON.stringify(
                formData.universities.map(u => ({
                    name: u.name,
                    location: u.location,
                    logoUrl: u.logoUrl && typeof u.logoUrl !== "object" ? u.logoUrl : null
                }))
            ));

            // Append ONLY new files
            formData.universities.forEach((u) => {
                if (u.logoUrl instanceof File) {
                    data.append("universities", u.logoUrl);
                }
            });


            // =========================
            // 5️⃣ Testimonials (FIXED)
            // =========================
            data.append("testimonials", JSON.stringify(
                formData.testimonials.map(t => ({
                    name: t.name,
                    batch: t.batch,
                    quote: t.quote,
                    photoUrl: t.photoUrl && typeof t.photoUrl !== "object" ? t.photoUrl : null
                }))
            ));

            formData.testimonials.forEach((t) => {
                if (t.photoUrl instanceof File) {
                    data.append("testimonials", t.photoUrl);
                }
            });

            // =========================
            // 6️⃣ API Call
            // =========================
            await api.put(`/programs/update/${course._id}`, data);

            setSuccessMsg("Program updated successfully!");
            fetchCourses(); // Refresh the courses list after updating a program
            setFormData(initialFormState);   // ✅ RESET FORM
            onClose(); // Close the modal after successful submission
        } catch (error) {
            console.error("Error updating program:", error);
            setErrorMsg(error?.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (course) {
            setFormData({
                ...course,
                imageUrl: null,
                universities: course.universities || [],
                testimonials: course.testimonials || []
            });
        }
    }, [course]);

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[60]"
                    />

                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full md:w-[800px] bg-white shadow-[calc(-20px_0_50px_rgba(0,0,0,0.1))] z-[70] flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-10 py-8 border-b border-gray-50">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#9A0044] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#9A0044]/20">
                                    <FiLayers size={24} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                                        Edit Program
                                    </h2>
                                    <p className="text-sm text-slate-400 font-medium">
                                        Configure institutional curriculum details
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="group p-2 hover:bg-red-50 rounded-full transition-colors"
                            >
                                <FiX className="text-gray-400 group-hover:text-red-500 transition-colors" size={24} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-1 overflow-y-auto px-10 py-8 scrollbar-thin scrollbar-thumb-gray-200">
                            <form className="space-y-12" onSubmit={handleSubmit}>
                                {/* 01. Core Info */}
                                <section>
                                    <header className="flex items-center gap-4 mb-8">
                                        <span className="text-3xl font-light text-gray-200">01</span>
                                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-800">
                                            Core Specifications
                                        </h3>
                                        <div className="flex-1 h-[1px] bg-gradient-to-r from-gray-100 to-transparent" />
                                    </header>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="col-span-2">
                                            <label className={labelStyle}>Program Name</label>
                                            <input
                                                required
                                                value={formData.programName}
                                                name="programName"
                                                placeholder="Global Executive MBA"
                                                className={inputStyle}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label className={labelStyle}>University</label>
                                            <input
                                                value={formData.university} required name="university" className={inputStyle} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label className={labelStyle}>Fees</label>
                                            <input value={formData.fees} required name="fees" className={inputStyle} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label className={labelStyle}>Duration</label>
                                            <input value={formData.duration} required name="duration" className={inputStyle} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label className={labelStyle}>Location</label>
                                            <input value={formData.location} required name="location" className={inputStyle} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label className={labelStyle}>Country</label>
                                            <input value={formData.country} required name="country" className={inputStyle} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label className={labelStyle}>Tag</label>
                                            <select value={formData.tag} required onChange={handleChange} name="tag" className={inputStyle}>
                                                <option value="Undergraduate">Undergraduate</option>
                                                <option value="Postgraduate">Postgraduate</option>
                                                <option value="Diploma">Diploma</option>
                                                <option value="PhD">PhD</option>
                                                <option value="Certificate">Certificate</option>
                                            </select>
                                        </div>
                                        <div className="col-span-2">
                                            <label className={labelStyle}>Program Summary</label>
                                            <textarea
                                                value={formData.shortdescription}
                                                required
                                                name="shortdescription"
                                                rows={3}
                                                className={`${inputStyle} resize-none`}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <label className={labelStyle}>Program Image</label>
                                            <input type="file" name="imageUrl" accept="image/*" onChange={handleChange} />
                                        </div>
                                    </div>
                                </section>

                                {/* 02. Highlights */}
                                <section>
                                    <header className="flex items-center gap-4 mb-6">
                                        <span className="text-3xl font-light text-gray-200">02</span>
                                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-800">
                                            Highlights
                                        </h3>
                                    </header>
                                    {formData.highlights.map((h, i) => (
                                        <div key={i} className="grid grid-cols-2 gap-4 mb-3">
                                            <input
                                                required
                                                placeholder="Title"
                                                value={h.title}
                                                className={inputStyle}
                                                onChange={(e) => handleArrayChange("highlights", i, "title", e.target.value)}
                                            />
                                            <input
                                                required
                                                placeholder="Description"
                                                value={h.description}
                                                className={inputStyle}
                                                onChange={(e) => handleArrayChange("highlights", i, "description", e.target.value)}
                                            />
                                            <button type="button" onClick={() => removeItem("highlights", i)} className="p-2 text-red-500 cursor-pointer">
                                                <FiTrash2 />
                                            </button>
                                        </div>
                                    ))}
                                    <button className="flex items-center gap-2 text-[#9A0044] cursor-pointer" type="button" onClick={() => addItem("highlights", { title: "", description: "" })}>
                                        <FiPlus /> Add Highlight
                                    </button>
                                </section>

                                {/* 03. Eligibility & Requirements */}
                                {["eligibility", "requirements"].map((section, idx) => (
                                    <section key={section}>
                                        <header className="flex items-center gap-4 mb-6">
                                            <span className="text-3xl font-light text-gray-200">0{idx + 3}</span>
                                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-800">
                                                {section}
                                            </h3>
                                        </header>

                                        {formData[section].map((item, index) => (
                                            <div key={index} className="flex gap-3 mb-2 items-center">
                                                <input
                                                    required
                                                    value={item}
                                                    placeholder={`Enter ${section} criteria`}
                                                    className={inputStyle}
                                                    onChange={(e) => handleArrayChange(section, index, null, e.target.value)}
                                                />
                                                <button type="button" onClick={() => removeItem(section, index)} className="p-2 text-red-500 cursor-pointer">
                                                    <FiTrash2 />
                                                </button>
                                            </div>
                                        ))}
                                        <button type="button" onClick={() => addItem(section, "")} className="flex gap-2 items-center text-[#9A0044] mb-4 cursor-pointer">
                                            <FiPlus /> Add Entry
                                        </button>
                                    </section>
                                ))}

                                {/* 04. Scholarships */}
                                <section>
                                    <header className="flex items-center gap-4 mb-6">
                                        <span className="text-3xl font-light text-gray-200">05</span>
                                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-800">
                                            Scholarships
                                        </h3>
                                    </header>
                                    {formData.scholarships.map((s, i) => (
                                        <div key={i} className="grid grid-cols-2 gap-4 mb-3">
                                            <input
                                                required
                                                placeholder="Title"
                                                value={s.title}
                                                className={inputStyle}
                                                onChange={(e) => handleArrayChange("scholarships", i, "title", e.target.value)}
                                            />
                                            <input
                                                required
                                                placeholder="Description"
                                                value={s.description}
                                                className={inputStyle}
                                                onChange={(e) => handleArrayChange("scholarships", i, "description", e.target.value)}
                                            />
                                            <button type="button" onClick={() => removeItem("scholarships", i)} className="p-2 text-red-500 cursor-pointer">
                                                <FiTrash2 />
                                            </button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => addItem("scholarships", { title: "", description: "" })} className="flex gap-2 items-center text-[#9A0044] mb-4 cursor-pointer">
                                        <FiPlus /> Add Scholarship
                                    </button>
                                </section>

                                {/* 05. Universities */}
                                <section>
                                    <header className="flex items-center gap-4 mb-6">
                                        <span className="text-3xl font-light text-gray-200">06</span>
                                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-800">
                                            Universities
                                        </h3>
                                    </header>
                                    {formData.universities.map((u, i) => (
                                        <div key={i} className="grid grid-cols-2 gap-4 mb-3 items-end">
                                            <input
                                                required
                                                placeholder="Name"
                                                value={u.name}
                                                className={inputStyle}
                                                onChange={(e) => handleArrayChange("universities", i, "name", e.target.value)}
                                            />
                                            <input
                                                required
                                                placeholder="Location"
                                                value={u.location}
                                                className={inputStyle}
                                                onChange={(e) => handleArrayChange("universities", i, "location", e.target.value)}
                                            />
                                            <input
                                                className="col-span-2 border border-gray-300 p-2"
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handleArrayChange("universities", i, "logoUrl", null, e.target.files[0])}
                                            />
                                            <button type="button" onClick={() => removeItem("universities", i)} className="p-2 text-red-500 cursor-pointer">
                                                <FiTrash2 />
                                            </button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => addItem("universities", { name: "", location: "", logoUrl: null })} className="flex gap-2 items-center text-[#9A0044] mb-4 cursor-pointer">
                                        <FiPlus /> Add University
                                    </button>
                                </section>

                                {/* 06. Testimonials */}
                                <section>
                                    <header className="flex items-center gap-4 mb-6">
                                        <span className="text-3xl font-light text-gray-200">07</span>
                                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-800">
                                            Testimonials
                                        </h3>
                                    </header>
                                    {formData.testimonials.map((t, i) => (
                                        <div key={i} className="grid grid-cols-3 gap-4 mb-3 items-end">
                                            <input
                                                required
                                                placeholder="Name"
                                                value={t.name}
                                                className={inputStyle}
                                                onChange={(e) => handleArrayChange("testimonials", i, "name", e.target.value)}
                                            />
                                            <input
                                                required
                                                placeholder="Batch"
                                                value={t.batch}
                                                className={inputStyle}
                                                onChange={(e) => handleArrayChange("testimonials", i, "batch", e.target.value)}
                                            />
                                            <input
                                                required
                                                placeholder="Quote"
                                                value={t.quote}
                                                className={inputStyle}
                                                onChange={(e) => handleArrayChange("testimonials", i, "quote", e.target.value)}
                                            />
                                            <input
                                                className="col-span-3 border border-gray-300 p-2"
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handleArrayChange("testimonials", i, "photoUrl", null, e.target.files[0])}
                                            />
                                            <button type="button" onClick={() => removeItem("testimonials", i)} className="p-2 text-red-500 cursor-pointer">
                                                <FiTrash2 />
                                            </button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => addItem("testimonials", { name: "", batch: "", quote: "", photoUrl: null })} className="flex gap-2 items-center text-[#9A0044] mb-4 cursor-pointer">
                                        <FiPlus /> Add Testimonial
                                    </button>
                                </section>

                                {/* Footer */}
                                <div className="border-t pt-6 flex gap-4">
                                    <button type="button" onClick={onClose} className="px-6 py-3 bg-red-100 text-red-500 rounded-lg">
                                        Cancel
                                    </button>
                                    <button type="submit" className="px-8 py-3 bg-slate-900 text-white rounded-xl flex items-center gap-2">
                                        {loading ? (
                                            <>
                                                <FiLoader className="animate-spin" /> Saving...
                                            </>
                                        ) : (
                                            <>
                                                <FiSave /> Save Program
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default EditCourses;
