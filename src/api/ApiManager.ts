
import axios, { type AxiosRequestConfig, type Method } from "axios";

const api = axios.create({
    baseURL: "https://sheet.washing.az/api/",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

interface ApiError {
    message: string;
    status?: number;
    data?: unknown;
}

async function ApiManager<T = unknown>(
    endpoint: string,
    method: Method = "GET",
    body?: unknown,
    config?: AxiosRequestConfig
): Promise<T> {
    console.log('end', endpoint);
    
    try {
        const response = await api.request<T>({
            ...config,
            url: endpoint,
            method,
            ...(body !== undefined ? { data: body } : {}),
        });

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const apiError: ApiError = {
                message:
                    error.response?.data?.message ||
                    error.response?.data?.error ||
                    error.message ||
                    "Server xətası baş verdi",
                status: error.response?.status,
                data: error.response?.data,
            };

            throw apiError;
        }

        throw {
            message: "Gözlənilməz xəta baş verdi",
        } satisfies ApiError;
    }
}

export default ApiManager;
