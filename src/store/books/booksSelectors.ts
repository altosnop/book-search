import { RootState } from '../configureStore';

export const booksSelector = (state: RootState) => state.books.items;
export const totalItemsSelector = (state: RootState) => state.books.totalItems;
export const paramsSelector = (state: RootState) => state.books.params;
export const loadingSelector = (state: RootState) => state.books.loading;
