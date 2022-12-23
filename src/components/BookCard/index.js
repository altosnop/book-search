import React from 'react';
import { useSelector } from 'react-redux';
import { loadingSelector } from '../../store/books/booksSelectors';
import Loader from '../Loader';
import styles from './styles.module.css';

const BookCard = ({ img, tag, name, authors }) => {
	const loading = useSelector(loadingSelector);

	return (
		<div className={styles.bookCard}>
			{loading ? (
				<Loader />
			) : (
				<>
					<img className={styles.cardImg} src={img} alt='Book' />
					<p href='/' className={styles.cardTag}>
						{tag}
					</p>
					<h2 className={styles.cardTitle}>{name}</h2>
					<p className={styles.cardAuthors}>{authors}</p>
				</>
			)}
		</div>
	);
};

export default BookCard;
