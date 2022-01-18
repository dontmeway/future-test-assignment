import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Book, googleApi } from 'shared/api'
import type { RootState } from "store";
import { normalizer } from "./lib";

type BooksState = {
    books: Record<string, any>
    loading: boolean,
    error: null | string,
    listQueryConfig: googleApi.books.GetBooksListParams
}

export const getBooksList = createAsyncThunk(
    'books/fetchBooksList',
    async(params: googleApi.books.GetBooksListParams, thunkApi) => {
        return googleApi.books.getBooksList(params)
    }
)

const initialState: BooksState = {
    books: {},
    loading: false,
    error: null,
    listQueryConfig: { startIndex: 1 }
}


export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
      setListQueryConfig: (state, action: PayloadAction<googleApi.books.GetBooksListParams>) => {
          state.listQueryConfig = action.payload
      }
    },
    extraReducers: (builder) => {
        builder.addCase(getBooksList.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(getBooksList.rejected, (state) => {
            state.error = 'Error occured'
            state.loading = false
        })
        builder.addCase(getBooksList.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.books = state.listQueryConfig.q ? normalizer(action.payload.data.items) :{ ...state.books, ...normalizer(action.payload.data.items) }
        })
    }
})

const useBook = (bookId: string): Book | undefined => useSelector((state: RootState) => state.booksReducer.books)[bookId]
const useBooks = (): Book[] => useSelector((state: RootState) => Object.values(state.booksReducer.books))
const useQueryConfig = (): googleApi.books.GetBooksListParams => useSelector((state: RootState) => state.booksReducer.listQueryConfig)

export const selectors = {
    useBook,
    useBooks,
    useQueryConfig
}
export const actions = booksSlice.actions
export const reducer = booksSlice.reducer