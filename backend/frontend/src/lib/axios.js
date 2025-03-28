import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://chat-app-jju5.onrender.com/api",
    withCredentials: true,
});
