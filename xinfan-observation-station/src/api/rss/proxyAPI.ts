import { proxy_Api } from "@/utils/request";
import { RssParam } from "@/interfaces/RssParam";

export function getMessage(query:RssParam) {
    return proxy_Api({
        url: "/rss",
        method: "get",
        params: query,
    });
}
