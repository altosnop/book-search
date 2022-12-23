import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'AIzaSyB-wdKrVLoy3_cKXrGo14v4xoCo7RTJ7xs';

const initialState = {
	items: [],
	params: {
		query: '',
		category: '',
		orderBy: '',
	},
	totalItems: 0,
	loading: false,
};

export const getBooks = createAsyncThunk(
	'books/getBooks',
	async (params, { rejectWithValue, dispatch }) => {
		try {
			const { query, category, startIndex = 0, orderBy } = params;
			const response = await axios.get(
				`https://www.googleapis.com/books/v1/volumes?q=${query}:${category}&startIndex=${startIndex}&maxResults=32&orderBy=${orderBy}&key=${API_KEY}`
			);

			dispatch(setLoading(true));
			dispatch(setBooks(response.data.items));
			dispatch(setTotalItems(response.data.totalItems));
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		setBooks: (state, action) => {
			state.items = [...state.items, ...action.payload];
		},
		setParams: (state, action) => {
			state.params = action.payload;
		},
		setTotalItems: (state, action) => {
			state.totalItems = action.payload;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		reset: (state, _) => {
			state.items = [];
			state.params = {};
			state.totalItems = 0;
		},
	},
	extraReducers: builder => {
		builder.addCase(getBooks.fulfilled, (state, _) => {
			state.loading = false;
		});
	},
});

export const { setBooks } = booksSlice.actions;
export const { setParams } = booksSlice.actions;
export const { setTotalItems } = booksSlice.actions;
export const { setLoading } = booksSlice.actions;
export const { reset } = booksSlice.actions;

export default booksSlice.reducer;
