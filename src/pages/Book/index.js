import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Header from './../../components/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Book = () => {
	const { bookId } = useParams();
	const [book, setBook] = useState(null);

	useEffect(() => {
		const getBook = async () => {
			const response = await axios.get(
				`https://www.googleapis.com/books/v1/volumes/${bookId}`
			);

			setBook(response.data);
		};

		getBook();
	}, [bookId]);

	return (
		<div className={styles.wrapper}>
			<Header />

			{book && (
				<div className={styles.bookWrapper}>
					<div className={styles.bookImgWrapper}>
						<img
							className={styles.bookImg}
							src={book.volumeInfo.imageLinks.large}
							alt='Book'
						/>
					</div>
					<div className={styles.bookInfoWrapper}>
						<p className={styles.bookTags}>{book.volumeInfo.categories}</p>
						<h2 className={styles.bookTitle}>{book.volumeInfo.title}</h2>
						<p className={styles.bookAuthors}>
							{book.volumeInfo.authors.join(', ')}
						</p>
						<p className={styles.bookDescription}>
							{book.volumeInfo.description}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Book;
