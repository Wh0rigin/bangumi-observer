import axios from "axios";
// import { getToken } from "@/utils/auth";
// import {recommandedMock}  from '../mock/recommandedAnime.js'
// axios.defaults.withCredentials = true;

export const bangumi = axios.create({
    baseURL: "https://api.bgm.tv",
    timeout: 5000,
});

bangumi.interceptors.request.use(
    (config) => {
        // config.headers.Authorization = "Bearer VL7SPrFYAdstXEiuzDmQRCIwrBLEeKTzFlGWsWnl";


        // if(config.url === '/recommend'){
        //     return Promise.resolve(
        //         {
        //             data: recommandedMock,
        //             status: 200,
        //             statusText: 'OK',
        //             headers: config.headers,
        //             config: config,
        //         }
        //     )
        // }

        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

bangumi.interceptors.response.use(
    (response) => {
        const res = response;

        return res;
    },
    (error) => {
        console.log("err" + error);
        return Promise.reject(error);
    }
);


export const bilibili = axios.create({
    baseURL: "https://api.bilibili.com",
    timeout: 5000,
    withCredentials: true, // 允许携带凭证，用于跨域请求
});

bilibili.interceptors.request.use(
    (config) => {
       
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

bilibili.interceptors.response.use(
    (response) => {
        const res = response;
        return res;
    },
    (error) => {
        console.log("err" + error);
        return Promise.reject(error);
    }
);


export const music163 = axios.create({
    baseURL: "https://autumnfish.cn",
    timeout: 5000,
});

bilibili.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

music163.interceptors.response.use(
    (response) => {
        const res = response;

        return res;
    },
    (error) => {
        console.log("err" + error);
        return Promise.reject(error);
    }
);
