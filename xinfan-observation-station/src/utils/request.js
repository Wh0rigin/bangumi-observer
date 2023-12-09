import axios from "axios";
// import { getToken } from "@/utils/auth";
// import {recommandedMock}  from '../mock/recommandedAnime.js'
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


