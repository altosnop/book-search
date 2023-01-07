import React from 'react';
import styles from './styles.module.css';
import BookList from '../../components/BooksList';
import Header from '../../components/Header';
import bookImg from './../../assets/book.png';
import { useSelector } from 'react-redux';
import { totalItemsSelector } from '../../store/books/booksSelectors';

const Home = () => {
	const totalItems = useSelector(totalItemsSelector);
	return (
		<>
			<Header />

			{!!totalItems ? (
				<BookList />
			) : (
				<div className={styles.intro}>
					<img src={bookImg} className={styles.bookImg} alt='Book' />
				</div>
			)}
		</>
	);
};

export default Home;
