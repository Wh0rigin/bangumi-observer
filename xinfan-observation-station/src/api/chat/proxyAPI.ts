import { proxy_Api } from "@/utils/request";
import { ChatAnswerParam } from "@/interfaces/ChatAnswerParam";

export function getAnswer(query:ChatAnswerParam) {
    return proxy_Api({
        url: "/call",
        method: "post",
        data: query,
    });
}
