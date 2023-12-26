import { proxy_Api } from "@/utils/request";
import { AtomParam } from "@/interfaces/AtomParam";

export function getMessage(query: AtomParam) {
    return proxy_Api({
        url: "/atom",
        method: "get",
        params: query,
    });
}
