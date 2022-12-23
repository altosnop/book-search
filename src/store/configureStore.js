import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/booksSlice';

const store = configureStore({
	reducer: {
		books: booksSlice,
	},
	devTools: process.env.NODE_ENV === 'development',
});

export default store;
