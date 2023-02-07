import axios from "axios";

const baseURL = "http://api.mylibertynotes.site/";
// const baseURL = "http://localhost:80/";

export const AxiosInstance = axios.create({
    baseURL,
    withCredentials: true,
    timeout: 1000,
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
