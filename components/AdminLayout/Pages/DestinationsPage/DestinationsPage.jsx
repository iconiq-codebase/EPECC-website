"use client";

import { useEffect, useState } from "react";
import api from "@/components/utils/axios";
import { useMyContext } from "@/components/utils/Context";
import AdminLayout from "../../AdminLayout";
import { FiEdit, FiTrash, FiEye} from "react-icons/fi";
import DestinationsForm from "./DestinationsForm/DestinationsForm";
import CountryDetailsModal from "./CountryDetailsModal/CountryDetailsModal";

export default function DestinationsPage() {
    const { country, setSuccessMsg, setErrorMsg, fetchCountries } = useMyContext(); // Global state for countries and messages
    const [openAdd, setOpenAdd] = useState(false); // For Add/Edit form
    const [selectedCountry, setSelectedCountry] = useState(null); // For viewing
    const [deleteId, setDeleteId] = useState(null); // To track which country is being deleted
    const [editData, setEditData] = useState(null); // For editing

    const handleDelete = async (id) => {
        if (deleteId) return;
        if (!confirm("Are you sure you want to delete this country?")) return;

        try {
            setDeleteId(id);
            await api.delete(`/countries/delete/${id}`);
            setSuccessMsg("Country deleted successfully.");
            fetchCountries();
        } catch (error) {
            console.error("Delete error:", error);
            setErrorMsg("Failed to delete country. Please try again.");
        } finally {
            setDeleteId(null);
        }
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    return (
        <AdminLayout>
            <div className="space-y-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-gray-100 pb-8">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9A0044] mb-2">
                            Global Education Management
                        </p>
                        <h2 className="text-3xl font-black text-gray-900 tracking-tighter">
                            Study <span className="text-gray-400 font-light italic">Destinations</span>
                        </h2>
                    </div>

                    <button
                        onClick={() => {
                            setSelectedCountry(null);
                            setOpenAdd(true);
                        }}
                        className="group relative px-6 py-3 bg-[#000a1a] overflow-hidden rounded-xl transition-all active:scale-95"
                    >
                        <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-white">
                            Create New Entry
                        </span>
                        <div className="absolute inset-0 bg-[#9A0044] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                </div>

                {/* Countries Table */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50/50 border-b border-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-400">
                                    <th className="p-4">Country name</th>
                                    <th className="p-4">Tag</th>
                                    <th className="p-4">Universities</th>
                                    <th className="p-4">Courses</th>
                                    <th className="p-4">Visa</th>
                                    <th className="p-4">Work Study</th>
                                    <th className="p-4 text-right">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-50 text-xs">
                                {country.length === 0 ? (
                                    <tr>
                                        <td colSpan="7" className="p-6 text-center text-sm text-gray-500">
                                            No countries available.
                                        </td>
                                    </tr>
                                ) : (
                                    country.map((c) => (
                                        <tr key={c._id} className="hover:bg-gray-50/40 transition">
                                            <td className="p-4 font-bold text-gray-800">
                                                {c.name}
                                                <p className="text-[10px] text-gray-400 mt-1">
                                                    {c.description.slice(0, 50)}
                                                    {c.description.length > 50 && "..."}
                                                </p>
                                            </td>
                                            <td className="p-4 font-semibold text-[#9A0044]">{c.tag}</td>
                                            <td className="p-4">{c.universities}</td>
                                            <td className="p-4 uppercase">{c.courses}</td>
                                            <td className="p-4 font-bold text-gray-800">
                                                {c.visa}
                                                <p className="text-[10px] text-gray-400 mt-1">
                                                    {c.visaDescription.slice(0, 50)}
                                                    {c.visaDescription.length > 50 && "..."}
                                                </p>
                                            </td>
                                            <td className="p-4 font-bold text-gray-800">
                                                {c.workStudy}
                                                <p className="text-[10px] text-gray-400 mt-1">
                                                    {c.workStudyDescription.slice(0, 50)}
                                                    {c.workStudyDescription.length > 50 && "..."}
                                                </p>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex justify-end gap-4">
                                                    <button onClick={() => setSelectedCountry(c)}>
                                                        <FiEye className="text-blue-600" size={18} title="View Details" />
                                                    </button>
                                                    <button onClick={() => {
                                                        setEditData(c);
                                                        setOpenAdd(true);
                                                    }}>
                                                        <FiEdit className="text-green-600" size={18} />
                                                    </button>
                                                    <button onClick={() => handleDelete(c._id)}>
                                                        {deleteId === c._id ? (
                                                            <span className="animate-spin text-gray-400">⏳</span>
                                                        ) : (
                                                            <FiTrash className="text-red-600" size={18} />
                                                        )}
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

            {/* Add Drawer */}
            <DestinationsForm
                open={openAdd}
                onClose={() => {setOpenAdd(false); setEditData(null);}}
                editData={editData}
            />


            {/* View Country Details Modal */}
            {selectedCountry && (
                <CountryDetailsModal selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
            )}
        </AdminLayout>
    );
}