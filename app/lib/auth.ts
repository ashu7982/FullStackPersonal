import { createClientApi } from "./api";

export const registerUser = async (userData: {
    name: string;
    email: string;
    password: string;
}) => {
    console.log("registerUser called with data:", userData);
    const api = createClientApi();
    try {
        const response = await api.post("/api/auth/register", userData);
        return response.data;
    }
    catch (error) {
        console.log("Error in registerUser:", error);
        throw error;
    }
}

export const loginUser = async (credentials: {
    email: string;
    password: string;
}) => {
    const api = createClientApi();
    try {
        const response = await api.post("/api/auth/login", credentials);
        const result = response.data;
        
        if(result && result.token){
            localStorage.setItem("token", result.token)
        }
        return result;
    }
    catch (error) {
        console.log("Error in loginUser:", error);
        throw error;
    }
}