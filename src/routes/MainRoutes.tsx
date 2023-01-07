import { Route, Routes } from 'react-router-dom';
import BookPage from '../pages/BookPage';
import Home from '../pages/Home';

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/book/:bookId' element={<BookPage />} />
		</Routes>
	);
};

export default MainRoutes;
