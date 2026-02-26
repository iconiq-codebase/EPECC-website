"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiTrash2, FiSave } from "react-icons/fi";
import api from "@/components/utils/axios";

const BlogDrawerForm = ({ open, onClose, editData = null, refresh }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
    introduction: "",
    image: null,
    isPublished: true,
    sections: [{ title: "", content: "" }],
  });

  useEffect(() => {
    if (editData) {
      setFormData({ ...editData, image: null });
    } else if (!open) {
      setFormData({
        title: "",
        category: "",
        author: "",
        introduction: "",
        image: null,
        isPublished: true,
        sections: [{ title: "", content: "" }],
      });
    }
  }, [editData, open]);

  const labelStyle = "text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1 block";
  const inputStyle =
    "w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-sm transition-all focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none";

  const addSection = () => {
    setFormData((prev) => ({ ...prev, sections: [...prev.sections, { title: "", content: "" }] }));
  };

  const updateSection = (index, field, value) => {
    const updated = [...formData.sections];
    updated[index][field] = value;
    setFormData({ ...formData, sections: updated });
  };

  const removeSection = (index) => {
    const updated = [...formData.sections];
    updated.splice(index, 1);
    setFormData({ ...formData, sections: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "sections" && key !== "image") data.append(key, value);
      });
      if (formData.image) data.append("image", formData.image);

      data.append("sections", JSON.stringify(formData.sections));

      const endpoint = editData ? `/blogs/update/${editData._id}` : "/blogs/create";
      await (editData ? api.put : api.post)(endpoint, data);
      refresh();
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[900px] bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="px-8 py-5 border-b flex justify-between items-center bg-white sticky top-0 z-10">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">{editData ? "Edit Blog" : "New Blog"}</h2>
                <p className="text-sm text-gray-500 font-medium">Manage your blog post content.</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400">
                <FiX size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-1 overflow-y-auto">
              {/* Main Form */}
              <div className="flex-[2] p-8 space-y-10 border-r border-gray-100 md:max-h-full md:overflow-y-scroll no-scrollbar">
                <section className="space-y-4">
                  <label className={labelStyle}>Title</label>
                  <input
                    name="title"
                    placeholder="Enter title..."
                    className="w-full text-2xl font-bold border-none outline-none p-0 focus:ring-0"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                  <label className={labelStyle}>Introduction</label>
                  <textarea
                    name="introduction"
                    rows={4}
                    className={inputStyle}
                    value={formData.introduction}
                    onChange={(e) => setFormData({ ...formData, introduction: e.target.value })}
                  />
                </section>

                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Sections</h3>
                  {formData.sections.map((section, index) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={index}
                      className="relative bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
                    >
                      <button
                        type="button"
                        onClick={() => removeSection(index)}
                        className="absolute top-3 right-3 cursor-pointer text-red-400 hover:text-red-600"
                      >
                        <FiTrash2 />
                      </button>
                      <input
                        type="text"
                        placeholder="Section title"
                        className={`${inputStyle} mb-2`}
                        value={section.title}
                        onChange={(e) => updateSection(index, "title", e.target.value)}
                      />
                      <textarea
                        rows={3}
                        placeholder="Section content"
                        className={inputStyle}
                        value={section.content}
                        onChange={(e) => updateSection(index, "content", e.target.value)}
                      />
                    </motion.div>
                  ))}
                  <button
                    type="button"
                    onClick={addSection}
                    className="mt-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl font-medium hover:bg-indigo-100 transition"
                  >
                    + Add Section
                  </button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="flex-1 bg-gray-50/50 p-8 space-y-8">
                <div className="space-y-5">
                  <div>
                    <label className={labelStyle}>Category</label>
                    <input
                      name="category"
                      className={inputStyle}
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      placeholder="e.g. Technology"
                    />
                  </div>
                  <div>
                    <label className={labelStyle}>Author</label>
                    <input
                      name="author"
                      className={inputStyle}
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      placeholder="Author name"
                    />
                  </div>
                  <div>
                    <label className={labelStyle}>Featured Image</label>
                    <div className="h-32 bg-gray-100 rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center relative overflow-hidden">
                      {formData.image ? (
                        <span className="text-xs text-indigo-600 font-bold">{formData.image.name}</span>
                      ) : (
                        <span className="text-gray-300">Upload image</span>
                      )}
                      <input
                        type="file"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-indigo-600 rounded-2xl text-white shadow-xl shadow-indigo-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium">Published?</span>
                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-white"
                        checked={formData.isPublished}
                        onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-white text-indigo-600 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all disabled:opacity-50"
                    >
                      {loading ? "Saving..." : <><FiSave /> Save Changes</>}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BlogDrawerForm;