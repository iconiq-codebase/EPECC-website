import { createContext, useContext, useEffect, useState } from "react";
import api from "./axios";

// 1. Create the context
const MyContext = createContext();

// 2. Create a provider component
export const MyProvider = ({ children }) => {
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [courses, setCourses] = useState([]);
    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);

    // fetch Courses
    const fetchCourses = async () => {
        try {
            const { data } = await api.get("/programs/get-all");
            setCourses(data.data);
        } catch (error) {
            console.error("Error fetching courses:", error);
            setErrorMsg("Failed to fetch courses.");
        }
    }

    // fetch countries
    const fetchCountries = async () => {
        try {
            const { data } = await api.get("/countries/get-all");
            setCountry(data.data);
        } catch (error) {
            console.error("Error fetching countries:", error);
            setErrorMsg("Failed to fetch countries.");
        }
    }

    // ===============================
    // Fetch Blogs
    // ===============================
    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const {data} = await api.get("/blogs/get-all");
            setBlogs(data.blogs);
        } catch (err) {
            console.error("Error fetching blogs:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
        fetchCountries();
        fetchBlogs()
    }, []);

    // ✅ Use const
    const option = {
        successMsg,
        setSuccessMsg,
        errorMsg,
        setErrorMsg,
        courses,
        setCourses,
        fetchCourses,
        loading,
        setLoading,
        country,
        setCountry,
        fetchCountries,
        blogs,
        setBlogs,
        fetchBlogs
    };

    return <MyContext.Provider value={option}>{children}</MyContext.Provider>;
};

// 3. Custom hook for easier consumption
export const useMyContext = () => useContext(MyContext);