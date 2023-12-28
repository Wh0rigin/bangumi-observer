import axios from "axios";
import {readYamlFile} from "./token.js"
// import { getToken } from "@/utils/auth";
// import {recommandedMock}  from '../mock/recommandedAnime.js'
// axios.defaults.withCredentials = true;

export const bangumi = axios.create({
    baseURL: "https://api.bgm.tv",
    timeout: 10000,
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
    baseURL: "http://localhost:5000",
    timeout: 5000,
});

music163.interceptors.request.use(
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



export const music163Net = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
});

music163Net.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

music163Net.interceptors.response.use(
    (response) => {
        const res = response;

        return res;
    },
    (error) => {
        console.log("err" + error);
        return Promise.reject(error);
    }
);


export const chatApi = axios.create({
    baseURL: "https://dashscope.aliyuncs.com",
    timeout: 10000,
});

// 在请求拦截器中添加 Bearer Token
chatApi.interceptors.request.use(
    (config) => {
        const bearerToken = readYamlFile('../config/token.yaml')['token'];

        // 如果存在 Bearer Token，则将其添加到请求头中
        if (bearerToken) {
            config.headers["Authorization"] = `Bearer ${bearerToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);



export const proxy_Api = axios.create({
    baseURL: "http://127.0.0.1:5000",
    timeout: 10000,
});

proxy_Api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

