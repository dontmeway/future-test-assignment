import { apiInstance } from "./base"

export type GetBooksListParams = {
    filter?: "partial" | "full" | "free-ebooks" | "paid-ebooks" | "ebooks",
    orderBy?: "relevance" | "newest",
    q?: string,
    maxResults: number
}

export const getBooksList = (params: GetBooksListParams) => {
    return apiInstance.get("", { params: { ...params, q: params.q || "a" } })
}