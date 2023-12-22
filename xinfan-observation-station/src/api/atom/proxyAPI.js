import { proxy_Api } from "@/utils/request";

export function getMessage(query) {
    return proxy_Api({
        url: "/atom",
        method: "get",
        params: query,
    });
}
