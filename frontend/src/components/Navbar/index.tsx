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
import theme from '../../theme';
import { Link } from 'react-router-dom';

const NavbarContainer = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HelperButton = styled(Box)`
  align-items: center;
  gap: 5px;
  cursor: pointer;  
`;
const LinkContainer = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function Navbar() {
  <NavbarContainer>
    <Typography variant='h1' color={theme.palette.primary.main} fontSize={{ xs: "1.25rem", md: "2.5rem" }}>
      <LinkContainer to="/"
        style={{ textDecoration: 'none', color: 'inherit' }}>Busify</LinkContainer>
    </Typography>
  </NavbarContainer>
}