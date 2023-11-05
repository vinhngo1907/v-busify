import { useState } from 'react';
import './App.css';
import { Box, ThemeProvider } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import theme from './theme'

function App() {
	const [count, setCount] = useState(0)

	return (
		<ThemeProvider theme={theme}>
			<Box margin={{ xs: "1rem", md: "3rem 5rem" }}>
				<Navbar />
				<h1>Vite + React</h1>
				<Footer />
			</Box>
		</ThemeProvider>
	)
}

export default App
