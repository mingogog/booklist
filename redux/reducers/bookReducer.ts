import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { addBook, deleteBook, updateBook, initBooks } from '../actions/bookActions';
import { Book } from '../types';
import { HYDRATE } from 'next-redux-wrapper';

interface BookState {
    books: Book[];
}

const initialState: BookState = {
    books: [],
};

export const bookReducer = createReducer(initialState, (builder) => {
    builder.addCase(addBook, (state, action: PayloadAction<Book>) => {
        state.books = [...state.books, action.payload]
    });
    builder.addCase(updateBook, (state, action: PayloadAction<Book>) => {
        const index = state.books.findIndex(book => book.id === action.payload.id);
        if (index !== -1) {
            state.books[index] = action.payload;
        }
    });
    builder.addCase(deleteBook, (state, action: PayloadAction<string>) => {
        state.books = state.books.filter(book => book.id !== action.payload);
    });
    builder.addCase(initBooks, (state, action: PayloadAction<Book[]>) => {
        state.books = [...action.payload]
    });
    builder.addCase(HYDRATE, (state, action: any) => {
        return action.payload.bookList
    });
})

export default bookReducer;
