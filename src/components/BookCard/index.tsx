import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { loadingSelector } from '../../store/books/booksSelectors';
import Loader from '../Loader';
import styles from './styles.module.css';

type BookCardProps = {
	img: string;
	tag: string[];
	name: string;
	authors: string[];
};

const BookCard = ({ img, tag, name, authors }: BookCardProps) => {
	const loading = useAppSelector(loadingSelector);

	return (
		<div className={styles.bookCard}>
			{loading ? (
				<Loader />
			) : (
				<>
					<img className={styles.cardImg} src={img} alt='Book' />
					<p className={styles.cardTag}>{tag}</p>
					<h2 className={styles.cardTitle}>{name}</h2>
					<p className={styles.cardAuthors}>{authors && authors.join(', ')}</p>
				</>
			)}
		</div>
	);
};

export default BookCard;
