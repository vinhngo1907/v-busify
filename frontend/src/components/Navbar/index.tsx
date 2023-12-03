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
import googleIcon from '../../assets/googleIcon.svg';
import { useScreen } from '../../customHooks/useScreen';
import toast, { Toaster } from 'react-hot-toast';
import { useAuthStore } from '../../store/authStore';
import getGoogleOAuthURL from '../../utils/getOAuthRedirectUrl';

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

const GoogleButton = styled(Button)`
	display: flex;
	align-items: center;
	gap: 1rem;
	text-transform: none;
	border: 4px solid rgba(66, 133, 244, 0.1);
	border-radius: 8px;
  
	&:hover {
	  border: 4px solid rgba(66, 133, 244, 0.1);
	  background-color: #fff;
	}
`;

const ProfileContainer = styled(Box)`
	display: flex;
	align-items: center;
	border-radius: 8px;
	cursor: pointer;
	&:hover {
		border: 0.5px solid ${({ theme }) => theme.palette.primary.main};
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
	}
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
	const { isAuth, user, setIsAuth, setUser } = useAuthStore();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const openMenu = (event: React.MouseEvent<HTMLDivElement>) => {
		setAnchorEl(event.currentTarget);
	}

	const closeMenu = async (event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
		event.stopPropagation();
		setAnchorEl(null)
	}

	const profile_container = useRef<HTMLDivElement | null>(null);

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
				{
					!isAuth ? (
						<GoogleButton variant="outlined" href={getGoogleOAuthURL()}>
							<img src={googleIcon} alt="google" />
							<Typography variant="h6" color={theme.palette.common.black}>
								Login with Google
							</Typography>
						</GoogleButton>
					) : (
						<></>
					)
				}
			</Box>
			<Toaster position="top-center" />
		</NavbarContainer>
	)
}