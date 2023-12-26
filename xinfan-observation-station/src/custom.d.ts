// custom.d.ts

declare module "js-cookie" {
    const Cookies: {
        get: (key: object) => object | undefined;
        set: (key: string, value: string, options?: object) => void;
        // 添加其他法的类型声明
        remove: (param: string) => string | undefined;
    };

    export = Cookies;
}
