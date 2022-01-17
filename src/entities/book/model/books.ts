import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "store";

type BooksState = {
    books: Record<number, any>
}

const initialState: BooksState = {
    books: {}
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
      
    }
})

const useBook = (bookId: number) => useSelector((state: RootState) => state.booksReducer.books)[bookId]

export const selectors = {
    useBook
}
export const actions = booksSlice.actions
export const reducer = booksSlice.reducer