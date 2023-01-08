import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book, BooksState, BooksResponse, UrlParams } from '../../types/types';

const API_KEY = process.env.REACT_APP_API_KEY;

const initialState: BooksState = {
	items: [],
	params: {
		query: '',
		category: '',
		orderBy: '',
		startIndex: 0,
	},
	totalItems: 0,
	loading: false,
};

export const getBooks = createAsyncThunk(
	'books/getBooks',
	async (
		{ query, category, startIndex = 0, orderBy }: UrlParams,
		{ rejectWithValue, dispatch }
	) => {
		try {
			const { data } = await axios.get<BooksResponse>(
				`https://www.googleapis.com/books/v1/volumes?q=${query}:${category}&startIndex=${startIndex}&maxResults=32&orderBy=${orderBy}&key=${API_KEY}`
			);

			dispatch(setBooks(data.items));
			dispatch(setTotalItems(data.totalItems));
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		setBooks: (state, action: PayloadAction<Book[]>) => {
			state.items = [...state.items, ...action.payload];
		},
		setParams: (state, action: PayloadAction<UrlParams>) => {
			state.params = action.payload;
		},
		setTotalItems: (state, action: PayloadAction<number>) => {
			state.totalItems = action.payload;
		},
		reset: (state, _) => {
			state.items = [];
			state.params = {
				query: '',
				category: '',
				orderBy: '',
				startIndex: 0,
			};
			state.totalItems = 0;
		},
	},
	extraReducers: builder => {
		builder.addCase(getBooks.pending, (state, _) => {
			state.loading = true;
		});
		builder.addCase(getBooks.fulfilled, (state, _) => {
			state.loading = false;
		});
	},
});

export const { setBooks, setParams, setTotalItems, reset } = booksSlice.actions;

export default booksSlice.reducer;
