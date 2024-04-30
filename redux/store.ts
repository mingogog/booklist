import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './reducers/bookReducer';

const store = configureStore({
  reducer: {
    bookList: bookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;