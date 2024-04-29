import { createAction } from "@reduxjs/toolkit"
import { Book } from "../types"

export const addBook = createAction<Book>('book/addBook')
export const updateBook = createAction<Book>('book/updateBook')
export const deleteBook = createAction<string>('book/deleteBook')
export const initBooks = createAction<Book[]>('book/initBooks')
