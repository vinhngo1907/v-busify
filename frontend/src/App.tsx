import './App.css';
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import theme from './theme';
import Home from './pages/Home';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box margin={{ xs: "1rem", md: "3rem 5rem" }}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<Footer />
			</Box>
		</ThemeProvider>
	)
}

export default App;