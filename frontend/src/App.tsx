import './App.css';
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import theme from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box margin={{ xs: "1rem", md: "3rem 5rem" }}>
				<Navbar />
				<h1>Vite + React</h1>
				<Footer />
			</Box>
		</ThemeProvider>
	)
}

export default App;