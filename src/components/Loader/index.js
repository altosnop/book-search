import React from 'react';
import styles from './styles.module.css';

const Loader = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.loader}>
				<svg
					fill='none'
					className={styles.loaderIcon}
					viewBox='0 0 32 32'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						clipRule='evenodd'
						d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
						fill='currentColor'
						fillRule='evenodd'
					/>
				</svg>

				<div>Loading ...</div>
			</div>
		</div>
	);
};

export default Loader;
