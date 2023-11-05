import React, { useRef } from 'react';
import {
	useTheme,
	Typography,
	Box,
	Button,
	styled,
	Menu,
	MenuItem,
	IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import helpIcon from '../../assets/helpIcon.svg';
import { useScreen } from '../../customHooks/useScreen';
import toast, { Toaster } from 'react-hot-toast';

const NavbarContainer = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HelpButton = styled(Box)`
  align-items: center;
  gap: 5px;
  cursor: pointer;  
`;
const LinkContainer = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ManageButton = styled(Box)`
	display: flex;
	align-items: center;
	border-radius: 8px;
	background-color: #fbbc05;
	padding: 0.3rem 0.8rem 0.3rem 0.8rem;
	border: 4px solid #fbbc05;
	cursor: pointer;

	&:hover {
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
	}
`;

export default function Navbar() {
	const currentScreen = useScreen();
	const theme = useTheme();
	return (
		<NavbarContainer>
			<Typography variant='h1' color={theme.palette.primary.main} fontSize={{ xs: "1.25rem", md: "2.5rem" }}>
				<LinkContainer to="/"
					style={{ textDecoration: 'none', color: 'inherit' }}>Busify</LinkContainer>
			</Typography>
			<Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
				<HelpButton display={{ xs: 'none', md: 'flex' }}>
					<img src={helpIcon} alt="help" />
					<Typography variant="h6" color={theme.palette.common.black}>
						Help
					</Typography>
				</HelpButton>
			</Box>
			<Toaster position="top-center" />
		</NavbarContainer>
	)
}