"use client";

import { useEffect, useState } from "react";
import AdminLayout from "../../AdminLayout";
import { FiEdit, FiTrash } from "react-icons/fi";
import AddCourses from "./AddCourses/AddCourses";
import { useMyContext } from "@/components/utils/Context";
import api from "@/components/utils/axios";
import EditCourses from "./EditCourses/EditCourses";

export default function CoursesPage() {
    const { courses, fetchCourses, setSuccessMsg, setErrorMsg, setLoading } = useMyContext();

    const [openDrawer, setOpenDrawer] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);

    const handleDelete = async (courseId) => {
        if (!window.confirm("Are you sure you want to delete this course?")) return;
        // Implement delete functionality here
        try {
            setLoading(true);
            setDeleteId(courseId); // Set the ID of the course being deleted to show loading state on that specific button
            // Make API call to delete the course
            const { data } = await api.delete(`/programs/delete/${courseId}`);

            // After successful deletion, refresh the courses list
            fetchCourses();
            setSuccessMsg("Course deleted successfully."); // ✅ Show success message
        } catch (error) {
            console.error("Error in handleDelete:", error);
            setErrorMsg("Failed to delete course."); // ✅ Show error message
        } finally {
            setLoading(false);
        }
    }

    const handleEdit = (course) => {
        setSelectedCourse(course);
        setIsEditMode(true);
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <AdminLayout>
            <div className="space-y-10">
                {/* Executive Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-gray-100 pb-8">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9A0044] mb-2">Curriculum Management</p>
                        <h2 className="text-3xl font-black text-gray-900 tracking-tighter">Academic <span className="text-gray-400 font-light italic">Catalog</span></h2>
                    </div>

                    <button
                        onClick={() => setOpenDrawer(true)}
                        className="group relative px-6 py-3 bg-[#000a1a] overflow-hidden rounded-xl transition-all active:scale-95"
                    >
                        <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-white">Create New Entry</span>
                        <div className="absolute inset-0 bg-[#9A0044] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                </div>

                {/* Command Table */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50/50 border-b border-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-400">
                                    <th className="p-4">Program</th>
                                    <th className="p-4">Tag</th>
                                    <th className="p-4">University</th>
                                    <th className="p-4">Country</th>
                                    <th className="p-4">Duration</th>
                                    <th className="p-4">Fees</th>
                                    <th className="p-4">Eligibility</th>
                                    <th className="p-4">Highlights</th>
                                    <th className="p-4 text-right">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-50 text-xs">
                                {courses.length === 0 ? (
                                    <tr>
                                        <td colSpan="9" className="p-6 text-center text-sm text-gray-500">
                                            No courses available.
                                        </td>
                                    </tr>
                                ) : (
                                    courses.map((course) => (
                                        <tr key={course._id} className="hover:bg-gray-50/40 transition">

                                            <td className="p-4 font-bold text-gray-800">
                                                {course.programName}
                                                <p className="text-[10px] text-gray-400 mt-1">
                                                    {course.shortdescription.slice(0, 50)}{course.shortdescription.length > 50 && "..."}
                                                </p>
                                            </td>

                                            <td className="p-4 font-semibold text-[#9A0044]">
                                                {course.tag}
                                            </td>

                                            <td className="p-4">{course.university}</td>

                                            <td className="p-4 uppercase">{course.country}</td>

                                            <td className="p-4 font-mono">{course.duration}</td>

                                            <td className="p-4">{course.fees}</td>

                                            {/* Eligibility Array */}
                                            <td className="p-4">
                                                {course.eligibility?.slice(0, 2).map((e, i) => (
                                                    <div key={i} className="text-gray-500">
                                                        • {e}
                                                    </div>
                                                ))}
                                                {course.eligibility?.length > 2 && (
                                                    <div className="text-gray-400 text-[10px]">
                                                        +{course.eligibility.length - 2} more
                                                    </div>
                                                )}
                                            </td>

                                            {/* Highlights Array */}
                                            <td className="p-4">
                                                {course.highlights?.slice(0, 2).map((h, i) => (
                                                    <div key={i} className="text-gray-600">
                                                        • {h.title}
                                                    </div>
                                                ))}
                                                {course.highlights?.length > 2 && (
                                                    <div className="text-gray-400 text-[10px]">
                                                        +{course.highlights.length - 2} more
                                                    </div>
                                                )}
                                            </td>

                                            <td className="p-4">
                                                <div className="flex justify-end gap-4">
                                                    <button onClick={() => handleEdit(course)}>
                                                        <FiEdit className="text-green-600" size={18} />
                                                    </button>
                                                    <button onClick={() => handleDelete(course._id)}>
                                                        {
                                                            deleteId === course._id ? (
                                                                <svg className="animate-spin h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                </svg>
                                                            ) : (
                                                                <FiTrash className="text-red-600" size={18} />
                                                            )
                                                        }
                                                    </button>
                                                </div>
                                            </td>

                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/*Add Form Modal */}
            <AddCourses open={openDrawer} onClose={() => setOpenDrawer(false)} />

            {/* Edit Form Modal */}
            {isEditMode && (
                <EditCourses
                    open={isEditMode}
                    onClose={() => {
                        setIsEditMode(false);
                        setSelectedCourse(null);
                    }}
                    course={selectedCourse}
                />
            )}

        </AdminLayout>
    );
}