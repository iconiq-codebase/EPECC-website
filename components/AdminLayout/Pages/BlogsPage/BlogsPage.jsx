import { FiPlus, FiEdit, FiEye, FiTrash } from "react-icons/fi";
import api from "@/components/utils/axios";
import { useMyContext } from "@/components/utils/Context";
import BlogDrawerForm from "./BlogDrawerForm/BlogDrawerForm";
import BlogViewModal from "./BlogViewModal/BlogViewModal"; // import modal
import { useState } from "react";

export default function BlogsPage() {
  const { blogs, fetchBlogs } = useMyContext();
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [viewData, setViewData] = useState(null); // view modal state
  const [deleteId, setDeleteId] = useState(null)

  const refresh = () => fetchBlogs();

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      setDeleteId(id)
      await api.delete(`/blogs/delete/${id}`);
      refresh();
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setDeleteId(null)
    }
  };

  const handleEdit = (blog) => {
    setEditData(blog);
    setOpen(true);
  };

  const handleView = (blog) => {
    setViewData(blog);
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4 md:gap-0">
        <div>
          <h1 className="text-2xl font-bold">Manage Blogs</h1>
          <p className="text-gray-500 text-sm">Create, edit and manage blog posts</p>
        </div>
        <button
          onClick={() => { setEditData(null); setOpen(true); }}
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg"
        >
          <FiPlus />
          New Blog
        </button>
      </div>

      <div className="bg-white shadow rounded-xl overflow-x-auto">
        {blogs.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No blogs found.</div>
        ) : (
          <table className="w-full min-w-[600px] text-left">
            <thead className="bg-gray-50 text-sm text-gray-600">
              <tr>
                <th className="p-3 md:p-4">Title</th>
                <th className="p-3 md:p-4">Category</th>
                <th className="p-3 md:p-4">Author</th>
                <th className="p-3 md:p-4">Status</th>
                <th className="p-3 md:p-4">Views</th>
                <th className="p-3 md:p-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id} className="border-t hover:bg-gray-50">
                  <td className="p-3 md:p-4 font-medium">{blog.title}</td>
                  <td className="p-3 md:p-4">{blog.category}</td>
                  <td className="p-3 md:p-4">{blog.author}</td>
                  <td className="p-3 md:p-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${blog.isPublished ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                      {blog.isPublished ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="p-3 md:p-4 flex items-center gap-1">
                    <FiEye className="text-gray-400" /> {blog.views}
                  </td>
                  <td className="p-3 md:p-4">
                    <div className="flex justify-end gap-3">
                      <button onClick={() => handleView(blog)} className="text-gray-600 hover:underline">
                        <FiEye />
                      </button>
                      <button onClick={() => handleEdit(blog)} className="text-blue-600 hover:underline">
                        <FiEdit />
                      </button>
                      <button onClick={() => handleDelete(blog._id)} className="text-red-600 hover:underline">
                        {deleteId === blog._id ? "..." : <FiTrash />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Modals */}
      <BlogDrawerForm open={open} onClose={() => setOpen(false)} editData={editData} refresh={refresh} />
      <BlogViewModal open={!!viewData} onClose={() => setViewData(null)} data={viewData} />
    </div>
  );
}