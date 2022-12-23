import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import {
	booksSelector,
	paramsSelector,
	totalItemsSelector,
} from './../../store/books/booksSelectors';

import BookCard from '../BookCard';
import { getBooks } from '../../store/books/booksSlice';
import { Link } from 'react-router-dom';

const BookList = () => {
	const dispatch = useDispatch();
	const [startIndex, setStartIndex] = useState(1);

	const books = useSelector(booksSelector);
	const params = useSelector(paramsSelector);
	const totalItems = useSelector(totalItemsSelector);

	const onLoadMore = () => {
		const newParams = {
			...params,
			startIndex,
		};

		dispatch(getBooks(newParams));
		setStartIndex(startIndex + 1);
	};

	return (
		<>
			<div className={styles.listWrapper}>
				<p className={styles.info}>Found {totalItems} results</p>

				<div className={styles.bookList}>
					{books.map(book => {
						return (
							<Link to={`/book/${book.id}`} key={book.etag}>
								<BookCard
									img={
										book.volumeInfo.imageLinks?.thumbnail ||
										book.volumeInfo.imageLinks?.smallThumbnail
									}
									tag={book.volumeInfo.categories}
									name={book.volumeInfo.title}
									authors={book.volumeInfo?.authors?.join(', ')}
								/>
							</Link>
						);
					})}
				</div>
				<button
					className={styles.loadMoreBtn}
					onClick={onLoadMore}
					type='button'
				>
					Load more
				</button>
			</div>
		</>
	);
};

export default BookList;
