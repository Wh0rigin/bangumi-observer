import { proxy_chatApi } from "@/utils/request";

export function getAnswer(query) {
    return proxy_chatApi({
        url: "/call",
        method: "post",
        data: query,
    });
}
