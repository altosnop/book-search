import { Route, Routes } from 'react-router-dom';
import Book from './../pages/Book';
import Home from './../pages/Home';

const MainRoutes = () => {
	return (
		<Routes>
			<Route exact path='/' element={<Home />} />
			<Route exact path='/book/:bookId' element={<Book />} />
		</Routes>
	);
};

export default MainRoutes;
