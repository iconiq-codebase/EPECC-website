import { useEffect } from "react";
import { FiX } from "react-icons/fi";

const CountryDetailsModal = ({ selectedCountry, setSelectedCountry }) => {

    console.log("Selected Country for Modal:", selectedCountry); // Debug log

    // Escape key to close
    useEffect(() => {
        const esc = (e) => e.key === "Escape" && setSelectedCountry(null);
        window.addEventListener("keydown", esc);
        return () => window.removeEventListener("keydown", esc);
    }, []);
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white/90 backdrop-blur-lg w-full max-w-5xl rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh] relative p-8 border border-gray-200">

                {/* Header */}
                <div className="flex items-center justify-between mb-6 border-b pb-4">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        {selectedCountry.name}
                    </h2>
                    <button
                        onClick={() => setSelectedCountry(null)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                        <FiX size={28} />
                    </button>
                </div>

                {/* Hero Image */}
                {selectedCountry.image && (
                    <div className="mb-6 overflow-hidden rounded-xl shadow-lg">
                        <img
                            src={selectedCountry.image.url}
                            alt={selectedCountry.name}
                            className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                )}

                {/* Core Info */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-pink-100 p-4 rounded-xl shadow-inner">
                        <p className="text-sm text-gray-600"><strong>Tag:</strong> {selectedCountry.tag}</p>
                        <p className="text-sm text-gray-600"><strong>Universities:</strong> {selectedCountry.universities}</p>
                        <p className="text-sm text-gray-600"><strong>Courses:</strong> {selectedCountry.courses}</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-cyan-100 p-4 rounded-xl shadow-inner">
                        <p className="text-sm text-gray-600"><strong>Description:</strong></p>
                        <p className="text-gray-700 mt-1">{selectedCountry.description}</p>
                    </div>
                </section>

                {/* Visa & Work */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-100">
                        <h3 className="font-semibold text-gray-900 mb-2">Visa</h3>
                        <p className="text-gray-700">{selectedCountry.visa}</p>
                        <p className="text-gray-500 text-sm mt-1">{selectedCountry.visaDescription}</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-100">
                        <h3 className="font-semibold text-gray-900 mb-2">Work While Study</h3>
                        <p className="text-gray-700">{selectedCountry.workStudy}</p>
                        <p className="text-gray-500 text-sm mt-1">{selectedCountry.workStudyDescription}</p>
                    </div>
                </section>

                {/* Universities List */}
                {selectedCountry.universitiesList?.length > 0 && (
                    <section className="mb-6">
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Universities List</h3>
                        <ul className="space-y-2">
                            {selectedCountry.universitiesList.map((u, i) => (
                                <li key={i} className="bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <strong>{u.name}:</strong> {u.description}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Scholarships */}
                {selectedCountry.scholarships?.length > 0 && (
                    <section className="mb-6">
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Scholarships</h3>
                        <ul className="space-y-3">
                            {selectedCountry.scholarships.map((s, i) => (
                                <li key={i} className="bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                    <strong>{s.name}</strong> ({s.eligibility}) - <a href={s.link} target="_blank" className="text-blue-500 hover:underline">{s.link}</a>
                                    <p className="text-gray-600 mt-1">{s.description}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* FAQs */}
                {selectedCountry.faqs?.length > 0 && (
                    <section className="mb-6">
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">FAQs</h3>
                        <ul className="space-y-2">
                            {selectedCountry.faqs.map((f, i) => (
                                <li key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                    <p><strong>Q:</strong> {f.question}</p>
                                    <p><strong>A:</strong> {f.answer}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Testimonials */}
                {selectedCountry.testimonials?.length > 0 && (
                    <section className="mb-6">
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Student Testimonials</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedCountry.testimonials.map((t, i) => (
                                <div key={i} className="bg-gradient-to-tr from-purple-50 via-pink-50 to-pink-100 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-4">
                                    {t.image && (
                                        <img src={t.image.url} alt={t.name} className="w-24 h-24 rounded-lg object-cover flex-shrink-0" />
                                    )}
                                    <div>
                                        <p className="font-semibold text-gray-900">{t.name}</p>
                                        <p className="text-gray-700 text-sm">{t.university}, {t.program}, {t.country}</p>
                                        <p className="mt-2 text-gray-600 italic">"{t.quote}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}

export default CountryDetailsModal;