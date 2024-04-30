import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import bookReducer from "./reducers/bookReducer"

export function makeStore() {
  return configureStore({
    reducer: { bookList: bookReducer },
  })
}

export const wrapper = createWrapper(makeStore)