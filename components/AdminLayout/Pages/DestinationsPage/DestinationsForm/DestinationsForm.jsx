"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiPlus, FiTrash2, FiSave, FiGlobe, FiLoader } from "react-icons/fi";
import api from "@/components/utils/axios";
import { useMyContext } from "@/components/utils/Context";

const DestinationsForm = ({ open, onClose, editData = null }) => {
    const { setSuccessMsg, setErrorMsg, fetchCountries } = useMyContext();

    const initialState = {
        name: "",
        tag: "",
        description: "",
        universities: "",
        courses: "",
        visa: "",
        visaDescription: "",
        workStudy: "",
        workStudyDescription: "",
        image: null,
        universitiesList: [],
        scholarships: [],
        faqs: [],
        testimonials: [],
    };

    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    // Prefill form if editData is provided
    useEffect(() => {
        if (editData) {
            setFormData({
                ...editData,
                image: null, // File input is always null for edit
                testimonials: editData.testimonials?.map(t => ({ ...t, image: null })) || [],
            });
        } else if (!open) {
            setFormData(initialState);
        }
    }, [open, editData]);

    // Escape key to close
    useEffect(() => {
        const esc = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", esc);
        return () => window.removeEventListener("keydown", esc);
    }, [onClose]);

    const inputStyle =
        "w-full bg-gray-50/50 border border-gray-200 p-3 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-[#9A0044]/10 focus:border-[#9A0044] outline-none";

    // Simple input change handler
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({ ...formData, [name]: files ? files[0] : value });
    };

    // Array input handler
    const handleArrayChange = (section, index, field, value, file = null) => {
        const updated = [...formData[section]];
        updated[index][field] = file || value;
        setFormData({ ...formData, [section]: updated });
    };

    const addItem = (section, template) => {
        setFormData({ ...formData, [section]: [...formData[section], template] });
    };

    const removeItem = (section, index) => {
        const updated = [...formData[section]];
        updated.splice(index, 1);
        setFormData({ ...formData, [section]: updated });
    };

    // Submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            const data = new FormData();

            // Append normal fields
            ["name","tag","description","universities","courses","visa","visaDescription","workStudy","workStudyDescription"].forEach(field => {
                if (formData[field] !== null) data.append(field, formData[field]);
            });

            // Append main country image if exists
            if (formData.image) data.append("country", formData.image);

            // Append nested arrays as JSON strings
            ["universitiesList","scholarships","faqs"].forEach(section => {
                const filtered = formData[section].filter(item => Object.values(item).some(v => v));
                data.append(section, JSON.stringify(filtered));
            });

            // Handle testimonials separately (JSON + files)
            const testimonialsData = formData.testimonials.map(t => {
                const { image, ...rest } = t;
                return rest;
            });
            data.append("testimonials", JSON.stringify(testimonialsData));
            formData.testimonials.forEach(t => {
                if (t.image) data.append("testimonials", t.image);
            });

            // Decide API endpoint
            const endpoint = editData
                ? `/countries/update/${editData._id}`
                : "/countries/create";

            const method = editData ? api.put : api.post;

            await method(endpoint, data);

            setSuccessMsg(`Country ${editData ? "updated" : "created"} successfully!`);
            fetchCountries();
            onClose();

        } catch (error) {
            console.error("Destination error:", error);
            setErrorMsg(error?.response?.data?.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full md:w-[900px] bg-white shadow-2xl z-[70] flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-10 py-8 border-b border-gray-50">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#9A0044] rounded-2xl flex items-center justify-center text-white shadow-lg">
                                    <FiGlobe size={22} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold tracking-tight">
                                        Destination Architect
                                    </h2>
                                    <p className="text-sm text-slate-400">
                                        Configure country & study ecosystem
                                    </p>
                                </div>
                            </div>
                            <button onClick={onClose}>
                                <FiX size={24} className="text-gray-400 hover:text-red-500" />
                            </button>
                        </div>

                        {/* Form Body */}
                        <div className="flex-1 overflow-y-auto px-10 py-8">
                            <form onSubmit={handleSubmit} className="space-y-12">

                                {/* 01 Core Identity */}
                                <section>
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6">01 Core Identity</h3>
                                    <div className="grid grid-cols-2 gap-6">
                                        <input
                                            name="name"
                                            placeholder="Country Name"
                                            required
                                            className={inputStyle}
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        <input
                                            name="tag"
                                            placeholder="Tag (e.g. Popular)"
                                            className={inputStyle}
                                            value={formData.tag}
                                            onChange={handleChange}
                                        />
                                        <input
                                            name="universities"
                                            placeholder="Universities Name"
                                            className={inputStyle}
                                            value={formData.universities}
                                            onChange={handleChange}
                                        />
                                        <input
                                            name="courses"
                                            placeholder="Courses Name"
                                            className={inputStyle}
                                            value={formData.courses}
                                            onChange={handleChange}
                                        />
                                        <textarea
                                            name="description"
                                            placeholder="Country Description"
                                            className={`${inputStyle} col-span-2`}
                                            rows={3}
                                            value={formData.description}
                                            onChange={handleChange}
                                        />
                                        <input
                                            type="file"
                                            name="image"
                                            accept="image/*"
                                            className="col-span-2"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </section>

                                {/* 02 Visa & Work */}
                                <section>
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6">02 Visa & Work Regulations</h3>
                                    <div className="grid grid-cols-2 gap-6">
                                        <input name="visa" placeholder="Visa Title" className={inputStyle} value={formData.visa} onChange={handleChange} />
                                        <input name="workStudy" placeholder="Work While Study" className={inputStyle} value={formData.workStudy} onChange={handleChange} />
                                        <textarea name="visaDescription" placeholder="Visa Description" className={inputStyle} rows={3} value={formData.visaDescription} onChange={handleChange} />
                                        <textarea name="workStudyDescription" placeholder="Work Study Description" className={inputStyle} rows={3} value={formData.workStudyDescription} onChange={handleChange} />
                                    </div>
                                </section>

                                {/* 03 Universities List */}
                                <section>
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6">03 Universities</h3>
                                    {formData.universitiesList.map((u, i) => (
                                        <div key={i} className="grid grid-cols-2 gap-4 mb-4">
                                            <input placeholder="University Name" className={inputStyle} value={u.name} onChange={e => handleArrayChange("universitiesList", i, "name", e.target.value)} />
                                            <input placeholder="Short Description" className={inputStyle} value={u.description} onChange={e => handleArrayChange("universitiesList", i, "description", e.target.value)} />
                                            <button type="button" onClick={() => removeItem("universitiesList", i)} className="text-red-500"><FiTrash2 /></button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => addItem("universitiesList", { name: "", description: "" })} className="text-[#9A0044] flex items-center gap-2">
                                        <FiPlus /> Add University
                                    </button>
                                </section>

                                {/* 04 Scholarships */}
                                <section>
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6">04 Scholarships</h3>
                                    {formData.scholarships.map((s, i) => (
                                        <div key={i} className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl">
                                            <input placeholder="Scholarship Name" className={inputStyle} value={s.name} onChange={e => handleArrayChange("scholarships", i, "name", e.target.value)} />
                                            <input placeholder="Eligibility" className={inputStyle} value={s.eligibility} onChange={e => handleArrayChange("scholarships", i, "eligibility", e.target.value)} />
                                            <input placeholder="Official Link" className={`${inputStyle} col-span-2`} value={s.link} onChange={e => handleArrayChange("scholarships", i, "link", e.target.value)} />
                                            <textarea placeholder="Description" rows={3} className={`${inputStyle} col-span-2`} value={s.description} onChange={e => handleArrayChange("scholarships", i, "description", e.target.value)} />
                                            <button type="button" onClick={() => removeItem("scholarships", i)} className="text-red-500"><FiTrash2 /></button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => addItem("scholarships", { name: "", description: "", eligibility: "", link: "" })} className="text-[#9A0044] flex items-center gap-2">
                                        <FiPlus /> Add Scholarship
                                    </button>
                                </section>

                                {/* 05 FAQs */}
                                <section>
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6">05 FAQs</h3>
                                    {formData.faqs.map((faq, i) => (
                                        <div key={i} className="mb-6 p-4 rounded-xl">
                                            <input placeholder="Question" className={`${inputStyle} mb-3`} value={faq.question} onChange={e => handleArrayChange("faqs", i, "question", e.target.value)} />
                                            <textarea placeholder="Answer" rows={3} className={inputStyle} value={faq.answer} onChange={e => handleArrayChange("faqs", i, "answer", e.target.value)} />
                                            <button type="button" onClick={() => removeItem("faqs", i)} className="text-red-500 mt-3"><FiTrash2 /></button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => addItem("faqs", { question: "", answer: "" })} className="text-[#9A0044] flex items-center gap-2">
                                        <FiPlus /> Add FAQ
                                    </button>
                                </section>

                                {/* 06 Testimonials */}
                                <section>
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6">06 Student Testimonials</h3>
                                    {formData.testimonials.map((t, i) => (
                                        <div key={i} className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl">
                                            <input placeholder="Student Name" className={inputStyle} value={t.name} onChange={e => handleArrayChange("testimonials", i, "name", e.target.value)} />
                                            <input placeholder="University" className={inputStyle} value={t.university} onChange={e => handleArrayChange("testimonials", i, "university", e.target.value)} />
                                            <input placeholder="Program" className={inputStyle} value={t.program} onChange={e => handleArrayChange("testimonials", i, "program", e.target.value)} />
                                            <input placeholder="Country" className={inputStyle} value={t.country} onChange={e => handleArrayChange("testimonials", i, "country", e.target.value)} />
                                            <textarea placeholder="Quote" rows={3} className={`${inputStyle} col-span-2`} value={t.quote} onChange={e => handleArrayChange("testimonials", i, "quote", e.target.value)} />
                                            <input type="file" accept="image/*" className="col-span-2" onChange={e => handleArrayChange("testimonials", i, "image", null, e.target.files[0])} />
                                            <button type="button" onClick={() => removeItem("testimonials", i)} className="text-red-500"><FiTrash2 /></button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={() => addItem("testimonials", { name: "", university: "", program: "", country: "", quote: "", image: null })} className="text-[#9A0044] flex items-center gap-2">
                                        <FiPlus /> Add Testimonial
                                    </button>
                                </section>

                                {/* Footer */}
                                <div className="border-t pt-6 flex gap-4">
                                    <button type="button" onClick={onClose} className="px-6 py-3 bg-red-100 text-red-500 rounded-lg">Cancel</button>
                                    <button type="submit" disabled={loading} className="px-8 py-3 bg-slate-900 text-white rounded-xl flex items-center gap-2">
                                        {loading ? (<><FiLoader className="animate-spin" /> Saving...</>) : (<><FiSave /> Save Destination</>)}
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

export default DestinationsForm;