import axios from "axios";

const baseURL = "https://api.mylibertynotes.site/";
// const baseURL = "http://localhost:3065/";

export const AxiosInstance = axios.create({
    baseURL,
    withCredentials: true,
});

AxiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

AxiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },

    function (error) {
        return Promise.reject(error);
    }
);
