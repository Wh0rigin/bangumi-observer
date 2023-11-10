import axios from "axios";
// import { getToken } from "@/utils/auth";

const service = axios.create({
    baseURL: "https://api.bgm.tv",
    timeout: 5000,
});

service.interceptors.request.use(
    (config) => {
        // config.headers.Authorization = "Bearer VL7SPrFYAdstXEiuzDmQRCIwrBLEeKTzFlGWsWnl";
        // console.log(config.headers)
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    (response) => {
        const res = response;

        return res;
    },
    (error) => {
        console.log("err" + error);
        return Promise.reject(error);
    }
);

export default service;
