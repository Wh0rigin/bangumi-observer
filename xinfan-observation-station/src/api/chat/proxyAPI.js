import { proxy_Api } from "@/utils/request";

export function getAnswer(query) {
    return proxy_Api({
        url: "/call",
        method: "post",
        data: query,
    });
}
