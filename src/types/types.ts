export type Book = {
	id: string;
	etag: string;
	volumeInfo: {
		title: string;
		description: string;
		categories: string[];
		authors: string[];
		imageLinks: {
			smallThumbnail: string;
			thumbnail: string;
			large: string;
		};
	};
};

export type UrlParams = {
	query: string;
	category: string;
	orderBy: string;
	startIndex: number;
};

export type BooksState = {
	items: Book[];
	params: UrlParams;
	totalItems: number;
	loading: boolean;
};

export type BooksResponse = {
	items: Book[];
	totalItems: number;
};

export type State = {
	books: BooksState;
};
