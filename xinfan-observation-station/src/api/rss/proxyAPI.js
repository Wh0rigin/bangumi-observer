import { proxy_Api } from "@/utils/request";

export function getMessage(query) {
    return proxy_Api({
        url: "/rss",
        method: "get",
        params: query,
    });
}
