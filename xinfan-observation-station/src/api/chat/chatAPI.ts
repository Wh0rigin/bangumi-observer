import { chatApi } from "@/utils/request";

export function getAnswer(query:any) {
    // 确保 query 存在且是一个对象
    if (!query || typeof query !== "object") {
        query = {};
    }

    // 添加默认值，确保 rawjson 存在且为 true
    query.rawjson = true;
    return chatApi({
        url: "/api/v1/services/aigc/text-generation/generation",
        method: "post",
        data: query,
    });
}
