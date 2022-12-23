import React, { useState } from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../../assets/search.svg';
import { useDispatch } from 'react-redux';
import { getBooks, reset, setParams } from '../../store/books/booksSlice';

const SearchBar = () => {
	const history = useNavigate();
	const dispatch = useDispatch();

	const [query, setQuery] = useState('');
	const [category, setCategory] = useState('');
	const [sort, setSort] = useState('relevance');

	const onBookSearch = e => {
		e.preventDefault();

		const params = {
			query,
			category,
			orderBy: sort,
		};

		dispatch(reset());
		dispatch(getBooks(params));
		dispatch(setParams(params));

		history('/');
	};

	return (
		<form onSubmit={onBookSearch}>
			<div className={styles.searchBar}>
				<input
					className={styles.input}
					type='text'
					autoFocus
					value={query}
					onChange={e => setQuery(e.currentTarget.value)}
				/>
				<button className={styles.formBtn} type='submit'>
					<img className={styles.icon} src={searchIcon} alt='Search icon' />
				</button>
			</div>

			<div className={styles.sortWrapper}>
				<div className={styles.category}>
					<label className={styles.label}>
						Categories
						<select
							className={styles.select}
							value={category}
							onChange={e => setCategory(e.currentTarget.value)}
						>
							<option>all</option>
							<option>art</option>
							<option>biography</option>
							<option>computers</option>
							<option>history</option>
							<option>medical</option>
							<option>poetry</option>
						</select>
					</label>
				</div>

				<div className={styles.sort}>
					<label className={styles.label}>
						Sorting by
						<select
							className={styles.select}
							value={sort}
							onChange={e => setSort(e.currentTarget.value)}
						>
							<option>relevance</option>
							<option>newest</option>
						</select>
					</label>
				</div>
			</div>
		</form>
	);
};

export default SearchBar;
