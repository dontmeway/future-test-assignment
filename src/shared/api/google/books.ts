import axios, { AxiosPromise } from "axios"
import { BooksList } from "./models"

const key = "AIzaSyD3qCi0tWs2k51LHOuyjD2HqqGRGWvMfSs";

const apiInstance = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes"
})

export type filter = "partial" | "full" | "free-ebooks" | "paid-ebooks" | "ebooks"
export type orderBy = "relevance" | "newest"

export type GetBooksListParams = {
    filter?: filter,
    orderBy?: orderBy,
    q?: string,
    startIndex: number
}

export const getBooksList = (params: GetBooksListParams): AxiosPromise<BooksList> => {
    return apiInstance.get(`?key=${key}&maxResults=30`, { params: { ...params, q: params.q || "a" } })
}

export type GetBookByIdParams = {
    bookId: string
}

export const getBookById = (params: GetBookByIdParams) => {
    return apiInstance.get(`/${params.bookId}?key=${key}`)
}

