import axios from "axios";

// Create axios instance
const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL_PROD}/api`,
    withCredentials: true, // IMPORTANT for cookies
});

// ✅ Response Interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            // If token expired or unauthorized
            if (error.response.status === 401) {
                console.log("Unauthorized - Redirecting to login");

                // Clear client state if needed
                if (typeof window !== "undefined") {
                    window.location.href = "/admin/login";
                }
            }

            if (error.response.status === 403) {
                console.log("Forbidden access");
            }
        }

        return Promise.reject(error);
    }
);

export default api;
