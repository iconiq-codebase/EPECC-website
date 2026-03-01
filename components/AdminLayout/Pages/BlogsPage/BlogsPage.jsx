import { FiPlus, FiEdit, FiEye, FiTrash, FiSearch, FiMoreVertical } from "react-icons/fi";
import api from "@/components/utils/axios";
import { useMyContext } from "@/components/utils/Context";
import BlogDrawerForm from "./BlogDrawerForm/BlogDrawerForm";
import BlogViewModal from "./BlogViewModal/BlogViewModal";
import { useState } from "react";

export default function BlogsPage() {
  const { blogs, fetchBlogs } = useMyContext();
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [viewData, setViewData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const refresh = () => fetchBlogs();

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      setDeleteId(id);
      await api.delete(`/blogs/delete/${id}`);
      refresh();
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setDeleteId(null);
    }
  };

  const handleEdit = (blog) => {
    setEditData(blog);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-6 md:p-10">
      {/* --- Header Section --- */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Content Studio</h1>
            <p className="text-slate-500 mt-1 font-medium">
              Create, curate, and optimize your publication's reach.
            </p>
          </div>
          <button
            onClick={() => { setEditData(null); setOpen(true); }}
            className="group flex items-center gap-2 bg-[#000a1a] text-white px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-200 active:scale-95"
          >
            <FiPlus className="text-lg group-hover:rotate-90 transition-transform" />
            <span>New Publication</span>
          </button>
        </div>
      </div>

      {/* --- Table Container --- */}
      <div className="max-w-7xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-slate-100 bg-white flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative w-full sm:w-72">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter articles..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
            Total: {blogs.length} Articles
          </div>
        </div>

        <div className="overflow-x-auto">
          {blogs.length === 0 ? (
            <div className="py-20 text-center">
              <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiEdit className="text-slate-300 text-2xl" />
              </div>
              <p className="text-slate-400 font-medium">No manuscripts found.</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 text-[11px] uppercase tracking-wider text-slate-500 font-bold border-b border-slate-100">
                  <th className="px-6 py-4">Article Details</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">View</th>
                  <th className="px-6 py-4 ">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {blogs.map((blog) => (
                  <tr key={blog._id} className="group hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                          {blog.title}
                        </span>
                        <span className="text-xs text-slate-400 mt-0.5 font-normal">By {blog.author}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-slate-600 px-2.5 py-1 bg-slate-100 rounded-md">
                        {blog.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${blog.isPublished ? "bg-emerald-500 animate-pulse" : "bg-amber-400"}`} />
                        <span className={`text-xs font-bold ${blog.isPublished ? "text-emerald-700" : "text-amber-700"}`}>
                          {blog.isPublished ? "LIVE" : "DRAFT"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-slate-600">
                        <button
                          onClick={() => setViewData(blog)}
                          className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                          title="Preview"
                        >
                          <FiEye size={18} />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">

                        <button
                          onClick={() => handleEdit(blog)}
                          className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                          title="Edit"
                        >
                          <FiEdit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(blog._id)}
                          className={`p-2 rounded-lg transition-all ${deleteId === blog._id ? "text-slate-300" : "text-slate-400 hover:text-red-600 hover:bg-red-50"}`}
                          title="Delete"
                          disabled={deleteId === blog._id}
                        >
                          {deleteId === blog._id ? <div className="w-4 h-4 border-2 border-slate-300 border-t-slate-600 animate-spin rounded-full" /> : <FiTrash size={18} />}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-slate-50/30 border-t border-slate-100">
          <p className="text-[11px] text-slate-400 font-medium">
            Last synced: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>

      {/* Modals */}
      <BlogDrawerForm open={open} onClose={() => setOpen(false)} editData={editData} refresh={refresh} />
      <BlogViewModal open={!!viewData} onClose={() => setViewData(null)} data={viewData} />
    </div>
  );
}