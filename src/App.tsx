import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Registration from './pages/Registration';
import Signin from './pages/Signin';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header></Header>
				<Container>
					<Routes>
						<Route path="/registration" element={<Registration/>}/>
						<Route path="/signin" element={<Signin/>}/>
					</Routes>
				</Container>
			</div>
		</BrowserRouter>
		
	);
}

export default App;
