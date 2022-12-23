import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';

import styles from './styles.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<Link to='/'>
				<h1 className={styles.mainTitle}>Search for books</h1>
			</Link>
			<SearchBar />
		</header>
	);
};

export default Header;
