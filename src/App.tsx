import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Index from './pages/Index';
import Registration from './pages/Registration';
import Login from './pages/Login';
import ContentPage from './pages/ContentPage';
import { useAppDispatch } from './store/hooks/redux';
import { useEffect } from 'react';
import { auth } from './store/action-creations/user';

function App() {

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(auth())
	}, [])

	return (
		<BrowserRouter>
			<div className="App">
				<Header></Header>
				<Container>
					<Routes>
						<Route path="/" element={<Index/>}/>
						<Route path="/content" element={<ContentPage/>}/>
						<Route path="/registration" element={<Registration/>}/>
						<Route path="/login" element={<Login/>}/>
					</Routes>
				</Container>
			</div>
		</BrowserRouter>
		
	);
}

export default App;
