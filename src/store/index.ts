import { configureStore } from "@reduxjs/toolkit";
import { bookModel } from "entities/book";

export const store = configureStore({
    reducer: {
        booksReducer: bookModel.reducer,
        
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch