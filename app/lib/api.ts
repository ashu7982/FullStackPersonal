import axios from "axios";

export const getBaseUrl = () => {
    return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000"
}

export const createClientApi =(token?: string) => {
    return axios.create({
        baseURL: getBaseUrl(),
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}`}),
        },
    })
}